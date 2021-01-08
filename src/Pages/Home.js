import React from "react";
import MenuBar from "../Menu/MenuBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <MenuBar />
      <div
        className="herobg"
        style={{ backgroundImage: "url('/images/hero2.jpg')" }}
      >
        <div className="container">
          <h1>Hire Experts & Get Your Job Done Fast!</h1>
          <div className="search-sec">
            <div className="container">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <input
                          type="text"
                          className="form-control search-slt"
                          placeholder="Search"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <input
                          type="text"
                          className="form-control search-slt"
                          placeholder="Choose category"
                        />
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <select className="form-control search-slt">
                          <option>Choose Location</option>
                          <option>Lagos</option>
                          <option>Abuja</option>
                          <option>Port Harcourt</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                        <button type="button" className="btn  wrn-btn">
                          EXPLORE NOW
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
       <div className="categories">
       <div className="container pb-5">
           <h1 className="pb-4">Services </h1>
           
        <div className="categories__item__list">
          <div className="categories__item">
            <img src="/images/cat1.png" alt="" />
            <h5>Automotive</h5>
            <span>78 Listings</span>
          </div>
          <div className="categories__item">
            <img src="/images/cat2.png" alt="" />
            <h5>Electricians</h5>
            <span>32 Listings</span>
          </div>
          <div className="categories__item">
            <img src="/images/cat3.png" alt="" />
            <h5>Car Services</h5>
            <span>16 Listings</span>
          </div>
          <div className="categories__item">
            <img src="/images/cat4.png" alt="" />
            <h5>Laundry</h5>
            <span>55 Listings</span>
          </div>
          <div className="categories__item">
            <img src="/images/cat5.png" alt="" />
            <h5>Furnitures</h5>
            <span>23 Listings</span>
          </div>
        </div>
      </div>
       </div>
       
       <div className="how-it-works">
           <div className="container">
           <h1>How it Works</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
               labore et dolore magna aliqua. Ut enim ad minim veniam,Ut enim ad minim veniam, 
               quis nostrud exercitation quis nostrud exercitation.</p>
           </div>
           <div className=" container  ">
               <div className="row">
                   <div className="col-md-6"> 
                        <div className="row">
                            <div className="col-6">
                                <div className="box1">
                                <img src="/images/cat6.png" alt="" />
                                <h6>Location & Categories</h6>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="box1">
                                <img src="/images/cat7.png" alt="" />
                                <h6>Explore Listting</h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="box1">
                                <img src="/images/cat8.png" alt="" />
                                <h6>Making Appointments</h6>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="box1">
                                <img src="/images/cat9.png" alt="" />
                                <h6>Payment</h6>
                                </div>
                            </div>
                        </div>
                   </div>
                     <div className="col-md-6">
                        <div className="img-dv text-right">
                            <img src="/images/Preferences.gif" className="img-fluid" alt="" />
                      </div>
                    </div>

               </div>
               
           </div>
       </div>
       <div className="why-choose-us" style={{ backgroundImage: "url('/bg-dw.jpg')" }}>
            <div className="container">
              <div className="text-center pt-4">
              <h3>Why Choose Us?</h3>
              </div>
              <div className="row text-center">
                            <div className="col-md-4">
                                <div className="box2">
                                <img src="/images/meet-new-customers.png" width="80px" className="img-fluid" alt="" />
                                 <div className="contents">
                                    <h5>Meet new customers</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                 </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <div className="box2">
                                <img src="/images/grow-your-revenue.png"  width="80px" alt="" />
                                <div className="contents">
                                    <h5>Grow your revenue</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                 </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box2">
                                  <img src="/images/build-your-onlines.png"  width="80px" alt="" />
                                  <div className="contents">
                                      <h5>Build your online reputation</h5>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
                                  </div>
                                </div>
                            </div>
                        </div>
            </div>
       </div>
       <div className="support" >
          
           <div className=" container-fluid">
               <div className="row">
                  <div className="col-md-6">
                  <img src="/images/customersupport.jpg" className="img-fluid" alt="" />
                    </div>
                   <div className="col-md-6 "> 
                       <div className="pt-5 pl-5 pr-4">
                       <div className="pt-5">
                   <h1>Safe & Secured <br></br>Platform</h1>
                   <h1>With 24/7 Support.</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut sed do eiusmod tempor incididunt ut</p>
                   </div>
                   <div className=" ">
                            <img src="/images/apple.svg" className="img-fluid pr-2" width="130px" alt="" />
                            <img src="/images/apple1.svg" className="img-fluid" width="130px" alt="" />
                      </div>
                       </div>
                   </div>
               </div>
               
           </div>
        {/*footer starts from here*/}
<footer className="footer">
  <div className="container bottom_border">
    <div className="row">
      <div className=" col-sm-4 col-md col-sm-4  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
        {/*headin5_amrc*/}
        <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <p><i className="fa fa-location-arrow" />Lagos, Nigeria </p>
        <p><i className="fa fa-phone" />  08065684757</p>
        <p><i className="fa fa fa-envelope" /> info@example.com</p>
      </div>
      <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
        {/*headin5_amrc*/}
        <ul className="footer_ul_amrc">
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
        </ul>
        {/*footer_ul_amrc ends here*/}
      </div>
      <div className=" col-sm-4 col-md  col-6 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
        {/*headin5_amrc*/}
        <ul className="footer_ul_amrc">
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
          <li><a href="">dummy text </a></li>
        </ul>
        {/*footer_ul_amrc ends here*/}
      </div>
      <div className=" col-sm-4 col-md  col-12 col">
        <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
        {/*headin5_amrc ends here*/}
        <ul className="footer_ul2_amrc">
          <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https:/instagram.com/</a></p></li>
          <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://facebook.com/</a></p></li>
          <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https:/twitter.com/</a></p></li>
        </ul>
        {/*footer_ul2_amrc ends here*/}
      </div>
    </div>
  </div>
  <div className="container">
    <ul className="foote_bottom_ul_amrc">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Post a Job</a></li>
      <li><a href="">Contact</a></li>
    </ul>
    {/*foote_bottom_ul_amrc ends here*/}
    <p className="text-center">Copyright @2021 </p>
    {/* <ul className="social_footer_ul">
      <li><a href="http://webenlance.com"><i className="fab fa-facebook-f" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-twitter" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-linkedin" /></a></li>
      <li><a href="http://webenlance.com"><i className="fab fa-instagram" /></a></li>
    </ul> */}
    {/*social_footer_ul ends here*/}
  </div>
</footer>

       </div>
    </>
  );
};

export default Home;
