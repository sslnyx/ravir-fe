import React from "react";
import PageHero from "../../components/PageHero";
import teamSrc from "/src/assets/img/team/team-anchor-min.jpg";
import paulsun from "/src/assets/img/team/paulsun.svg";
import jka from "/src/assets/img/team/jka.svg";
import kk from "/src/assets/img/team/kkdesign.svg";
import phLogo from "/src/assets/img/team/placeholder.svg";
import ph from "/src/assets/img/team/pilothouse.svg";
import { Helmet } from "react-helmet";

const developers = [
  {
    title: "Architect",
    logo: jka,
    des: "Jordan Kutev Architect Inc. [JKA] is an innovative architectural firm based in Burnaby with a reputation for inspired, high-performance buildings and sustainable developments. JKA aims to create places - of all scales - that people engage with, respond to, and feel comfortable being in; places that leave a positive and lasting impact which fulfils the need to connect with each other.",
  },
  // {
  //   title: "Builder",
  //   logo: phLogo,
  //   des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor voluptates labore saepe, cumque alias sequi at repellat perspiciatis expedita officia hic quod! Veniam id aliquam vel necessitatibus atque recusandae tempora.",
  // },
  {
    title: "Interior Design",
    logo: kk,
    des: "Karly Kristina Design is an award-winning interior design studio based in Vancouver, renowned for their unparalleled customer service and comprehensive, customizable interior design services. Their passion lies in designing functional and beautiful spaces while evolving their clients visions into realities they never knew were possible.",
  },
  {
    title: "Sales & Marketing",
    logo: ph,
    des: "Pilothouse Real Estate excels in real estate project marketing and development, offering top-tier expertise in site feasibility, land acquisition, market intelligence, sales strategy and after-sales customer care. They focus on creating tailored, innovative home ownership opportunities in Western Canada, leveraging over 20 years of experience and involvement in more than 115 real estate projects.",
    // link: "https://pilothouseprojects.com/",
  },
];

const Team = () => {
  return (
    <div>
      <Helmet title="Team" />
      {/* <PageHero imgSrc={teamSrc} /> */}
      <section className="mt-[175px]">
        <div className="container text-center">
          <h2>Building Trust, Crafting Homes</h2>
        </div>
      </section>

      <section>
        <div className="container max-w-[960px] text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-[100px] border-b pb-10 overflow-hidden items-center md:items-start">
            <div className="shrink-0" data-aos="fade-up">
              <img src={paulsun} alt="paulsun" />
            </div>
            <div data-aos="fade-up">
              <h2 className="mb-5">Developer</h2>
              <p className="mb-0">
                Since 1987, Paulsun Development and its family of companies have
                drawn on its founder's extensive background as a Civil Engineer
                to build a strong industry reputation in British Columbia. The
                success of these companies over the past 37 years is attributed
                to expertise, attention to detail, exceptional craftsmanship and
                a hands-on approach. Their impressive portfolio includes land
                assemblies, re-zoning/development and construction of large
                subdivisions, civil infrastructure works, and a vast array of
                commercial and residential projects, such as low­ rise apartment
                buildings, multi-unit townhouse projects, and finely crafted
                custom homes. Paulsun's mission is to make a lasting impact by
                creating inspired communities to last generations.
              </p>
              <div className="mb-3">
                <small>*1164614 BC Ltd dba Paulsun Development</small>
              </div>
              <a
                href="https://paulsundevelopment.com"
                target="blank"
                className="block"
              >
                www.PaulsunDevelopment.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-20 text-center md:text-left">
        <div className="container max-w-[960px] ">
          <div className="flex flex-wrap -mx-20 -my-10">
            {developers.map(({ title, logo, des, link }, i) => (
              <div
                data-aos="fade-up"
                key={i}
                data-aos-delay={100 * i}
                className="basis-full md:basis-1/2 px-20 py-10 "
              >
                <h2 className="mb-5 text-center">{title}</h2>
                <div className="mb-5 flex justify-center py-5 min-h-[120px] items-center">
                  <img src={logo} alt="logo" />
                </div>
                <p>{des}</p>
                {link && (
                  <p>
                    <a href={link}>{link}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
