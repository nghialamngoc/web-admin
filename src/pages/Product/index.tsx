import { FC } from "react";
import IProductProps from "../../interfaces/product";
import { Link } from "react-router-dom";

const ProductPage: FC<IProductProps> = ({ title }) => {
  return (
    <section role="main" className="content-body content-body-modern">           
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
            <Link  to="/product/management/cu" className="ecommerce-sidebar-link btn btn-primary btn-md font-weight-semibold btn-py-2 px-4">                       
                      Add Product
            </Link>            
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


  );
  
};

export default ProductPage;
