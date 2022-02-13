import React from "react";
import images from "../../images/product/export";
import Heading from "../heading/Heading";
import "./product.scss";
import { AiFillStar } from "react-icons/ai";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import products from "../../utils/Data";

const Product = () => {
  return (
    <div className="product pad" id="product">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="productHeader">
              <Heading hText={"New product"} />
              <ul
                class="nav nav-pills mb-3 text-end"
                id="pills-tab"
                role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true">
                    All
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-womens-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-womens"
                    type="button"
                    role="tab"
                    aria-controls="pills-womens"
                    aria-selected="false">
                    Women’s
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-mens-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-mens"
                    type="button"
                    role="tab"
                    aria-controls="pills-mens"
                    aria-selected="false">
                    Men’s
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-kids-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-kids"
                    type="button"
                    role="tab"
                    aria-controls="pills-kids"
                    aria-selected="false">
                    Kid’s
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-accessories-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-accessories"
                    type="button"
                    role="tab"
                    aria-controls="pills-accessories"
                    aria-selected="false">
                    Accessories
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-cosmetics-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-cosmetics"
                    type="button"
                    role="tab"
                    aria-controls="pills-cosmetics"
                    aria-selected="false">
                    Cosmetics
                  </button>
                </li>
              </ul>
            </div>
            <div class="tab-content pt-5" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-all"
                role="tabpanel"
                aria-labelledby="pills-all-tab">
                <div className="allContents">
                  <div className="row">
                    {products.map((item, ind) => (
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="singleProduct">
                          <div className="productImg">
                            <img
                              className="img-fluid"
                              src={item.image}
                              alt=""
                            />
                            <div className="imageIcons">
                              <div className="arrow">
                                <BsArrowsAngleExpand />
                              </div>
                              <div className="heart">
                                <VscHeart />
                              </div>
                              <div className="bag">
                                <IoBagOutline />
                              </div>
                            </div>
                          </div>
                          <div className="productContent">
                            <a href="#">{item.title}</a>
                            <div className="starts">
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                              <AiFillStar />
                            </div>
                            <span>{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-womens"
                role="tabpanel"
                aria-labelledby="pills-womens-tab">
                <div className="allContents">
                  <div className="row">
                    {products.map((item, ind) =>
                      item.tag === "women" ? (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="singleProduct">
                            <div className="productImg">
                              <img
                                className="img-fluid"
                                src={item.image}
                                alt=""
                              />
                              <div className="imageIcons">
                                <div className="arrow">
                                  <BsArrowsAngleExpand />
                                </div>
                                <div className="heart">
                                  <VscHeart />
                                </div>
                                <div className="bag">
                                  <IoBagOutline />
                                </div>
                              </div>
                            </div>
                            <div className="productContent">
                              <a href="#">{item.title}</a>
                              <div className="starts">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </div>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-mens"
                role="tabpanel"
                aria-labelledby="pills-mens-tab">
                <div className="allContents">
                  <div className="row">
                    {products.map((item, ind) =>
                      item.tag === "men" ? (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="singleProduct">
                            <div className="productImg">
                              <img
                                className="img-fluid"
                                src={item.image}
                                alt=""
                              />
                              <div className="imageIcons">
                                <div className="arrow">
                                  <BsArrowsAngleExpand />
                                </div>
                                <div className="heart">
                                  <VscHeart />
                                </div>
                                <div className="bag">
                                  <IoBagOutline />
                                </div>
                              </div>
                            </div>
                            <div className="productContent">
                              <a href="#">{item.title}</a>
                              <div className="starts">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </div>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-kids"
                role="tabpanel"
                aria-labelledby="pills-kids-tab">
                <div className="allContents">
                  <div className="row">
                    {products.map((item, ind) =>
                      item.tag === "women" ? (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="singleProduct">
                            <div className="productImg">
                              <img
                                className="img-fluid"
                                src={item.image}
                                alt=""
                              />
                              <div className="imageIcons">
                                <div className="arrow">
                                  <BsArrowsAngleExpand />
                                </div>
                                <div className="heart">
                                  <VscHeart />
                                </div>
                                <div className="bag">
                                  <IoBagOutline />
                                </div>
                              </div>
                            </div>
                            <div className="productContent">
                              <a href="#">{item.title}</a>
                              <div className="starts">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </div>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-accessories"
                role="tabpanel"
                aria-labelledby="pills-accessories-tab">
                <div className="allContents">
                  <div className="row">
                    {products.map((item, ind) =>
                      item.tag === "men" ? (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="singleProduct">
                            <div className="productImg">
                              <img
                                className="img-fluid"
                                src={item.image}
                                alt=""
                              />
                              <div className="imageIcons">
                                <div className="arrow">
                                  <BsArrowsAngleExpand />
                                </div>
                                <div className="heart">
                                  <VscHeart />
                                </div>
                                <div className="bag">
                                  <IoBagOutline />
                                </div>
                              </div>
                            </div>
                            <div className="productContent">
                              <a href="#">{item.title}</a>
                              <div className="starts">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </div>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-cosmetics"
                role="tabpanel"
                aria-labelledby="pills-cosmetics-tab">
                <div className="allContents">
                  <div className="row">
                    {products.map((item, ind) =>
                      item.tag === "women" ? (
                        <div className="col-lg-3 col-md-4 col-sm-6">
                          <div className="singleProduct">
                            <div className="productImg">
                              <img
                                className="img-fluid"
                                src={item.image}
                                alt=""
                              />
                              <div className="imageIcons">
                                <div className="arrow">
                                  <BsArrowsAngleExpand />
                                </div>
                                <div className="heart">
                                  <VscHeart />
                                </div>
                                <div className="bag">
                                  <IoBagOutline />
                                </div>
                              </div>
                            </div>
                            <div className="productContent">
                              <a href="#">{item.title}</a>
                              <div className="starts">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                              </div>
                              <span>{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
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

export default Product;
