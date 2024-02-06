"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export function DefaultAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <h2 className="text-3xl text-center text-gray-900 pt-10 pb-6 font-semibold tracking-wide ">
        FAQ
      </h2>
      <div className="mx-[10%] px-10 shadow-md shadow-gray-500 pb-8">
        <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          How much do mobile tyre fitters charge?
        </AccordionHeader>
        <AccordionBody>
        Mobile tyre fitting can vary in price this is determined by location 
        and tyre size please have these details ready either call or submit a 
        form online. All prices include call out charge, Tyre fitting and the tyre itself.
        </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How long will I be waiting for?
        </AccordionHeader>
        <AccordionBody>
          Call out times vary between 45-60 minutes this can vary depening on 
          area, traffic and time of the day please call one off our team for a exact ETA
        </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Do you offer emergency mobile tyre fitting?
        </AccordionHeader>
        <AccordionBody>
          We do. Please let one off our team know its a emergency and 
          the booking will be treated as priority.
        </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
