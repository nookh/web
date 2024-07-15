import { Outlet, Link } from "react-router-dom";
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Style.css';
const tabs = [{
    route: "/home",
    icon: faHome,
    label: "Home"
  },{
    route: "/blogs",
    icon: faSearch,
    label: "Blogs"
  },{
    route: "/login",
    icon: faUserCircle,
    label: "Login"
  }]
const Layout = () => {
  return (
    <div className="app">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Telegram Web App</h1>
      </header>
      <main className="p-4">
        <h1>Home</h1>
      </main>
      <nav className="fixed bottom-0 w-full bg-gray-200 p-4">
      <Nav className="w-100">
        <div className="nav nav-justified w-100">
          {
            tabs.map((tab, index) =>(
              <NavItem key={`tab-${index}`}>
                <NavLink to={tab.route} className="nav-link bottom-nav-link" activeClassName="active">
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
      <Outlet />
      </nav>
    </div>
  )
};

export default Layout;