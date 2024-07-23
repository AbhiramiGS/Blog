import Image from "next/image";
import React from "react";

type Props = {};

const RandComp = (props: Props) => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-1/2 h-[600px] bg-slate-100 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center p-10">
            <p className="h-[1px] w-10 bg-black my-1"></p>
            <p className="text-black font-semibold">MODERN BLOGS</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center text-5xl text-[#9f9763] font-bold">
              We spend one-
              <br /> third of our life <br />
              creating stories :)
            </p>
          </div>
        </div>
        <div className="w-1/2 h-[600px] bg-red-100">
          <div className="relative h-full w-full">
            <div className="absolute top-0 left-0 w-full h-1/4 bg-[#432818]"></div>
            <div className="absolute top-0 left-0 h-full w-1/4 bg-[#432818]"></div>
            <div className="absolute top-0 left-0 h-1/4 w-1/4 bg-[#9c6644]"></div>
            <Image
              src="/ancientwriting.jpeg"
              height={500}
              width={500}
              alt="Writing"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandComp;
