import React from 'react';
import PriceCard from './PriceCard';

const PriceCards = () => {
  return (
    <div className="flex md:flex-row flex-col gap-y-4 md:gap-y-0 w-3/5 items-center justify-center m-auto h-fit gap-x-[5%] text-center">
      <PriceCard />
      <PriceCard />
      <PriceCard />
    </div>
  );
};

export default PriceCards;
