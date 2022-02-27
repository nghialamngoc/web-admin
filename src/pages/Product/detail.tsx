import { FC } from "react";

import { IProductDetailProps } from "interfaces/product";
import React, {useState, useEffect} from 'react';
import { StatHelpText } from "@chakra-ui/react";

const ProductDetailPage: FC<IProductDetailProps> = ({ title }) => {
  

  const [countGroupAtt, setCountGroupAtt] = useState(0);
  const [classAtt1, setClassAtt1] = useState("d-none");
  const [classAtt2, setClassAtt2] = useState("d-none");
  const [classBtnAddAtt, setClassBtnAddAtt] = useState("");  

  const addSelectedAtt = ()=>{ 
    setCountGroupAtt(countGroupAtt + 1);  
    
  }

  useEffect(()=>{
    if (countGroupAtt == 0) return;
    countGroupAtt == 1?setClassAtt1(""):setClassAtt2("");  
    if(countGroupAtt >= 2) setClassBtnAddAtt("d-none"); 

   });
   

  return (
    <section role="main" className="content-body content-body-modern mt-0">
    <header className="page-header page-header-left-inline-breadcrumb">
      <h2 className="font-weight-bold text-6">Product Name: {title}</h2>
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
                
                <div className="col-lg-3-5 col-xl-4-5">
                  <div className="form-group row align-items-center pb-3">
                    <label className="col-lg-5 col-xl-12 control-label text-lg-left mb-2">Tên sản phẩm</label>
                    <div className="col-lg-7 col-xl-6">
                      <input type="text" className="form-control form-control-modern" name="productName" defaultValue="" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-lg-5 col-xl-12 control-label text-lg-left pt-2 mt-1 mb-2">Mô tả</label>
                    <div className="col-lg-7 col-xl-6">
                      <textarea className="form-control form-control-modern" name="productDescription" rows={6} defaultValue={""} />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-5 col-xl-12 control-label text-lg-left pt-2 mt-1 mb-2">Trích dẫn</label>
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
                
                <div className="col-lg-3-5 col-xl-4-5">
                  <div className="form-group row align-items-center">
                  <label className="col-lg-5 col-xl-12 control-label text-lg-left pt-2 mt-1 mb-2">Hình ảnh</label>
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

                 <div className="col-lg-3-5 col-xl-4-5">
                  <div className="form-group row align-items-center">
                  <label className="col-lg-5 col-xl-12 control-label text-lg-left pt-2 mt-1 mb-2">Hình ảnh</label>
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
               
                <div className="col-lg-3-5 col-xl-4-5">
                  <div className="tab-content" id="tabContent">
                    <div className="tab-pane fade show active" id="price" role="tabpanel" aria-labelledby="price-tab">
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-start mb-0">Mã sản phẩm</label>
                        <div className="col-lg-7 col-xl-6">
                          <input type="text" className="form-control form-control-modern" name="regularPrice" defaultValue="" required />
                        </div>
                      </div>                    

                       <div className={"form-group row align-items-center " + classAtt1} >
                        <label className="col-lg-5 col-xl-3 control-label text-lg-start mb-0 "  >Nhóm phân loại 1</label>
                        <div className="col-lg-7 col-xl-6">
                              <div className="row mb-4">
                                  <label className="col-4 d-flex align-items-center">Tên nhóm phân loại</label>                            
                                  <div className="col-8">

                                  <select className="form-control form-control-modern" name="stockStatus">
                                      <option value="percentage" selected>Percentage Discount</option>
                                      <option value="fixed-cart">Fixed Cart Discount</option>
                                      <option value="fixed-product">Fixed Product Discount</option>
                                  </select>

                                </div>                           
                            </div>

                            <div className="row">
                                  <label className="col-4 d-flex align-items-center">Phân loại hàng</label>                            

                                  <div className="col-8">
                                          <select className="form-control form-control-modern" name="stockStatus">
                                                <option value="percentage" selected>Percentage Discount</option>
                                                <option value="fixed-cart">Fixed Cart Discount</option>
                                                <option value="fixed-product">Fixed Product Discount</option>
                                          </select>
                                  </div>                           
                            </div>

               
                          
                        </div>
                      </div>

                      <div className={"form-group row align-items-center " + classAtt2} >
                        <label className="col-lg-5 col-xl-3 control-label text-lg-start mb-0 "  >Nhóm phân loại 2</label>
                        <div className="col-lg-7 col-xl-6">
                              <div className="row mb-4">
                                  <label className="col-4 d-flex align-items-center">Tên nhóm phân loại</label>                            
                                  <div className="col-8">

                                  <select className="form-control form-control-modern" name="stockStatus">
                                      <option value="percentage" selected>Percentage Discount</option>
                                      <option value="fixed-cart">Fixed Cart Discount</option>
                                      <option value="fixed-product">Fixed Product Discount</option>
                                  </select>

                                </div>                           
                            </div>

                            <div className="row">
                                  <label className="col-4 d-flex align-items-center">Phân loại hàng</label>                            

                                  <div className="col-8">
                                          <select className="form-control form-control-modern" name="stockStatus">
                                                <option value="percentage" selected>Percentage Discount</option>
                                                <option value="fixed-cart">Fixed Cart Discount</option>
                                                <option value="fixed-product">Fixed Product Discount</option>
                                          </select>
                                  </div>                           
                            </div>

               
                          
                        </div>
                      </div>

                      <div className="form-group row align-items-center">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-start mb-0 ">Thêm nhóm phân loại</label>
                        <div className="col-lg-7 col-xl-6">
                          <button onClick={addSelectedAtt} className={"repeater-add poloman-button poloman-button--normal " + classBtnAddAtt }  type="button">
                              
                              <span>
                                  <i className="fa fa-plus-circle poloman-icon "></i> Thêm
                              </span>
                            
                          </button>                      
                        </div>
                        
                      </div>

                      <div className="form-group row align-items-center">
                          <div className="col-3">
                              <label className="col-lg-12 col-xl-12 control-label text-lg-start mb-2">Giá sản phẩm</label>
                              <div className="col-lg-12 col-xl-12">
                                <input type="text" className="form-control form-control-modern" name="salePrice" defaultValue="" />
                              </div>
                          </div>

                          <div className="col-3">
                              <label className="col-lg-12 col-xl-12 control-label text-lg-start mb-2">Giá giảm sản phẩm</label>
                              <div className="col-lg-12 col-xl-12">
                                <input type="text" className="form-control form-control-modern" name="salePrice" defaultValue="" />
                              </div>
                          </div>

                          <div className="col-3">
                              <label className="col-lg-12 col-xl-12 control-label text-lg-start mb-2">Có thể bán</label>
                              <div className="col-lg-12 col-xl-12">
                                <input type="text" className="form-control form-control-modern" name="salePrice" defaultValue="" />
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="inventory" role="tabpanel" aria-labelledby="inventory-tab">
                      <div className="form-group row align-items-center pb-3">
                        <label className="col-lg-5 col-xl-3 control-label text-lg-end mb-0">Giá sản phẩm</label>
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

      {/* todo: ten nhom phan loai---------- */}
      
      {/* end: nhom phan loai--------------- */}

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
