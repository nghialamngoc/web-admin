import { FC } from "react";

import { IProductDetailProps } from "interfaces/product";
import React, {useState, useEffect} from 'react';
import { SkeletonCircle, StatHelpText } from "@chakra-ui/react";
import {Attribute, SelectedAttribute} from "interfaces/product";
// import Select from 'react-select';
import Multiselect from 'multiselect-react-dropdown';


const ProductCUPage: FC<IProductDetailProps> = ({ title }) => {
  
  // todo: Variable-----------------------
  const defaultSelectedAtt = {} as Attribute;

  /**State------------------------------- */
  const [countGroupAtt, setCountGroupAtt] = useState(0);
  const [classAtt1, setClassAtt1] = useState("d-none");
  const [classAtt2, setClassAtt2] = useState("d-none");
  const [classAtt, setClassAtt] = useState<Array<string>>(["d-none", "d-none"])
  const [classBtnAddAtt, setClassBtnAddAtt] = useState("");  
  const [atributeList, setAttributeList] = useState<Array<Array<Attribute>>>([]);
  const [childAttList, setChildAttList] = useState<Array<any>>([])

  const[test, setTest] = useState<Array<any>>([])
  const[options, setOptions] = useState([{name: 'Option 1️⃣', id: 1},{name: 'Option 2️⃣', id: 2}]);

  /**Variables------------------------- */
  


  // !end: Variable---------------------
  
 

  // todo: Set default Selected Att----------------------------
  const [selectedAtt, setSelectedAtt] = useState <Array<any>>([[], []]);   
  // const tempSelectedAtt = [];
  // tempSelectedAtt.push(defaultSelectedAtt, defaultSelectedAtt);
  // setSelectedAtt(tempSelectedAtt)


  
  const orgAttributeList = [
    {
       "id":"1469598129476079617",
       "value":"BE",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/be_1469598121922138112.png",
       "code":"BE"
    },
    {
       "id":"1465575707814924289",
       "value":"CARO NÂU",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/caro-nau_1467128337947168768.png",
       "code":"CANA"
    },
    {
       "id":"1465569140168200193",
       "value":"CARO XANH",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/caro-xanh_1467128691531190272.png",
       "code":"CAXA"
    },
    {
       "id":"1465562053329555457",
       "value":"Cafe",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/cafe_1467128884519505920.png",
       "code":"CA"
    },
    {
       "id":"1465578115051819009",
       "value":"Hồng",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/hong_1467127710965829632.png",
       "code":"HO"
    },
    {
       "id":"1433405122280427522",
       "value":"L",
       "parent_id":"1433405122280427520",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/den.png",
       "code":"L"
    },
    {
       "id":"1433405122280427523",
       "value":"M",
       "parent_id":"1433405122280427520",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/den.png",
       "code":"M"
    },
    {
       "id":"1433404879375699968",
       "value":"Màu sắc",
       "parent_id":"0",
       "url_media":"",
       "code":""
    },
    {
       "id":"1465575983917568001",
       "value":"Nâu",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/nau_1473131893221232640.png",
       "code":"NAU"
    },
    {
       "id":"1465579873195003905",
       "value":"RÊU",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/reu_1474227035403456512.png",
       "code":"REU"
    },
    {
       "id":"1433405122280427520",
       "value":"Size",
       "parent_id":"0",
       "url_media":"",
       "code":""
    },
    {
       "id":"1465550472461946881",
       "value":"Trắng",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/trang_1467107723110780928.png",
       "code":"TR"
    },
    {
       "id":"1465577145328734209",
       "value":"XANH LÁ",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xanh-la_1473125246000173056.png",
       "code":"XALA"
    },
    {
       "id":"1465579873195003907",
       "value":"XANH NGỌC",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xanh-ngoc_1467107626612428800.png",
       "code":"XANG"
    },
    {
       "id":"1433405122280427521",
       "value":"XL",
       "parent_id":"1433405122280427520",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/do.png",
       "code":"XL"
    },
    {
       "id":"1440944377156341761",
       "value":"XXL",
       "parent_id":"1433405122280427520",
       "url_media":"",
       "code":"XXL"
    },
    {
       "id":"1476017292612472833",
       "value":"Xanh Rêu",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xanh-reu_1476018105518919680.png",
       "code":"XARE"
    },
    {
       "id":"1469598481688563713",
       "value":"Xanh biển",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xanh-bien_1469598476655398912.png",
       "code":"XABI"
    },
    {
       "id":"1465562053329555459",
       "value":"Xanh ghi",
       "parent_id":"1433404879375699968",
       "url_media":"",
       "code":"XAGH"
    },
    {
       "id":"1465562053329555460",
       "value":"Xanh ngọc",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/vo-dau_1467128802432782336.png",
       "code":"VoDA"
    },
    {
       "id":"1465564481525387265",
       "value":"Xanh Đen",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xanh-den_1467128756622594048.png",
       "code":"XA"
    },
    {
       "id":"1465579873195003906",
       "value":"XÁM XANH",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xam-xanh_1474227214047252480.png",
       "code":"XAXA"
    },
    {
       "id":"1465562053329555458",
       "value":"Xám",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xam_1467128857109729280.png",
       "code":"XAM"
    },
    {
       "id":"1473609985005981697",
       "value":"Xám xanh",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/xam-xanh_1474226732037836800.png",
       "code":"XAXA"
    },
    {
       "id":"1434108762674696193",
       "value":"t1",
       "parent_id":"1434108762674696192",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/do.png",
       "code":"t1"
    },
    {
       "id":"1434108762674696194",
       "value":"t2",
       "parent_id":"1434108762674696192",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/vang.png",
       "code":"t2"
    },
    {
       "id":"1434108762674696195",
       "value":"t3",
       "parent_id":"1434108762674696192",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/do.png",
       "code":"t3"
    },
    {
       "id":"1440552918787821569",
       "value":"thuộc tính 1 eee",
       "parent_id":"1440552918787821568",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/thuoc-tinh-1-eee.jpeg",
       "code":"TH"
    },
    {
       "id":"1440552918787821570",
       "value":"thuộc tính 2",
       "parent_id":"1440552918787821568",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/thuoc-tinh-2.jpeg",
       "code":"TH"
    },
    {
       "id":"1440553248242012161",
       "value":"thuộc tính 3",
       "parent_id":"1440552918787821568",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/thuoc-tinh-3.jpeg",
       "code":"TH"
    },
    {
       "id":"1465563676328071169",
       "value":"Đen",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/den_1473131143975931904.png",
       "code":"DEN"
    },
    {
       "id":"1465581226675933185",
       "value":"Đỏ",
       "parent_id":"1433404879375699968",
       "url_media":"https://happyhow.me/1111111111111111111/images/attr/desk/ba-trau_1467107481674059776.png",
       "code":"BATR"
    }
 ];

 // todo: compute data of parent Attribute List------------------
 const paAttList:Array<any> = orgAttributeList.filter(e=>e.parent_id == "0");

 defaultSelectedAtt.id = "0";
 defaultSelectedAtt.value="Chọn nhóm phân loại";
//  paAttList.push(defaultSelectedAtt);
 const [parentAttList, setParentAttList] = useState <Array<Array<any>>>([paAttList, paAttList]);   
 

  const addSelectedAtt = ()=>{     

    
    // todo: Hiển thị group Att-----------
    const stateClassAtt = classAtt;
    const index = countGroupAtt;
    stateClassAtt[index] = "";
    setClassAtt(stateClassAtt);
    setCountGroupAtt(countGroupAtt + 1);  

    // todo: Add Group Att----------------------    

    const tempAttributeList:any = JSON.parse(JSON.stringify(atributeList));
    if (tempAttributeList.length<2){
      const arr:Array<Attribute> = []
      tempAttributeList.push(arr)
      setAttributeList(tempAttributeList);   
    }  
    
  }

  const removeGroupAtt = (index:any)=>{
    const stateClassAtt = classAtt;
    if(index == 0){
      setCountGroupAtt(0);
      stateClassAtt[0] = "d-none";
      stateClassAtt[1] = "d-none";
    }else{ 
      stateClassAtt[index] = "d-none";
      setCountGroupAtt(1);      
    } 
    console.log("state att: ", stateClassAtt);

    setClassBtnAddAtt("");
    setClassAtt(stateClassAtt);
     
  }

  useEffect(()=>{
    if (countGroupAtt == 0) return;
    countGroupAtt == 1?setClassAtt1(""):setClassAtt2("");  
    countGroupAtt>=2? setClassBtnAddAtt("d-none"):setClassBtnAddAtt("");    

   });

   const changeAtt = (event:any, index:any)=>{     

    // todo: Get Value id of att-----------
     let value = "";
     let name = "";
     if (typeof event == "string") {
       value = event;
     }else{
        value = event.target.value;
        const idx = event.nativeEvent.target.selectedIndex;
        name = event.nativeEvent.target[idx].text;    
     }

    //  todo: Initialize variable of child Att--------
    const stateChildAttList = childAttList;
    const childAtt = {
      att_id:value,
      name:name,
      childs:[]
    }
    childAttList.push(childAtt);
    setChildAttList(childAttList);

     const tempAttributeList:any = JSON.parse(JSON.stringify(atributeList));
      const arr = orgAttributeList.filter(e=>e.parent_id == value) as Array<Attribute>;             
      
      tempAttributeList[index] = arr;
     
     setAttributeList(tempAttributeList);    

    // todo: Set Selected Att---------------
      const tempSeletecAtt = selectedAtt;
      tempSeletecAtt[index] = value;
      setSelectedAtt(tempSeletecAtt);  

      let tmpParentAttList = paAttList;
      const stateParentAttList = parentAttList;

      // todo: Check group Att duplicate----------
      if (index == 0){
        const restIndex = 1 - index;
        const idx = tmpParentAttList.findIndex((e:any)=>e.id == value);
        tmpParentAttList.splice(idx, 1);
        stateParentAttList[restIndex] = tmpParentAttList;
        
        setParentAttList(stateParentAttList);
      }
     
      
      // todo: Set Parrent Att------------------
      
   }

   useEffect(()=>{
     console.log("attribute list: ", atributeList); 

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

                      {atributeList.map((item:any,index:any)=>(
                         <div key={index} className={"position-relative form-group row align-items-center " + classAtt[index]} >                       
                                
                         <i role="button" onClick={()=>removeGroupAtt(index)} style={{left:"80%", top: "20%", fontSize:"20px"}} className={"fa fa-times  text-danger float-right position-absolute" + classAtt[index]}/>

                       <label className="col-lg-5 col-xl-3 control-label text-lg-start mb-0 "  >Nhóm phân loại {index+1}</label>
                       <div className="col-lg-7 col-xl-6">
                             <div className="row mb-4">                                  
                                 <label className="col-4 d-flex align-items-center">Tên nhóm phân loại:</label>                            
                                 <div className="col-8">

                                
                                 <select  onChange={(event)=>changeAtt(event,index)} className="form-control form-control-modern" name="stockStatus" value={selectedAtt[index]}>
                                      <option value="" disabled selected>Chọn nhóm phân loại</option>
                                      {parentAttList[index].map((item,index)=>(
                                          <option key={index} value={item.id}>{item.value}</option>                                           
                                        
                                        ))                                                
                                      }
                                 </select>

                               </div> 

                                                   
                           </div>

                           <div className="row">
                                 <label className="col-4 d-flex align-items-center">Phân loại hàng</label>                            

                                 <div className="col-8">  

                                    <Multiselect
                                        className="form-control form-control-modern"
                                        options={atributeList[index]} // Options to display in the dropdown
                                        displayValue="value" // Property name to display in the dropdown options
                                        placeholder="Chọn phân loại"
                                    />                           
                                        
                                    {/* <select className="form-control form-control-modern" name="stockStatus">
                                                {
                                               
                                               atributeList[index].map((item1,index1)=>(
                                                <option key={index1} value={item1.id}>{item1.value}</option>                                                                                         
                                              ))                                                
                                            }
                                          
                                    </select> */}
                                         
                                        
                                 </div>                           
                           </div>

              
                         
                       </div>
                     </div>

                      ))

                      }
                      

                  

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

                    {/* todo: Product Child Table----------------- */}
                    <div className="card-body">

                    <table className="table table-bordered table-striped mb-0" id="datatable-editable">
        <thead>
          <tr>
            {childAttList.map((item, index)=>{
              return(           <th>{item.name}</th>)
            })}
           
            <th>Mã vạch</th>
            <th>Giá bán</th>
            <th>Giá gốc</th>
            <th>SKU phân loại</th>
            <th>SKU Số lượng tồn kho</th>
          </tr>
        </thead>
        <tbody>
          <tr data-item-id={1}>
            {childAttList.map((item, index)=>{
                return(           <td></td>)
            })}

            <td>
            <input type="text" className="form-control input-block" defaultValue="Gecko" />
            </td>
            <td> 
               <input type="text" className="form-control input-block" defaultValue="Gecko" />
            </td>
            <td className="actions">
              <input type="text" className="form-control input-block" defaultValue="Gecko" />
            </td>
            <td className="actions">
              <input type="text" className="form-control input-block" defaultValue="Gecko" />
            </td>
            <td className="actions">
              <input type="text" className="form-control input-block" defaultValue="Gecko" />
            </td>
          </tr>       
         
        </tbody>
      </table>
        {/* <table className="table table-responsive-md table-hover mb-0">
          <thead>
            <tr>
              <th>#</th>
              <th>Màu sắc</th>
              <th>Mã vạch</th>
              <th>Giá bán</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>              
              <td>              

              </td>
              <td><input type="text" className="form-control form-control-modern" name="sku" defaultValue="" required /></td>
            </tr>
        
          </tbody>
        </table> */}
      </div>
                    {/* !end: Product Child Table----------------- */}

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

export default ProductCUPage;
