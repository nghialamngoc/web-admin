import Logo1 from "../../assets/img/logo-modern.png";
import Logo2 from "../../assets/img/logo-default.png";
import Header from "../Header";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import store from "../../store/index"

export default function NavBar({ children }: any) {
  const state = store.getState();
  const permissions = state.auth.auth.permissions;
  const menus = state.auth.auth.menus
 
  

  return (
    <>
      <header className="header header-nav-menu header-nav-links">
        <div className="logo-container">
          <a href="../" className="logo">
            <img
              src={Logo1}
              className="logo-image"
              width="90"
              height="24"
              alt="Porto Admin"
            />
            <img
              src={Logo2}
              className="logo-image-mobile"
              width="90"
              height="41"
              alt="Porto Admin"
            />
          </a>
          <button
            className="btn header-btn-collapse-nav d-lg-none"
            data-bs-toggle="collapse"
            data-bs-target=".header-nav"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <Header></Header>
      </header>
      <div className="inner-wrapper">
        <aside id="sidebar-left" className="sidebar-left">
          <div className="sidebar-header">
            <div
              className="sidebar-toggle d-none d-md-flex"
              data-toggle-class="sidebar-left-collapsed"
              data-target="html"
              data-fire-event="sidebar-left-toggle"
            >
              <i className="fas fa-bars" aria-label="Toggle sidebar"></i>
            </div>
          </div>

          <div className="nano">
            <div className="nano-content">
              <nav id="menu" className="nav-main" role="navigation">

                
                <ul className="nav nav-main">

                  
                  

                  {menus.map((item:any,index:any) => {
                    return (
                      <li>
                      <Link key={index} to={item.href} className="nav-link">
                        <i className={item.icon} aria-hidden="true"></i>
                        <span>{item.name}</span>
                      </Link>
                    </li>

                    )
                  })
                }
                 
                  {/* <li className="nav-group-label">APPs</li> */}
               
                
                </ul>
              </nav>
            </div>
          </div>
        </aside>
      
          <Outlet></Outlet>
       
      </div>
    </>
  );
}
