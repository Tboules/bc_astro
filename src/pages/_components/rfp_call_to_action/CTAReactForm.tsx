import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  email: string;
};

export default function CTAReactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        email: z.string().email(),
      }),
    ),
  });

  const onSubmit = handleSubmit((d) => {
    console.log(d);
    reset();
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col md:flex-row gap-2 pt-2 md:pt-6 md:gap-4 "
    >
      <div className="w-full">
        <Input {...register("email")} placeholder="email" type="text" />
        <p className="text-red-400 py-2">{errors.email?.message}</p>
      </div>
      <Button type="submit">Get Your Template</Button>
    </form>
  );
}
