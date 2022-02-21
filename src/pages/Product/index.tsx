import { FC } from "react";
import { IProductProps } from "../../interfaces/product";

const ProductPage: FC<IProductProps> = ({ title }) => {
  // return <>{title || "This is product component"}</>;
  return ( <section className="body">
  {/* start: header */}
  <header className="header header-nav-menu header-nav-links">
    <div className="logo-container">
      <a href="../" className="logo">
        <img src="img/logo-modern.png" className="logo-image" width={90} height={24} alt="Porto Admin" /><img src="img/logo-default.png" className="logo-image-mobile" width={90} height={41} alt="Porto Admin" />
      </a>
      <button className="btn header-btn-collapse-nav d-lg-none" data-bs-toggle="collapse" data-bs-target=".header-nav">
        <i className="fas fa-bars" />
      </button>
      {/* start: header nav menu */}
      <div className="header-nav collapse">
        <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 header-nav-main-square">
          <nav>
            <ul className="nav nav-pills" id="mainNav">
              <li className="">
                <a className="nav-link" href="layouts-default.html">
                  Dashboard
                </a>    
              </li>
              <li className="dropdown">
                <a className="nav-link dropdown-toggle" href="#">
                  Layouts
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="nav-link" href="index.html">
                      Landing Page
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-default.html">
                      Default
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-modern.html">
                      Modern
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link">
                      Boxed
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="layouts-boxed.html">
                          Static Header
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-boxed-fixed-header.html">
                          Fixed Header
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link">
                      Horizontal Menu Header
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="layouts-header-menu.html">
                          Pills
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-header-menu-stripe.html">
                          Stripe
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-header-menu-top-line.html">
                          Top Line
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-dark.html">
                      Dark
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-dark-header.html">
                      Dark Header
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-two-navigations.html">
                      Two Navigations
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link">
                      Tab Navigation
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="layouts-tab-navigation-dark.html">
                          Tab Navigation Dark
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-tab-navigation.html">
                          Tab Navigation Light
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-tab-navigation-boxed.html">
                          Tab Navigation Boxed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-light-sidebar.html">
                      Light Sidebar
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-left-sidebar-collapsed.html">
                      Left Sidebar Collapsed
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-left-sidebar-scroll.html">
                      Left Sidebar Scroll
                    </a>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link">
                      Left Sidebar Big Icons
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-big-icons.html">
                          Left Sidebar Big Icons Dark
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-big-icons-light.html">
                          Left Sidebar Big Icons Light
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link">
                      Left Sidebar Panel
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-panel.html">
                          Left Sidebar Panel Dark
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-panel-light.html">
                          Left Sidebar Panel Light
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link">
                      Left Sidebar Sizes
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="layouts-sidebar-sizes-xs.html">
                          Left Sidebar XS
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-sidebar-sizes-sm.html">
                          Left Sidebar SM
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-sidebar-sizes-md.html">
                          Left Sidebar MD
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-square-borders.html">
                      Square Borders
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="nav-link dropdown-toggle" href="#">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="nav-link" href="pages-signup.html">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-signin.html">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-recover-password.html">
                      Recover Password
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-lock-screen.html">
                      Locked Screen
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-user-profile.html">
                      User Profile
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-session-timeout.html">
                      Session Timeout
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-calendar.html">
                      Calendar
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-timeline.html">
                      Timeline
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-media-gallery.html">
                      Media Gallery
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-invoice.html">
                      Invoice
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-blank.html">
                      Blank Page
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-404.html">
                      404
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-500.html">
                      500
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-log-viewer.html">
                      Log Viewer
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-search-results.html">
                      Search Results
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown dropdown-mega">
                <a className="nav-link dropdown-toggle" href="#">UI Elements</a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-mega-content">
                      <div className="row">
                        <div className="col-lg-3">
                          <ul className="dropdown-mega-sub-nav">
                            <li>
                              <a className="nav-link" href="ui-elements-typography.html">
                                Typography
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="#">
                                Icons <span className="mega-sub-nav-toggle toggled float-end" data-toggle="collapse" data-target=".mega-sub-nav-sub-menu-1" />
                              </a>
                              <ul className="dropdown-mega-sub-nav mega-sub-nav-sub-menu-1 collapse in">
                                <li>
                                  <a className="nav-link" href="ui-elements-icons-elusive.html">
                                    Elusive
                                  </a>
                                </li>
                                <li>
                                  <a className="nav-link" href="ui-elements-icons-font-awesome.html">
                                    Font Awesome
                                  </a>
                                </li>
                                <li>
                                  <a className="nav-link" href="ui-elements-icons-line-icons.html">
                                    Line Icons
                                  </a>
                                </li>
                                <li>
                                  <a className="nav-link" href="ui-elements-icons-meteocons.html">
                                    Meteocons
                                  </a>
                                </li>
                                <li>
                                  <a className="nav-link" href="ui-elements-icons-box-icons.html">
                                    Box Icons
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-tabs.html">
                                Tabs
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-cards.html">
                                Cards
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul className="dropdown-mega-sub-nav">
                            <li>
                              <a className="nav-link" href="ui-elements-widgets.html">
                                Widgets
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-portlets.html">
                                Portlets
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-buttons.html">
                                Buttons
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-alerts.html">
                                Alerts
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-notifications.html">
                                Notifications
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-modals.html">
                                Modals
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-lightbox.html">
                                Lightbox
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-progressbars.html">
                                Progress Bars
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul className="dropdown-mega-sub-nav">
                            <li>
                              <a className="nav-link" href="ui-elements-sliders.html">
                                Sliders
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-carousels.html">
                                Carousels
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-accordions.html">
                                Accordions
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-toggles.html">
                                Toggles
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-nestable.html">
                                Nestable
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-tree-view.html">
                                Tree View
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-scrollable.html">
                                Scrollable
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-grid-system.html">
                                Grid System
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <ul className="dropdown-mega-sub-nav">
                            <li>
                              <a className="nav-link" href="ui-elements-charts.html">
                                Charts
                              </a>
                            </li>
                            <li>
                              <a className="nav-link" href="#">
                                Animations <span className="mega-sub-nav-toggle toggled float-end" data-toggle="collapse" data-target=".mega-sub-nav-sub-menu-2" />
                              </a>
                              <ul className="dropdown-mega-sub-nav mega-sub-nav-sub-menu-2 collapse">
                                <li>
                                  <a className="nav-link" href="ui-elements-animations-appear.html">
                                    Appear
                                  </a>
                                </li>
                                <li>
                                  <a className="nav-link" href="ui-elements-animations-hover.html">
                                    Hover
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="nav-link" href="#">
                                Loading <span className="mega-sub-nav-toggle toggled float-end" data-toggle="collapse" data-target=".mega-sub-nav-sub-menu-3" />
                              </a>
                              <ul className="dropdown-mega-sub-nav mega-sub-nav-sub-menu-3 collapse">
                                <li>
                                  <a className="nav-link" href="ui-elements-loading-overlay.html">
                                    Overlay
                                  </a>
                                </li>
                                <li>
                                  <a className="nav-link" href="ui-elements-loading-progress.html">
                                    Progress
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="nav-link" href="ui-elements-extra.html">
                                Extra
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="nav-link dropdown-toggle">More</a>
                <ul className="dropdown-menu">
                  <li className="dropdown-submenu">
                    <a className="nav-link" href="#">
                      Maps
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="maps-google-maps.html">
                          Basic
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="maps-google-maps-builder.html">
                          Map Builder
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="maps-vector.html">
                          Vector
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="extra-ajax-made-easy.html">
                      Ajax
                    </a>            
                  </li>
                  <li className="dropdown">
                    <a className="nav-link" href="#">
                      eCommerce
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="ecommerce-dashboard.html">
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-products-list.html">
                          Products List
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-products-form.html">
                          Products Form
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-category-list.html">
                          Categories List
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-category-form.html">
                          Category Form
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-coupons-list.html">
                          Coupons List
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-coupons-form.html">
                          Coupons Form
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-orders-list.html">
                          Orders List
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-orders-detail.html">
                          Orders Detail
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-customers-list.html">
                          Customers List
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ecommerce-customers-form.html">
                          Customers Form
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a className="nav-link" href="mailbox-folder.html">
                      Mailbox
                      <span className="float-end badge badge-primary">182</span>
                    </a>            
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link" href="#">
                      Forms
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="forms-basic.html">
                          Basic
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="forms-advanced.html">
                          Advanced
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="forms-validation.html">
                          Validation
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="forms-layouts.html">
                          Layouts
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="forms-wizard.html">
                          Wizard
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="forms-code-editor.html">
                          Code Editor
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link" href="#">
                      Tables
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link" href="tables-basic.html">
                          Basic
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="tables-advanced.html">
                          Advanced
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="tables-responsive.html">
                          Responsive
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="tables-editable.html">
                          Editable
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="tables-ajax.html">
                          Ajax
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="tables-pricing.html">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu">
                    <a className="nav-link" href="#">
                      Menu Levels
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="nav-link">
                          First Level
                        </a>
                      </li>
                      <li className="dropdown-submenu">
                        <a className="nav-link" href="#">
                          Second Level
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="nav-link">
                              Second Level Link #1
                            </a>
                          </li>
                          <li>
                            <a className="nav-link">
                              Second Level Link #2
                            </a>
                          </li>
                          <li className="dropdown-submenu">
                            <a className="nav-link" href="#">
                              Third Level
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="nav-link">
                                  Third Level Link #1
                                </a>
                              </li>
                              <li>
                                <a className="nav-link">
                                  Third Level Link #2
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="http://themeforest.net/item/porto-responsive-html5-template/4106987?ref=Okler">
                      Front-End <span className="tip tip-dark">hot</span><em className="not-included">(Not Included)</em>
                    </a>            
                  </li>
                  <li>
                    <a className="nav-link" href="https://www.okler.net/forums/topic/porto-admin-changelog/">
                      Changelog
                    </a>            
                  </li>
                </ul>
              </li></ul></nav>
        </div>
      </div>
      {/* end: header nav menu */}
    </div>
    {/* start: search & user box */}
    <div className="header-right">
      <a className="btn search-toggle d-none d-md-inline-block d-xl-none" data-toggle-class="active" data-target=".search"><i className="bx bx-search" /></a>
      <form action="pages-search-results.html" className="search search-style-1 nav-form d-none d-xl-inline-block">
        <div className="input-group">
          <input type="text" className="form-control" name="q" id="q" placeholder="Search..." />
          <button className="btn btn-default" type="submit"><i className="bx bx-search" /></button>
        </div>
      </form>
      <span className="separator" />
      <a className="dropdown-language nav-link" href="#" role="button" id="dropdownLanguage" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="img/blank.gif" className="flag flag-us" alt="English" /> EN
        <i className="fas fa-chevron-down" />
      </a>
      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLanguage">
        <a className="dropdown-item" href="#"><img src="img/blank.gif" className="flag flag-us" alt="English" /> English</a>
        <a className="dropdown-item" href="#"><img src="img/blank.gif" className="flag flag-es" alt="English" /> Español</a>
        <a className="dropdown-item" href="#"><img src="img/blank.gif" className="flag flag-fr" alt="English" /> Française</a>
      </div>
      <span className="separator" />
      <ul className="notifications">
        <li>
          <a href="#" className="dropdown-toggle notification-icon" data-bs-toggle="dropdown">
            <i className="bx bx-task" />
            <span className="badge">3</span>
          </a>
          <div className="dropdown-menu notification-menu large">
            <div className="notification-title">
              <span className="float-end badge badge-default">3</span>
              Tasks
            </div>
            <div className="content">
              <ul>
                <li>
                  <p className="clearfix mb-1">
                    <span className="message float-start">Generating Sales Report</span>
                    <span className="message float-end text-dark">60%</span>
                  </p>
                  <div className="progress progress-xs light">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                  </div>
                </li>
                <li>
                  <p className="clearfix mb-1">
                    <span className="message float-start">Importing Contacts</span>
                    <span className="message float-end text-dark">98%</span>
                  </p>
                  <div className="progress progress-xs light">
                    <div className="progress-bar" role="progressbar" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100} style={{width: '98%'}} />
                  </div>
                </li>
                <li>
                  <p className="clearfix mb-1">
                    <span className="message float-start">Uploading something big</span>
                    <span className="message float-end text-dark">33%</span>
                  </p>
                  <div className="progress progress-xs light mb-1">
                    <div className="progress-bar" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100} style={{width: '33%'}} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#" className="dropdown-toggle notification-icon" data-bs-toggle="dropdown">
            <i className="bx bx-envelope" />
            <span className="badge">4</span>
          </a>
          <div className="dropdown-menu notification-menu">
            <div className="notification-title">
              <span className="float-end badge badge-default">230</span>
              Messages
            </div>
            <div className="content">
              <ul>
                <li>
                  <a href="#" className="clearfix">
                    <span className="image image-as-text">JD</span>
                    <span className="title">Joseph Doe</span>
                    <span className="message">Lorem ipsum dolor sit.</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="clearfix">
                    <span className="image image-as-text bg-secondary">JJ</span>
                    <span className="title">Joseph Junior</span>
                    <span className="message truncate">Truncated message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam, nec venenatis risus. Vestibulum blandit faucibus est et malesuada. Sed interdum cursus dui nec venenatis. Pellentesque non nisi lobortis, rutrum eros ut, convallis nisi. Sed tellus turpis, dignissim sit amet tristique quis, pretium id est. Sed aliquam diam diam, sit amet faucibus tellus ultricies eu. Aliquam lacinia nibh a metus bibendum, eu commodo eros commodo. Sed commodo molestie elit, a molestie lacus porttitor id. Donec facilisis varius sapien, ac fringilla velit porttitor et. Nam tincidunt gravida dui, sed pharetra odio pharetra nec. Duis consectetur venenatis pharetra. Vestibulum egestas nisi quis elementum elementum.</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="clearfix">
                    <span className="image image-as-text bg-tertiary">MD</span>
                    <span className="title">Monica Doe</span>
                    <span className="message">Lorem ipsum dolor sit.</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="clearfix">
                    <span className="image image-as-text bg-quaternary">RD</span>
                    <span className="title">Robert Doe</span>
                    <span className="message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacinia orci. Proin vestibulum eget risus non luctus. Nunc cursus lacinia lacinia. Nulla molestie malesuada est ac tincidunt. Quisque eget convallis diam.</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="text-end">
                <a href="#" className="view-more">View All</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" className="dropdown-toggle notification-icon" data-bs-toggle="dropdown">
            <i className="bx bx-bell" />
            <span className="badge">3</span>
          </a>
          <div className="dropdown-menu notification-menu">
            <div className="notification-title">
              <span className="float-end badge badge-default">3</span>
              Alerts
            </div>
            <div className="content">
              <ul>
                <li>
                  <a href="#" className="clearfix">
                    <div className="image">
                      <i className="bx bx-dislike bg-danger" />
                    </div>
                    <span className="title">Server is Down!</span>
                    <span className="message">Just now</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="clearfix">
                    <div className="image">
                      <i className="bx bx-lock-alt bg-warning" />
                    </div>
                    <span className="title">User Locked</span>
                    <span className="message">15 minutes ago</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="clearfix">
                    <div className="image">
                      <i className="bx bx-wifi bg-success" />
                    </div>
                    <span className="title">Connection Restaured</span>
                    <span className="message">10/10/2021</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="text-end">
                <a href="#" className="view-more">View All</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <span className="separator" />
      <div id="userbox" className="userbox">
        <a href="#" data-bs-toggle="dropdown">
          <span className="profile-picture profile-picture-as-text">JD</span>
          <div className="profile-info profile-info-no-role" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
            <span className="name">Hi, <strong className="font-weight-semibold">John Doe</strong></span>
          </div>
          <i className="fas fa-chevron-down text-color-dark" />
        </a>
        <div className="dropdown-menu">
          <ul className="list-unstyled">
            <li>
              <a role="menuitem" tabIndex={-1} href="pages-user-profile.html"><i className="bx bx-user" /> My Profile</a>
            </li>
            <li>
              <a role="menuitem" tabIndex={-1} href="#" data-lock-screen="true"><i className="bx bx-lock-open-alt" /> Lock Screen</a>
            </li>
            <li>
              <a role="menuitem" tabIndex={-1} href="pages-signin.html"><i className="bx bx-log-out" /> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* end: search & user box */}
  </header>
  {/* end: header */}
  <div className="inner-wrapper">
    {/* start: sidebar */}
    <aside id="sidebar-left" className="sidebar-left">
      <div className="sidebar-header">
        <div className="sidebar-toggle d-none d-md-flex" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
          <i className="fas fa-bars" aria-label="Toggle sidebar" />
        </div>
      </div>
      <div className="nano">
        <div className="nano-content">
          <nav id="menu" className="nav-main" role="navigation">
            <ul className="nav nav-main">
              <li>
                <a className="nav-link" href="layouts-default.html">
                  <i className="bx bx-home-alt" aria-hidden="true" />
                  <span>Dashboard</span>
                </a>                        
              </li>
              <li className="nav-group-label">APPs</li>
              <li className="nav-parent nav-expanded nav-active">
                <a className="nav-link" href="#">
                  <i className="bx bx-cart-alt" aria-hidden="true" />
                  <span>eCommerce</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="ecommerce-dashboard.html">
                      - Dashboard
                    </a>
                  </li>
                  <li className="nav-active">
                    <a className="nav-link" href="ecommerce-products-list.html">
                      - Products List
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-products-form.html">
                      - Products Form
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-category-list.html">
                      - Categories List
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-category-form.html">
                      - Category Form
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-coupons-list.html">
                      - Coupons List
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-coupons-form.html">
                      - Coupons Form
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-orders-list.html">
                      - Orders List
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-orders-detail.html">
                      - Orders Detail
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-customers-list.html">
                      - Customers List
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ecommerce-customers-form.html">
                      - Customers Form
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link" href="mailbox-folder.html">
                  <i className="bx bx-envelope" aria-hidden="true" />
                  <span>Mailbox</span>
                </a>                        
              </li>
              <li className="nav-group-label">Visual</li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-layout" aria-hidden="true" />
                  <span>Layouts</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="index.html">
                      - Landing Page
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-default.html">
                      - Default
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-modern.html">
                      - Modern
                    </a>
                  </li>
                  <li className="nav-parent">
                    <a>
                      - Boxed
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="layouts-boxed.html">
                          - Static Header
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-boxed-fixed-header.html">
                          - Fixed Header
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a>
                      - Horizontal Menu Header
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="layouts-header-menu.html">
                          - Pills
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-header-menu-stripe.html">
                          - Stripe
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-header-menu-top-line.html">
                          - Top Line
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-dark.html">
                      - Dark
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-dark-header.html">
                      - Dark Header
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-two-navigations.html">
                      - Two Navigations
                    </a>
                  </li>
                  <li className="nav-parent">
                    <a>
                      - Tab Navigation
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="layouts-tab-navigation-dark.html">
                          - Tab Navigation Dark
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-tab-navigation.html">
                          - Tab Navigation Light
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-tab-navigation-boxed.html">
                          - Tab Navigation Boxed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-light-sidebar.html">
                      - Light Sidebar
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-left-sidebar-collapsed.html">
                      - Left Sidebar Collapsed
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-left-sidebar-scroll.html">
                      - Left Sidebar Scroll
                    </a>
                  </li>
                  <li className="nav-parent">
                    <a>
                      - Left Sidebar Big Icons
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-big-icons.html">
                          - Left Sidebar Big Icons Dark
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-big-icons-light.html">
                          - Left Sidebar Big Icons Light
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a>
                      - Left Sidebar Panel
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-panel.html">
                          - Left Sidebar Panel Dark
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-left-sidebar-panel-light.html">
                          - Left Sidebar Panel Light
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a>
                      - Left Sidebar Sizes
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="layouts-sidebar-sizes-xs.html">
                          - Left Sidebar XS
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-sidebar-sizes-sm.html">
                          - Left Sidebar SM
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="layouts-sidebar-sizes-md.html">
                          - Left Sidebar MD
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="layouts-square-borders.html">
                      - Square Borders
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-group-label">Content</li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-file" aria-hidden="true" />
                  <span>Pages</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="pages-signup.html">
                      - Sign Up
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-signin.html">
                      - Sign In
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-recover-password.html">
                      - Recover Password
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-lock-screen.html">
                      - Locked Screen
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-user-profile.html">
                      - User Profile
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-session-timeout.html">
                      - Session Timeout
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-calendar.html">
                      - Calendar
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-timeline.html">
                      - Timeline
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-media-gallery.html">
                      - Media Gallery
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-invoice.html">
                      - Invoice
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-blank.html">
                      - Blank Page
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-404.html">
                      - 404
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-500.html">
                      - 500
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-log-viewer.html">
                      - Log Viewer
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="pages-search-results.html">
                      - Search Results
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-cube" aria-hidden="true" />
                  <span>UI Elements</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="ui-elements-typography.html">
                      - Typography
                    </a>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="#">
                      - Icons <span className="mega-sub-nav-toggle toggled float-end" data-toggle="collapse" data-target=".mega-sub-nav-sub-menu-1" />
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="ui-elements-icons-elusive.html">
                          - Elusive
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ui-elements-icons-font-awesome.html">
                          - Font Awesome
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ui-elements-icons-line-icons.html">
                          - Line Icons
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ui-elements-icons-meteocons.html">
                          - Meteocons
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ui-elements-icons-box-icons.html">
                          - Box Icons
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-tabs.html">
                      - Tabs
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-cards.html">
                      - Cards
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-widgets.html">
                      - Widgets
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-portlets.html">
                      - Portlets
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-buttons.html">
                      - Buttons
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-alerts.html">
                      - Alerts
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-notifications.html">
                      - Notifications
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-modals.html">
                      - Modals
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-lightbox.html">
                      - Lightbox
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-progressbars.html">
                      - Progress Bars
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-sliders.html">
                      - Sliders
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-carousels.html">
                      - Carousels
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-accordions.html">
                      - Accordions
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-toggles.html">
                      - Toggles
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-nestable.html">
                      - Nestable
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-tree-view.html">
                      - Tree View
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-scrollable.html">
                      - Scrollable
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-grid-system.html">
                      - Grid System
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-charts.html">
                      - Charts
                    </a>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="#">
                      - Animations <span className="mega-sub-nav-toggle toggled float-end" data-toggle="collapse" data-target=".mega-sub-nav-sub-menu-2" />
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="ui-elements-animations-appear.html">
                          - Appear
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ui-elements-animations-hover.html">
                          - Hover
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="#">
                      - Loading <span className="mega-sub-nav-toggle toggled float-end" data-toggle="collapse" data-target=".mega-sub-nav-sub-menu-3" />
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a className="nav-link" href="ui-elements-loading-overlay.html">
                          - Overlay
                        </a>
                      </li>
                      <li>
                        <a className="nav-link" href="ui-elements-loading-progress.html">
                          - Progress
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="ui-elements-extra.html">
                      - Extra
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-map" aria-hidden="true" />
                  <span>Maps</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="maps-google-maps.html">
                      - Basic
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="maps-google-maps-builder.html">
                      - Map Builder
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="maps-vector.html">
                      - Vector
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link" href="extra-ajax-made-easy.html">
                  <i className="bx bx-loader-circle" aria-hidden="true" />
                  <span>Ajax</span>
                </a>                        
              </li>
              <li className="nav-group-label">CRUD</li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-detail" aria-hidden="true" />
                  <span>Forms</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="forms-basic.html">
                      - Basic
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="forms-advanced.html">
                      - Advanced
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="forms-validation.html">
                      - Validation
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="forms-layouts.html">
                      - Layouts
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="forms-wizard.html">
                      - Wizard
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="forms-code-editor.html">
                      - Code Editor
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-table" aria-hidden="true" />
                  <span>Tables</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a className="nav-link" href="tables-basic.html">
                      - Basic
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="tables-advanced.html">
                      - Advanced
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="tables-responsive.html">
                      - Responsive
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="tables-editable.html">
                      - Editable
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="tables-ajax.html">
                      - Ajax
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="tables-pricing.html">
                      - Pricing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-group-label">Extra</li>
              <li className="nav-parent">
                <a className="nav-link" href="#">
                  <i className="bx bx-collection" aria-hidden="true" />
                  <span>Menu Levels</span>
                </a>
                <ul className="nav nav-children">
                  <li>
                    <a>
                      - First Level
                    </a>
                  </li>
                  <li className="nav-parent">
                    <a className="nav-link" href="#">
                      - Second Level
                    </a>
                    <ul className="nav nav-children">
                      <li>
                        <a>
                          - Second Level Link #1
                        </a>
                      </li>
                      <li>
                        <a>
                          - Second Level Link #2
                        </a>
                      </li>
                      <li className="nav-parent">
                        <a className="nav-link" href="#">
                          - Third Level
                        </a>
                        <ul className="nav nav-children">
                          <li>
                            <a>
                              - Third Level Link #1
                            </a>
                          </li>
                          <li>
                            <a>
                              - Third Level Link #2
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link" href="http://themeforest.net/item/porto-responsive-html5-template/4106987?ref=Okler">
                  <i className="bx bx-window-alt" aria-hidden="true" />
                  <span>Front-End <em className="not-included">(Not Included)</em></span>
                </a>                        
              </li>
              <li>
                <a className="nav-link" href="https://www.okler.net/forums/topic/porto-admin-changelog/">
                  <i className="bx bx-book-alt" aria-hidden="true" />
                  <span>Changelog</span>
                </a>                        
              </li>
            </ul>
          </nav>
          <hr className="separator" />
          <div className="sidebar-widget widget-tasks">
            <div className="widget-header">
              <h6>Projects</h6>
            </div>
            <div className="widget-content">
              <ul className="list-unstyled m-0">
                <li><a href="#">Porto HTML5 Template</a></li>
                <li><a href="#">Tucson Template</a></li>
                <li><a href="#">Porto Admin</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </aside>
    {/* end: sidebar */}
    <section role="main" className="content-body content-body-modern mt-0">
      <header className="page-header page-header-left-inline-breadcrumb">
        <h2 className="font-weight-bold text-6">Products</h2>
        <div className="right-wrapper">
          <ol className="breadcrumbs">
            <li><span>Home</span></li>
            <li><span>eCommerce</span></li>
            <li><span>Products</span></li>
          </ol>
          <a className="sidebar-right-toggle" data-open="sidebar-right"><i className="fas fa-chevron-left" /></a>
        </div>
      </header>
      {/* start: page */}
      <div className="ecommerce-form-sidebar-overlay-wrapper">
        <div className="ecommerce-form-sidebar-overlay-body">
          <a href="#" className="ecommerce-form-sidebar-overlay-close"><i className="bx bx-x" /></a>
          <div className="scrollable h-100 loading-overlay-showing" data-plugin-scrollable>
            <div className="loading-overlay">
              <div className="bounce-loader">
                <div className="bounce1" />
                <div className="bounce2" />
                <div className="bounce3" />
              </div>
            </div>
            <div className="ecommerce-form-sidebar-overlay-content scrollable-content px-3 pb-3 pt-1" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center justify-content-sm-between pt-2">
        <div className="col-sm-auto text-center mb-4 mb-sm-0 mt-2 mt-sm-0">
          <a href="ecommerce-products-form.html" className="ecommerce-sidebar-link btn btn-primary btn-md font-weight-semibold btn-py-2 px-4" data-ajax-url="ajax/ajax-products-form-empty.html">+ Add Product</a>
        </div>
        <div className="col-sm-auto">
          <form action="ecommerce-products-list.html" className="search search-style-1 search-style-1-light mx-auto" method="GET">
            <div className="input-group">
              <input type="text" className="form-control" name="product-term" id="product-term" placeholder="Search Product" />
              <button className="btn btn-default" type="submit"><i className="bx bx-search" /></button>
            </div>
          </form>
        </div>
      </div>
      <div className="row row-gutter-sm mb-5">
        <div className="col-lg-2-5 col-xl-1-5 mb-4 mb-lg-0">
          <div className="filters-sidebar-wrapper bg-light rounded">
            <div className="card card-modern">
              <div className="card-header">
                <div className="card-actions">
                  <a href="#" className="card-action card-action-toggle" data-card-toggle />
                </div>
                <h4 className="card-title">ELECTRONICS</h4>
              </div>
              <div className="card-body">
                <ul className="list list-unstyled mb-0">
                  <li><a href="#">Smart TVs</a></li>
                  <li><a href="#">Cameras</a></li>
                  <li><a href="#">Headphones</a></li>
                  <li><a href="#">Games</a></li>
                </ul>
              </div>
            </div>
            <hr className="solid opacity-7" />
            <div className="card card-modern">
              <div className="card-header">
                <div className="card-actions">
                  <a href="#" className="card-action card-action-toggle" data-card-toggle />
                </div>
                <h4 className="card-title">PRICE</h4>
              </div>
              <div className="card-body">
                <div className="slider-range-wrapper">
                  <div className="m-md slider-primary slider-modern" data-plugin-slider data-plugin-options="{ &quot;half_values&quot;: true, &quot;values&quot;: [ 25, 270 ], &quot;range&quot;: true, &quot;max&quot;: 300 }" data-plugin-slider-output="#priceRange" data-plugin-slider-link-values-to="#priceRangeValues">
                    <input id="priceRange" type="hidden" defaultValue="25, 270" />
                  </div>
                  <form className="d-flex align-items-center justify-content-between mb-2" method="get">
                    <span id="priceRangeValues" className="price-range-values">
                      Price $<span className="min price-range-low">25</span> - $<span className="max price-range-high">270</span>
                    </span>
                    <input type="hidden" className="hidden-price-range-low" name="priceLow" defaultValue="" />
                    <input type="hidden" className="hidden-price-range-high" name="priceHigh" defaultValue="" />
                    <button type="submit" className="btn btn-primary btn-h-1 font-weight-semibold rounded-0 btn-px-3 btn-py-1 text-2">FILTER</button>
                  </form>
                </div>
              </div>
            </div>
            <hr className="solid opacity-7" />
            <div className="card card-modern">
              <div className="card-header">
                <div className="card-actions">
                  <a href="#" className="card-action card-action-toggle" data-card-toggle />
                </div>
                <h4 className="card-title">SIZES</h4>
              </div>
              <div className="card-body">
                <ul className="list list-inline list-filter mb-0">
                  <li className="list-inline-item">
                    <a href="#">S</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="active">M</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">L</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">XL</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">2XL</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">3XL</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr className="solid opacity-7" />
            <div className="card card-modern">
              <div className="card-header">
                <div className="card-actions">
                  <a href="#" className="card-action card-action-toggle" data-card-toggle />
                </div>
                <h4 className="card-title">BRANDS</h4>
              </div>
              <div className="card-body">
                <ul className="list list-unstyled mb-0">
                  <li><a href="#">Adidas <span className="float-end">18</span></a></li>
                  <li><a href="#">Camel <span className="float-end">22</span></a></li>
                  <li><a href="#">Samsung Galaxy <span className="float-end">05</span></a></li>
                  <li><a href="#">Seiko <span className="float-end">68</span></a></li>
                  <li><a href="#">Sony <span className="float-end">03</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3-5 col-xl-4-5">
          <div className="row row-gutter-sm">
            <div className="col-sm-6 col-xl-3 mb-4">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <div className="image-frame-badges-wrapper">
                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                      </div>
                      <a href="ecommerce-products-form.html"><img src="img/products/product-1.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <div className="image-frame-badges-wrapper">
                        <span className="badge badge-ecommerce badge-success">NEW</span>
                        <span className="badge badge-ecommerce badge-danger">27% OFF</span>
                      </div>
                      <a href="ecommerce-products-form.html"><img src="img/products/product-2.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <a href="ecommerce-products-form.html"><img src="img/products/product-3.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <a href="ecommerce-products-form.html"><img src="img/products/product-4.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-lg-0">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <a href="ecommerce-products-form.html"><img src="img/products/product-5.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-lg-0">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <a href="ecommerce-products-form.html"><img src="img/products/product-6.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3 mb-4 mb-sm-0">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <a href="ecommerce-products-form.html"><img src="img/products/product-7.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card card-modern card-modern-alt-padding">
                <div className="card-body bg-light">
                  <div className="image-frame mb-2">
                    <div className="image-frame-wrapper">
                      <a href="ecommerce-products-form.html"><img src="img/products/product-8.jpg" className="img-fluid" alt="Product Short Name" /></a>
                    </div>
                  </div>
                  <small><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-grey text-color-hover-primary text-decoration-none">CATEGORY</a></small>
                  <h4 className="text-4 line-height-2 mt-0 mb-2"><a href="ecommerce-products-form.html" className="ecommerce-sidebar-link text-color-dark text-color-hover-primary text-decoration-none">Product Short Name</a></h4>
                  <div className="stars-wrapper">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <div className="product-price">
                    <div className="regular-price on-sale">$59.00</div>
                    <div className="sale-price">$49.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-gutter-sm justify-content-between">
            <div className="col-lg-auto order-2 order-lg-1">
              <p className="text-center text-lg-left mb-0">Showing 1-8 of 60 results</p>
            </div>
            <div className="col-lg-auto order-1 order-lg-2 mb-3 mb-lg-0">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-modern pagination-modern-spacing justify-content-center justify-content-lg-start mb-0">
                  <li className="page-item">
                    <a className="page-link prev" href="#" aria-label="Previous">
                      <span><i className="fas fa-chevron-left" aria-label="Previous" /></span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  {/* <li className="page-item"><a className="page-link" href="#" disabled="true">...</a></li> */}
                  <li className="page-item"><a className="page-link" href="#">15</a></li>
                  <li className="page-item">
                    <a className="page-link next" href="#" aria-label="Next">
                      <span><i className="fas fa-chevron-right" aria-label="Next" /></span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* end: page */}
    </section>
  </div>
  <aside id="sidebar-right" className="sidebar-right">
    <div className="nano">
      <div className="nano-content">
        <a href="#" className="mobile-close d-md-none">
          Collapse <i className="fas fa-chevron-right" />
        </a>
        <div className="sidebar-right-wrapper">
          <div className="sidebar-widget widget-calendar">
            <h6>Upcoming Tasks</h6>
            <div data-plugin-datepicker data-plugin-skin="dark" />
            <ul>
              <li>
                <time dateTime="2021-04-19T00:00+00:00">04/19/2021</time>
                <span>Company Meeting</span>
              </li>
            </ul>
          </div>
          <div className="sidebar-widget widget-friends">
            <h6>Friends</h6>
            <ul>
              <li className="status-online">
                <figure className="profile-picture">
                  <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
              <li className="status-online">
                <figure className="profile-picture">
                  <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
              <li className="status-offline">
                <figure className="profile-picture">
                  <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
              <li className="status-offline">
                <figure className="profile-picture">
                  <img src="img/!sample-user.jpg" alt="Joseph Doe" className="rounded-circle" />
                </figure>
                <div className="profile-info">
                  <span className="name">Joseph Doe Junior</span>
                  <span className="title">Hey, how are you?</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</section>)
  
};

export default ProductPage;
