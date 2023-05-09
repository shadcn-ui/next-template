/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"

import ButtonComponent from "@/components/ButtonComponent"

import PricingAccordion from "./PricingAccordion"
import PricingCard from "./PricingCard"
import PricingFAQ from "./PricingFAQ"
import Switch from "./Switch"

const FixItems = () => {
  const [isActive, setisActive] = useState(true)
  return (
    <div className="flex flex-col gap-12">
      <div className="flex items-center gap-2 text-[14px] justify-center">
        <div
          className={`cursor-pointer ${isActive ? "text-gray-500" : ""}`}
          onClick={() => setisActive(false)}
        >
          Pay Yearly (Get 25% off!)
        </div>
        <Switch isActive={isActive} onToggle={() => setisActive(!isActive)} />
        <div
          className={`cursor-pointer ${!isActive ? "text-gray-500" : ""}`}
          onClick={() => setisActive(true)}
        >
          Pay Monthly
        </div>
      </div>
      <div className="flex flex-col items-stretch justify-between gap-10 lg:flex-row">
        <PricingCard
          color="#ffc040"
          isActive={isActive}
          items={[
            "Feedback Portal",
            "Workflow Customization",
            "Advanced Widgets ",
            "Project Access",
            "Integrations",
          ]}
          price1={59}
          price2={79}
          projects={5}
          users={10}
          title="Startup"
        />
        <PricingCard
          color="#ff8040"
          isActive={isActive}
          items={[
            "Everything in Startup",
            "Session Replays",
            "Developer Tools",
            "JavaScript API",
            "User Identification",
            "Branding Export Data",
          ]}
          price1={119}
          price2={159}
          projects={15}
          users={15}
          title="Company"
        />
        <PricingCard
          color="#ff4060"
          isActive={isActive}
          items={[
            `Everything in Company`,
            `Webhooks Remove`,
            `Powered By Logo`,
            `Invoice Payment`,
            `Implementation Support`,
          ]}
          price1={217}
          price2={289}
          projects={25}
          users={25}
          title="Premium"
        />
      </div>
      <div className="flex-col hidden gap-16 px-8 py-32 sm:flex lg:px-48">
        <h1 className="self-center text-[35px] font-medium text-[#232e3a]">
          USERBACK FEATURES
        </h1>
        <PricingAccordion />
      </div>
      <div className="flex flex-col gap-16 py-32 sm:px-8 lg:px-48">
        <h1 className="self-center text-[35px] font-medium text-[#232e3a]">
          USERBACK FREQUENTLY ASKED QUESTIONS
        </h1>
        <div>
          <PricingFAQ />
        </div>
      </div>
      <ButtonComponent
        text="Start your risk free, 14 day trial today - no credit card needed"
        className="self-center mb-16"
      />
    </div>
  )
}

export default FixItems
