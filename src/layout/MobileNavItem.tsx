import React from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react"
import { ExternalLink } from "@/functions/ExternalLinks"

interface Props {
  title: string
  links: {
    link: string
    title: string
  }[]
}

const MobileNavItem: React.FC<Props> = ({ links, title }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem
        borderTop={0}
        borderBottom={0}
        _last={{ borderBottomWidth: "0px" }}
      >
        <h2>
          <AccordionButton _expanded={{ bg: "rgba(0,0,0,0.1)" }}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              className="text-xl sm:text-2xl"
            >
              {title}
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel p={0}>
          <div className="flex flex-col gap-3 pl-6">
            {links.map((link) => {
              if (link.link) {
                return (
                  <Link href={link.link} key={link.title} className="text-sm">
                    {link.title}
                  </Link>
                )
              } else {
                return (
                  <div
                    key={link.title}
                    className="text-sm"
                    onClick={() => ExternalLink()}
                  >
                    {link.title}
                  </div>
                )
              }
            })}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default MobileNavItem
