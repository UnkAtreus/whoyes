import Router from "next/router";
import React, { useEffect, useState } from "react";
import BaseLayout from "../../common/components/layout";
import { BasePageHeader } from "../../common/components";
import { Button, DatePicker, Form, Input } from "antd";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const menu = (
  <Menu
    items={[
      {
        label: <a href="https://www.antgroup.com">1st menu item</a>,
        key: "0",
      },
      {
        label: <a href="https://www.aliyun.com">2nd menu item</a>,
        key: "1",
      },
      {
        type: "divider",
      },
      {
        label: "3rd menu item",
        key: "3",
      },
    ]}
  />
);

function Alert() {
  const [text, setText] = useState("");
  var chatList = [
    "ผู้ใช้งานคนดังนี้ไม่ได้กดปุ่มหลังพบคู่นอนเป็นเวลา 24 ชม.",
    "หากติดต่อไม่ได้ สามารถติดต่อทีมงานเพื่อขอข้อมูลเพิ่มเติม",
    "กรี๊ดดดด ได้ค่ะ ขอบคุณค่ะ"
  ];

  const addChatList = () => {
    chatList.push(text);
    setText("");
  };

  return (
    <BaseLayout>
      <div className="h-full min-h-[calc(100vh-56px)] flex flex-col ">
        <BasePageHeader
          title="Chat"
          handleBack={() => Router.back()}
          handleAction={() => {}}
        />
        <div className="px-6 py-4 flex-1">
          {chatList.map((chat, idx) => (
            <div
              className={
                "flex mb-2 " + (idx >= 2 ? "justify-start" : "justify-end")
              }
            >
              <div
                className={
                  "px-4 py-2 rounded-xl flex items-center text-sm " +
                  (idx >= 2
                    ? "bg-gray-200 rounded-tl-none"
                    : "bg-redbutton ml-8 rounded-br-none text-white")
                }
              >
                {chat}
              </div>
            </div>
          ))}
        </div>
        <div className="sticky w-full max-w-screen-sm m-auto bottom-0 left-0 pl-6 py-2 border-t-2">
          <Form layout="inline" className="justify-between">
            <div
              className="flex items-center mr-4 font-bold"
              onClick={() => {
                Router.push("/chats/matching");
              }}
            >
              Match
            </div>
            <Form.Item className="flex-1">
              <input
                placeholder="Write some sentence..."
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <button className="text-gray-500" onClick={addChatList}>
                Send
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Alert;
