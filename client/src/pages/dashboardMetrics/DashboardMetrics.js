import React, { Component } from "react";
import ProfileIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CreateIcon from '@material-ui/icons/Create';
import Dashboard from "../../components/Dashboard/Dashboard"
import Sidebar from "../../components/Sidebar/Sidebar";

function onClick(e, item) {
}

const items = [
  { name: "Perfil", label: "Perfil", Icon: ProfileIcon },
  {
    name: "dashboard",
    label: "Dashboaard",
    Icon: DashboardIcon,
    items: [
      { name: "Metricas", label: "Metricas", onClick },
      { name: "Tipos", label: "Tipos de usuario", onClick }
    ]
  },
  "divider",
  {
    name: "crear",
    label: "crear",
    Icon: CreateIcon,
    items: [
      { name: "Lista", label: "Lista de productos" },
      "divider",
      // {
      //   name: "notifications",
      //   label: "Notifications",
      //   Icon: NotificationsIcon,
      //   items: [
      //     { name: "email", label: "Email", onClick },
      //     {
      //       name: "desktop",
      //       label: "Desktop",
      //       Icon: DesktopWindowsIcon,
      //       items: [
      //         { name: "schedule", label: "Schedule" },
      //         { name: "frequency", label: "Frequency" }
      //       ]
      //     },
      //     { name: "sms", label: "SMS" }
      //   ]
      // }
    ]
  }
];



class DashboardMetrics extends Component {
  render() {
    return (
      <div  id="mainContainer" style={{display:'flex', alignItems:'top'}}>
        <div id="sidebar">
          <Sidebar items={items} />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
    );
  }
}


export default DashboardMetrics;