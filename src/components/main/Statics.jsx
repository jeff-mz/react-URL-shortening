import icon1 from "../../assets/images/icon-brand-recognition.svg";
import icon2 from "../../assets/images/icon-detailed-records.svg";
import icon3 from "../../assets/images/icon-fully-customizable.svg";

function Statics() {
  return (
    <div className="w-100 mx-auto mt-10 pb-12">
      <h2 className="font-bold text-violet-very_dark my-4 text-center sm:text-3xl sm:mt-24">
        Advanced Statistics
      </h2>
      <p className="text-base text-violet-grayish text-center mb-8 lg:w-5/12 lg:mx-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      {/* ------------ STATIC CARDS ---------- */}
      <div className="my-12 flex flex-col align-items-center justify-center customized-box relative lg:flex-row w-100  ">
        <div
          className="text-center bg-white my-8 p-8 relative rounded-sm lg:mx-4 lg:mt-0 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="bg-violet-dark h-20 w-20 rounded-full mx-auto mb-16 flex items-center justify-center absolute top-[-35px] left-[38%] lg:left-[15%]">
            <img src={icon1} alt="icon" className="" />
          </div>
          <h4 className="text-lg font-semibold text-dark_blue mt-8">
            Brand Recognition
          </h4>
          <p className="text-violet-grayish mt-4 text-sm">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instill confidence in your content.
          </p>
        </div>

        <div
          className="text-center bg-white my-8 p-8 relative rounded-sm lg:mx-4 lg:mt-4 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="bg-violet-dark h-20 w-20 rounded-full mx-auto mb-16 flex items-center justify-center absolute top-[-35px] left-[38%] lg:left-[15%]">
            <img src={icon2} alt="icon" className="" />
          </div>
          <h4 className="text-lg font-semibold text-dark_blue mt-8">
            Detailed Records
          </h4>
          <p className="text-violet-grayish mt-4 text-sm">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div
          className="text-center bg-white my-8 p-8 relative rounded-sm lg:mx-4 lg:mt-8 mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="bg-violet-dark h-20 w-20 rounded-full mx-auto mb-16 flex items-center justify-center absolute top-[-35px] left-[38%] lg:left-[15%]">
            <img src={icon3} alt="icon" className="" />
          </div>
          <h4 className="text-lg font-semibold text-dark_blue mt-8">
            Fully Customizable
          </h4>
          <p className="text-violet-grayish mt-4 text-sm">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Statics;
