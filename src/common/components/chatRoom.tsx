import { Avatar, Tooltip, Comment, Input, Form, Button } from "antd";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { TbLollipop } from "react-icons/tb";
import { BaseLayout, BasePageHeader } from "../../common/components";
import relativeTime from "dayjs/plugin/relativeTime";
import PostService from "../service/posts";
import CommentService from "../service/comment";

dayjs.extend(relativeTime);

interface IChatRoom {
  username: string;
}

const ChatRoom: React.FC<IChatRoom> = ({ username }) => {
  const [post, setPostData] = useState<any>({});
  const [user, SetUserData] = useState<any>({});
  const [comment, setCommentData] = useState<any>([]);
  const Router = useRouter();

  const featchData = async () => {
    const res = await PostService.id("1");
    setPostData(res);
    SetUserData(res.user);

    await CommentService.list(res.id).then((data) => {
      setCommentData(data);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/login");
    }
    featchData();
  }, []);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    // TODO: API HERE
    CommentService.send(values, post.id)
      .then(async (data) => {
        console.log(data);
        await CommentService.list(post.id).then((data) => {
          setCommentData(data);
          // commentArray = data;
          // console.log(commentArray);
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <BaseLayout>
      <div className="h-full min-h-[calc(100vh-56px)] flex flex-col ">
        <BasePageHeader
          title={user.username + "'s post"}
          handleBack={() => Router.back()}
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
                <p className="m-0 font-medium text-sm">{user.username}</p>
                <p className="m-0 text-zinc-400 text-xs">1.2 km far from you</p>
              </div>
              <span className="flex items-start text-zinc-400 text-xs">
                48 min
              </span>
            </div>
            <div className="">{post.description}</div>
            <div className="flex space-x-4">
              <div className="flex space-x-2 items-center">
                <TbLollipop className="text-zinc-500" />
                <span>1</span>
              </div>
            </div>
          </div>
          {comment.map((cmt: any) => {
            return (
              <Comment
                key={cmt.id}
                author={<a>{cmt.user.username}</a>}
                avatar={
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    alt={cmt.user.username}
                  />
                }
                content={<p>{cmt.comment}</p>}
                datetime={<span>{dayjs().fromNow()}</span>}
              />
            );
          })}
        </div>
        <div className="sticky w-full max-w-screen-sm m-auto bottom-0 left-0 pl-6 py-2 border-t-2">
          <Form layout="inline" onFinish={onFinish} className="justify-between">
            <Form.Item className="flex-1" name="comment">
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
};

export default ChatRoom;
