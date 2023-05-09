import { ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import "./Foot.css";

const Foot = () => {
  return (
    <div className="foot-main-div">
      <div className="foot-flex-div">
        <div className="foot-col1">
          <div className="foot-joy">RoseBank</div>
          <div className="foot-joy-h1">
            When you choose our company you get the guarantee of the high
            quality services and reliability. We serve the unique needs of our
            customers from a variety of industries.
          </div>
        </div>
        <div className="foot-col2">
          <div className="foot-recent">Recent Posts</div>

          <div className="foot-recent-h1">
            Bills Payment & Auditing Services
          </div>
          <div className="foot-recent-h2">
            Busines <span>/28.09.16</span>
          </div>
          <hr className="hr-cos" />
          <div className="foot-recent-h1">
            Saving your Pension-September 2016
          </div>
          <div className="foot-recent-h2">
            Save now before your retirement time <span>/28.09.16</span>{" "}
          </div>
          <hr className="hr-cos" />
        </div>

        <div className="foot-col3">
          <div className="foot-recent-h3">Quick links</div>
          <div className="ul-grid">
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Home
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Services
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              News
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Pricing
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Privacy Policy
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              About Us
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Features
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Contacts
            </div>
            <div>
              <ArrowForwardIos
                className="foot-arr"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "12px",
                }}
              />{" "}
              Our Team
            </div>
          </div>
        </div>
        <div className="foot-col4">
          <div className="foot-news">Newsletter</div>
          <div className="foot-border">
            <input type="text" placeholder="Email address" />
            <span className="foot-border2">
              <FaLocationArrow className="location-arrow" />{" "}
            </span>
          </div>

          <div className="foot-check">
            <input type="checkbox" />
            <span>
              I have read and agree to the
              <sapn className="foot-span-span">terms & conditions</sapn>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
