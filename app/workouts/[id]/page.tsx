import AddToPlanButton from "../../../components/AddToPlanButton";

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

async function getWorkout(id: string): Promise<Workout> {
  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Workout not found");
  }

  return response.json();
}

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function WorkoutDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <a
          href="/workouts"
          className="mb-8 inline-block text-sm font-semibold text-gray-600 hover:text-black"
        >
          ← Back to Workouts
        </a>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

          {/* Main Workout Information */}
          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div>
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full min-h-[400px] w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-8 md:p-10">

              {/* Title + Rating */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                    Fit Log Workout
                  </p>

                  <h1 className="mt-2 text-3xl font-bold text-gray-900">
                    {workout.name}
                  </h1>
                </div>

                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-2 text-sm font-semibold">
                  ⭐ {workout.rating}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-7 text-gray-600">
                {workout.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-6 flex flex-wrap gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Workout Information */}
              <div className="mt-8 grid grid-cols-2 gap-4">

                {/* Difficulty */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Difficulty
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {workout.difficulty}
                  </p>
                </div>

                {/* Equipment */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Equipment
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {workout.equipment}
                  </p>
                </div>

                {/* Duration */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Duration
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {workout.duration} min
                  </p>
                </div>

                {/* Calories */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Calories
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {workout.caloriesBurned} kcal
                  </p>
                </div>

                {/* Sets */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Sets
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {workout.sets}
                  </p>
                </div>

                {/* Reps */}
                <div className="rounded-xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">
                    Reps
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {workout.reps}
                  </p>
                </div>

              </div>

              {/* Add To Plan Button */}
              <AddToPlanButton workout={workout} />

            </div>
          </div>

          {/* Instructions */}
          <div className="border-t border-gray-200 p-8 md:p-10">

            <h2 className="text-2xl font-bold text-gray-900">
              Instructions
            </h2>

            <ol className="mt-6 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-gray-600">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>

          </div>

        </div>
      </div>
    </main>
  );
}