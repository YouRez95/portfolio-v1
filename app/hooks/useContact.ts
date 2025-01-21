import { useRef, useState } from "react";
import { sendEmail } from "../actions";

export const useContact = () => {
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleSumbit = async () => {
    if (loading) return;
    const email = emailRef.current?.value;
    const text = textRef.current?.value;
    const name = nameRef.current?.value;

    if (!name || name.length <= 0) {
      setErrorMsg("Please enter a valid name");
      return;
    }

    if (!email?.includes("@")) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    if (!text || text.length < 10) {
      setErrorMsg("Please enter a message with at least 10 characters");
      return;
    }
    setErrorMsg("");
    setLoading(true);
    const result = await sendEmail({ name, email, message: text });
    if (result.success) {
      setSuccess(true);
      setLoading(false);
      return;
    }
    setErrorMsg("Failed to send email. Please try again.");
  };

  return {
    nameRef,
    emailRef,
    textRef,
    success,
    setSuccess,
    errorMsg,
    setErrorMsg,
    loading,
    setLoading,
    handleSumbit,
  };
};
