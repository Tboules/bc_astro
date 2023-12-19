import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CTAReactForm() {
  return (
    <form className="flex flex-col md:flex-row gap-2 pt-2 md:pt-6 md:gap-4 ">
      <Input placeholder="email" type="text" />
      <Button>Get Your Template</Button>
    </form>
  );
}
