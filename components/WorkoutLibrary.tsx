"use client";

import { useState } from "react";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

type WorkoutLibraryProps = {
  workouts: Workout[];
};

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchText = search.toLowerCase();

    return (
      workout.name.toLowerCase().includes(searchText) ||
      workout.equipment.toLowerCase().includes(searchText) ||
      workout.difficulty.toLowerCase().includes(searchText) ||
      workout.muscleGroups.some((muscle) =>
        muscle.toLowerCase().includes(searchText)
      )
    );
  });

  return (
    <>
      {/* Search Box */}
      <div className="mb-10">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search workouts..."
          className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
        />

        <p className="mt-3 text-sm text-gray-500">
          Showing {filteredWorkouts.length} of {workouts.length} workouts
        </p>
      </div>

      {/* Workout Cards */}
      {filteredWorkouts.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            No workouts found
          </h2>

          <p className="mt-3 text-gray-500">
            Try searching with another workout name, muscle group,
            equipment, or difficulty.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <img
                src={workout.image}
                alt={workout.name}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    {workout.name}
                  </h2>

                  <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
                    ⭐ {workout.rating}
                  </span>
                </div>

                <p className="mt-3 line-clamp-2 text-gray-600">
                  {workout.description}
                </p>

                {/* Muscle Groups */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {workout.muscleGroups.map((muscle) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Workout Info */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">
                      Difficulty
                    </p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {workout.difficulty}
                    </p>
                  </div>

                  <div className="rounded-lg bg-gray-50 p-3">
                    <p className="text-xs text-gray-500">
                      Duration
                    </p>
                    <p className="mt-1 font-semibold text-gray-900">
                      {workout.duration} min
                    </p>
                  </div>
                </div>

                {/* Details Button */}
                <a
                  href={`/workouts/${workout.id}`}
                  className="mt-5 block w-full rounded-xl bg-black px-5 py-3 text-center font-semibold text-white transition hover:bg-gray-800"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}