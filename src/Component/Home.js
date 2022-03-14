import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const alignment = {
  marginRight: 100,
  marginTop: 80,
  float: "right",
  color: "black",
};

function Home() {
  return (
    <div>
      <div>
        <b>
          <div className="picStyle">
            <div style={alignment}>
              <h4>Welcome Foodies</h4>
              <p>
                We Are Providing Best In Test Meals For You <br /> We Provide Thali Of Minimum Two Items <br />
                That You Can Design By Youself !
              </p>
              <p>Explore Our Delicious Items Now, <br/> Order Your First Thali Now</p>
              <p>Enjoy 😉</p>
              <NavLink to='/Menu'>
              <button type="button" class="btn btn-outline-success"> Order Now</button>
              </NavLink>
            </div>
          </div>
        </b>
      </div>
    </div>
  );
}

export default Home;

