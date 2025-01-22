import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth/forgot-password")({
  component: RouteComponent,
});

import { Button } from "@captsone/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@captsone/ui/form";
import { Input } from "@captsone/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput, Home } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { authClient } from "~/utils/auth-client";

const formSchema = z.object({
  email: z.string(),
});

function RouteComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await authClient.forgetPassword({
        email: values.email,
        redirectTo: "/reset-password",
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success(
          "Email sent successfully. Check your email to reset your password.",
        );
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-1">
      <div className="w-[30rem] border p-4 rounded-lg space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold">Forgot Passowrd</h1>
          <p className="text-muted-foreground">
            Send an email to reset your password
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="alex@smart-flow.site"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Communication & authentification email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      <div className="w-[30rem] border p-1 rounded-lg flex justify-between">
        <Button asChild variant="ghost">
          <Link to="/">
            <Home /> Home
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/signin">
            <FormInput /> Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
}
