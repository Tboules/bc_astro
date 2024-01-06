import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema, type IContactFormSchema } from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactUsForm() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);

  const form = useForm<IContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      request: "",
    },
  });

  const onSubmit = async (d: IContactFormSchema) => {
    try {
      setLoading(true);

      await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
      });

      setSent(true);
    } catch (error) {
      form.setError("root", {
        message: "We were unable to send your email",
      });
    } finally {
      form.reset();
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input
                  placeholder="enter your full name"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input placeholder="enter your email" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="request"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Let us know how we can help."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={sent || loading}>
          Send Message
        </Button>
      </form>
    </Form>
  );
}
