import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-cover w-full opacity-75 flex justify-center items-center"
      style={{
        height: "40vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1444212477490-ca407925329e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >

       <h1 className="text-white font-bold text-5xl">SOS Bucica</h1>
    </div>
  );
};

export default Hero;
