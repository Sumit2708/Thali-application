import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="bg-dark text-white space">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-2 btn-sm">
              <h5>All Menu</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Chapati
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Pickle
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Curd
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Sweets
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Paneer
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Daal
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-2 btn-sm">
              <h5>Special</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Paneer
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Sweets
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Daal
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Pickle
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-2 btn-sm">
              <h5>Our Best Dishes</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Paneer Tikka
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Butter panner 
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Gulab Jamun
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Rabdi
                  </div>
                </li>
                <li className="nav-item mb-2">
                  <div className="nav-link p-0 text-muted">
                    Daal Makkhani
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-4 offset-1">
              <form>
                <h5>Food Realted Blogs and Offers</h5>
                <p>Weekly digest of whats new and exciting from us.</p>
                <div className="d-flex w-100 gap-2">
                  <label for="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control btn-sm"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary btn-sm" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-between py-4 my-4 border-top">
            <p>© 2022 Food Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-light" href="#">
                <TwitterIcon/>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#">
                <InstagramIcon/>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-light" href="#">
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

// <div ="container">
//   <footer ="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
//     <div ="col-md-4 d-flex align-items-center">
//       <img
//         src="https://cdn-icons.flaticon.com/png/128/4287/premium/4287725.png?token=exp=1646147286~hmac=2efbc3de61c755afd38107dff756bc47"
//         data-src="https://cdn-icons.flaticon.com/png/128/4287/premium/4287725.png?token=exp=1646147286~hmac=2efbc3de61c755afd38107dff756bc47"
//         alt="Restaurant"
//         title="Restaurant"
//         width="40"
//         height="40"
//         className="lzy lazyload--done"
//         srcSet="https://cdn-icons.flaticon.com/png/128/4287/premium/4287725.png?token=exp=1646147286~hmac=2efbc3de61c755afd38107dff756bc47 4x"
//       ></img>
//       <span ="text-muted">© 2021 Company, Inc</span>
//     </div>

//     <ul ="nav col-md-4 justify-content-end list-unstyled d-flex">
//       <li ="ms-3">
//         <a ="text-muted" href="#">
//         <TwitterIcon/>
//         </a>
//       </li>
//       <li ="ms-3">
//         <a ="text-muted" href="#">
//           <InstagramIcon/>
//         </a>
//       </li>
//       <li ="ms-3">
//         <a ="text-muted" href="#">
//         <FacebookIcon/>
//         </a>
//       </li>
//     </ul>
//   </footer>
// </div>
