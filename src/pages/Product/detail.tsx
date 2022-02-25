import { FC } from "react";

import { IProductDetailProps } from "interfaces/product";

const ProductDetailPage: FC<IProductDetailProps> = ({ title }) => {
  return (
    <section role="main" className="content-body content-body-modern mt-0">
    <header className="page-header page-header-left-inline-breadcrumb">
      <h2 className="font-weight-bold text-6">Product Name</h2>
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
    <form className="ecommerce-form action-buttons-fixed" action="#" method="post">
      <div className="row mt-2">
        <div className="col">
          <section className="card card-modern card-big-info">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-2-5 col-xl-1-5">
                  <i className="card-big-info-icon bx bx-box" />
                  <h2 className="card-big-info-title">General Info</h2>
                  <p className="card-big-info-desc">Add here the product description with all details and necessary information.</p>
                </div>
                <div className="col-lg-3-5 col-xl-4-5">
                  <div className="form-group row align-items-center pb-3">
                    <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Product Name</label>
                    <div className="col-lg-7 col-xl-6">
                      <input type="text" className="form-control form-control-modern" name="productName" defaultValue="" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-5 col-xl-3 control-label text-lg-end pt-2 mt-1 mb-0">Product Description</label>
                    <div className="col-lg-7 col-xl-6">
                      <textarea className="form-control form-control-modern" name="productDescription" rows={6} defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <section className="card card-modern card-big-info">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-2-5 col-xl-1-5">
                  <i className="card-big-info-icon bx bx-camera" />
                  <h2 className="card-big-info-title">Product Image</h2>
                  <p className="card-big-info-desc">Upload your Product image. You can add multiple images</p>
                </div>
                <div className="col-lg-3-5 col-xl-4-5">
                  <div className="form-group row align-items-center">
                    <div className="col">
                      <div id="dropzone-form-image" className="dropzone-modern dz-square">
                        <span className="dropzone-upload-message text-center">
                          <i className="bx bxs-cloud-upload" />
                          <b className="text-color-primary">Drag/Upload</b> your images here.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <section className="card card-modern card-big-info">
            <div className="card-body">
              <div className="tabs-modern row" style={{minHeight: '490px'}}>
                <div className="col-lg-2-5 col-xl-1-5">
                  <div className="nav flex-column tabs" id="tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="price-tab" data-bs-toggle="pill" data-bs-target="#price" role="tab" aria-controls="price" aria-selected="true">Price</a>
                    <a className="nav-link" id="inventory-tab" data-bs-toggle="pill" data-bs-target="#inventory" role="tab" aria-controls="inventory" aria-selected="false">Inventory</a>
                    <a className="nav-link" id="shipping-tab" data-bs-toggle="pill" data-bs-target="#shipping" role="tab" aria-controls="shipping" aria-selected="false">Shipping</a>
                    <a className="nav-link" id="linked-products-tab" data-bs-toggle="pill" data-bs-target="#linked-products" role="tab" aria-controls="linked-products" aria-selected="false">Linked Products</a>
                    <a className="nav-link" id="attributes-tab" data-bs-toggle="pill" data-bs-target="#attributes" role="tab" aria-controls="attributes">Attributes</a>
                    <a className="nav-link" id="advanced-tab" data-bs-toggle="pill" data-bs-target="#advanced" role="tab" aria-controls="advanced">Advanced</a>
                  </div>
                </div>
                <div className="col-lg-3-5 col-xl-4-5">
                  <div className="tab-content" id="tabContent">
                    <div className="tab-pane fade show active" id="price" role="tabpanel" aria-labelledby="price-tab">
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Regular Price ($)</label>
                        <div className="col-lg-7 col-xl-6">
                          <input type="text" className="form-control form-control-modern" name="regularPrice" defaultValue="" required />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Sale Price ($)</label>
                        <div className="col-lg-7 col-xl-6">
                          <input type="text" className="form-control form-control-modern" name="salePrice" defaultValue="" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="inventory" role="tabpanel" aria-labelledby="inventory-tab">
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">SKU</label>
                        <div className="col-lg-7 col-xl-6">
                          <input type="text" className="form-control form-control-modern" name="sku" defaultValue="" required />
                        </div>
                      </div>
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Manage Stock?</label>
                        <div className="col-lg-7 col-xl-6">
                          <div className="checkbox">
                            <label className="my-2">
                              <input type="checkbox" defaultValue="" />
                              Enable stock management at product level
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Stock Status</label>
                        <div className="col-lg-7 col-xl-6">
                          <select className="form-control form-control-modern" name="stockStatus">
                            <option value="in-stock" selected>In Stock</option>
                            <option value="out-of-stock">Out of Stock</option>
                            <option value="on-backorder">On Backorder</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Sold Individually</label>
                        <div className="col-lg-7 col-xl-6">
                          <div className="checkbox">
                            <label className="my-2">
                              <input type="checkbox" defaultValue="" />
                              Enable this to only allow one of this item to be bought in a single order
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Weight (oz)</label>
                        <div className="col-lg-7 col-xl-6">
                          <input type="text" className="form-control form-control-modern" name="weight" defaultValue="" />
                        </div>
                      </div>
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Dimensions (in)</label>
                        <div className="col-lg-7 col-xl-6">
                          <div className="row">
                            <div className="col-xl-4 mb-3 mb-xl-0">
                              <input type="text" className="form-control form-control-modern" name="dimensionsLength" defaultValue="" placeholder="Length" />
                            </div>
                            <div className="col-xl-4 mb-3 mb-xl-0">
                              <input type="text" className="form-control form-control-modern" name="dimensionsWidth" defaultValue="" placeholder="Width" />
                            </div>
                            <div className="col-xl-4">
                              <input type="text" className="form-control form-control-modern" name="dimensionsHeight" defaultValue="" placeholder="Height" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Shipping Class</label>
                        <div className="col-lg-7 col-xl-6">
                          <select className="form-control form-control-modern" name="shippingclass">
                            <option value="in-stock" selected>No Shipping Class</option>
                            <option value="out-of-stock">International</option>
                            <option value="on-backorder">National</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="linked-products" role="tabpanel" aria-labelledby="linked-products-tab">
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Upsells</label>
                        <div className="col-lg-7 col-xl-6">
                          <select multiple data-plugin-selecttwo className="form-control form-control-modern" name="upSells" data-plugin-options="{ &quot;placeholder&quot;: &quot;Search for a product...&quot; }">
                            <option value="" />
                            <option value="product1">Porto Bag</option>
                            <option value="product2">Porto Shoes</option>
                            <option value="product3">Porto Jacket</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Cross-sells</label>
                        <div className="col-lg-7 col-xl-6">
                          <select multiple data-plugin-selecttwo className="form-control form-control-modern" name="crossSells" data-plugin-options="{ &quot;placeholder&quot;: &quot;Search for a product...&quot; }">
                            <option value="" />
                            <option value="product1">Porto Bag</option>
                            <option value="product2">Porto Shoes</option>
                            <option value="product3">Porto Jacket</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="attributes" role="tabpanel" aria-labelledby="attributes-tab">
                      <div className="ecommerce-attributes-wrapper">
                        <div className="form-group row justify-content-center ecommerce-attribute-row pb-3">
                          <div className="col-xl-3">
                            <label className="control-label">Name</label>
                            <input type="text" className="form-control form-control-modern" name="attName" defaultValue="Size" />
                            <div className="checkbox mt-3 mb-3 mb-lg-0">
                              <label className="my-2">
                                <input type="checkbox" name="attVisible" defaultValue={1} defaultChecked />
                                Visible on the product page
                              </label>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <a href="#" className="ecommerce-attribute-remove text-color-danger float-end">Remove</a>
                            <label className="control-label">Value(s)</label>
                            <textarea className="form-control form-control-modern" name="attValue" rows={4} placeholder="Enter some text, or some attributes by | separating values" defaultValue={"Small|Medium|Big"} />
                          </div>
                        </div>
                        <div className="form-group row justify-content-center ecommerce-attribute-row">
                          <div className="col-xl-3">
                            <label className="control-label">Name</label>
                            <input type="text" className="form-control form-control-modern" name="attName" defaultValue="Color" />
                            <div className="checkbox mt-3 mb-3 mb-lg-0">
                              <label className="my-2">
                                <input type="checkbox" name="attVisible" defaultValue={1} defaultChecked />
                                Visible on the product page
                              </label>
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <a href="#" className="ecommerce-attribute-remove text-color-danger float-end">Remove</a>
                            <label className="control-label">Value(s)</label>
                            <textarea className="form-control form-control-modern" name="attValue" rows={4} placeholder="Enter some text, or some attributes by | separating values" defaultValue={"Blue|Red|Green"} />
                          </div>
                        </div>
                      </div>
                      <div className="row justify-content-center mt-4">
                        <div className="col-xl-9 text-end">
                          <a href="#" className="ecommerce-attribute-add-new btn btn-primary btn-px-4 btn-py-2">+ Add New</a>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="advanced" role="tabpanel" aria-labelledby="advanced-tab">
                      <div className="form-group row pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end pt-2 mt-1 mb-0">Purchase Note</label>
                        <div className="col-lg-7 col-xl-6">
                          <textarea className="form-control form-control-modern" name="purchaseNote" rows={6} defaultValue={""} />
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Menu Order</label>
                        <div className="col-lg-7 col-xl-6">
                          <input type="text" className="form-control form-control-modern" name="menuOrder" defaultValue="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="row action-buttons">
        <div className="col-12 col-md-auto">
          <button type="submit" className="submit-button btn btn-primary btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1" data-loading-text="Loading...">
            <i className="bx bx-save text-4 me-2" /> Save Product
          </button>
        </div>
        <div className="col-12 col-md-auto px-md-0 mt-3 mt-md-0">
          <a href="ecommerce-products-list.html" className="cancel-button btn btn-light btn-px-4 py-3 border font-weight-semibold text-color-dark text-3">Cancel</a>
        </div>
        <div className="col-12 col-md-auto ms-md-auto mt-3 mt-md-0 ms-auto">
          <a href="#" className="delete-button btn btn-danger btn-px-4 py-3 d-flex align-items-center font-weight-semibold line-height-1">
            <i className="bx bx-trash text-4 me-2" /> Delete Product
          </a>
        </div>
      </div>
    </form>
    {/* end: page */}
  </section>
  );
  
};

export default ProductDetailPage;
