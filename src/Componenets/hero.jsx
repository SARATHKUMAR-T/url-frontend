import React, { useState } from "react";
import Lottie from "lottie-react";
import customer from "../Assets/customer.json";

function Hero() {
  const [fullUrl, setFullUrl] = useState();
  const [shorturl, setShorturl] = useState();
  // redirection logic
  const actionHandler = async () => {
    const final = await fetch(
      `https://url-shortner-backend-lake.vercel.app/${shorturl}`,
      {
        method: "GET",
      }
    );
    const result = await final.text();
    window.open(`${result}`, "_blank");
  };

  // Creation of ShortUrl
  const urlHandler = async () => {
    const full = {
      fullUrl,
    };
    const data = await fetch(
      "https://url-shortner-backend-lake.vercel.app/short",
      {
        method: "POST",
        body: JSON.stringify(full),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const result = await data.json();
    setShorturl(result.full.short);
  };

  return (
    <section className="max-w-full min-h-screen flex items-center justify-center mb-10 ">
      <div className="flex flex-auto flex-col items-center gap-6 justify-start  p-6 mx-auto max-w-7xl py-8 text-gray-700 rounded-lg">
        <div>
          <h2 className="  text-8xl   font-bold">Comfy</h2>
          <h2 className=" text-xl mt-2">Shortens your Url</h2>
        </div>
        <div className="h-72 w-72">
          <Lottie animationData={customer} />
        </div>
        <div className="flex text-white gap-6">
          <input
            type="text"
            value={fullUrl}
            onChange={e => setFullUrl(e.target.value)}
            className="bg-slate-300 text-black outline-none w-96 px-2 rounded-lg   "
          />
          <button
            className="  bg-primary rounded-lg px-12 py-3 hover:scale-110 hover:text-text1 duration-300"
            onClick={urlHandler}
          >
            Shorten Url
          </button>
        </div>
        <div className="flex flex-auto text-white gap-6 mt-24 mb-8">
          <div className="bg-slate-300 text-black py-3 cursor-text h-12 w-96 rounded-lg text-center">
            {shorturl}
          </div>
          <button
            className="bg-accent  px-12 rounded-lg hover:scale-110 duration-300"
            onClick={actionHandler}
          >
            Redirect
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
