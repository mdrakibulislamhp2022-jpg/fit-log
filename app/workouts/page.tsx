import WorkoutLibrary from "../../components/WorkoutLibrary";

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

async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export default async function WorkoutsPage() {
  const workouts = await getWorkouts();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Fit Log
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Workout Library
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Explore workouts, find exercises for different muscle
            groups, and build your personalized workout plan.
          </p>
        </div>

        {/* Workout Library */}
        <WorkoutLibrary workouts={workouts} />

      </div>
    </main>
  );
}