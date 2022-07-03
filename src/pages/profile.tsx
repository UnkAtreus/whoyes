import Router from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import BaseLayout from "../common/components/layout";
import { BasePageHeader } from "../common/components";
import { Button, DatePicker, Form, Input } from "antd";
import AuthService from "../common/service/auth";

function Profile() {
  const [user, setUsers] = useState<any>({});

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("user") ?? "");
    setUsers(res);
  }, []);

  console.log(user);
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

      <div className="max-w-screen-sm p-6">
        <div className="flex justify-between">
          <p className="m-0 font-medium text-base">Profile</p>
          <p
            className="m-0 font-normal text-sm text-gray-400"
            onClick={() => {
              Router.push("/edit-profile");
            }}
          >
            Edit
          </p>
        </div>
        <p className="m-0 font-medium text-sm text-gray-400 pb-4">
          {user.sexualOrientation + " (" + user.gender + ")"} 
        </p>
        <hr></hr>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">Body Size</p>
          <p className="m-0 font-normal text-sm">
          Penis Circumference/Penis Length: {user.penisGirth}/{user.penisLength}
          </p>
        </div>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">Score</p>
          <p className="m-0 font-normal text-sm">4.2/5</p>
        </div>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">About</p>
          <p className="m-0 font-normal text-sm">{user.description}</p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Profile;
