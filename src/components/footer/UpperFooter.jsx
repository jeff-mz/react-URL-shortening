function UpperFooter() {
  return (
    <div className="upper-footer p-8 flex flex-col align-items-center justify-center">
      <h3 className="text-white font-bold text-center text-2xl">
        Boost your links today{" "}
      </h3>
      <button
        disabled="disabled"
        className="bg-cyan font-bold text-white capitalize w-[150px] mx-auto  p-2 text-center rounded-full my-4"
      >
        get started
      </button>
    </div>
  );
}

export default UpperFooter;
