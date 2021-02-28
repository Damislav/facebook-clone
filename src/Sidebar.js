import React from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined, VideoLibrary } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow
        alt="sonny sanga"
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid 19 Information center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
