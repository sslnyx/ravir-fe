import React from "react";
import building from "/src/assets/img/register/building.svg";

const RegisterOverview = () => {
  return (
    <section className="relative text-white">
      <div className="container !max-w-[960px]">
        <div className="flex justify-center lg:justify-start">
          <h2
            data-aos="fade-up"
            className="mb-[40px] text-4xl lg:text-[60px] lg:leading-[60px] text-center"
          >
            74 Delightful
            <br /> Parkside Condos & Townhomes
          </h2>
        </div>

        <div className="flex">
          <div className="basis-full lg:basis-1/2 md:text-[20px] md:leading-[28px]">
            <div className="flex justify-center mb-[40px] lg:hidden">
              <img src={building} data-aos="fade-left" data-aos-delay="100" />
            </div>

            <div>
              <p data-aos="fade-up" data-aos-delay="200">
                Taking cues from the rich French heritage of its surroundings,
                Ravir is all about the art of living life to the fullest. A
                parkside urban enclave close to rapid transit in Coquitlam’s
                historic Maillardville neighbourhood.
              </p>

              <p data-aos="fade-up" data-aos-delay="300">
                A thriving community of studio, 1, 2, 3 & 4 bed homes exuding
                effortless sophistication and functionality. Alluring amenity
                spaces perfect for expressing your passions. Ravir is where
                modern living comes home – in delightful fashion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterOverview;
