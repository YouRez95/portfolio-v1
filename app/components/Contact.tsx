"use client";

import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { bagel } from "@/fonts/fonts";
import { useContact } from "../hooks/useContact";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);
  const {
    success,
    setSuccess,
    loading,
    errorMsg,
    setErrorMsg,
    emailRef,
    nameRef,
    textRef,
    handleSumbit,
  } = useContact();

  const closeModalAndResetStates = () => {
    setOpenModal(false);
    setSuccess(false);
    setErrorMsg("");
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => closeModalAndResetStates(), 3000);
      return () => clearTimeout(timer);
    }
  }, [success, closeModalAndResetStates]);

  useEffect(() => {
    if (openModal) {
      emailRef.current?.focus();
    }
  }, [openModal]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 w-[100vw] h-[100vh] flex items-center justify-center ${
          openModal ? "opacity-100" : "opacity-0 invisible delay-150"
        }`}
        role="dialog"
        aria-labelledby="modal-title"
        aria-hidden={!openModal}
      >
        <div
          className={`bg-primary flex flex-col min-h-[500px] max-h-[900px] min-w-[90vw] md:min-w-[70vw] lg:min-w-[700px] pb-4 max-w-[900px] text-black rounded-xl relative transform origin-center transition-transform ${
            openModal ? "scale-100 delay-75" : "scale-0"
          }`}
        >
          <div
            className="absolute top-2 lg:top-5 right-5 cursor-pointer border border-black w-10 h-10 flex items-center justify-center rounded-full"
            onClick={closeModalAndResetStates}
          >
            <span className={`${bagel.className} text-2xl `}>X</span>
          </div>
          <h2
            className={`${bagel.className} flex items-center gap-2 py-3 lg:py-5 px-1 lg:px-10`}
          >
            <span className="text-3xl lg:text-5xl">✦</span>
            <span className="text-xl lg:text-3xl">Send Message</span>
          </h2>

          {success === false && (
            <div className="flex flex-col space-between">
              <div className="border-t-black/10 border-t px-5 lg:px-20 py-5 lg:py-10 flex flex-col gap-10">
                <div className="flex flex-col gap-1">
                  <label htmlFor="from" className="text-black/60 text-sm">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    ref={nameRef}
                    id="from"
                    name="from"
                    placeholder="Your email"
                    className="flex-1 border border-black/20 outline-none min-h-10 px-2 rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="from" className="text-black/60 text-sm">
                    From:
                  </label>
                  <input
                    type="email"
                    ref={emailRef}
                    id="from"
                    name="from"
                    placeholder="Your email"
                    className="flex-1 border border-black/20 outline-none min-h-10 px-2 rounded-lg"
                  />
                </div>
              </div>

              <div className="border-t-black/10 border-t px-5 lg:px-20 py-5 lg:py-10 flex flex-col gap-10">
                <div className="flex items-center gap-5">
                  <textarea
                    name="message"
                    ref={textRef}
                    placeholder="Write your message here"
                    className="flex-1 border border-black/20 outline-none p-2 resize-none min-h-[200px] rounded-lg"
                  />
                </div>
              </div>
              <div
                className="ml-auto px-5 lg:px-20 max-w-80"
                onClick={handleSumbit}
              >
                <Button fontSize="14px" backgroundColor="black">
                  {!loading ? "Send" : "Sending..."}
                </Button>
              </div>
            </div>
          )}

          {success && (
            <div className="flex flex-col flex-1 items-center justify-center space-y-5 border-t-black/10 border-t">
              <h2 className="text-2xl lg:text-4xl">
                Message sent successfully!
              </h2>
              <p className="text-black/60 text-sm text-center">
                I'll get back to you as soon as possible.
              </p>
            </div>
          )}

          <div className="absolute bottom-1 text-sm w-full text-center">
            {errorMsg && <p className="text-secondary">{errorMsg}</p>}
          </div>
        </div>
      </div>
      <div
        className="w-full"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        <Button fontSize="14px">Contact</Button>
      </div>
    </>
  );
}
