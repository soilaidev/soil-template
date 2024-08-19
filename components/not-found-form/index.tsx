"use client";
import { usePathname } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { sendMessage, status } from "soilai";

export function NotFoundForm() {
  const pathname = usePathname();
  const [message, setMessage] = useState("");
  const [soilStatusActive, setSoilStatusActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    status().then(setSoilStatusActive);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      sendMessage({ message, pathname, env: "react" });
      setLoading(true);
    },
    [message, pathname]
  );

  const [isLocalhost, setIsLocalhost] = useState(false);
  useEffect(() => {
    setIsLocalhost(
      typeof window !== "undefined" &&
        window.location.hostname.includes("localhost")
    );
  }, []);

  if (!isLocalhost || !soilStatusActive) return null;

  return (
    <div>
      <h2 className="text-xl mb-4 mt-8 text-center">
        Would you like to create a new page at{" "}
        <span className="text-zinc-100">{pathname}</span>?
      </h2>
      {loading ? (
        <div className="text-center mt-10 text-2xl dark:text-zinc-300">
          Loading...
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-96 mx-auto max-w-full"
        >
          <textarea
            id="pageDescription"
            name="pageDescription"
            placeholder="Page description"
            rows={4}
            cols={50}
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            className="border border-gray-300 rounded-md p-2 mt-2 w-full dark:text-black"
          />
          <label
            className="text-sm italic text-zinc-800 dark:text-zinc-200 mb-4"
            htmlFor="pageDescription"
          >
            Describe the page you would like to create
          </label>
          <button
            type="submit"
            className="p-2 bg-black text-white dark:bg-white dark:text-black rounded-lg uppercase text-sm mt-2 w-full"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
