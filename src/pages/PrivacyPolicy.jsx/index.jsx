import React from "react";
import NoChangeContent from "./NoChangeContent";
import { siteData } from "../../components/SiteData";

import "./privacyPolicy.css";

const sales = "PILOTHOUSE REAL ESTATE INC.";

const PrivacyPolicy = () => {
  return (
    <div className="page-privacy-policy mt-[150px]">
      <section>
        <div className="container max-w-[800px]">
          <h2 className="mb-5 font-serif font-bold">Privacy Policy</h2>

          <p class="p2">Effective date: February 24, 2020</p>

          <p class="p2">
            <span class="s1">Ravir </span>(&ldquo;us&rdquo;, &ldquo;we&rdquo;,
            or &ldquo;our&rdquo;) operates the{" "}
            <a href="https://liveatravir.com">https://liveatravir.com</a>{" "}
            website (the &ldquo;Service&rdquo;).
          </p>

          <p class="p2">
            This page informs you of our policies regarding the collection, use,
            and disclosure of personal data when you use our Service and the
            choices you have associated with that data.
          </p>

          <p class="p2">
            We use your data to provide and improve the Service. By using the
            Service, you agree to the collection and use of information in
            accordance with this policy. Unless otherwise defined in this
            Privacy Policy, terms used in this Privacy Policy have the same
            meanings as in our Terms and Conditions, accessible from{" "}
            <a href="https://liveatravir.com">https://liveatravir.com</a>
          </p>

          <NoChangeContent sales={sales} />

          <p class="p3">Contact Us</p>
          <p class="p2">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul class="ul1">
            <li class="li7">
              <span class="s8">
                By email:&nbsp;
                <a href="mailto:info@liveatravir.com" className="underline">
                  <span class="s9">info@liveatravir.com</span>
                </a>
              </span>
            </li>
            <li class="li6">
              <span class="s4">By Phone: </span>
              <a href="tel:+17782454223" className="underline">
                <span class="s2">778.245.4223</span>
              </a>
            </li>
            <li class="li6">
              <span class="s4">By mail: </span>
              <a target="_blank" href={siteData.siteGoogleMap}>
                <span>{siteData.address}</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
