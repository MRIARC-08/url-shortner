'use client'
import React, { use, useState } from "react";

function page() {

  const [url, setUrl] = useState<string | null>(null)
  const [loading , setLoading] = useState(false)
  const [res, setRes] = useState<string | null>(null)


  const handleRequest = async(e)=>{
    e.preventDefault()

    console.log("jhj")
    setLoading(true)

    if(!(url?.includes("http://") || url?.includes("https://") )) {
      setLoading(false)
      return 
    } 
    const payload = {
      url : url
    }

   
    const res = await fetch("http://localhost:6969/c/c", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body : JSON.stringify(payload),
      credentials: "include"

    })

    const shortCode = await res.json()

    setRes(`http://localhost:6969/r/${shortCode}`)

    setLoading(false)


    console.log(await res.json())

  }







  return (
    <div className="">
      <div className="flex h-16 bg-white p-4 items-center justify-between  ">
        <div className="flex gap-2 items-center">
          <svg
            width="25"
            height="13"
            viewBox="0 0 25 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 12.5H6.25C4.52083 12.5 3.04688 11.8906 1.82812 10.6719C0.609375 9.45312 0 7.97917 0 6.25C0 4.52083 0.609375 3.04688 1.82812 1.82812C3.04688 0.609375 4.52083 0 6.25 0H11.25V2.5H6.25C5.20833 2.5 4.32292 2.86458 3.59375 3.59375C2.86458 4.32292 2.5 5.20833 2.5 6.25C2.5 7.29167 2.86458 8.17708 3.59375 8.90625C4.32292 9.63542 5.20833 10 6.25 10H11.25V12.5V12.5M7.5 7.5V5H17.5V7.5H7.5V7.5M13.75 12.5V10H18.75C19.7917 10 20.6771 9.63542 21.4062 8.90625C22.1354 8.17708 22.5 7.29167 22.5 6.25C22.5 5.20833 22.1354 4.32292 21.4062 3.59375C20.6771 2.86458 19.7917 2.5 18.75 2.5H13.75V0H18.75C20.4792 0 21.9531 0.609375 23.1719 1.82812C24.3906 3.04688 25 4.52083 25 6.25C25 7.97917 24.3906 9.45312 23.1719 10.6719C21.9531 11.8906 20.4792 12.5 18.75 12.5H13.75V12.5"
              fill="#0546ED"
            />
          </svg>
          <p className="font-bold">LinkShort</p>
        </div>

        <div className="flex gap-4 items-center ">
          <div className="text-black/60 font-medium">Log In</div>

          <div className="p-2 pl-4 pr-4  w-max rounded-full text-white bg-linear-to-br from-primary to-primary/68 font-medium cursor-pointer">
            Sign Up
          </div>
        </div>
      </div>

      <div className="w-full  ">
        
        <div className="flex flex-col h-200  justify-center items-center w-full gap-20">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="w-max text-6xl font-[500] ">
              Velocity for your{" "}
              <span className="text-primary">connections.</span>
            </p>
            <p className="text-black/60 w-[60%] text-center font-extralight">
              The fastest way to shorten, brand, and track your links.
              Experience hyper-fluid utility designed for modern creators.
            </p>
          </div>

          <div className="w-full flex flex-col justify-center items-center gap-4">

            <div className=" flex p-[4.6px]  bg-white shadow-xs w-[54%] pl-4 pr-4 rounded-full justify-center items-center shadow-primary gap-4">
              <svg
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 10H5C3.61667 10 2.4375 9.5125 1.4625 8.5375C0.4875 7.5625 0 6.38333 0 5C0 3.61667 0.4875 2.4375 1.4625 1.4625C2.4375 0.4875 3.61667 0 5 0H9V2H5C4.16667 2 3.45833 2.29167 2.875 2.875C2.29167 3.45833 2 4.16667 2 5C2 5.83333 2.29167 6.54167 2.875 7.125C3.45833 7.70833 4.16667 8 5 8H9V10ZM6 6V4H14V6H6ZM11 10V8H15C15.8333 8 16.5417 7.70833 17.125 7.125C17.7083 6.54167 18 5.83333 18 5C18 4.16667 17.7083 3.45833 17.125 2.875C16.5417 2.29167 15.8333 2 15 2H11V0H15C16.3833 0 17.5625 0.4875 18.5375 1.4625C19.5125 2.4375 20 3.61667 20 5C20 6.38333 19.5125 7.5625 18.5375 8.5375C17.5625 9.5125 16.3833 10 15 10H11Z"
                  fill="#5A5B5F"
                />
              </svg>
              <form onSubmit={handleRequest} className="w-full flex " >

                <input
                  type="text"
                  placeholder="Paste your long link here"
                  className="text-xl flex-1 outline-none"
                  onChange={(e)=>(setUrl(e.target.value))}
                />
                <button className={`p-4 pl-8 pr-8 -mr-3 w-max rounded-full text-white bg-linear-to-br from-primary to-primary/68 font-medium text-[14px] cursor-pointer ${loading ? "opacity-40" : ""}`} type="submit">
                  Shorten
                </button>

              </form>
            </div>

            <div className="w-max h-max">

              { res && <div className=" bg-secondary pl-6 p-2 flex gap-4 rounded-full justify-center items-center">
                  <input readOnly onChange={(e)=>(setRes(e.target.value))} className="text-white outline-none " value={`${res}`}/>
                  <button className="p-2 pl-8 pr-8  w-max rounded-full text-white bg-linear-to-br from-primary to-primary/68 font-medium text-[14px] cursor-pointer " onClick={()=>(navigator.clipboard.writeText(res!))}>COPY</button>
                </div>
              }

            </div>
          </div>
          

          <div className=" pl-50 pr-50">
            <div className="flex flex-wrap gap-10 justify-center items-center">
              <div className=" flex flex-col gap-2  flex-1">

                <div className="p-3 pr-4 pl-4 bg-white rounded-full w-max">

                  <svg
                    width="23"
                    height="25"
                    viewBox="0 0 23 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  
                  >
                    <path
                      d="M2.5 25C1.8125 25 1.22396 24.7552 0.734375 24.2656C0.244792 23.776 0 23.1875 0 22.5V5C0 4.3125 0.244792 3.72396 0.734375 3.23438C1.22396 2.74479 1.8125 2.5 2.5 2.5H7.71875C7.94792 1.77083 8.39583 1.17188 9.0625 0.703125C9.72917 0.234375 10.4583 0 11.25 0C12.0833 0 12.8281 0.234375 13.4844 0.703125C14.1406 1.17188 14.5833 1.77083 14.8125 2.5H20C20.6875 2.5 21.276 2.74479 21.7656 3.23438C22.2552 3.72396 22.5 4.3125 22.5 5V22.5C22.5 23.1875 22.2552 23.776 21.7656 24.2656C21.276 24.7552 20.6875 25 20 25H2.5ZM2.5 22.5H20V5H17.5V8.75H5V5H2.5V22.5ZM11.25 5C11.6042 5 11.901 4.88021 12.1406 4.64062C12.3802 4.40104 12.5 4.10417 12.5 3.75C12.5 3.39583 12.3802 3.09896 12.1406 2.85938C11.901 2.61979 11.6042 2.5 11.25 2.5C10.8958 2.5 10.599 2.61979 10.3594 2.85938C10.1198 3.09896 10 3.39583 10 3.75C10 4.10417 10.1198 4.40104 10.3594 4.64062C10.599 4.88021 10.8958 5 11.25 5Z"
                      fill="#0546ED"
                    />
                  </svg>
                </div>
                <p className="font-bold">Paste</p>
                <p className="text-black/60">
                  Drop your long URL into the engine. Our system instantly
                  parses and validates your destination for maximum safety.
                </p>
              </div>

              <div className="flex flex-col gap-2  flex-1 bg-primary text-white p-6 rounded-3xl">

                <div className=" relative p-[12.4px] pr-4 pl-4 bg-primary rounded-full w-max">

                  <div className="absolute inset-0   bg-white/20 rounded-full"></div>

                  <div className="z-10"> 
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      
                    >
                      <path
                        d="M22.5 7.5L21.3125 4.9375L18.75 3.75L21.3125 2.5625L22.5 0L23.6875 2.5625L26.25 3.75L23.6875 4.9375L22.5 7.5ZM8.125 7.5L6.9375 4.9375L4.375 3.75L6.9375 2.5625L8.125 0L9.3125 2.5625L11.875 3.75L9.3125 4.9375L8.125 7.5ZM22.5 21.875L21.3125 19.3125L18.75 18.125L21.3125 16.9375L22.5 14.375L23.6875 16.9375L26.25 18.125L23.6875 19.3125L22.5 21.875ZM3.875 25.875L0.375 22.375C0.125 22.125 0 21.8229 0 21.4688C0 21.1146 0.125 20.8125 0.375 20.5625L14.3125 6.625C14.5625 6.375 14.8646 6.25 15.2188 6.25C15.5729 6.25 15.875 6.375 16.125 6.625L19.625 10.125C19.875 10.375 20 10.6771 20 11.0312C20 11.3854 19.875 11.6875 19.625 11.9375L5.6875 25.875C5.4375 26.125 5.13542 26.25 4.78125 26.25C4.42708 26.25 4.125 26.125 3.875 25.875ZM4.8125 23.25L13.75 14.25L12 12.5L3 21.4375L4.8125 23.25Z"
                        fill="white"
                      /> 
                    </svg>

                  </div>
                
                </div>
                <p className={`font-bold`}>Shorten</p>
                <p>
                  Watch the magic happen. We compress your link into a
                  beautiful, brandable snippet that's optimized for speed and
                  clicks.
                </p>
              </div>

              <div className="flex flex-col gap-2  flex-1 ">

                <div className="p-3 pr-4 pl-4 bg-white rounded-full w-max">
                  <svg
                    width="20"
                    height="27"
                    viewBox="0 0 20 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 26.25C1.8125 26.25 1.22396 26.0052 0.734375 25.5156C0.244792 25.026 0 24.4375 0 23.75V11.25C0 10.5625 0.244792 9.97396 0.734375 9.48438C1.22396 8.99479 1.8125 8.75 2.5 8.75H6.25V11.25H2.5V23.75H17.5V11.25H13.75V8.75H17.5C18.1875 8.75 18.776 8.99479 19.2656 9.48438C19.7552 9.97396 20 10.5625 20 11.25V23.75C20 24.4375 19.7552 25.026 19.2656 25.5156C18.776 26.0052 18.1875 26.25 17.5 26.25H2.5ZM8.75 18.75V4.78125L6.75 6.78125L5 5L10 0L15 5L13.25 6.78125L11.25 4.78125V18.75H8.75Z"
                      fill="#0546ED"
                    />
                  </svg>

                </div>

                <p className="font-bold">Share</p>
                <p className="text-black/60">
                  Copy with one click and distribute across your channels. Track
                  performance in real-time with our technical analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
