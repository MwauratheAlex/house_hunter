"use client";

import axios from "axios";
import { FcCallback } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useContactModal from "@/app/hooks/useContactModal";

export default function ContactModal() {
  //   const registerModal = useRegisterModal();
  //   const loginModal = useLoginModal();
  const contactModal = useContactModal();

  const [isLoading, setIsLoading] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FieldValues>({
  //   defaultValues: {
  //     message: "Hello, I'm intrested in your listing. Please reach out.",
  //   },
  // });
  const [message, setMessage] = useState("");

  const onSubmit: any = async (data: string) => {
    setIsLoading(true);
    console.log(data);
    axios
      .post("/api/contact", { data })
      .then(() => {
        toast.success("Success!");
        contactModal.onClose();
        // loginModal.onOpen();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Contact the owner"
        subtitle="Leave them a message here. (Expect an email)"
      />
      {/* <Input
        id="phone"
        label="Phone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      /> */}
      {/* <Input
        id="message"
        label="Message"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      /> */}
      <textarea
        id="message"
        rows={4}
        className={`
          peer
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4
          border-neutral-300
          focus:border-black
        `}
        placeholder="Write your thoughts here..."
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Whatsapp the owner"
        icon={BsWhatsapp}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Call the owner"
        icon={FcCallback}
        onClick={() => signIn("github")}
      />
      <div
        className="
            text-neutral-500
            text-center
            mt-4
            font-light
          "
      ></div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={contactModal.isOpen}
      title="Contact"
      actionLabel="Leave a message"
      onClose={contactModal.onClose}
      onSubmit={() => {
        onSubmit(message);
      }}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
