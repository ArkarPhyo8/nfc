"use client";
import {
  personInfoFormSchema,
  personInfoFormType,
} from "@/schemas/personal_info";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HardDriveUpload, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const PersonalInfoForm = () => {
  const [previewImage, setPreviewImage] = useState<string | undefined>("");
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const form = useForm<personInfoFormType>({
    resolver: zodResolver(personInfoFormSchema),
    defaultValues: {
      image: undefined,
      age: undefined,
      address: "",
      email: "",
      phone: [""],
    },
  });

  const triggerFileDialog = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };
  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: { onChange: (value: File | undefined) => void }
  ) => {
    const file = event.target.files?.[0];
    field.onChange(file); // Update the form value with the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setPreviewImage(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(undefined);
    }
  };

  // 2. Define a submit handler.
  function onSubmit(values: personInfoFormType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Image Field */}
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="w-full">
              <div className="flex items-end gap-2">
                <div className="border rounded-md flex justify-center">
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt="payment_type"
                      width={500}
                      height={500}
                      className="w-[112px] h-[112px] object-cover rounded-md"
                    />
                  ) : (
                    <div className="p-6">
                      <ImageIcon className="w-16 h-16 opacity-50" />
                    </div>
                  )}
                </div>
                <div>
                  <div
                    className="cursor-pointer flex gap-2 items-center rounded-[13px] border border-[#0163E0] px-6 py-3"
                    onClick={triggerFileDialog}
                  >
                    <HardDriveUpload size={20} className="text-[#0163E0]" />
                    <span className="text-[#0163E0] text-[13px] font-medium">
                      Upload Profile Picture
                    </span>
                  </div>
                  <FormControl>
                    <Input
                      disabled={field.disabled}
                      type="file"
                      ref={imageInputRef}
                      className="hidden"
                      onChange={(e) => handleFileChange(e, field)}
                    />
                  </FormControl>
                </div>
              </div>
              <FormMessage className="text-nowrap" />
            </FormItem>
          )}
        />

        <h1 className="text-[#000000] text-[18px] font-semibold">
          Personal and Contact Information
        </h1>

        {/** Age field */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="Enter your age" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/** Address field */}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Email Address field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your official email address"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/** Phone Number field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your business phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription>
                *You can add maximum 2 phone numbers
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PersonalInfoForm;
