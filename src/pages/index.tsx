import { Input } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BaseLayout from "../common/components/layout";
import styles from "../styles/Home.module.css";
import { BsFillChatSquareTextFill, BsHeartFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const Router = useRouter();

  return (
    <BaseLayout>
      <div className="sticky top-0 left-0 w-full bg-white px-4 py-4 space-y-2 shadow-md max-w-screen-sm m-auto">
        <h1 className="text-base font-semibold text-center mb-0">WHOYES</h1>
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
          <div className="bg-gray-800 rounded-lg text-white px-2 py-1 cursor-pointer hover:bg-opacity-90 active:scale-95 transition-all duration-200">
            Post
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className="rounded-lg p-4 bg-zinc-100 space-y-2" key={index}>
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
                  <p className="m-0 text-zinc-400 text-xs">
                    1.2 km far from you
                  </p>
                </div>
                <span className="flex items-start text-zinc-400 text-xs">
                  48 min
                </span>
              </div>
              <div className="line-clamp-3 text-ellipsis overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                consectetur, nisi eu consectetur consectetur, nisl nisi
                consectetur, nisi eu consectetur consectetur, nisl nisi
                consectetur, nisi eu consectetur consectetur, nisl nisi
              </div>
              <div className="flex space-x-4">
                <div className="flex space-x-2 items-center">
                  <BsHeartFill className="text-zinc-500" />
                  <span>1</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <BsFillChatSquareTextFill className="text-zinc-500" />
                  <span>1</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
