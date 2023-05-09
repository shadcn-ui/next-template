/* eslint-disable tailwindcss/classnames-order */
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react"
import { FAQ } from "PricingData"

const PricingFAQ = () => {
  return (
    <Accordion allowToggle>
      {FAQ.map((item) => {
        return (
          <AccordionItem
            borderTop={0}
            borderBottomWidth={"2px"}
            borderBottomColor={"rgba(0,0,0,0.08)"}
            _last={{ borderBottomWidth: "2px" }}
          >
            <h2 className="text-[#888] hover:text-mainBlue">
              <AccordionButton
                py={8}
                _hover={{ backgroundColor: "transprant" }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight={"medium"}
                  lineHeight={4}
                  className="text-[12px] sm:text-[15px] lg:text-[18px]"
                >
                  {item.question}
                </Box>
                <AccordionIcon border={"1px"} className="rounded-full" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="text-gray-700">{item.answer}</div>
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default PricingFAQ
