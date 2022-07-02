import Router from "next/router";
import React from "react";
import BaseLayout from "../common/components/layout";
import { BasePageHeader } from "../common/components";
import { Button, DatePicker, Form, Input } from "antd";
import { CameraTwoTone } from "@ant-design/icons";

function editProfile() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    // TODO: API HERE
  };

  const onImageUpload = (values: any) => {
    console.log("img upload", values);
    // TODO: API HERE
  };

  return (
    <BaseLayout>
      <BasePageHeader
        title="Edit Profile"
        handleBack={() => Router.back()}
        handleAction={() => {}}
      />

      <div className=" flex justify-center ">
        <div className="relative">
          <img
            className="object-cover w-20 h-20 rounded-full "
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
          />
          <div className="absolute bottom-0 right-0 bg-gray-200 p-3 w-2 h-2 rounded-full flex items-center justify-center" onClick={onImageUpload}>
            <CameraTwoTone />
          </div>
        </div>
      </div>

      <div className="max-w-screen-sm h-screen p-6">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "hello",
              },

              {
                whitespace: true,
                message: "Kuy I here",
              },
              {
                min: 1,
                max: 10,
              },
            ]}
          >
            <Input placeholder="Firstname" />
          </Form.Item>
          <Form.Item label="Lastname" name="lastname">
            <Input placeholder="Lastname" />
          </Form.Item>
          <Form.Item label="Date Of Birth" name="birthdate" className="flex">
            <DatePicker />
          </Form.Item>
          <Form.Item label="ID Card" name="cardId">
            <Input placeholder="ID Card" />
          </Form.Item>
          <Form.Item label="Tel." name="tel">
            <Input placeholder="Tel." />
          </Form.Item>
          <Form.Item label="Height" name="height">
            <Input placeholder="Height" />
          </Form.Item>
          <Form.Item label="Weight" name="weight">
            <Input placeholder="Weight" />
          </Form.Item>
          <Form.Item label="Bust" name="bust">
            <Input placeholder="Bust" />
          </Form.Item>
          <Form.Item label="Waist" name="waist">
            <Input placeholder="Waist" />
          </Form.Item>
          <Form.Item label="Hips" name="hips">
            <Input placeholder="Hips" />
          </Form.Item>
          <Button htmlType="submit" className="mt-4" block>
            SIGNUP
          </Button>
        </Form>
      </div>
    </BaseLayout>
  );
}

export default editProfile;
