import React, { useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div style={{ marginRight: 10 }}>
              <img
                src="https://cdn-icons.flaticon.com/png/128/4287/premium/4287725.png?token=exp=1646147286~hmac=2efbc3de61c755afd38107dff756bc47"
                data-src="https://cdn-icons.flaticon.com/png/128/4287/premium/4287725.png?token=exp=1646147286~hmac=2efbc3de61c755afd38107dff756bc47"
                alt="Restaurant"
                title="Restaurant"
                width="60"
                height="60"
                className="lzy lazyload--done"
                srcSet="https://cdn-icons.flaticon.com/png/128/4287/premium/4287725.png?token=exp=1646147286~hmac=2efbc3de61c755afd38107dff756bc47 4x"
              ></img>
            </div>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/" className="nav-link px-2 text-secondary btn-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu" className="nav-link px-2 text-white btn-lg">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/Cart" className="nav-link px-2 text-white btn-lg">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Feedback"
                  className="nav-link px-2 text-white btn-lg"
                >
                  Feedback
                </NavLink>
              </li>
            </ul>

            <div style={{ display: "block", marginRight: 20 }}>
              <div>
                <NavLink
                  to="/Cart"
                  component="button"
                  variant="body2"
                  className="text-white btn-lg"
                >
                  <Badge color="secondary">
                    <ShoppingCartIcon />{" "}
                  </Badge>
                </NavLink>
              </div>
            </div>

            <div className="text-end" style={{ marginLeft: 10 }}>
              <button
                type="button"
                className="btn btn-outline-light me-2 btn-sm"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-light me-2 btn-sm"
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
