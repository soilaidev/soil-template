import { NotFoundForm } from "@/components/not-found-form";

export default function NotFound() {
  return (
    <div>
      <div data-soil-id="NotFound" className="mt-12 text-center">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
      <NotFoundForm />
    </div>
  );
}
