import Router from "next/router";
import React, { useEffect, useState } from "react";
import BaseLayout from "../../common/components/layout";
import { BasePageHeader } from "../../common/components";

import Wait from "../../asset/cupid_wait.png";
import Match from "../../asset/cupid_meet.png";
import Bye from "../../asset/cupid_love.png";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Form, Input, Rate } from "antd";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
function Review() {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep((step + 1) % 3);
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
          title="Review"
          handleBack={() => Router.back()}
          handleAction={() => {}}
        />
        <div className="px-6 pt-4 flex-1 justify-center items-center w-full h-full">
          <div className="flex justify-center items-center text-center">
            <div>
              <div className="relative">
                <div className="flex justify-center">
                  <img
                    className="object-cover w-28 h-28 rounded-full "
                    src="https://xsgames.co/randomusers/avatar.php?g=female"
                    alt=""
                  />
                </div>
                <p className="text-lg text-darkblue font-semibold">
                  Username, 32
                </p>
                <Form>
                  <Rate
                    character={<HeartFilled style={{ fontSize: '150%'}} />}
                    allowHalf
                    className="mb-4"
                  />
                  <Form.Item name="description">
                    <Input.TextArea
                      showCount
                      maxLength={150}
                      rows={4}
                      placeholder="Write comment about your partner..."
                    />
                  </Form.Item>
                </Form>
              </div>
              <button
                className="mt-6 w-full bg-darkblue rounded-lg py-2 text-white"
                onClick={nextStep}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Review;
