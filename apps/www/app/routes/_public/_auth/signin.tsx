import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/_auth/signin")({
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
import { PasswordInput } from "@captsone/ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CirclePlus, FormInputIcon, Home } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { authClient } from "~/utils/auth-client";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

function RouteComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await authClient.signIn.email(values);

      if (error) {
        toast.error(error.message);
      } else {
        toast.success(
          "Signed in successfully. You will be redirected shortly.",
        );
      }
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-dvh space-y-1">
      <div className="w-[30rem] border p-4 rounded-lg space-y-6">
        <div className="space-y-2">
          <h1 className="font-bold">Sign In</h1>
          <p className="text-muted-foreground">
            Access to capstone with your account credentials
          </p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 w-full"
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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center">
                    <FormLabel>Password</FormLabel>
                    <Link
                      className="text-sm font-medium leading-none text-blue-600"
                      to="/forgot-password"
                    >
                      Forgot password ?
                    </Link>
                  </div>
                  <FormControl>
                    <PasswordInput placeholder="Placeholder" {...field} />
                  </FormControl>
                  <FormDescription>Enter your password.</FormDescription>
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
          <Link to="/signup">
            <CirclePlus /> Sign Up
          </Link>
        </Button>
      </div>
    </div>
  );
}
