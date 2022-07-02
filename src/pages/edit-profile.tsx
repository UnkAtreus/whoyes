import Router from "next/router";
import React from "react";
import BaseLayout from "../common/components/layout";
import { BasePageHeader } from "../common/components";
import { Button, DatePicker, Form, Input, message } from "antd";
import { CameraTwoTone } from "@ant-design/icons";
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';

function editProfile() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    // TODO: API HERE
  };

  const onImageUpload = (values: any) => {
    console.log("img upload", values);
    // TODO: API HERE
  };
  
  const disabledDate: RangePickerProps['disabledDate'] = current => {
    // Can not select days before today and today
    return current && current > moment().endOf('day');
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
                message: "Please input your firstname",
              },
              {
                whitespace: true,
                message: "Please input your firstname",
              },
              {
                min: 1, max: 50
              },
            ]}
          >
            <Input placeholder="Firstname" />
          </Form.Item>
          <Form.Item 
            label="Lastname" 
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input your lastname",
              },
              {
                whitespace: true,
                message: "Please input your lastname",
              },
              {
                min: 1, max: 50
              }
            ]}
          >
            <Input placeholder="Lastname" />
          </Form.Item>
          <Form.Item 
            label="Date Of Birth" 
            name="birthdate" 
            className="flex"
            rules={[
              {
                required: true,
                message: "Please input your birthday",
              }
            ]}
          >
            <DatePicker  disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item 
            label="ID Card" 
            name="cardId"
            rules={[
              {
                required: true,
                message: "Please input ID Card",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Please input only number"
              },
              {
                min: 13, max: 13,
                message: "Length of ID Card must be 13"
              },
            ]}
          >
            <Input placeholder="ID Card" />
          </Form.Item>
          <Form.Item 
            label="Tel." 
            name="tel"
            rules={[
              {
                required: true,
                message: "Please input your tel.",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Please input only number"
              },
              {
                max: 10,
                message: "Length of tel. must be 10"
              },
            ]}
          >
            <Input placeholder="Tel." />
          </Form.Item>
          <Form.Item 
            label="Height" 
            name="height"
            rules={[
              {
                required: true,
                message: "Please input your height",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Height" />
          </Form.Item>
          <Form.Item 
            label="Weight" 
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input your weight",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Weight" />
          </Form.Item>
          <Form.Item
            label="Bust"
            name="bust"
            rules={[
              {
                required: true,
                message: "Please input your bust size",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Bust" />
          </Form.Item>
          <Form.Item 
            label="Waist" 
            name="waist"
            rules={[
              {
                required: true,
                message: "Please input your waist size",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Waist" />
          </Form.Item>
          <Form.Item 
            label="Hips" 
            name="hips"
            rules={[
              {
                required: true,
                message: "Please input your hip size",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Hips" />
          </Form.Item>
          <Form.Item
            label="Penis Length"
            name="penisLength"
            rules={[
              {
                required: true,
                message: "Please input your penis length",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Penis Length" />
          </Form.Item>
          <Form.Item 
            label="Penis Circumference" 
            name="penisGirth"
            rules={[
              {
                required: true,
                message: "Please input your Penis Circumference",
              },
              {
                pattern: new RegExp(/\d+/),
                message: "Please input only number"
              }
            ]}
          >
            <Input placeholder="Penis Circumference" />
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