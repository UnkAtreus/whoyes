import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import React from "react";
import AuthService from "../common/service/auth";
import Logo from "../asset/logo.png";

function Login() {
  const Router = useRouter();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    // TODO: API HERE

    AuthService.login(values)
      .then((data) => {
        console.log(data.access_token);
        localStorage.setItem("token", data.access_token);
        Router.push("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="max-w-screen-sm h-screen flex items-center justify-center p-6 m-auto">
      <div className="rounded-2xl bg-gray-100 px-6 py-8 w-full">
        <div className="text-lg font-medium text-center text-gray-500 mb-4">
          Log in
        </div>
        <Form onFinish={onFinish} layout="vertical">
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
            {/* <div className="flex justify-end mt-1">Forgot password ?</div> */}
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
