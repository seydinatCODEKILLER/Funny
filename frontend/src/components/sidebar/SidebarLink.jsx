/* eslint-disable react/prop-types */
import { Sidebar } from "flowbite-react";
import { useLocation } from "react-router-dom";

const SidebarLink = ({ icon: Icon, href, children }) => {
  const location = useLocation();
  const isActive = location.pathname === href;
  return (
    <Sidebar.Item href={href} icon={Icon} active={isActive}>
      {children}
    </Sidebar.Item>
  );
};

export default SidebarLink;
