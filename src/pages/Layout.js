import { Outlet, Link } from "react-router-dom";
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleArrows, faHome, faTasks } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
import {useTelegram} from "../hooks/useTelegram";

const tabs = [{
    route: "/",
    icon: faHome,
    label: "Home"
  },{
    route: "/blogs",
    icon: faPeopleArrows,
    label: "Blogs"
  },{
    route: "/tasks",
    icon: faTasks,
    label: "Tasks"
  }]

const {user, data, tg} = useTelegram();
const Layout = () => {
  return (
    <>
    <span className={'username'}>{user?.username} {user?.language_code} {user?.first_name} {tg.initDataUnsafe}</span>
    <div className="col-lg-4">
    <nav className="navbsar navbar-light navbar-expand rounded-pill mb-3 ms-3 me-3 fixed-bottom d-md-none d-lg-none d-xl-none shadow" role="navigation">
      <Nav className="w-100">
        <div className="nav nav-justified w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link">
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon}/>
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))
          }
        </div>
      </Nav>
    </nav>
    <Outlet />
    </div>
    </>
  )
};

export default Layout;