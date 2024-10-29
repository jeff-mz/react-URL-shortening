import { useState } from "react";

function Input() {
  const [inputUrl, setInputUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodeURIComponent(inputUrl)}`,
      });

      if (!response.ok) throw new Error("Failed to shorten the URL");

      const data = await response.json();
      setShortenedUrl(data.result_url);
      console.log(shortenedUrl, inputUrl);
      setError(false);
      setShortenedUrls((prevState) => {
        return [...prevState, data.result_url];
      });
      console.log(shortenedUrls);
    } catch (err) {
      setError(true);
      console.log(error);
      setShortenedUrls((prevState) => [...prevState]);
    }
  };

  return (
    <div className="w-100 mx-auto">
      <form
        className="custom-input w-[80vw] mx-auto p-8 flex flex-col sm:flex-row align-items-center justify-center sm:justify-evenly h-[150px] sm:h-[100px]"
        style={{
          backgroundColor: "#232127",
          //   height: "100px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          name="link"
          className={`bg-white p-4 border outline-none w-12/12 sm:w-8/12 ${
            error && "border-red"
          }`}
          style={{ borderRadius: "5px ", height: "50px" }}
          placeholder="Shorten a link here..."
          onChange={(event) => {
            event.preventDefault();
            setInputUrl(event.target.value);
          }}
        />
        <button
          type="submit"
          className="w-12/12 sm:w-2/12 bg-cyan mt-2 p-4 sm:mt-0"
          style={{ height: "50px", borderRadius: "5px" }}
          onClick={handleSubmit}
        >
          shorten it!
        </button>
      </form>

      {/* ----------- RESULT ------------ */}
      {shortenedUrls.length > 0 &&
        shortenedUrls.map((url) => {
          return (
            <div
              className="w-[80vw] mx-auto p-4 my-2 flex flex-col sm:flex-row align-items-center justify-center sm:justify-evenly h-[150px] sm:h-[70px] bg-white rounded-sm"
              key={Math.random()}
            >
              <p className="text-dark_blue text-sm">{inputUrl}</p>
              <p className="text-green-400 text-sm">{url}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(shortenedUrl);
                  e.target.style.backgroundColor = "#110d1a";
                  e.target.textContent = "Copied!";
                }}
                className="bg-cyan text-white rounded-sm h-8 px-4 text-sm"
              >
                copy
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Input;
