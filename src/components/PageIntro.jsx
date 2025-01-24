import React from "react";

const PageIntro = ({ title, desc }) => {
  return (
    <section className="relative z-10 py-8">
      <div className="container">
        <h1
          className="text-center text-4xl md:text-5xl !leading-[1.3]"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h1>
        <div className="max-w-[500px] mx-auto text-center overflow-hidden">
          <p data-aos="fade-up" data-aos-delay="200">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
