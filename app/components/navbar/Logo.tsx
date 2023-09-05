"use client";

import React from "react";
import Image from "next/image";
import logoImg from "./images/logo.svg";
import { useRouter } from "next/navigation";

interface Props {
  className: string;
}

export default function Logo({ className }: Props) {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <Image src={logoImg} alt="House Hunter logo" className={className} />
    </div>
  );
}
