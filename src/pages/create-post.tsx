import { Form, Input } from "antd";
import { TextAreaRef } from "antd/lib/input/TextArea";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { BaseLayout, BasePageHeader } from "../common/components";

function CreatePost() {
  const [isPost, setIsPost] = useState(false);
  const Router = useRouter();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // TODO: API HERE
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
            <div>Username</div>
          </div>
          <Form.Item name="post">
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
