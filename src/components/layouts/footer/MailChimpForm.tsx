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
import {
  callToActionFormSchema,
  type ICallToActionFormSchema,
} from "@/types/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function MailchimpForm() {
  const form = useForm<ICallToActionFormSchema>({
    resolver: zodResolver(callToActionFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: ICallToActionFormSchema) {
    await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        className="py-4 flex flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input
                  className="text-foreground"
                  placeholder="email address"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"outline"} type="submit">
          Subscribe Now
        </Button>
      </form>
    </Form>
  );
}
