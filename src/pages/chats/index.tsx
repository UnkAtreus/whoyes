import { Avatar, Tooltip, Comment, Input, Form, Button } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { TbLollipop } from "react-icons/tb";
import { BaseLayout, BasePageHeader } from "../../common/components";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Chats() {
  const Router = useRouter();
  return (
    <BaseLayout>
      <div className="h-full min-h-[calc(100vh-56px)] flex flex-col ">
        <BasePageHeader
          title="Username post"
          handleBack={() => Router.back}
          handleAction={() => {}}
          action={<BiDotsVerticalRounded className="h-6 w-6" />}
        />
        <div className="px-6 py-4 flex-1">
          <div className="border-b-2 py-4 space-y-4">
            <div className="flex space-x-2">
              <div className="p-1">
                <img
                  className="object-cover w-8 h-8 rounded-full "
                  src="https://xsgames.co/randomusers/avatar.php?g=female"
                  alt=""
                />
              </div>
              <div className="flex-1">
                <p className="m-0 font-medium text-sm">Username</p>
                <p className="m-0 text-zinc-400 text-xs">1.2 km far from you</p>
              </div>
              <span className="flex items-start text-zinc-400 text-xs">
                48 min
              </span>
            </div>
            <div className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
              consectetur, nisi eu consectetur consectetur, nisl nisi
              consectetur, nisi eu consectetur consectetur, nisl nisi
              consectetur, nisi eu consectetur consectetur, nisl nisi
            </div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <TbLollipop className="text-zinc-500" />
                <span>1</span>
              </div>
            </div>
          </div>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={<span>{dayjs().fromNow()}</span>}
          />
        </div>
        <div className="sticky w-full max-w-screen-sm m-auto bottom-0 left-0 pl-6 py-2 border-t-2">
          <Form layout="inline" className="justify-between">
            <Form.Item className="flex-1">
              <Input bordered={false} placeholder="Write a comment..." />
            </Form.Item>
            <Form.Item>
              <Button type="text" htmlType="submit" className="text-gray-500">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Chats;
