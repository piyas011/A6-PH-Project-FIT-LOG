const SaveButton = () => {
  return (
    <div>
      <button
        className="cursor-pointer rounded-[10px] border border-[#C2F800] px-5 py-2
      transition-all duration-200
      hover:bg-[#C2F800]/10
      hover:-translate-y-0.5
      active:translate-y-0"
      >
        Save for later
      </button>
    </div>
  );
};

export default SaveButton;
