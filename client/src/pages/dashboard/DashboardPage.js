import React, { Component } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Profile from "../../components/Profile/ProfilePage";
import Sells from "../../components/Sells/SellsPage";
import Sidebar from "../../components/Sidebar/Sidebar";
import items from "../../components/Sidebar/Sidebar.Router"
import Navbar from "../../components/Navbar/Navbar";
import MenuIcon from '@material-ui/icons/Menu';
import InventoryPage from "../../components/InventoryPage/InventoryPage";
class DashboardMetrics extends Component {
  state = {
    on: true
  }
  toggle = (e) => {
    e.preventDefault();
    this.setState({ on: !this.state.on });
  }

  render() {
    return (
      <div id="mainContainer" style={{ display: 'flex', alignItems: 'top' }}>
        <div id="sidebar">
          {this.state.on && <Sidebar items={items} />}
        </div>
        <div>
          <Navbar {...this.props}/>
          <div>
            <div onClick={this.toggle} className="btn" id="menu-toggle"><MenuIcon /></div>
          </div>
          <div>
            {/* static navbar - top */}
            {(this.props.match.url === "/profile" ? <Profile />
              : this.props.match.url === "/metricas" ? <Dashboard />
                : this.props.match.url === "/ventas" ? <Sells /> : <InventoryPage />)}
          </div>
        </div>
      </div>
    );
  }
}


export default DashboardMetrics;