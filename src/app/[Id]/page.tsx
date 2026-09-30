import TodaysPlanButton from "@/components/workout/plan/TodaysPlanButton";
import SaveButton from "@/components/workout/save/SaveButton";
import { IData } from "@/types/workoutDataType";
import Image from "next/image";

const WorkoutDetailsPage = async ({ params }: { params: { Id: string } }) => {
  const { Id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`);
  const workoutData: IData = await res.json();
  const {
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    description,
    sets,
    reps,
    difficulty,
    instructions,
    image,
  } = workoutData;

  return (
    <div className="container mx-auto mt-20 grid grid-cols-1 gap-8 px-4 sm:px-6 lg:mt-30 lg:grid-cols-2 lg:items-stretch lg:px-0 pb-10">
      {/* ================= IMAGE ================= */}
      <div className="flex h-full w-full">
        <div className="relative h-full min-h-100 w-full overflow-hidden rounded-3xl sm:rounded-4xl lg:min-h-0">
          <Image
            className="h-full w-full object-cover"
            src={image}
            alt={name}
            width={740}
            height={740}
            quality={100}
          />
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="flex h-full w-full ">
        <div className="flex w-full flex-col">
          {/* Title */}
          <h1 className="text-3xl font-bold sm:text-4xl">{name}</h1>

          {/* Description */}
          <p className="my-3 text-sm leading-6 text-[#9CA3AF] sm:text-base sm:leading-7">
            {description}
          </p>

          {/* Muscle Groups */}
          <div className="mb-5 flex flex-wrap gap-2">
            {muscleGroups?.map((group) => (
              <span
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold text-black sm:text-sm"
                key={group}
              >
                {group}
              </span>
            ))}
          </div>

          {/* ================= WORKOUT INFORMATION ================= */}
          <div className="rounded-3xl border border-[#80808096] bg-[#1F2937] p-5 text-sm text-[#9CA3AF] sm:p-6 md:p-8">
            {/* Equipment */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">EQUIPMENT</p>
              <p className="text-right text-white">{equipment.toUpperCase()}</p>
            </div>

            <hr className="my-4 border-[#80808096]" />

            {/* Difficulty */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">DIFFICULTY</p>
              <p className="text-white">{difficulty}</p>
            </div>

            <hr className="my-4 border-[#80808096]" />

            {/* Sets */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">SETS</p>
              <p className="text-white">{sets}</p>
            </div>

            <hr className="my-4 border-[#80808096]" />

            {/* Reps */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">REPS</p>
              <p className="text-white">{reps}</p>
            </div>

            <hr className="my-4 border-[#80808096]" />

            {/* Duration */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">DURATION</p>
              <p className="text-white">{duration}</p>
            </div>

            <hr className="my-4 border-[#80808096]" />

            {/* Calories */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">CALORIES</p>
              <p className="text-white">{caloriesBurned}</p>
            </div>

            <hr className="my-4 border-[#80808096]" />

            {/* Rating */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">RATING</p>
              <p className="text-white">{rating}</p>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-8">
            <h3 className="mb-3 text-xl font-bold sm:text-2xl">INSTRUCTIONS</h3>

            <div className="space-y-2">
              {instructions.map((text, i) => (
                <p
                  className="text-sm leading-7 text-[#D1D5DB] sm:text-base"
                  key={i}
                >
                  <span className="font-bold text-[#C2F800]">{i + 1}.</span>{" "}
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* ================= BUTTONS ================= */}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div>
              <TodaysPlanButton workoutData={workoutData} />
            </div>

            <div>
              <SaveButton workoutData={workoutData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
