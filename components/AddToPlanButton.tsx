"use client";

import { useEffect, useState } from "react";
import { useWorkout } from "../context/WorkoutContext";

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

type AddToPlanButtonProps = {
  workout: Workout;
};

export default function AddToPlanButton({
  workout,
}: AddToPlanButtonProps) {
  const { addToPlan, isInPlan } = useWorkout();

  const [mounted, setMounted] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Hydration ঠিক রাখার জন্য
  useEffect(() => {
    setMounted(true);
  }, []);

  const alreadyAdded = mounted && isInPlan(workout.id);

  const handleAdd = () => {
    if (alreadyAdded) return;

    addToPlan(workout);

    // Toast show
    setShowToast(true);

    // 3 seconds পর Toast hide
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {/* Add Button */}
      <button
        onClick={handleAdd}
        disabled={!mounted || alreadyAdded}
        className={`mt-6 w-full rounded-xl px-6 py-3 font-semibold transition ${
          alreadyAdded
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
        {alreadyAdded
          ? "✓ Added to Today's Plan"
          : "Add to Today's Plan"}
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed right-5 top-5 z-50 rounded-xl bg-green-600 px-5 py-4 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-xl">✓</span>

            <div>
              <p className="font-bold">
                Workout Added!
              </p>

              <p className="text-sm text-green-50">
                {workout.name} added to today's plan.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}