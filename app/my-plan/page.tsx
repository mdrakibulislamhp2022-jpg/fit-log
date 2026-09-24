"use client";

import { useWorkout } from "../../context/WorkoutContext";

export default function MyPlanPage() {
  const {
    plan,
    removeFromPlan,
    markAsDone,
    isCompleted,
  } = useWorkout();

  const completedCount = plan.filter((workout) =>
    isCompleted(workout.id)
  ).length;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Fit Log
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              My Plan
            </h1>

            <p className="mt-3 text-gray-600">
              Your selected workouts for today.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-3">
            <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-gray-500">
                Total
              </p>

              <p className="text-2xl font-bold text-gray-900">
                {plan.length}
              </p>
            </div>

            <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
              <p className="text-sm text-gray-500">
                Completed
              </p>

              <p className="text-2xl font-bold text-green-600">
                {completedCount}
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {plan.length === 0 ? (
          <div className="mt-10 rounded-2xl bg-white p-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-2xl">
              🏋️
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Your plan is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some workouts from the workout library.
            </p>

            <a
              href="/workouts"
              className="mt-6 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Browse Workouts
            </a>
          </div>
        ) : (
          <>
            {/* Workout Cards */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plan.map((workout) => {
                const completed = isCompleted(workout.id);

                return (
                  <div
                    key={workout.id}
                    className={`overflow-hidden rounded-2xl bg-white shadow-sm transition ${
                      completed
                        ? "ring-2 ring-green-500"
                        : "hover:-translate-y-1 hover:shadow-lg"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={workout.image}
                        alt={workout.name}
                        className={`h-52 w-full object-cover ${
                          completed ? "opacity-70" : ""
                        }`}
                      />

                      {completed && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <span className="rounded-full bg-green-600 px-4 py-2 font-bold text-white">
                            ✓ Completed
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">

                      {/* Title */}
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="text-xl font-bold text-gray-900">
                          {workout.name}
                        </h2>

                        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                          ⭐ {workout.rating}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="mt-3 line-clamp-2 text-gray-600">
                        {workout.description}
                      </p>

                      {/* Info */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-gray-50 p-3">
                          <p className="text-xs text-gray-500">
                            Duration
                          </p>

                          <p className="mt-1 font-semibold">
                            {workout.duration} min
                          </p>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-3">
                          <p className="text-xs text-gray-500">
                            Calories
                          </p>

                          <p className="mt-1 font-semibold">
                            {workout.caloriesBurned} kcal
                          </p>
                        </div>
                      </div>

                      {/* Mark Done */}
                      <button
                        onClick={() => markAsDone(workout.id)}
                        disabled={completed}
                        className={`mt-5 w-full rounded-xl px-5 py-3 font-semibold transition ${
                          completed
                            ? "cursor-not-allowed bg-green-100 text-green-700"
                            : "bg-green-600 text-white hover:bg-green-700"
                        }`}
                      >
                        {completed
                          ? "✓ Workout Completed"
                          : "Mark as Done"}
                      </button>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          removeFromPlan(workout.id)
                        }
                        className="mt-3 w-full rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                      >
                        Remove from Plan
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Progress */}
            <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-gray-900">
                  Today's Progress
                </h2>

                <span className="font-semibold text-gray-600">
                  {completedCount} / {plan.length}
                </span>
              </div>

              <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full bg-green-600 transition-all"
                  style={{
                    width:
                      plan.length === 0
                        ? "0%"
                        : `${(completedCount / plan.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Add More */}
            <div className="mt-10 text-center">
              <a
                href="/workouts"
                className="inline-block rounded-xl border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                + Add More Workouts
              </a>
            </div>
          </>
        )}
      </div>
    </main>
  );
}