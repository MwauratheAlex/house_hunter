"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phone: "",
      message: "Hello, I'm intrested in your listing. Please reach out.",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // setIsLoading(true);
    // console.log(data);
    // axios
    //   .post("/api/register", data)
    //   .then(() => {
    //     toast.success("Success!");
    //     // contactModal.onClose();
    //     // loginModal.onOpen();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error("Something went wrong.");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Contact the owner"
        subtitle="Leave your phone number if you want the owner to reach out via phone,
                    else check your email for responses"
      />
      <Input
        id="phone"
        label="Phone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="message"
        label="Message"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Whatsapp the owner"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Call the owner"
        icon={AiFillGithub}
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
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
