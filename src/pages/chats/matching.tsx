import Router from "next/router";
import React, { useEffect, useState } from "react";
import BaseLayout from "../../common/components/layout";
import { BasePageHeader } from "../../common/components";

import Wait from "../../asset/cupid_wait.png";
import Match from "../../asset/cupid_meet.png";
import Bye from "../../asset/cupid_love.png";

function Matching() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    if (step == 2) {
      Router.push("/chats/review");
    }
    setStep(step + 1);
  };
  const cupid = [Wait.src, Match.src, Bye.src];
  const topic = [
    "You are matching now!",
    "Is it love at first sex?",
    "See you again!",
  ];
  const desc = [
    "waiting to meet you partner!",
    "Have a good experience!",
    "Maybe tomorrow?",
  ];
  const buttonDesc = [
    "Already Met!",
    "End of our meeting",
    "Review my partner,"
  ]

  return (
    <BaseLayout>
      <div className="h-full min-h-[calc(100vh-56px)] flex flex-col ">
        <BasePageHeader
          title="Matching status"
          handleBack={() => Router.back()}
          handleAction={() => {}}
        />
        <div className="px-6 pt-28 flex-1 justify-center items-center w-full h-full">
          <div className="flex justify-center items-center text-center">
            <div>
              <img src={cupid[step]} className="h-72" />
              <p className="mt-8 text-xl font-bold">{topic[step]}</p>
              <p className="-mt-4 text-base">{desc[step]}</p>
              <button
                className="mt-6 w-full bg-redbutton rounded-lg py-2 text-white"
                onClick={nextStep}
              >
                {buttonDesc[step]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Matching;
