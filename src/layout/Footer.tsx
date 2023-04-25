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
                "Bug Tracking",
                "Website Feedback",
                "Design Feedback",
                "User Acceptance Testing",
                "Software Feature Requests",
                "Product Roadmapping",
              ]}
            />
            <FooterLinksWrapper
              header="USERBACK FOR"
              links={["Product Managers", "Developers", "Web Agencies"]}
            />
            <FooterLinksWrapper
              header="I’M LOOKING TO"
              links={[
                "Fix Apps & Websites",
                "Build Apps & Websites",
                "Enhance Apps & Websites",
              ]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="DEMO CENTER"
              links={["Hands-on Demo"]}
            />
            <FooterLinksWrapper
              header="PLATFORM"
              links={[
                "In App Feedback",
                "Screen Annotation",
                "Video Recording",
                "Session Replay",
                "User Insights",
                "Feedback Portal",
                "Integrations",
              ]}
            />
            <FooterLinksWrapper
              header="FEEDBACK LIFECYCLE"
              links={[
                "Capture & Collect",
                "Assess & Prioritize",
                "Assign & Action",
                "Follow up & Close",
              ]}
            />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="RESOURCES"
              links={[
                "Blog",
                "Integrations",
                "Documentation",
                "Support Articles",
                "API Reference",
                "Browser Extension",
              ]}
            />
            <FooterLinksWrapper header="USERVERSITY" links={["Content Hub"]} />
          </FooterCol>
          <FooterCol>
            <FooterLinksWrapper
              header="COMPANY"
              links={[
                "About Us",
                "Roadmap",
                "Terms and Conditions",
                "Privacy Policy",
                "Security Overview",
                "GDPR Commitment",
              ]}
            />
            <FooterLinksWrapper
              header="COMPARE"
              links={[
                "Userback vs Marker.io",
                "Userback vs Usersnap",
                "Userback vs Bugherd",
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
