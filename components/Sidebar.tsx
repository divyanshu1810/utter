import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import SidebarLink from "./SidebarLink";
import { signOut, useSession } from "next-auth/react";

const Sidebar = () => {
  const { data: session }: any = useSession();
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full border-r border-gray-400 pr-0 xl:pr-8 ">
      <div className="flex items-center justify-center w-14 h-14 hoverEffect p-0 xl:ml-24">
        <BsTwitter className="text-white text-[340px]" />
      </div>
      <div className="space-y-2 mb-2.5 mt-4 xl:ml-24">
        <SidebarLink text="Home" Icon={AiFillHome} />
        <SidebarLink text="Explore" Icon={BiHash} />
        <SidebarLink text="Notifications" Icon={BsBell} />
        <SidebarLink text="Messages" Icon={AiOutlineInbox} />
        <SidebarLink text="Bookmarks" Icon={BsBookmark} />
        <SidebarLink text="Lists" Icon={HiOutlineClipboardList} />
        <SidebarLink text="Profile" Icon={AiOutlineUser} />
        <SidebarLink text="More" Icon={CiCircleMore} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-52 h-[52px] text-lg font-bold hover:bg-[#1a8cd8]">
        Tweet
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect xl:ml-auto xl:-mr-5 px-4 py-2"
        onClick={() => signOut()}
      >
        <picture>
          <img
            src={session?.user.image}
            alt=""
            className="h-10 w-10 rounded-full xl:mr-2.5"
          />
        </picture>
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session?.user?.name}</h4>
          <h4 className="text-[#6e767d]">@{session?.user?.tag}</h4>
        </div>
        <BsThreeDots className="h-5 xl:inline hidden ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
