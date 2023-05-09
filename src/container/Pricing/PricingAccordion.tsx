/* eslint-disable tailwindcss/classnames-order */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react"
import { UserBackFeatureData } from "PricingData"

import HasItemIcon from "./HasItemIcon"
import HasNotItemIcon from "./HasNotItemIcon"

const PricingAccordion = () => {
  return (
    <Accordion allowToggle>
      {UserBackFeatureData.map((item) => {
        return (
          <AccordionItem
            borderTop={0}
            borderBottomWidth={"2px"}
            borderBottomColor={"rgba(0,0,0,0.08)"}
            _last={{ borderBottomWidth: "2px" }}
          >
            <h2 className="text-[#888]">
              <AccordionButton
                py={8}
                _hover={{ backgroundColor: "transprant", color: item.color }}
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={18}
                  fontWeight={"medium"}
                >
                  {item.header}
                </Box>
                <AccordionIcon border={"1px"} className="rounded-full" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 my-2 children:flex-1">
                  <div></div>
                  <div className="flex justify-between ml-auto text-[22px] font-medium">
                    <div>Startup</div>
                    <div>Company</div>
                    <div>Premium</div>
                  </div>
                </div>
                {item.list.map((listItem) => {
                  return (
                    <div className="flex gap-4 children:flex-1">
                      <div>{listItem.title}</div>
                      <div className="flex justify-between ml-auto">
                        <div className="ml-6">
                          {listItem.items[0] ? (
                            <HasItemIcon />
                          ) : (
                            <HasNotItemIcon />
                          )}
                        </div>
                        <div>
                          {listItem.items[1] ? (
                            <HasItemIcon />
                          ) : (
                            <HasNotItemIcon />
                          )}
                        </div>
                        <div className="mr-6">
                          {listItem.items[2] ? (
                            <HasItemIcon />
                          ) : (
                            <HasNotItemIcon />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </AccordionPanel>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default PricingAccordion
