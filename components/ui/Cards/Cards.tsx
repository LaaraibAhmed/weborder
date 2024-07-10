import React from 'react';
import { GiUpgrade } from 'react-icons/gi';

const Cards = () => {
  return (
    <div className="flex flex-col w-2/5 items-center justify-center m-auto text-center mt-[5%]">
      <div className="md:text-3xl text-xl">
        <GiUpgrade />
      </div>
      <div className="md:text-5xl text-2xl">Accurate</div>
      <div className="text-xs md:text-xl">
        Combining best products to give the best servies possible to give the
        best servies possible to give the best servies possible
      </div>
    </div>
  );
};

export default Cards;
