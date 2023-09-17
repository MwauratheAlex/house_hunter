"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import useRegisterPhoneModal from "@/app/hooks/useRegisterPhoneModal ";
import useRentModal from "@/app/hooks/useRentModal ";

const RegisterModal = () => {
  const registerPhoneModal = useRegisterPhoneModal();
  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/registerPhone", data)
      .then(() => {
        toast.success("Success!");
        registerPhoneModal.onClose();
        rentModal.onOpen();
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
        title="Help Clients find you"
        subtitle="Let's add a phone number."
      />
      <Input
        id="phone"
        label="Phone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerPhoneModal.isOpen}
      title="Register phone number"
      actionLabel="Continue"
      onClose={registerPhoneModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
