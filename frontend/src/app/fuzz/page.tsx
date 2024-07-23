import { InfiniteMovingCardsDemo } from "@/components/MovingCards";
import RandComp from "@/components/RandComp";
import RandomComponent from "@/components/RandomComponent";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <RandomComponent />
      <div>
        <RandComp />
      </div>
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default page;
