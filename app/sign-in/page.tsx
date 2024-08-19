"use client";
import { FormEvent, useCallback } from "react";

export default function SignInPage() {
  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      data-soil-id="c6ae6a64-bd2a-4629-b7fc-124c46b90a43"
      className="bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen p-4"
    >
      <h1>Sign In</h1>
      <label htmlFor="email" className="mb-2">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="mb-4 p-2 border"
      />
      <label htmlFor="password" className="mb-2">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        className="mb-4 p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Sign In
      </button>
    </form>
  );
}
