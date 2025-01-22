import MainLayout from "@/layouts/MainLayout";
import Map from "./Map";
import { Form, FormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import FormInput from "@/components/FormInput";
import { Label } from "@/components/ui/label";

const emailSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email({ message: "Invalid email" }),
  message: z.string().nonempty(),
});

type EmailSchemaType = z.infer<typeof emailSchema>;

const Contact = () => {
  const from = useForm<EmailSchemaType>({
    resolver: zodResolver(emailSchema),
  });

  const { control, handleSubmit, reset } = from;

  const onSubmit = handleSubmit((data) => {
    emailjs
      .send(
        `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
        {
          to_name: data.name,
          from_name: data.name, // Adjust as needed
          message: data.message,
        },
        `${import.meta.env.VITE_EMAILJS_USER_ID}`
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        toast.success("Email sent successfully!");
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Email failed to send:", error.text);
        toast.error("Email failed to send!");
      });
  });

  return (
    <MainLayout title="Contact">
      <div className="w-full">
        <Map />
        <Form {...from}>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-2 2xl:gap-5 mt-5 2xl:mt-10"
          >
            <h1 className="text-xl 2xl:text-2xl font-semibold text-gray-300">
              Contact Form
            </h1>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <FormInput
                control={control}
                name="name"
                className="w-full"
                placeholder="Eneter Name"
                label="Name"
              />
              <FormInput
                control={control}
                name="email"
                className="w-full"
                placeholder="Enter Email"
                label="Email"
              />
            </div>
            <FormField
              control={control}
              name="message"
              render={({ field, fieldState }) => {
                const { error } = fieldState;

                return (
                  <div className="flex flex-col gap-2">
                    <Label
                      className={`text-md 2xl:text-lg ${error ? "text-destructive" : "text-gray-400"}`}
                    >
                      Message
                    </Label>
                    <Textarea
                      rows={4}
                      placeholder="Enter message"
                      {...field}
                      className={error ? "border-destructive" : ""}
                    />
                    {error && (
                      <p className="text-destructive">{error.message}</p>
                    )}
                  </div>
                );
              }}
            />
            <Button className="ml-auto w-fit shadow-2xl " type="submit">
              <PaperPlaneTilt size={32} />
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};

export default Contact;
