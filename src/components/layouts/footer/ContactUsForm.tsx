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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  request: z.string().min(1),
});

type IContactFormSchema = z.infer<typeof contactFormSchema>;

export default function ContactUsForm() {
  const form = useForm<IContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      request: "",
    },
  });

  const onSubmit = (d: IContactFormSchema) => {
    console.log(d);
    form.reset();
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
        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
}
