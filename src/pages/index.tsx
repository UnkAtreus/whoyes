import { Input } from "antd";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BaseLayout from "../common/components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <div>
        <Input width="100%"></Input>
      </div>
    </BaseLayout>
  );
};

export default Home;
