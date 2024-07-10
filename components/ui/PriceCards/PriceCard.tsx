import React from 'react';
import { Buttoncn } from '../../ui/buttoncn';
import PricePt from './PricePt';

const PriceCard = () => {
  return (
    <div className="p-[2%] h-fit w-full border-white border-2 rounded-xl flex flex-col text-start gap-y-4">
      <div className=" text-green-600 text-xl">Starter</div>
      <div className="">
        <span className="text-4xl">$49 </span>
        <span>per month</span>
      </div>
      <div className="text-sm text-gray-400 space-y-4">
        <span>What's included</span>
        <div className="bg-slate-900 rounded-2xl m-auto p-[5%] text-sm text-gray-400 flex flex-col space-y-1">
          <span>
            <b>All data</b>
          </span>
          <span>All queries</span>
          <span>All queries</span>
          <span>All queries</span>
          <span>All queries</span>
          <span>All queries documented</span>
        </div>
      </div>
      <div>
        <PricePt />
        <PricePt />
        <PricePt />
      </div>
      <Buttoncn className="w-3/5 rounded-2xl border-slate-600 border-2 m-auto">
        Book a Call
      </Buttoncn>
    </div>
  );
};

export default PriceCard;
