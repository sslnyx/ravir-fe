import React from "react";
import developerLogo from "/src/assets/img/register/logo-paulsun.svg";
import salesLogo from "/src/assets/img/footer/Footer-Pilothouse.svg";

const RegisterFooter = () => {
  return (
    <div className="relative z-20">
      <footer className="bg-orange py-14 text-white relative">
        <div className="container flex flex-wrap justify-between items-center gap-10">
          <div className="text-2xl text-center mx-auto md:text-left md:mx-0">
            {/* <a href="tel:604.321.4567">604.321.4567</a>
            <br className="block md:hidden" />
            <span className="hidden md:inline-block mx-3">|</span> */}
            <a href="mailto:info@LiveAtRavir.com">info@LiveAtRavir.com</a>
          </div>

          <div className="flex mx-auto md:mx-0 gap-10 md:gap-20 justify-between sm:justify-center w-full sm:w-auto">
            <div className="flex flex-col items-center">
              <div className="mb-3">Developed By.</div>
              <div>
                <a
                  href="https://paulsundevelopment.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="h-[80px]" src={developerLogo} />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3">Sales & Marketing By.</div>
              <div>
                <a href="https://pilothouseprojects.com" target="_blank">
                  <img className="h-[80px]" src={salesLogo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegisterFooter;
