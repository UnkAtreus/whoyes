import { Input, Modal, Popover } from "antd";
import type { NextPage } from "next";

import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import {
  BaseLayout,
  ProfileCard,
  LikeModalContent,
} from "../common/components";
import PostService from "../common/service/posts";
import Logo from "../asset/logo.png";

const Home: NextPage = () => {
  const [data, setData] = useState<any>();
  const Router = useRouter();

  // const featchData = async () => {
  //   const query = 1;

  //   const res = await PostService.id(query.toString());
  //   setData(res);
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Router.push("/login");
    }
    // featchData();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <BaseLayout>
      <div className="sticky top-0 left-0 w-full bg-white px-4 py-4 space-y-2 shadow-md max-w-screen-sm m-auto flex justify-center">
        <img src={Logo.src} className="h-6" />
      </div>

      <div className="py-4 px-6 w-full flex flex-col space-y-6">
        <div
          onClick={() => Router.push("/create-post")}
          className="flex rounded-lg px-4 py-2 space-x-2 bg-white shadow-md cursor-pointer active:scale-95 transition-all duration-200"
        >
          <img
            className="object-cover w-8 h-8 rounded-full "
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt=""
          />
          <div className="flex-1 items-center flex text-gray-400">
            Write something...
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <ProfileCard
                index={index}
                username="Username"
                showModal="EiEi"//{showModal}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <Modal
        title={<h1 className="text-center">Who omyim you</h1>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="p-2"
      >
        <LikeModalContent />
        <LikeModalContent />
        <LikeModalContent />
        <LikeModalContent />
        <LikeModalContent />
      </Modal>
    </BaseLayout>
  );
};

export default Home;
