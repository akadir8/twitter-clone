import React from "react";
import {
  ExploreIcon,
  HomeIcon,
  LifeIcon,
  MessageIcon,
  ListIcon,
  TikIcon,
  ProfileIcon,
  MoreIcon,
} from "./icon/icon";

function SideBar() {
  return (
    <div className="w-72 bg-blue-200">
      <h1>Sidebar</h1>
      <HomeIcon />
      <ExploreIcon />
      <LifeIcon />
      <MessageIcon />
      <ListIcon />
      <TikIcon />
      <ProfileIcon />
      <MoreIcon />
    </div>
  );
}

export default SideBar;
