/* eslint-disable tailwindcss/classnames-order */

import Header from "@/components/Header"
import ShowCase from "@/components/ShowCase"

import AboutItem from "./AboutItems"
import OurValues from "./OurValues"

const AboutUsItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <div
        style={{ background: `url("/images/Our-Story-1.webp")` }}
        className="flex items-center h-[700px] bg-no-repeat bg-cover md:pl-[22%]"
      >
        <div className="flex-[2] flex flex-col gap-8 pt-[200px]">
          <h1 className="text-[30px] font-medium">The story so far…</h1>
          <p className="text-gray-700">
            Feedback is hard to keep track of, and it’s time-consuming. The
            evidence to prioritize valuable features is either scattered or
            guesswork, so we see the common theme of products diverging from the
            value users really want. We’ve seen product managers and agencies
            struggle with this feedback knot, and we were convinced there had to
            be a better way.
          </p>
          <p className="text-gray-700">
            We have created a simple yet powerful way to collect and manage
            feedback for all your software products and web apps in one place. A
            place where your customers can be part of your product journey and
            where you have the evidence to build value not simply features for
            features’ sake. We truly believe that you can build better products
            and solutions for your customers through visual feedback and the
            ability to articulate ideas or problems with proper context. You can
            be a product hero. It’s our mission to help software product teams
            untangle the feedback knot and move the user back to the center of
            product development.
          </p>
        </div>
        <div className="flex-1 hidden md:block"></div>
      </div>
      <div className="flex justify-between px-[10%] gap-12 flex-col md:flex-row">
        <AboutItem
          image="/images/Userback-Founding.webp"
          text="When a customer success obsessed individual teamed up with a precision focused developer to start something great."
          title="The founding"
        />
        <AboutItem
          image="/images/20k-Userback.webp"
          text="Our user-centered development approach leads to over 20,000 software teams building better with Userback."
          title="Finding product fit"
        />
        <AboutItem
          image="/images/2million-Userback.webp"
          text="Product Managers, Developers and Web Designers have collected over 2.1 million pieces of feedback and reduced triage times by over 70%."
          title="Giving users a voice"
        />
      </div>
      <ShowCase />
      <div className="flex flex-col gap-16">
        <Header
          desktopSize={42}
          maxWidth={500}
          mobileSize={16}
          text="Our Values"
          className="self-start pl-8 lg:pl-32"
        />
        <div className="grid-cols-1 px-[10%] gap-16 lg:grid-cols-2 grid pb-32">
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="#6042ec"
              >
                <path d="M30.883 32c-0.008 0-0.019 0-0.027 0h-2.656c-0.365 0-0.667-0.3-0.667-0.667 0-6.737-0.948-11.26-2.893-13.781-1.636 2.415-3.005 5.631-3.005 13.781 0 0.367-0.299 0.667-0.667 0.667h-5.385c-0.368 0-0.667-0.3-0.667-0.667 0-2.295-1.449-4.163-3.232-4.163s-3.231 1.868-3.231 4.163c0 0.367-0.3 0.667-0.667 0.667h-6.671c-0.368 0-0.667-0.3-0.667-0.667 0-17.569 6.824-31.333 15.536-31.333 8.684 0 15.488 13.667 15.537 31.145 0.019 0.060 0.028 0.123 0.028 0.188-0.001 0.367-0.3 0.667-0.668 0.667zM28.864 30.667h1.32c-0.165-16.235-6.473-29.333-14.201-29.333-7.727 0-14.031 13.099-14.199 29.333h5.368c0.275-2.717 2.201-4.829 4.532-4.829s4.256 2.112 4.531 4.829h4.087c0.084-8.836 1.816-11.948 3.743-14.585 0.116-0.159 0.296-0.256 0.489-0.273 0.196-0.013 0.388 0.060 0.528 0.2 2.487 2.547 3.733 7.347 3.803 14.659zM20.881 13.891c-1.157 0-2.099-0.94-2.099-2.093 0-1.156 0.943-2.093 2.099-2.093 1.157 0 2.1 0.941 2.1 2.093 0 1.153-0.943 2.093-2.1 2.093zM20.881 11.033c-0.42 0-0.765 0.341-0.765 0.759s0.345 0.759 0.765 0.759c0.423 0 0.767-0.341 0.767-0.759 0-0.416-0.343-0.759-0.767-0.759zM19.005 17.151c-4.483 0-8.325-3.271-8.785-7.669-0.467-4.456 3.008-8.532 7.744-9.088 0.361-0.043 0.695 0.217 0.74 0.584 0.041 0.364-0.219 0.696-0.584 0.741-3.501 0.413-7.011 3.445-6.573 7.629 0.417 3.976 4.132 6.861 8.283 6.428 0.364-0.037 0.695 0.227 0.733 0.592 0.037 0.364-0.227 0.695-0.592 0.732-0.328 0.036-0.649 0.051-0.965 0.051z"></path>
              </svg>
            }
            text="We are thoughtful communicators who value and respect the contributions that come from our team and our customers. We listen to understand and are deliberate in our responses and actions. No egos. After all, we are a feedback company at heart, and what is feedback without listening?"
            title="We listen"
          />
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="#ff4060"
              >
                <path d="M30.999 28.388h-11.997c-0.175 0-0.343-0.071-0.469-0.193l-17-16.693c-0.127-0.125-0.199-0.301-0.197-0.481s0.079-0.353 0.208-0.475c0.049-0.048 5.071-4.804 5.9-5.633 1.075-1.075 2.035-1.3 2.655-1.3 0.716 0 1.388 0.3 1.891 0.841 0.636 0.685 0.953 1.685 0.873 2.747-0.063 0.813 0.281 1.636 1.024 2.433 1.524 1.639 4.208 2.655 5.828 2.655l0.156-0.004c0.273 0.016 0.525 0.141 0.637 0.393 0.556 1.235 2.208 4.9 3.619 9.041h3.407c2.281 0 4.139 1.855 4.139 4.136v1.864c-0.005 0.369-0.305 0.669-0.672 0.669zM19.273 27.055h11.059v-1.197c0-1.544-1.255-2.803-2.803-2.803h-3.885c-0.287 0-0.541-0.185-0.636-0.456-1.295-3.885-2.852-7.429-3.544-8.981-1.945-0.089-4.845-1.227-6.56-3.077-0.987-1.071-1.467-2.257-1.375-3.443 0.052-0.681-0.141-1.328-0.523-1.737-0.173-0.189-0.472-0.415-0.912-0.415-0.527 0-1.12 0.313-1.712 0.909-0.693 0.695-4.116 3.941-5.42 5.181l16.311 16.019zM30.925 25.836l-11.607-0.003-15.876-15.935 0.945-0.94 15.485 15.541 11.052 0.003zM12.863 19.099c-0.271 0-0.528-0.167-0.625-0.435-0.131-0.347 0.045-0.729 0.393-0.857l8.14-3.013c0.348-0.131 0.729 0.049 0.86 0.393 0.128 0.349-0.049 0.732-0.393 0.86l-8.143 3.011c-0.075 0.028-0.155 0.041-0.232 0.041zM14.749 20.984c-0.273 0-0.528-0.169-0.628-0.44-0.125-0.347 0.056-0.729 0.404-0.857l7.161-2.579c0.344-0.12 0.727 0.055 0.852 0.404 0.128 0.347-0.055 0.727-0.401 0.852l-7.161 2.581c-0.076 0.027-0.152 0.039-0.227 0.039zM16.635 22.872c-0.268 0-0.523-0.164-0.624-0.432-0.131-0.344 0.043-0.729 0.388-0.86l5.148-1.951c0.343-0.131 0.728 0.041 0.861 0.388 0.131 0.344-0.044 0.729-0.388 0.86l-5.148 1.951c-0.079 0.032-0.16 0.044-0.237 0.044zM3.665 19.055h-2.667c-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667h2.667c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM6.332 21.721h-5.333c-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667h5.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM8.999 24.388h-8c-0.367 0-0.667-0.3-0.667-0.667s0.3-0.667 0.667-0.667h8c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667z"></path>
              </svg>
            }
            text="We are nimble and driven to deliver. We make decisions fast. We execute fast. We learn fast. We win fast. We do this with purpose and accountability, to each other and our customers. We can move fast because we have trust, and because of the freedom that comes from that trust to change quickly in line with our customers needs."
            title="We move fast"
          />
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 32 32"
                fill="#ff8040"
              >
                <path d="M16 15.957c-3.308 0-6-2.692-6-6 0-3.305 2.692-6 6-6 3.307 0 6 2.695 6 6 0 3.309-2.693 6-6 6zM16 5.291c-2.573 0-4.667 2.093-4.667 4.667 0 2.576 2.093 4.667 4.667 4.667s4.667-2.091 4.667-4.667c0-2.572-2.093-4.667-4.667-4.667zM16 19.959c-5.515 0-10-4.484-10-10 0-5.515 4.485-10 10-10s10 4.485 10 10c0 5.515-4.485 10-10 10zM16 1.291c-4.779 0-8.667 3.888-8.667 8.667s3.888 8.667 8.667 8.667 8.667-3.889 8.667-8.667-3.888-8.667-8.667-8.667zM9.333 28.041c-0.084 0-0.169-0.016-0.251-0.049-0.251-0.101-0.416-0.347-0.416-0.617v-10.888c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667v9.247l2.856-2.933c0.251-0.257 0.663-0.271 0.928-0.028l1.332 1.221c0.272 0.252 0.289 0.672 0.041 0.943-0.249 0.271-0.672 0.292-0.943 0.039l-0.855-0.784-3.549 3.648c-0.128 0.133-0.301 0.203-0.477 0.203zM22.667 32.041c-0.173 0-0.344-0.068-0.472-0.195l-3.528-3.529-3.528 3.528c-0.191 0.193-0.477 0.248-0.727 0.143s-0.412-0.347-0.412-0.615v-12.084c0-0.369 0.299-0.667 0.667-0.667s0.667 0.297 0.667 0.667v10.472l2.861-2.861c0.259-0.26 0.683-0.26 0.943 0l2.861 2.861v-13.057c0-0.368 0.299-0.667 0.667-0.667s0.667 0.3 0.667 0.667v14.667c0 0.268-0.163 0.513-0.413 0.615-0.080 0.039-0.167 0.056-0.252 0.056z"></path>
              </svg>
            }
            text="We challenge each other to improve to better serve our market because we are passionate, and we have made a safe environment to do so. We are curious and ambitious. We want to continuously push to solve it better; to be better. We put in the best of ourselves to stand out and we work hard to keep it so that our customers can access the best tools to make their lives easier."
            title="We strive for excellence"
          />
          <OurValues
            image={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 39 32"
                fill="#ffc040"
              >
                <path d="M6.613 12.857c-0.113 0-0.228-0.028-0.331-0.085-5.287-3.023-6.333-5.903-6.281-7.788 0.061-2.221 1.585-3.692 2.313-4.056 1.828-0.915 3.473-0.349 4.299 0.872 0.824-1.22 2.471-1.787 4.299-0.872 0.728 0.364 2.252 1.835 2.313 4.056 0.053 1.885-0.995 4.765-6.281 7.788-0.103 0.057-0.217 0.085-0.331 0.085zM4.149 1.78c-0.371 0-0.788 0.115-1.239 0.34-0.389 0.195-1.532 1.287-1.577 2.901-0.059 2.115 1.765 4.321 5.279 6.399 3.515-2.077 5.337-4.284 5.279-6.399-0.045-1.615-1.188-2.707-1.577-2.901-0.451-0.225-0.867-0.34-1.239-0.34-1.24 0-1.797 1.309-1.797 2.244 0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0.003-0.931-0.555-2.244-1.795-2.244zM22.612 26.191c-3.761 0-5.809-3.975-5.988-8.084-0.963-0.237-2.012-0.943-2.012-1.917v-2.667c0-0.833 0.807-1.435 1.333-1.739v-2.26c0-2.508 1.343-3.919 3.787-3.996 2.017-1.379 3.984-2.105 5.693-2.105 1.655 0 3.032 0.695 3.781 1.909 0.753 1.22 0.779 2.835 0.073 4.348v1.907c1.333 0.26 1.333 1.331 1.333 1.941v2.667c0 0.973-1.049 1.681-2.011 1.919-0.177 4.1-2.227 8.077-5.991 8.077zM25.428 4.756c-1.035 0-2.759 0.344-5.099 1.98-0.112 0.080-0.247 0.121-0.383 0.121-1.844 0-2.667 0.823-2.667 2.667v2.667c0 0.261-0.155 0.5-0.393 0.608-0.475 0.215-0.915 0.583-0.941 0.731v2.661c0.028 0.213 0.785 0.667 1.333 0.667 0.368 0 0.667 0.301 0.667 0.667 0 2.948 1.243 7.333 4.667 7.333 3.423 0 4.667-4.385 4.667-7.333 0-0.365 0.3-0.667 0.667-0.667 0.548 0 1.305-0.451 1.333-0.667v-2.665c0-0.667 0-0.667-0.667-0.667-0.367 0-0.667-0.299-0.667-0.667v-2.667c0-0.103 0.025-0.205 0.071-0.299 0.58-1.155 0.599-2.32 0.057-3.195-0.508-0.823-1.448-1.276-2.645-1.276zM7.28 31.524c-0.368 0-0.667-0.297-0.667-0.667 0-3.861 3.084-6.667 7.333-6.667h1.644l1.775-2.647c0.205-0.305 0.619-0.388 0.925-0.184 0.305 0.205 0.388 0.62 0.183 0.924l-1.972 2.945c-0.124 0.185-0.332 0.295-0.555 0.295h-2c-3.532 0-6 2.195-6 5.333 0 0.369-0.299 0.667-0.667 0.667zM37.92 31.524c-0.369 0-0.667-0.297-0.667-0.667 0-3.139-2.469-5.333-6-5.333h-2c-0.224 0-0.432-0.109-0.555-0.295l-1.972-2.945c-0.203-0.305-0.124-0.719 0.184-0.924 0.307-0.204 0.717-0.123 0.925 0.184l1.772 2.647h1.645c4.249 0 7.333 2.805 7.333 6.667 0 0.369-0.3 0.667-0.667 0.667z"></path>
              </svg>
            }
            text="We spend a huge amount of our time at work. The more that time doesn’t feel like “work,” the better. Camaraderie underpins everything. We can be serious without taking ourselves too seriously. We care – about each other, our customers and our community. We support each other. We have fun together. We win together. Ultimately, we are a team."
            title="We are in it together"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsItems
