import React, {  useState } from "react";
import Lottie from "lottie-react";
import customer from "../Assets/customer.json";

function Hero() {
  const [fullUrl,setFullUrl]=useState()

  const [shorturl,setShorturl]=useState()
  console.log(shorturl);

  const actionHandler=async()=>{
    
    const final=await fetch (`http://localhost:9000/${shorturl}`,{
      method:'GET',
    })
    

  }

  const  urlHandler=async()=>{
    console.log('triggered');
        const full={
          fullUrl
        }
         const data=await fetch('http://localhost:9000/short',{
          method:"POST",
          body:JSON.stringify(full),
          headers:{
            "content-type":"application/json"
          }
         })

         const result= await data.json()
         console.log(result);
         setShorturl(result.full.short)
  }


  return (
    <section className="max-w-full min-h-screen flex items-center justify-center ">
      <div className="flex flex-auto flex-col items-center gap-6 justify-start  p-6 mx-auto max-w-7xl py-8 bg-gray-800 rounded-lg">
        <div>
          <h2 className="text-text1  text-8xl   font-bold">Comfy</h2>
          <h2 className="text-text1 text-xl mt-2">Shortens your Url</h2>
        </div>
        <div className="h-72 w-72">
          <Lottie animationData={customer} />
        </div>
        <div className="flex  gap-6">
          <input
            type="text"
            value={fullUrl}
            onChange={(e)=>setFullUrl(e.target.value)}
            className="bg-gray-300 w-96 px-2 rounded-lg ring-current ring-2   "
          />
          <button className=" text-gray-300 bg-primary rounded-lg px-12 py-3 hover:scale-110 hover:text-text1 duration-300" onClick={urlHandler}>
            Shorten Url
          </button>
        </div>
        <div className="flex flex-auto  gap-6 mt-24 mb-8">
          <div className="bg-gray-300 cursor-text h-12 w-96 rounded-lg text-center" >{shorturl}</div>
          <button className="bg-accent px-12 rounded-lg hover:scale-110 duration-300" onClick={actionHandler} >Redirect</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
