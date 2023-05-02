/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const ContactUs = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 px-4 py-10 mx-4 my-10 text-md rounded-2xl md:flex-row md:gap-10 md:justify-center"
      style={{
        background:
          "linear-gradient(90deg,rgba(227, 45, 109, 0.5) 0%,rgba(255 ,117, 87, 0.5) 100%)",
      }}
    >
      <p className="leading-[1] max-w-[400px] text-xl font-medium">
        Join thousands of product managers, developers and web agencies already
        getting news and info.
      </p>
      <form className="flex flex-col self-stretch">
        <label htmlFor="mail" className="mb-1 text-sm">
          Email<span className="text-red">*</span>
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          className="px-4 py-2 bg-white rounded-2xl focus-visible:outline-none"
          required
        />
        <p className="self-start px-5 py-2 mt-6 text-sm text-white rounded-xl bg-mainBlue">
          Submit
        </p>
      </form>
    </div>
  )
}

export default ContactUs
