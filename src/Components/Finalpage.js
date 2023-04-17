import React, { useState } from "react";
import image from "../CSS/Bigchill.png";
import restDetails from "./Details";
import Header from "./Header";
let FinalPage = (Props) => {
  const pageId = window.location.pathname.split("/")[2] - 0;

  const pageData = restDetails.filter((obj) => {
    return obj.id === pageId;
  })[0];
  let [qty, setquantity] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);
  let [orderUser,setorderUser]= useState({
    userName:"Ramesh",
    email:"ramesh123@gmail.com",
    address:"Bapuji Nagar Hydrabad",
    Phonenumber:7192010193

  })
  let increment = () => {
    const qty = (pageData.qty += 1);
    setquantity(qty);
    let total = qty * pageData.cost;
    setTotalPrice(total);
  };
  let decrement = () => {
    const qty = (pageData.qty -= 1);
    let total = qty * pageData.cost;
    setTotalPrice(total);
    setquantity(qty);
  };
  let loadScript = async ()=>{
     let script = document.createElement('script');
    script.src="https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
    return true
  }

  let makePayment = async()=>{
    // <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
   await loadScript(); 


var options = {
    "key": "rzp_test_RB0WElnRLezVJ5", // Enter the Key ID generated from the Dashboard
    "amount": totalPrice*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Zomato Clone",
    "description": "Online Transaction",
    "image": "https://branditechture.agency/brand-logos/download/zomato/",
    "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler:function (response)
    {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
   
    "prefill": {
        "name": orderUser.userName,
        "email": orderUser.email,
        "contact": orderUser.Phonenumber
    },
  };
    try{
    var rzp1 = window.Razorpay(options);
    rzp1.open();
  }
  catch(error)
  {
   alert("Unable to load . Try Again")
  }
}
  return (
    <>
      <Header />

      <div
        className="modal fade"
        id="modalAccount"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="#exampleModalToggleLabel2">
                UserDetails
              </h1>
            </div>
            <div class="modal-body">
             

              {/* <button
                type="button"
                className="btn-close"
                aria-label="Close"
                data-bs-dismiss="modal"
              >
                
              </button> */}
              <div >

                <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={orderUser.userName}
                    onChange={()=>{}}
                  />
                  <label htmlFor="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={orderUser.email}
                    onChange={()=>{}}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
             
                <div>
                <label htmlFor="exampleInputPassword1" class="form-label">
                    Address
                  </label>
                  <textarea
                    type="textarea"
                    class="form-control"
                    id="exampleInputPassword1"
                    value={orderUser.address}
                    onChange={()=>{}}
                  />
                </div>
                <button class="btn btn-primary m-3" 
                data-bs-target= "#incrementDecrementModalToggle"
                data-bs-toggle="modal" >
                 Back to menu
                </button>
                
                
                <button type="submit" class="btn btn-success" onClick={makePayment}>
                  Pay Now
                </button>
                
                
               
            

              
                </div>
              </div>
            </div>
          </div>
  </div>
      
      <div
        className="modal fade"
        id="incrementDecrementModalToggle"
        aria-hidden="true"
        aria-labelledby="incrementDecrementModalToggle"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered" id="">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">{}</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body ">
              <div className="row p-2">
                <div className="col-8">
                  <p className="mb-1 h6">{pageData.food}</p>
                  <p className="mb-1">{pageData.cost}</p>
                  <p className="small text-muted">{pageData.about}</p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <div className="menu-food-item">
                    <img src={image} alt="" />

                    <button className="btn btn-primary btn-sm add">Add</button>

                    <div className="order-item-count section ">
                      <span className="hand" onClick={decrement}>
                        -
                      </span>

                      <span>{pageData.qty}</span>
                      <span className="hand" onClick={increment}>
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <hr className=" p-0 my-2" />
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <h3>Total: {totalPrice} </h3>

                  <button
                    className="btn btn-danger"
                    data-bs-target="#modalAccount"
                    data-bs-toggle="modal"
                  >
                    Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalAccount"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                name
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlhtmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter full Name"
                  value="deepakkumar"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlhtmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value="deepak@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlhtmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value="Nashik"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Back
              </button>
              <button className="btn btn-success">PROCEED</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <header bgcolor="bg-danger" />
      </div>
      <section>
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="row">
              <div className="col-12 mt-5">
                <div className="restaurant-main-image position-relative">
                  <img src={image} alt="" className="can't Display" />
                  <button
                    className="btn btn-outline-light position-absolute btn-gallery"
                    data-bs-toggle="modal"
                    data-bs-target="#slideShow"
                  >
                    Click To Get Image Gallery
                  </button>
                </div>
              </div>
              <div className="col-12">
                <h3 className="mt-4">{pageData.Name}</h3>
                <div className="d-flex justify-content-between">
                  <ul className="list-unstyled d-flex gap-3">
                    <li>Overview</li>
                    <li>Contact</li>
                  </ul>
                  <a
                    className="btn btn-danger align-self-start"
                    data-bs-toggle="modal"
                    href="#incrementDecrementModalToggle"
                    role="button"
                  >
                    Place Online Order
                  </a>
                </div>
                <hr className="mt-0" />

                <div className="over-view">
                  <p className="h5 mb-4">{pageData.about} </p>

                  <p className="mb-0 fw-bold">{pageData.cussines}</p>
                  <p></p>

                  <p className="mb-0 fw-bold">Average Cost</p>
                  <p>{pageData.cost}</p>
                </div>

                <div className="over-view">
                  <p className="mb-0 fw-bold">Phone Number</p>
                  <p>{pageData.contact}</p>

                  <p className="mb-0 fw-bold">{pageData.address}</p>
                  <p>rDetails</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FinalPage;
