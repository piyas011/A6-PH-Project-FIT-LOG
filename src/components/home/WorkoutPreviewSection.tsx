import { IData } from "@/types/workoutDataType";
import WorkoutCard from "../workout/WorkoutCard";

const fetchWorkoutData = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return response.json();
};
const WorkoutPreviewSection = async () => {
  const workoutData: IData[] = await fetchWorkoutData();
  return (
    <div className="container mx-auto mt-16 p-4">
      <h2 className="text-3xl tracking-[-2px]">THE LIBRARY</h2>{" "}
      <p className="my-2 text-[18px] text-[#9CA3AF]">
        Twelve lifts covering every major muscle group.{" "}
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workoutData.map((work: IData) => (
          <WorkoutCard key={work.id} work={work}></WorkoutCard>
        ))}
      </div>
    </div>
  );
};
export default WorkoutPreviewSection;
