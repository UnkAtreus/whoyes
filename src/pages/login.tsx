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
        console.log(data);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user", JSON.stringify(data.user));
        Router.push("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="max-w-screen-sm h-screen flex items-center justify-center p-6 m-auto">
      <div>
        <div className="flex justify-center mb-3">
          <img src={Logo.src} className="w-48" />
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
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            LOGIN
          </Button>
          <div
            onClick={() => Router.push("/signup")}
            className="flex justify-center mt-3 text-primary cursor-pointer"
          >
            Don't have an account? Sign up now
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
