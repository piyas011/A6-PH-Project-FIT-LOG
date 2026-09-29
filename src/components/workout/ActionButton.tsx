const ActionButton = () => {
  return (
    <div className="flex w-full rounded-xl bg-black p-1 sm:w-auto">
      <button className="flex-1 rounded-lg bg-[#C2F800] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#d4ff4d] sm:flex-none">
        Today&apos;s Plan
      </button>

      <button className="flex-1 rounded-lg px-5 py-2.5 text-sm font-medium text-[#9CA3AF] transition hover:bg-white/5 hover:text-white sm:flex-none">
        Saved
      </button>
    </div>
  );
};

export default ActionButton;
