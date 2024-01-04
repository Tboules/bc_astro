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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  mail: z.string().email(),
});

type IFormSchema = z.infer<typeof formSchema>;

export default function MailchimpForm() {
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mail: "",
    },
  });

  function onSubmit(data: IFormSchema) {
    console.log(data);
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
          name="mail"
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
