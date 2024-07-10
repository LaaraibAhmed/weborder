'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

import './Banner.module.css';
import Autoplay from 'embla-carousel-autoplay';
import { AspectRatio } from '../aspect-ratio';
import { Buttoncn } from '../buttoncn';
const Banner_comp = () => {
  let images = ['/pic1.jpg', '/pic2.jpg', '/pic3.jpg'];
  return (
    // add pic1 as image
    <div className="w-full flex flex-col items-center justify-center h-fit">
      <div className="w-4/5 flex flex-col items-start h-full py-[2%] gap-y-5">
        <div className="flex md:flex-row flex-col w-full h-full">
          <div className="flex flex-col gap-y-5">
            <span className="md:text-6xl text-3xl">Lorem Ipsum</span>
            <span className="md:text-4xl text-xl">Lorem Ipsum Lorem Ipsum</span>
            <span className="text-sm md:text-xl">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum
            </span>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Buttoncn
                className={
                  'bg-black border-2 mt-4 mx-auto md:m-auto border-slate-700 w-[70%] md:w-[20%] md:h-24 h-16 text-pink-500 font-bold md:text-2xl text-lg font-serif transition-all duration-2000 md:hover:text-4xl hover:text-2xl'
                }
              >
                Order Now
              </Buttoncn>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  You are now ordering the product. Please make sure you have
                  all the details correct.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="h-full w-full ">
          <Carousel
            opts={{ loop: true }}
            className="h-[70%] w-[80%] m-auto"
            plugins={[
              Autoplay({
                delay: 2000
              })
            ]}
          >
            <CarouselContent className="w-full h-full">
              {images.map((eachpic, index) => (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={eachpic}
                      className="object-contain h-full w-full rounded-3xl"
                      alt="Lorem Ipsum"
                    />
                  </AspectRatio>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="w-4/5"></div>
    </div>
  );
};

export default Banner_comp;
