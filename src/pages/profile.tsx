import Router from "next/router";
import React, { useEffect, useState } from "react";
import BaseLayout from "../common/components/layout";
import { BasePageHeader } from "../common/components";
import { userInfo } from "os";

function Profile() {
 
  const [user, setData] = useState<any>([]);

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("user") ?? "");
    console.log(data);
    setData(data);
  },[])

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
        <p className="m-0 font-medium text-base">Profile</p>
        <p className="m-0 font-medium text-sm text-gray-400 pb-4">
          {user.sexualOrientation + " (" + user.gender + ")"} 
        </p>
        <hr></hr>
        <div className="pt-4">
          <p className="m-0 font-medium text-sm">Body Size</p>
          <p className="m-0 font-normal text-sm">Bust/Waist/Hip: {user.bust??'-' + '/' + user.waist??'-' + '/' + user.hip??'='}</p>
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
