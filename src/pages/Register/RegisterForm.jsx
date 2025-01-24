import React, { useEffect, useRef, useState } from "react";
import { fields } from "./fields";
import { Button, Checkbox, Radio, Typography } from "@material-tailwind/react";
import CheckMark from "./CheckMark";
import ThankYouModal from "./ThankYouModal";
import { useNavigate } from "react-router-dom";
// import useCheckBoxValidator from "../../hooks/useCheckBoxValidator";

const { text, realtor, source, homeTypes } = fields;

// function gtag_report_conversion(url) {
//   var callback = function () {
//     if (typeof url != "undefined") {
//       window.location = url;
//     }
//   };
//   gtag("event", "conversion", {
//     send_to: "AW-16694068149/Otd9CLevudAZELWHrZg-",
//     event_callback: callback,
//   });
//   return false;
// }

// console.log(gtag)

const RegisterForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const formRef = useRef();
  const [isAtLeastOneChecked, setIsAtLestOneChecked] = useState(true);
  const navigate = useNavigate();

  const checkboxHandler = (ev) => {
    const sourceCheckboxes = formRef.current.querySelectorAll(
      "[name='answers[22441][answers][]']"
    );

    let result = false;

    for (const checkbox of sourceCheckboxes) {
      if (checkbox.checked) {
        result = true;
        setIsAtLestOneChecked(result);
        return result;
      }
    }

    setIsAtLestOneChecked(result);

    if (ev?.type !== "change") {
      const top =
        document.querySelector("#sources").getBoundingClientRect().top +
        window.scrollY;
      window.scrollTo(0, top);
    }

    return result;
  };

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    const formData = new FormData(ev.target);
    // const isChecked = checkboxHandler();

    // if (!isChecked) {
    //   setSubmitting(false);
    //   return;
    // }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}register`, {
        method: "POST",
        body: formData,
      });

      setSubmitting(false);

      if (res.ok) {
        const data = await res.json();

        if (data.success) {
          gtag("event", "conversion", {
            send_to: "AW-16694068149/Otd9CLevudAZELWHrZg-",
            event_callback: () => navigate("/register/thank-you"),
          });

          // Fallback in case the event_callback doesn't fire
          setTimeout(() => {
            navigate("/register/thank-you");
          }, 500);

          return;
        }

        return navigate("/register-error");
      } else {
        const errorData = await res.json();
        console.error("Error:", res.status, errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const modalProps = { showThankYou, setShowThankYou };

  return (
    <section className="relative text-white mb-0">
      <div className="container !max-w-[960px]">
        <div className="mb-[40px]" data-aos="fade-up">
          <p className="text-2xl md:text-[32px] md:leading-[40px]">
            Join the list today for an exclusive look into life at Ravir.
          </p>
          <p>*Required</p>
        </div>

        <form
          ref={formRef}
          onSubmit={submitHandler}
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <div className="max-w-[750px]">
            <div className="flex flex-wrap -mx-[12px] md:-mx-[40px]">
              {text.map(({ type, name, label, required }, i) => (
                <div
                  className="basis-full md:basis-1/2 px-3 md:px-[40px] mb-[40px]"
                  key={i}
                >
                  <label className="w-full !px-0">
                    <span className="font-bold uppercase inline-block mb-[12px]">
                      {label}
                      {required && "*"}
                    </span>{" "}
                    <br />
                    <input
                      className="w-full bg-transparent border-b focus-visible:outline-none"
                      type={type}
                      name={name}
                      required={required}
                    />
                  </label>
                </div>
              ))}

              <div className="basis-full md:basis-1/2 px-3 md:px-[40px] mb-[40px]">
                <p className="font-bold">ARE YOU WORKING WITH A REALTOR?</p>
                <div className="-ml-[12px]">
                  {["yes", "no"].map((option, i) => (
                    <Radio
                      key={i}
                      name="answers[22484][answers]"
                      ripple={false}
                      icon={<CheckMark />}
                      value={option}
                      className="!border-white bg-white p-0 transition-all hover:before:opacity-0 rounded-none scale-75 md:scale-100"
                      label={
                        <Typography
                          color="blue-gray"
                          className="uppercase text-white font-bold text-[14px]"
                        >
                          {option}
                        </Typography>
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="basis-full md:basis-1/2 px-3 md:px-[40px] mb-[40px]">
                <p className="font-bold">ARE YOU A REALTOR?</p>
                <div className="-ml-[12px]">
                  {["yes", "no"].map((option, i) => (
                    <Radio
                      key={i}
                      name="answers[22485][answers]"
                      ripple={false}
                      icon={<CheckMark />}
                      className="!border-white bg-white p-0 transition-all hover:before:opacity-0 rounded-none scale-75 md:scale-100"
                      value={option}
                      label={
                        <Typography
                          color="blue-gray"
                          className="uppercase text-white font-bold text-[14px]"
                        >
                          {option}
                        </Typography>
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <div id="sources" className="mb-[40px]">
              <p className="font-bold">
                <span>HOW DID YOU HEAR ABOUT US?*</span>
                {!isAtLeastOneChecked && (
                  <small className="text-orange ml-3">
                    Please select at least one
                  </small>
                )}
              </p>
              <div className="flex flex-wrap -mx-[12px] md:-mx-[40px]">
                {source.options.map((option, i) => (
                  <div className="basis-1/2 px-3 md:px-[40px]" key={i}>
                    <div className="-ml-[12px]">
                      <Radio
                        name="answers[22482][answers]"
                        ripple={false}
                        icon={<CheckMark />}
                        value={option}
                        // onChange={checkboxHandler}
                        className="!border-white !bg-white transition-none hover:before:opacity-0 rounded-none scale-75 md:scale-100"
                        label={
                          <Typography className="text-white font-bold text-[14px] uppercase">
                            {option}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-[40px]">
              <p className="font-bold">
                WHAT TYPE OF HOME ARE YOU LOOKING FOR?
              </p>
              <div className="flex flex-wrap -mx-[12px] md:-mx-[40px]">
                {homeTypes?.options.map((option, i) => (
                  <div className="basis-1/2 px-3 md:px-[40px]" key={i}>
                    <div className="-ml-[12px]">
                      <Radio
                        name="answers[22483][answers]"
                        ripple={false}
                        icon={<CheckMark />}
                        value={option}
                        className="!border-white !bg-white transition-none hover:before:opacity-0 rounded-none scale-75 md:scale-100"
                        label={
                          <Typography className="uppercase text-white font-bold text-[14px]">
                            {option}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-[40px]">
              <label className="flex items-start cursor-pointer !p-0">
                <div className="-ml-[12px] -mt-[8px]">
                  <Checkbox
                    name="answers[22486][answers]"
                    ripple={false}
                    icon={<CheckMark />}
                    required
                    className="!border-white !bg-white transition-none hover:before:opacity-0 rounded-none scale-75 md:scale-100"
                  />
                </div>

                <p>
                  Please click here to confirm your consent to receive
                  communications from Ravir and its affiliates and partners
                  including information about this and upcoming developments,
                  promotions, VIP early access or special offers. Should you
                  wish to be excluded, please email us at{" "}
                  <a href="mailto:info@liveatravir.com" className="underline">
                    info@liveatravir.com
                  </a>{" "}
                  or click the appropriate link at the bottom of any email
                  received.*
                </p>
              </label>
            </div>
          </div>

          <div className="flex justify-center items-center h-[56px]">
            {submitting ? (
              <span className="relative flex h-[20px] w-[20px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[20px] w-[20px] bg-orange"></span>
              </span>
            ) : (
              <button className="bg-orange px-20 py-[12px] uppercase font-bold text-[24px] xl:-translate-x-5">
                Register
              </button>
            )}
          </div>
        </form>
      </div>
      <ThankYouModal {...modalProps} />
    </section>
  );
};

export default RegisterForm;
