import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import customer from "../Assets/customer.json";
import About from "./About";
import Navbar from "./Ui/Navbar";
import Footer from "./Footer";
import Hero from "./Ui/Hero";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [fullUrl, setFullUrl] = useState();
  const [shorturl, setShorturl] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  // redirection logic
  const actionHandler = async () => {
    const token = localStorage.getItem("token");
    const final = await fetch(
      `https://url-shortner-backend-lake.vercel.app/api/${shorturl}`,
      {
        method: "GET",
        headers: {
          "x-auth-token": token,
        },
      }
    );
    const result = await final.json();
    window.open(`${result.final.full}`, "_blank");
  };

  // Creation of ShortUrl
  const urlHandler = async () => {
    const full = {
      fullUrl,
    };
    const token = localStorage.getItem("token");
    const data = await fetch(
      `https://url-shortner-backend-lake.vercel.app/api/short`,
      {
        method: "POST",
        body: JSON.stringify(full),
        headers: {
          "x-auth-token": token,
          "content-type": "application/json",
        },
      }
    );
    const result = await data.json();
    setShorturl(result.full.short);
  };

  return (
    <>
      <section className="max-w-full relative ">
        <Navbar />
        <Hero />
        <div className="flex flex-auto flex-col items-center gap-2 justify-start   mx-auto max-w-7xl  text-gray-700 rounded-lg">
          <div className="h-72 w-72">
            <Lottie animationData={customer} />
          </div>
          <div className="flex text-white gap-6 mb-12">
            <input
              type="text"
              value={fullUrl}
              onChange={e => setFullUrl(e.target.value)}
              className="bg-slate-300 text-black outline-none w-96 px-2 rounded-lg text-center   "
            />
            <button
              className="  bg-primary rounded-lg px-12 py-3 hover:scale-110 duration-300"
              onClick={urlHandler}
            >
              Shorten Url
            </button>
          </div>
          <div className="flex mx-auto text-white gap-6 ">
            <div className="bg-slate-300 text-black px-2 cursor-text h-12 w-96 rounded-lg py-3">
              {shorturl}
            </div>
            <button
              className="max-w-md bg-accent px-12 py-3 rounded-lg hover:scale-110 duration-300"
              onClick={actionHandler}
            >
              Redirect To
            </button>
          </div>
        </div>
      </section>
      <About />
      <Footer />
    </>
  );
}

export default Home;
