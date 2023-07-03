"use client";

import emailjs from "@emailjs/browser";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./ui/button";
import { Toaster } from "./ui/toaster";
import { useToast } from "./ui/use-toast";

type Inputs = {
  fullName: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const form = useRef() as unknown as React.MutableRefObject<HTMLFormElement>;
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async () => {
    try {
      setSubmitting(true);

      const response = await emailjs.sendForm(
        "service_f5z1u26",
        "template_ltuam0p",
        form.current,
        "QgI1M-XW2KlVIEcH5"
      );

      console.log(response);

      if (response.status === 200) {
        toast({
          title: "Contact Form Submitted",
          description: "We'll be in touch as soon as possible.",
        });
      }

      setSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="contact_form"
      className="isolate block bg-light px-6 py-12 text-dark sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-2 font-medium leading-8">
          Reach out and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form
        ref={form}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-9 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold leading-6"
            >
              Full Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="fullName"
                {...register("fullName", {
                  required: true,
                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)+$/,
                })}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
              />
            </div>
            {errors.fullName && (
              <p className="mt-2 text-sm font-semibold text-red">
                {errors.fullName.type === "required" && "Name is required"}
                {errors.fullName.type === "pattern" &&
                  "Name should be your full name with only letters"}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm font-semibold text-red">
                {errors.email.type === "required" && "Email is required"}
                {errors.email.type === "pattern" && "Email is not valid"}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                {...register("message", {
                  required: true,
                  minLength: 10,
                  maxLength: 1000,
                })}
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
              />
            </div>
            {errors.message && (
              <p className="mt-2 text-sm font-semibold text-red">
                {errors.message.type === "required" && "Message is required"}
                {errors.message.type === "minLength" &&
                  "Message must be at least 10 characters"}
                {errors.message.type === "maxLength" &&
                  "Message must be less than 1000 characters"}
              </p>
            )}
          </div>
        </div>

        <div className="mt-10">
          {!submitted && !submitting && (
            <Button type="submit" size={"lg"} className="w-full">
              Let&apos;s talk
            </Button>
          )}

          {submitting && (
            <Button size={"lg"} disabled className="w-full">
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}

          {submitted && (
            <Button size={"lg"} disabled className="w-full">
              Submitted
            </Button>
          )}
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ContactForm;
