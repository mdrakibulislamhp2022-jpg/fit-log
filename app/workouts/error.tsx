"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-3xl bg-white p-10 text-center shadow-sm">
        
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
          ⚠️
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-3 text-gray-600">
          We couldn't load the workouts right now.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Try Again
        </button>

        <a
          href="/"
          className="mt-4 block text-sm font-semibold text-gray-600 hover:text-black"
        >
          ← Back to Home
        </a>

      </div>
    </main>
  );
}