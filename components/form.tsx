"use client";
import React, { useState } from "react";

import { validationSchema } from "@/utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import Lottie from "react-lottie";
import successAnimation from "../public/success.json";
type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      setIsSuccess(true);
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-white/90">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white/80 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-white/90">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white/80 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-white/90">
                    Message
                  </label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full bg-white/80 bg-opacity-50 rounded border border-gray-300 focus:border-secondary focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  disabled={isLoading}
                  className="flex mx-auto text-white  bg-primary/70 border-0 py-2 px-8 focus:outline-none hover:bg-primary/50 rounded text-lg"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>

      {isSuccess && (
        <div className="mt-4 text-center">
          <Lottie options={defaultOptions} height={150} width={150} />
          <div className="text-primary">
            Your message has been sent successfully!
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
