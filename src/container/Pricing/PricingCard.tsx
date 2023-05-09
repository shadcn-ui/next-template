/* eslint-disable tailwindcss/classnames-order */

import React from "react"

import ButtonComponent from "@/components/ButtonComponent"

interface Props {
  color: string
  title: string
  price1: number
  price2: number
  users: number
  projects: number
  items: string[]
  isActive: boolean
}

const PricingCard: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center flex-1 p-10 bg-white rounded-[15px] font-medium">
      <div
        className="h-[8px] self-stretch"
        style={{ backgroundColor: props.color }}
      ></div>
      <h2 className="text-[24px] lg:text-[33px] -mb-2 mt-2">{props.title}</h2>
      <div>
        <span className="relative -top-4 text-[12px]">$</span>
        <span className="text-[46px] lg:text-[30px] ">
          {!props.isActive ? props.price1 : props.price2}
        </span>
        / month
      </div>
      <div className="pt-8">
        {props.users} Users / {props.projects} Projects
      </div>
      <div className="py-8 text-mainBlue">
        Add’l users ${props.isActive ? "4.50" : "6.00"}/mo
      </div>
      <ul className="flex flex-col items-center pb-10">
        {props.items.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
      <ButtonComponent
        text="Start free trial"
        className="self-stretch mt-auto"
      />
    </div>
  )
}
export default PricingCard
