"use client";
import { usePathname } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { sendMessage, status } from "soilai";

export function NotFoundForm() {
  const pathname = usePathname();
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendMessage();
  }, []);

  const [isLocalhost, setIsLocalhost] = useState(false);
  useEffect(() => {
    setIsLocalhost(
      typeof window !== "undefined" &&
        window.location.hostname.includes("localhost")
    );
  }, []);

  if (!isLocalhost) return null;

  return (
    <form
      onSubmit={handleSubmit}
      // data-soil-id="NotFoundForm"
      className="mt-12 w-96 mx-auto max-w-full"
    >
      <h2 className="text-xl text-center">So let's create it!</h2>
      <h3 className="text-2xl my-4 text-center text-gray-500">{pathname}</h3>

      <label className="" htmlFor="pageDescription">
        Describe the page you would like to create at this pathname:
      </label>
      <textarea
        id="pageDescription"
        name="pageDescription"
        placeholder="Page description"
        rows={4}
        cols={50}
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        className="border border-gray-300 rounded-md p-2 mt-2 w-full"
      />
      <br />
      <button
        type="submit"
        className="p-2 bg-white text-black rounded-lg uppercase text-sm mt-2 w-full"
      >
        Submit
      </button>
    </form>
  );
}
