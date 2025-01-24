import React from "react";
import RegisterMainBg from "./RegisterMainBg";
import RegisterOverview from "./RegisterOverview";
import RegisterForm from "./RegisterForm";
import contentBg from "/src/assets/img/register/brownish.svg";

const RegisterMain = () => {
  return (
    <>
      <div className="relative py-[50px] md:py-[80px] -mt-[48px]">
        <RegisterMainBg
          className="hidden lg:block absolute left-[50%] -translate-x-[50%] -top-[80px] z-10" 
          src={contentBg}
        />
        {/* <div className="h-full w-[1219px] absolute top-0 left-[50%] -translate-x-[50%] z-10"></div> */}

        <div className="h-[calc(100%+200px)] w-[calc(100vw+1000px)] left-[50%] -translate-x-[50%] absolute top-[48px] -rotate-[10deg] bg-gray z-10 lg:hidden"></div>

        <div className="relative z-10">
          <RegisterOverview />
          <RegisterForm />
        </div>

      </div>

      <div className="container py-[40px] relative z-10">
        <div
          className={`absolute top-0 left-[50%] w-[calc(100vw+1000px)] rotate-3 h-[1000px] bg-lightGray -translate-x-[50%] lg:hidden`}
        ></div>
        <p className="text-xs relative">
          Illustrations and renderings reflect the artist’s interpretation of
          the project and do not take into account the neighbouring building,
          physical structures, streets and landscape. When built, actual suites,
          amenities, building interiors, exteriors and views may be different
          than what is depicted. This is not an offering for sale. Any such
          offering can only be made with the applicable disclosure statement and
          agreement of purchase and sale. E.&O.E. {" "}
        </p>
      </div>
    </>
  );
};

export default RegisterMain;
