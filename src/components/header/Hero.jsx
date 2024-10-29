import img from "../../assets/images/illustration-working.svg";

function Hero() {
  return (
    <div className="w-100 flex flex-col align-items-center justify-center sm:flex-row-reverse">
      <div className="w-100 sm:w-1/2">
        <img src={img} alt="working illustration" className="img-fluid" />
      </div>
      <div className="flex flex-col align-items-center justify-center my-8 mx-10 sm:w-1/2 sm:ml-20 ">
        <h1 className="font-bold text-4xl text-center text-dark_blue sm:max-md:text-3xl md:text-6xl sm:text-left">
          More than just shorter links
        </h1>
        <p className="text-violet-grayish text-center my-4 text-[1em] sm:text-[22px] sm:text-left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button
          className="font-bold text-white capitalize bg-cyan py-4 text-lg sm:w-[200px] sm:py-2"
          style={{ borderRadius: "50px" }}
          disabled
        >
          get started
        </button>
      </div>
    </div>
  );
}

export default Hero;
