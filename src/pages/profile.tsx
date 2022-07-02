import Router from "next/router";
import React from "react";
import BaseLayout from "../common/components/layout";
import { BasePageHeader } from "../common/components";
import { Button, DatePicker, Form, Input } from "antd";

function Profile() {
  return (
    <BaseLayout>
      <BasePageHeader
        title="Profile"
        handleBack={() => Router.back()}
        handleAction={() => {}}
      />

      <div className="w-full square">
        <div className="relative">
          <img
            className="object-cover w-full h-auto"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            alt="Profile image"
          />
        </div>
      </div>

      <div className="max-w-screen-sm h-screen p-6">
        <p className="m-0 font-medium text-base">Profile</p>
        <p className="m-0 font-medium text-sm text-gray-400 pb-4">
          Bisexual (Female)
        </p>
        <hr></hr>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">Body Size</p>
          <p className="m-0 font-normal text-sm">Bust/Waist/Hip: 34/24/36</p>
        </div>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">Score</p>
          <p className="m-0 font-normal text-sm">4.2/5</p>
        </div>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">About</p>
          <p className="m-0 font-normal text-sm">
            This is the description of me! This is the description of me! This
            is the description of me!
          </p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Profile;
