import React from "react";
import Banner from "../../components/banner/Banner";
import Categories from "../../components/categories/Categories";
import Discount from "../../components/discount/Discount";
import Footer from "../../components/footer/Footer";
import Instagram from "../../components/instagram/Instagram";
import Navbar from "../../components/navbar/Navbar";
import Product from "../../components/product/Product";
import Services from "../../components/services/Services";
import Trend from "../../components/trend/Trend";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Product />
      <Banner />
      <Trend />
      <Discount />
      <Services />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home;
