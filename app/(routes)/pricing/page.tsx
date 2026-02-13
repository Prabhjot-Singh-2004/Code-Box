import React from "react";
import { PricingTable } from "@clerk/nextjs";

function Pricing() {
  return (
    <>
      <div className="text-3xl mt-22 flex flex-col items-center justify-center w-full px-120">
        <div className="mb-10">
          <h2 className="font-game text-4xl text-center">Pricing</h2>
          <h2 className="font-game text-xl text-center">
            Join for Unlimited access to all features and courses
          </h2>
        </div>
        <PricingTable />
      </div>
    </>
  );
}

export default Pricing;
