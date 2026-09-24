"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

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

type WorkoutContextType = {
  plan: Workout[];
  completedIds: number[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  isInPlan: (id: number) => boolean;
  markAsDone: (id: number) => void;
  isCompleted: (id: number) => boolean;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

export function WorkoutProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [completedIds, setCompletedIds] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load saved data
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedCompleted = localStorage.getItem("fitlog-completed");

    if (savedPlan) {
      try {
        setPlan(JSON.parse(savedPlan));
      } catch {
        setPlan([]);
      }
    }

    if (savedCompleted) {
      try {
        setCompletedIds(JSON.parse(savedCompleted));
      } catch {
        setCompletedIds([]);
      }
    }

    setHydrated(true);
  }, []);

  // Save plan
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan, hydrated]);

  // Save completed workouts
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completedIds)
    );
  }, [completedIds, hydrated]);

  // Add workout
  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  // Remove workout
  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((workout) => workout.id !== id)
    );

    // Remove completed status too
    setCompletedIds((currentIds) =>
      currentIds.filter((completedId) => completedId !== id)
    );
  };

  // Check if workout exists
  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  // Mark workout as done
  const markAsDone = (id: number) => {
    setCompletedIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds;
      }

      return [...currentIds, id];
    });
  };

  // Check completed
  const isCompleted = (id: number) => {
    return completedIds.includes(id);
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        completedIds,
        addToPlan,
        removeFromPlan,
        isInPlan,
        markAsDone,
        isCompleted,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}