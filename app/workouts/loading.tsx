export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Header Skeleton */}
        <div className="mb-10">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

          <div className="mt-3 h-10 w-72 animate-pulse rounded bg-gray-200" />

          <div className="mt-4 h-5 w-full max-w-2xl animate-pulse rounded bg-gray-200" />
        </div>

        {/* Search Skeleton */}
        <div className="mb-10 h-14 w-full animate-pulse rounded-xl bg-gray-200" />

        {/* Workout Cards Skeleton */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div className="h-56 animate-pulse bg-gray-200" />

              <div className="p-5">
                <div className="h-6 w-3/4 animate-pulse rounded bg-gray-200" />

                <div className="mt-4 h-4 w-full animate-pulse rounded bg-gray-200" />

                <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-gray-200" />

                <div className="mt-5 h-10 w-full animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}