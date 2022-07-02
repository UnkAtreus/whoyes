import { Button, Form, Input } from "antd";
import React from "react";

function Login() {
  return (
    <div className="max-w-screen-sm h-screen flex items-center justify-center p-6">
      <div className="rounded-2xl bg-gray-100 px-6 py-8 w-full">
        <div className="text-lg font-medium text-center text-gray-500 mb-4">
          Log in
        </div>
        <Form layout="vertical">
          <Form.Item label="Username" name="username">
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
            <div className="flex justify-end mt-1">Forgot password ?</div>
          </Form.Item>

          <Button block>LOGIN</Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
