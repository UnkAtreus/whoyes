import Router from "next/router";
import React, { useEffect, useState } from "react";
import BaseLayout from "../../common/components/layout";
import { BasePageHeader } from "../../common/components";
import { Button, DatePicker, Form, Input } from "antd";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import Wait from "../../asset/cupid_wait.png";
import Match from "../../asset/cupid_meet.png";
import Bye from "../../asset/cupid_love.png";

function Matching() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((step + 1)%3);
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
                Already Met!
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Matching;
