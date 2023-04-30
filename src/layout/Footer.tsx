/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import FooterCol from "@/components/footer/FooterCol"
import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const Footer = () => {
  return (
    <div className="text-white bg-mainBlue">
      <div className="container pt-12">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-5">
          <FooterCol>
            <div className="w-36">
              <img src="/images/UB-Logo.svg" alt="" />
            </div>
            <div className="w-36">
              <img src="/images/G2-svg.svg" alt="" />
            </div>
            <div className="w-36">
              <img src="/images/Capterra-svg.svg" alt="" />
            </div>
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="USE CASE"
              links={[
                { title: "Bug Tracking", link: "/bug-tracking" },
                { title: "Website Feedback", link: "/website-feedback-tool" },
                { title: "Design Feedback", link: "/design-feedback-tool" },
                {
                  title: "User Acceptance Testing",
                  link: "/user-acceptance-testing",
                },
                {
                  title: "Software Feature Requests",
                  link: "/software-feature-requests",
                },
                { title: "Product Roadmapping", link: "/product-roadmapping" },
              ]}
            />
            <FooterLinksWrapper
              header="USERBACK FOR"
              links={[
                { title: "Product Managers", link: "/userback-for-product-managers" },
                { title: "Developers", link: "/userback-for-developers" },
                { link: "/userback-for-web-agencies", title: "Web Agencies" },
              ]}
            />
            <FooterLinksWrapper
              header="I’M LOOKING TO"
              links={[
                { link: "/user-feedback-to-fix", title: "Fix Apps & Websites" },
                {
                  link: "/user-feedback-to-build",
                  title: "Build Apps & Websites",
                },
                {
                  link: "/user-feedback-to-enhance",
                  title: "Enhance Apps & Websites",
                },
              ]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="DEMO CENTER"
              links={[{ link: "", title: "Hands-on Demo" }]}
            />
            <FooterLinksWrapper
              header="PLATFORM"
              links={[
                { link: "", title: "In App Feedback" },
                { link: "", title: "Screen Annotation" },
                { link: "", title: "Video Recording" },
                { link: "", title: "Session Replay" },
                { link: "", title: "User Insights" },
                { link: "", title: "Feedback Portal" },
                { link: "", title: "Integrations" },
              ]}
            />
            <FooterLinksWrapper
              header="FEEDBACK LIFECYCLE"
              links={[
                { link: "", title: "Capture & Collect" },
                { link: "", title: "Assess & Prioritize" },
                { link: "", title: "Assign & Action" },
                { link: "", title: "Follow up & Close" },
              ]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="RESOURCES"
              links={[
                { link: "", title: "Blog" },
                { link: "", title: "Integrations" },
                { link: "", title: "Documentation" },
                { link: "", title: "Support Articles" },
                { link: "", title: "API Reference" },
                { link: "", title: "Browser Extension" },
              ]}
            />
            <FooterLinksWrapper
              header="USERVERSITY"
              links={[{ link: "", title: "Content Hub" }]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="COMPANY"
              links={[
                { link: "", title: "About Us" },
                { link: "", title: "Roadmap" },
                { link: "", title: "Terms and Conditions" },
                { link: "", title: "Privacy Policy" },
                { link: "", title: "Security Overview" },
                { link: "", title: "GDPR Commitment" },
              ]}
            />
            <FooterLinksWrapper
              header="COMPARE"
              links={[
                { link: "", title: "Userback vs Marker.io" },
                { link: "", title: "Userback vs Usersnap" },
                { link: "", title: "Userback vs Bugherd" },
              ]}
            />
          </FooterCol>
        </div>
        <div className="flex items-center justify-center py-10">
          <h6>Copyright © 2023 Userback. All Rights Reserved.</h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
