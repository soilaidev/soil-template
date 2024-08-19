export default function Page() {
  return (
    <div
      data-soil-id="3cb62220-9253-4343-8a4c-ef8700383a36"
      className="bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen p-4"
    >
      <h1>Sign In Page</h1>
      <form className="flex flex-col items-center w-full max-w-md mt-4">
        <input
          type="text"
          placeholder="Username"
          className="mb-2 p-2 w-full border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-2 p-2 w-full border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
