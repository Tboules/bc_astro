import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  callToActionFormSchema,
  type ICallToActionFormSchema,
} from "@/types/forms";
import React from "react";
import { Loader2 } from "lucide-react";

export default function CTAReactForm() {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const ref = React.useRef<HTMLAnchorElement>(null);

  const form = useForm<ICallToActionFormSchema>({
    resolver: zodResolver(callToActionFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (d: ICallToActionFormSchema) => {
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
      });

      if (ref.current) {
        ref.current.click();
      }
      setSent(true);
    } catch (error) {
      form.setError("root", {
        message: "We were unable to send your document",
      });
    } finally {
      setLoading(false);
      form.reset();
    }

    form.reset();
  };

  return (
    <>
      <a href="/checklist.pdf" ref={ref} className="hidden" download></a>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col md:flex-row gap-2 pt-6 md:pt-2 md:gap-4 md:items-end "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input
                    placeholder="enter your email for a free template"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={sent || loading} type="submit">
            {loading && <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
            Get Your Template
          </Button>
        </form>
      </Form>
    </>
  );
}
