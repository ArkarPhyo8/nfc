"use client";
import { loginFormSchema, loginFormType } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const form = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      id: "",
      password: "",
    },
  });

  function onSubmit(values: loginFormType) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/** id field */}
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your ID number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    disabled={field.disabled}
                    {...field}
                    placeholder="Enter your password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev: boolean) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    tabIndex={-1} // avoid tab focusing on icon
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <FormMessage />
                <Button
                  size="sm"
                  className="w-full justify-end underline-offset-1 decoration-[#1068D9]"
                  variant="link"
                  asChild
                >
                  <Link href={"#"}>
                    <span className="text-[#1068D9] text-[16px] text-medium">
                      Forgot password?
                    </span>
                  </Link>
                </Button>
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer bg-gradient-to-r from-[#977DFF] to-[#0163E0]"
        >
          <span className="text-[#FFFFFF] text-[16px] font-medium">Login</span>
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
