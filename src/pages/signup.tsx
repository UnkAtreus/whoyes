import { Button, Form, Input } from "antd";
import React from "react";
import Logo from "../asset/logo.png";

function Signup() {
  return (
    <div className="max-w-screen-sm h-screen flex items-center justify-center p-6">
      <div>
        <div className="flex justify-center mb-4">
          <img src={Logo.src} className="w-48" />
        </div>
        <div className="rounded-2xl bg-gray-100 px-6 py-8 w-full">
          <div className="text-lg font-medium text-center text-gray-500 mb-4">
            Sign up
          </div>
          <Form layout="vertical">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username",
                },
                {
                  whitespace: true,
                  message: "Please input your username",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
                {
                  whitespace: true,
                  message: "Please input your password",
                },
              ]}
            >
              <Input placeholder="Password" type="password" />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your tel.",
                },
                {
                  pattern: /^[0-9]+$/,
                  message: "Please input only number",
                },
                {
                  max: 10,
                  message: "Length of tel. must be 10",
                },
              ]}
            >
              <Input placeholder="Phone" type="tel" />
            </Form.Item>
            <Button className="mt-4" block>
              SIGNUP
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
