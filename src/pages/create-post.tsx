import { Form, Input, Button, Tag, Select } from "antd";
import { TextAreaRef } from "antd/lib/input/TextArea";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BaseLayout, BasePageHeader } from "../common/components";
import PostService from "../common/service/posts";

const ToggleItem = ({ discription, id }: any) => {
  const [toggleThisElement, setToggleThisElement] = useState(false);
  return (
    <div className="mr-1 mb-1">
      {toggleThisElement ? (
        <Button
          className="bg-orange border border-orange text-white font-bold py-1 px-2 rounded-full"
          key={id}
          onClick={() => setToggleThisElement((prev) => !prev)}
        >
          {discription}
        </Button>
      ) : (
        <Button
          className="bg-white border border-gray-400 text-gray-400 font-bold py-1 px-2 rounded-full"
          key={id}
          onClick={() => setToggleThisElement((prev) => !prev)}
        >
          {discription}
        </Button>
      )}
    </div>
  );
};

function CreatePost() {
  const [isPost, setIsPost] = useState(false);
  const Router = useRouter();

  const sexType: string[] = [
    "Skinship",
    "Manual sex",
    "Oral sex",
    "Anal sex",
    "Vagina sex",
    "Toy sex",
    "BDSM",
    "First time",
    "Role-play",
    "Outdoor",
  ];

  const onFinish = (values: any) => {
    console.log("Success:", values);
    const payload = {
      ...values,
      sexType: values.sexType[0],
    };
    // TODO: API HERE
    PostService.create(payload)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <BaseLayout>
      <Form onFinish={onFinish}>
        <BasePageHeader
          title="Create Post"
          handleBack={() => Router.back()}
          handleAction={() => {}}
          action={
            <button
              type={`${isPost ? "submit" : "button"}`}
              className={`${isPost ? "text-primary" : "text-gray-500"}`}
            >
              Post
            </button>
          }
        />

        <div className="px-6 space-y-4 py-4">
          <div className="flex items-center space-x-2">
            <img
              className="object-cover w-8 h-8 rounded-full "
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              alt=""
            />
            <Form.Item name="title" className="m-0 flex-1">
              <Input placeholder="Write title here..." />
            </Form.Item>
          </div>
          <Form.Item name="sexType">
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Please select your sex type"
              options={sexType.map((item: any) => ({
                label: item,
                value: item,
              }))}
            />
          </Form.Item>
          <Form.Item name="description">
            <Input.TextArea
              showCount
              maxLength={150}
              rows={4}
              onChange={(e) => {
                if (e.target.textLength === 5) {
                  setIsPost(true);
                }
                if (e.target.textLength < 5) {
                  setIsPost(false);
                }
              }}
              placeholder="Write something..."
            />
          </Form.Item>
        </div>
      </Form>
    </BaseLayout>
  );
}

export default CreatePost;
