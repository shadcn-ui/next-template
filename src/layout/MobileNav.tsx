/* eslint-disable tailwindcss/classnames-order */

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import MobileNavItem from "@/layout/MobileNavItem"
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const MobileNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ right: -320, zIndex: -1 }}
      animate={isOpen ? { right: 0, zIndex: 0 } : { right: -320, zIndex: -1 }}
      transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0] }}
      className={`fixed flex flex-col gap-10 text-white sm:w-[360px] py-14 sm:px-[60px] h-full justify-center w-[78vw] px-[30px] ${
        isOpen ? "right-0" : "right-[78vw] sm:right-[360px]"
      }`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="flex items-center self-end justify-center w-12 h-12 rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,.1)" }}
      >
        <motion.div
          className="w-0.5 bg-white"
          initial={{ x: 0, rotate: 45 }}
          animate={
            isOpen
              ? { x: 0, rotate: 45, opacity: 1, height: "26px" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0], delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute w-0.5 bg-white"
          initial={{ x: 0, rotate: 135 }}
          animate={
            isOpen
              ? { x: 0, rotate: 135, opacity: 1, height: "26px" }
              : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0], delay: 0.5 }}
        ></motion.div>
      </div>
      <div
        className="p-4 mb-auto rounded"
        style={{ backgroundColor: "rgba(0,0,0,.1)" }}
      >
        Sign In
      </div>
      <ul className="flex flex-col flex-1 gap-12 text-2xl sm:text-4xl">
        <Accordion allowToggle>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="text-2xl sm:text-4xl"
                >
                  Use Case
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MobileNavItem
                title="Use Case"
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
                  {
                    title: "Product Roadmapping",
                    link: "/product-roadmapping",
                  },
                ]}
              />
              <MobileNavItem
                title="User Role"
                links={[
                  {
                    title: "Product Managers",
                    link: "/userback-for-product-managers",
                  },
                  { title: "Developers", link: "/userback-for-developers" },
                  { link: "/userback-for-web-agencies", title: "Web Agencies" },
                ]}
              />
              <MobileNavItem
                title="I’m looking to"
                links={[
                  {
                    link: "/user-feedback-to-fix",
                    title: "Fix Apps & Websites",
                  },
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
              <div className="pl-4 mt-4 text-sm">
                <p className="text-base">G2 Reviews</p>
                <p className="text-gray-400">
                  You’re in good company with Userback. Check out what others
                  are saying and buy with confidence.
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="text-2xl sm:text-4xl"
                >
                  Platform
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MobileNavItem
                title="Demo Center"
                links={[{ link: "/demo", title: "Hands-on Demo" }]}
              />
              <MobileNavItem
                title="Platform Features"
                links={[
                  { link: "/in-app-feedback", title: "In App Feedback" },
                  { link: "/screen-annotation", title: "Screen Annotation" },
                  { link: "/video-recording", title: "Video Recording" },
                  { link: "/session-replay", title: "Session Replay" },
                  { link: "/user-insights", title: "User Insights" },
                  { link: "/feedback-portal", title: "Feedback Portal" },
                  { link: "/integrations", title: "Integrations" },
                ]}
              />
              <MobileNavItem
                title="Feedback Lifecycle"
                links={[
                  { link: "/capture-collect", title: "Capture & Collect" },
                  { link: "/assess-prioritize", title: "Assess & Prioritize" },
                  { link: "/assign-action", title: "Assign & Action" },
                  { link: "/follow-up-close", title: "Follow up & Close" },
                ]}
              />
              <div className="pl-4 mt-4 text-sm">
                <p className="text-base">DEMO</p>
                <p className="text-gray-400">
                  Get hands-on with Userback with our interactive demo and learn
                  how to manage all four phases of the feedback lifecycle. From
                  collection to closure, we make it easy.
                </p>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="text-2xl sm:text-4xl"
                >
                  Resources
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <MobileNavItem
                title="Learn More"
                links={[
                  { link: "/about", title: "About Us" },
                  { link: "/blog", title: "Blog" },
                  { link: "", title: "Help Center" },
                ]}
              />
              <MobileNavItem
                title="Documentation"
                links={[
                  { link: "", title: " Platform Documentation" },
                { link: "", title: "API Reference" },
                { link: "", title: "Browser Extension" },
                ]}
              />
              <MobileNavItem
                title="Userback Userversity"
                links={[
                  { link: "", title: "Resource Hub" },
                ]}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
            onClick={() => {
              router.push("/pricing")
            }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="text-2xl sm:text-4xl"
                >
                  <Link href={"/pricing"}>Pricing</Link>
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
          <AccordionItem
            borderTop={0}
            borderBottom={0}
            _last={{ borderBottomWidth: "0px" }}
          >
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  className="text-2xl sm:text-4xl"
                >
                  Get Started Free
                </Box>
              </AccordionButton>
            </h2>
          </AccordionItem>
        </Accordion>
      </ul>
    </motion.div>
  )
}

export default MobileNav
