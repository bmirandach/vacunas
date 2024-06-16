'use client'

import { stages } from "@/data/stages";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { NextButton, PrevButton, usePrevNextButtons } from "./ArrowButtons";
import { DotButton, useDotButton } from "./DotButton";
import { CarouselCard } from "./CarouselCard";

type PropType = {
  options: EmblaOptionsType
}

const Carousel = ({ options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {stages.map((stage) => (
            <CarouselCard 
              name={stage.name} 
              description={stage.description} 
              vaccines={stage.vaccines} 
              description_ex={stage.description_ex} 
              vaccines_ex={stage.vaccines_ex} 
              key={stage.value}/>
          ))}
        </div>
      </div>
      <div className="pt-4 grid grid-cols-[auto_1fr] gap-[1.2rem] justify-between">
        <div className="grid grid-cols-2 gap-2 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="flex flex-wrap justify-end items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default Carousel;
