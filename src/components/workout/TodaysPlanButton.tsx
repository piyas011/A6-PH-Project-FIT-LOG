const TodaysPlanButton = () => {
  return (
    <div>
      <button
        className="cursor-pointer rounded-[10px] bg-[#C2F800] px-5 py-2 text-black
      transition-all duration-200
      hover:bg-[#d4ff4d]
      hover:-translate-y-0.5
      hover:shadow-[0_4px_15px_rgba(194,248,0,0.15)]
      active:translate-y-0"
      >
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default TodaysPlanButton;
