"use client";
import { UserDetailContext } from "@/context/UserDetailContext";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React, { useContext } from "react";

function UserStatus() {
  const { user } = useUser();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <div className="p-6 border-4 rounded-2xl">
      <div className="flex gap-3 items-center">
        <Image
          src={"/alex_walk.gif"}
          alt="walking_user"
          width={70}
          height={70}
        />
        <h2 className="font-game text-2xl">
          {user?.primaryEmailAddress?.emailAddress}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-2">
        <div className="flex gap-3 items-center">
          <Image src={"/star.png"} alt="star" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">{userDetail?.points}</h2>
            <h2 className="font-game text-xl text-gray-500">Total Rewards</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={"/badge.png"} alt="badge" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">3</h2>
            <h2 className="font-game text-xl text-gray-500">Badge</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Image src={"/fire.png"} alt="fire" width={35} height={35} />
          <div>
            <h2 className="text-3xl font-game">7</h2>
            <h2 className="font-game text-xl text-gray-500">Daily Streak</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
