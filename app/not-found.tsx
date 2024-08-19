import { NotFoundForm } from "@/components/not-found-form";

export default function NotFound() {
  return (
    <div>
      <div data-soil-id="NotFound" className="mt-12 text-center">
        <h1 className="text-6xl">404</h1>
        <h2 className="text-4xl mb-4">Page Not Found</h2>
        <h3 className="text-2xl">Sorry, the page you are looking for does not exist.</h3>
      </div>
      <NotFoundForm />
    </div>
  );
}
