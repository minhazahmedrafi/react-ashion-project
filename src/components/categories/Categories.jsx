import React from "react";
import "./categories.scss";
const Categories = () => {
  return (
    <div className="categories" id="categories">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="womensFashion">
            <div className="categoriesItemLarge">
              <div className="categoriesText">
                <h1>Women’s fashion</h1>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incidid-unt labore edolore magna aliquapendisse ultrices
                  gravida.
                </p>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="mensFashion">
                <div className="categoriesItemSmall">
                  <div className="categoriesText">
                    <h4>Men’s fashion</h4>
                    <p>358 items</p>
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="kidsFashion">
                <div className="categoriesItemSmall">
                  <div className="categoriesText">
                    <h4>Kid’s fashion</h4>
                    <p>273 items</p>
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="cosmetics">
                <div className="categoriesItemSmall">
                  <div className="categoriesText">
                    <h4>Cosmetics</h4>
                    <p>159 items</p>
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="accessories">
                <div className="categoriesItemSmall">
                  <div className="categoriesText">
                    <h4>Accessories</h4>
                    <p>792 items</p>
                    <a href="#">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
