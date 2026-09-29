import ActionButton from "@/components/workout/ActionButton";
import Empty from "@/components/workout/EmptyWorkout";

const MyPlanPage = () => {
  return (
    <div className="container mx-auto mt-25 px-4 sm:px-6 lg:px-0">
      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
          MY <span className="text-[#C2F800]">PLAN</span>
        </h2>

        <p className="mt-2 text-sm text-[#9CA3AF] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ================= STATS ================= */}
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {/* Exercises */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#C2F800]/40">
          <p className="text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
            Exercises
          </p>

          <p className="mt-2 text-3xl font-bold text-white">0</p>
        </div>

        {/* Minutes */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#C2F800]/40">
          <p className="text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
            Minutes
          </p>

          <p className="mt-2 text-3xl font-bold text-white">0</p>
        </div>

        {/* Calories */}
        <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 transition hover:border-[#C2F800]/40">
          <p className="text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
            Calories
          </p>

          <p className="mt-2 text-3xl font-bold text-white">0</p>
        </div>
      </div>

      {/* ================= TABS + SORT ================= */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#111111] p-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Tabs */}

        <ActionButton />

        {/* Sorting */}
        <div className="w-full sm:w-auto">
          <select
            name="sort"
            id="sort"
            className="w-full cursor-pointer rounded-xl border border-white/10 bg-[#11111c] px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#C2F800] sm:w-48"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* ================= EMPTY / WORKOUT CONTENT ================= */}
      <div className="min-h-75 rounded-3xl border border-dashed border-white/15 bg-[#0d0d0d] mb-5 ">
        <Empty />
      </div>
    </div>
  );
};

export default MyPlanPage;
