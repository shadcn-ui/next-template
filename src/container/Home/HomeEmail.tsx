/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const HomeEmail = () => {
  return (
    <div
    className="flex flex-col items-center gap-6 px-4 py-10 mx-8 my-10 text-lg rounded-2xl lg:flex-row lg:gap-10 lg:justify-center"
      style={{ background: "linear-gradient(90deg,#e32d6d 0%,#ff7557 100%)" }}
    >
        <p className="leading-[1] max-w-[400px]">Join thousands of product managers, developers and web agencies already getting news and info.</p>
        <form className="flex flex-col self-stretch">
            <label htmlFor="mail" className="text-sm">Email</label>
            <input type="email" name="mail" id="mail" className="bg-white rounded-2xl" />
            <p className="self-start px-4 py-1 my-6 rounded-full bg-mainBlue">Submit</p>
        </form>
    </div>
  )
}

export default HomeEmail
