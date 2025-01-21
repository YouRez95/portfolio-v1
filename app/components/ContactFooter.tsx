"use client";

import { useRef } from "react";
import Button from "./ui/Button";
import { useContact } from "../hooks/useContact";

export default function ContactFooter() {
  const {
    emailRef,
    errorMsg,
    handleSumbit,
    loading,
    nameRef,
    setErrorMsg,
    setLoading,
    setSuccess,
    success,
    textRef,
  } = useContact();

  return (
    <form className="relative z-10 flex flex-col w-[90%] mx-auto lg:mx-0 lg:ml-auto gap-4 lg:w-1/2 lg:max-w-[700px]">
      <input
        type="text"
        placeholder="Name"
        name="name"
        ref={nameRef}
        className="bg-transparent border-white border p-3 text-white outline-none capitalize"
      />
      <input
        type="email"
        ref={emailRef}
        name="email"
        placeholder="Email"
        className="bg-transparent border-white border p-3 text-white outline-none"
      />
      <textarea
        placeholder="Message"
        name="message"
        ref={textRef}
        className="bg-transparent border-white border p-3 text-white outline-none min-h-44"
      />
      <div className="w-full lg:w-fit lg:ml-auto">
        {!success && (
          <Button
            backgroundColor="white"
            textColor="black"
            fontSize="16px"
            padding="10px 30px"
            onClick={handleSumbit}
          >
            Submit
          </Button>
        )}
        {success && (
          <Button
            backgroundColor="white"
            textColor="black"
            fontSize="16px"
            padding="10px 30px"
            className="flex items-center justify-center gap-2"
            cursor="default"
          >
            <span className="bg-black text-primary w-4 h-4 rounded-full flex items-center justify-center">
              ✓
            </span>
            Sent
          </Button>
        )}
      </div>
      <p className="text-secondary text-center text-sm h-3">{errorMsg}</p>
    </form>
  );
}
