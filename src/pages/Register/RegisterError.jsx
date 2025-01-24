import React from "react";
import RegisterMainBg from "./RegisterMainBg";
import contentBg from "/src/assets/img/register/brownish.svg";
import { Link } from "react-router-dom";

const RegisterError = () => {
  return (
    <>
      <div>
        <div className="relative">
          <div className="h-full w-[960px] absolute top-0 left-[50%] -translate-x-[50%] z-10">
            <RegisterMainBg
              className="w-full h-[2059px] scale-[127%] -translate-y-12 hidden lg:block"
              src={contentBg}
            />
          </div>

          <div className="min-h-[1000px] h-[calc(100%+200px)] w-[calc(100vw+1000px)] left-[50%] -translate-x-[50%] absolute -top-5 -rotate-[10deg] bg-gray z-10 lg:hidden"></div>
        </div>
      </div>
      <section className="relative z-10 py-20 text-white mb-0 flex-1 pt-24 flex items-center min-h-[600px]">
        <div className="container max-w-[960px]">
          <h2 className="text-center text-4xl lg:text-6xl ">Unknown Error!</h2>
          <br />
          <div className="max-w-[650px] mx-auto">
            <p>Please try again later.</p>

            <Link to="/register" className="underline">Back</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterError;
