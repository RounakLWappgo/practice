import React from 'react'


export default function Home() {
        const data = { "code": "200", "status": "success", "message": "verified", "shopname": "Pranay Shop ", "verificationStatus": "unverified", "useraction": "false", "paymentOptions": { "COD": true, "OP": false }, "deliveryOption": { "storeCollect": true, "doorstep": false }, "additionalDetails": { "contact": 9111378078, "whatsappno": null, "shopCategory": "Electronics", "rating": "3" }, "shopTimings": { "monday": { "status": "open", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" }, "tuesday": { "status": "open", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" }, "wednesday": { "status": "open", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" }, "thursday": { "status": "open", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" }, "friday": { "status": "open", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" }, "saturday": { "status": "open", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" }, "sunday": { "status": "close", "shopOpeningTime": "11:00 AM", "shopClosingTime": "7:00 PM" } }, "address": { "locality": "Indore", "state": "Madhya Pradesh", "pincode": 452009, "country": "India", "addressLine": "394A, Usha Nagar, Indore, Madhya Pradesh 452009, India", "userGivenAddress": "381", "lat": 75.83543255925179, "long": 22.69736177979454 }, "generalCategories": ["Accessories & Supplies", "Camera & Photo", "Car & Vehicle Electronics", "Cell Phones & Accessories"], "shopkeeperCategories": null }
        console.log(data);

        
    return (
        <div>
            <header className="myheader fixed-top">
                <div className="row ">
                    <div className=" logo">
                        <img src={process.env.PUBLIC_URL + "/img/two.svg"} alt="marketmelogo" />
                    </div>
                    <div className="  ">

                    </div>
                    <div className="col-12 right-side">
                        <div className="row right-logo">
                            <div className="col-3 store-logo">
                                <img src={process.env.PUBLIC_URL + "/img/Rectangle198.svg"} alt="" ></img>
                            </div>
                            <div className="col-9 right-text">
                                <h4 className="right-name1">{data.shopname}</h4>
                                {data.verificationStatus==="verified"?
                                <p className="right-name2"><span className="verified-icon mr-1"><img src={process.env.PUBLIC_URL + "/img/Octicons.svg"} alt="" /></span>Verified</p>
                               : <p className="right-name2"><span className="verified-icon mr-1"><img src={process.env.PUBLIC_URL + "/img/one.svg"} alt="" /></span>Unverified</p>
                                    }
                            </div>

                        </div>
                    </div>
                </div>
            </header>

            <div className=" cardsection text-left">
                <h3 >Shop Details:</h3>
                <div className="card ">
                    <div className="col-lg-4 col-12 first-map">
                        <div className="map"><iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={`https://maps.google.com/maps?q='+${data.address.lat}+','+${data.address.long}+'&hl=es&z=14&amp;output=embed`}></iframe>
                        </div>
                    </div>


                    <div className="col-lg-4 col-12 text-left mt-4 ">

                        <div >
                            <h4>Address</h4>
                            <p>{data.address.addressLine}</p>
                        </div>
                        <div>
                            <h4>Contact No:</h4>
                            <span>+91 {data.additionalDetails.contact}</span><br/>

                        </div>
                        <div className="mb-4">
                            <h4>Shop Timings:</h4>
                            <span>Morning: 9:00 a.m to 2:00 p.m. </span><br />
                            <span>Evening: 5:00 p.m to 10:00 p.m.</span>

                        </div>
                        <a href="#" className="btn mb-5"><div className="row my-bt" ><div className="mr-3"><img src={process.env.PUBLIC_URL + "/img/Icons.svg"} alt=""></img></div><div className="whats-text">Whatsapp</div></div></a>
                    </div>

                    <div className="col-lg-4 col-12 text-left mt-4 full-rate">
                        <div >
                            <h4 className="mb-3">Rating: <span className="text-dark">{data.additionalDetails.rating}/ 5</span></h4>
                            <span className="mr-3 mt-2"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                            <span className="mr-3 mt-2"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                            <span className="mr-3 mt-2"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                            <span className="mr-3 mt-2"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                            <span className="mr-3 mt-2"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                        </div>
                        <div className="mt-3">
                            <h4>Shop Category:</h4>
                            <span>
                                {data.additionalDetails.shopCategory}
                            </span>
                        </div>
                        <div className="mt-4 pr-5">
                            <h4>Deals In:</h4>
                            <p>{data.generalCategories[0]}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-card">
                <div className="card">
                    <div className="col-12 map-col">
                        <div className="my-map"><iframe width="100%" height="100%" src={`https://maps.google.com/maps?q=${data.address.lat},${data.address.long} &z=15&output=embed`}  alt=""></iframe>
                        </div>
                    </div>
                </div>
                <div className="row w-100 justify-content-between  ratein">
                    <div className="text-left ">
                        <div className="rate ml-3 mb-4 text-dark">
                            <h4 className="rating-color ml-3 mt-3">Rating: <span className="text-dark">{data.additionalDetails.rating} / 5</span></h4>
                            <div className="star">
                                <span className="mr-1 ml-3"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                                <span className="mr-1"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                                <span className="mr-1"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                                <span className="mr-1"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                                <span className="mr-1"><img src={process.env.PUBLIC_URL + "/img/as.svg"} alt="" /></span>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-whatsapp-btn-my">
                        <a href="#" className="btn  mobile-btn"><div className="row my-bt-mobile" ><div className="mr-2"><img src={process.env.PUBLIC_URL + "/img/Icons.svg"} alt=""></img></div><div className="whats-text-mobile">Whatsapp</div></div></a>
                    </div>
                </div>
                <div>

                </div>


            </div>
            <div className="details ">
                <div className="text-left ml-4 mt-1 mr-5 detail-text" >
                    <h4>Address</h4>
                    <p>{data.address.addressLine}</p>
                </div>
                <div className="text-left ml-4 detail-text mb-3">
                    <h4>Contact No:</h4>
                    <span className="my-p">{data.additionalDetails.contact}</span><br/>

                </div>
                <div className="text-left ml-4 detail-text mb-3">
                    <h4>Shop Timings:</h4>
                    <span>Morning: 9:00 a.m to 2:00 p.m.</span><br />
                    <span>Evening: 5:00 p.m to 10:00 p.m.</span>

                </div>
                <div className="text-left ml-4 detail-text mb-3">
                    <h4>Shop Category:</h4>
                    <span>{data.additionalDetails.shopCategory}</span>

                </div>
                <div className="text-left ml-4 last detail-text">
                    <h4>Deals In:</h4>
                    <p>{data.generalCategories[0]}</p>
                </div>

            </div>
            <div className="complete-footer">
                <div className="container text-center mt-5 ">
                    <p className="head">More features are coming soon</p>
                </div>

                <div className="container-fluid me-footer mt-5 text-center">
                    <div className=" ">
                        <div className="row footerend2 px-5">
                            <div className="col-4 mt-5">
                                <img src={process.env.PUBLIC_URL + "/img/Group659.svg"} alt="" />
                                <h3 className="mt-2">Delivery Options</h3>
                                {data.deliveryOption.storeCollect?
                                <p>Store Collect</p>:
                                <p>Door Step</p>
                                }
                            </div>
                            <div className="col-4 mt-5">
                                <img src={process.env.PUBLIC_URL + "/img/Group661.svg"} alt="" />
                                <h3 className="mt-2">Payment Options</h3>
                                {data.paymentOptions.COD?
                                <p>Cash on Delivery</p>:
                                <p>Online Payment</p>
                                }
                            </div>
                            <div className="col-4 mt-5">
                                <img src={process.env.PUBLIC_URL + "/img/Layer2.svg"} alt="" />
                                <h3 className="mt-2">Customer Support</h3>
                                <p>24x7 customer support</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid w-100">
                        <div className="row ">
                            <div className="col-4 mt-5 text-left shop-details">

                                <h3 className="mt-2">Shop Details</h3>
                                <p className="mt-4">{data.shopname}</p>
                                <span><p className="text-white my-text">{data.address.addressLine}</p></span>
                            </div>
                            <div className="col-4 mt-5 footer-mid">
                                <div className="row">
                                    <div className="col-4 footer-mid1">
                                        <img src={process.env.PUBLIC_URL + "/img/Group125.svg"} alt="" />
                                    </div>
                                    <div className="col-4 footer-mid2">
                                        <img src={process.env.PUBLIC_URL + "/img/Group126.svg"} alt="" />
                                    </div>
                                    <div className="col-4 footer-mid3">
                                        <img src={process.env.PUBLIC_URL + "/img/Atmanirbharbharatwhite.svg"} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 mt-5 contact-details">
                                <div className="text-left ">
                                    <h3 className="mt-2">Contact Details:</h3>
                                    <p className="mt-4">Chat with us on</p>
                                    <a href="#" className="btn mb-5"><div className="row my-bt" ><div className="mr-3"><img src={process.env.PUBLIC_URL + "/img/Icons.svg"} alt=""></img></div><div className="whats-text">Whatsapp</div></div></a>
                                </div>
                            </div>
                            <hr className="container-fluid my-hr" />
                        </div>
                        <div className="row footerend1">

                            <div className="col-4 mt-5 text-center">


                                <p>refunds & return</p>

                            </div>
                            <div className="col-4 mt-5 footer-mid text-center">
                                <p>privacy policy</p>
                            </div>
                            <div className="col-4 mt-5">
                                <div className="text-center mx-5">

                                    <p>terms & condition</p>

                                </div>
                            </div>
                        </div>

                        <div className="row footerend">

                            <p className="lastp">Copyright © 2021 - 2022 MarketMe.Business All Rights Reserved</p>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-footer fixed-bottom">
                <div className="row  p-3">
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL + "/img/Path3559.svg"} alt="" />
                        <p className="clr">Home</p>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL + "/img/Path3560.svg"} alt="" />
                        <p className="font-weight-bold">About Shop</p>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL + "/img/Group_1523.png"} alt="" />
                        <p className="clr">Cart</p>
                    </div>
                    <div className="col-3">
                        <img src={process.env.PUBLIC_URL + "/img/Path3567.svg"} alt="" />
                        <p className="clr">Profile</p>
                    </div>
                </div>
            </div>
        </div >


    )
}
