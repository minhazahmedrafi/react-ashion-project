import React from "react";
import "./trend.scss";
import Heading from "../heading/Heading";
import TrendItem from "./TrendItem";
import itemImages from "../../images/trend/export";

const Trend = ({ hText, title, price, itemImg }) => {
  return (
    <div className="trend" id="trend">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="singleTrend">
              <div className="trendHead">
                <Heading hText={"HOT TREND"} />
              </div>
              <TrendItem
                title={"Chain bucket bag"}
                price={"$ 59.0"}
                itemImg={itemImages.item1}
              />
              <TrendItem
                title={"Pendant earrings"}
                price={"$ 65.0"}
                itemImg={itemImages.item2}
              />
              <TrendItem
                title={"Pendant earrings"}
                price={"$ 45.0"}
                itemImg={itemImages.item3}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="singleTrend">
              <div className="trendHead">
                <Heading hText={"BEST SELLER"} />
              </div>
              <TrendItem
                title={"Cotton T-Shirt"}
                price={"$ 75.0"}
                itemImg={itemImages.item4}
              />
              <TrendItem
                title={"Zip-pockets pebbled tote briefcase"}
                price={"$ 110.0"}
                itemImg={itemImages.item5}
              />
              <TrendItem
                title={"Round leather bag"}
                price={"$ 80.0"}
                itemImg={itemImages.item6}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="singleTrend">
              <div className="trendHead">
                <Heading hText={"FEATURE"} />
              </div>
              <TrendItem
                title={"Bow wrap skirt"}
                price={"$ 45.0"}
                itemImg={itemImages.item7}
              />
              <TrendItem
                title={"Metallic earrings"}
                price={"$ 30.0"}
                itemImg={itemImages.item8}
              />
              <TrendItem
                title={"Flap cross-body bag"}
                price={"$ 120.0"}
                itemImg={itemImages.item9}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trend;
