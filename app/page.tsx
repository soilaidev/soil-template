import Image from "next/image";
import Link from "next/link";

const LOGO_SIZE = 100;

export default function Home() {
  return (
    <section
      data-soil-id="HomePage"
      className="flex flex-col items-center justify-center min-h-screen p-4 text-center relative"
    >
      <div className="absolute top-4 right-4">
        <Link
          href="/sign-in"
          className="p-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg border border-zinc-400 hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          Sign In
        </Link>
      </div>
      <div className="animate__animated animate__bounceInDown flex flex-col items-center">
        <div className="flex justify-center mb-4 rounded-full bg-white p-2 w-fit">
          <Image
            priority
            src="/logo.png"
            alt="Soil AI Logo"
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
        </div>
        <h1 className="text-4xl">Soil AI</h1>
      </div>

      <a
        href="https://soilai.dev/auth"
        target="_blank"
        className="mt-8 p-2.5 bg-black text-white dark:bg-white dark:text-black rounded-lg border border-zinc-400 hover:bg-zinc-800 dark:hover:bg-zinc-200"
      >
        Get Started
      </a>
    </section>
  );
}
