import { ArrowForwardIos } from "@material-ui/icons";
import React from "react";
import { Button } from "react-bootstrap";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed-div-main">
      <div className="feed-col">
        <div className="feed-h1">DO MORE WITH ROSEBANK</div>
        <div className="feed-h2">OPEN AN ACCOUNT WITH US</div>
      </div>

      <div className="feed-bord">
        <div className="feed-border">
          <div className="glass">
            <img
              className="feed-img"
              src="https://media.istockphoto.com/photos/finance-trade-manager-analysing-stock-market-indicators-for-best-picture-id1187116240?k=20&m=1187116240&s=612x612&w=0&h=mPpQUAo8FC5wD9iudEnsU5CvabLw_dOcqTgsb9bM2AE="
              alt="g"
            />{" "}
          </div>
          <div className="feed-peru">
            <div className="feed-peru-h1">
              Personal <span>/ May 28, 2022</span>
            </div>
            <div className="feed-peru-h2">
              Personal Payment & Auditing Services
            </div>

            <div className="feed-hr"></div>

            <div className="feed-peru-h3">
              by <span>Personal Owner</span>{" "}
            </div>
          </div>
        </div>

        <div className="feed-border">
          <div className="glass">
            {" "}
            <img
              className="feed-img"
              src="https://www.forbes.com/advisor/wp-content/uploads/2021/02/getty_4digital-banking_022221.jpg"
              alt="j"
            />{" "}
          </div>
          <div className="feed-peru">
            <div className="feed-peru-h1">
              Business <span>/ May 28, 2022</span>
            </div>
            <div className="feed-peru-h2">
              Business Payment & Auditing Services
            </div>

            <div className="feed-hr"></div>

            <div className="feed-peru-h3">
              by <span>Business Owner</span>{" "}
            </div>
          </div>
        </div>
        <div className="feed-border">
          <div className="glass">
            {" "}
            <img
              className="feed-img"
              src="https://www.gtreview.com/wp-content/uploads/2019/06/Businessman-Handshake-Network-Connect-Partnership-Agreement_News-543x413.jpg"
              alt="e"
            />{" "}
          </div>
          <div className="feed-peru">
            <div className="feed-peru-h1">
              Company <span>/ September 28, 2021</span>
            </div>
            <div className="feed-peru-h2">
              Company Payment & Auditing Services
            </div>

            <div className="feed-hr"></div>

            <div className="feed-peru-h3">
              by <span>Company Owner</span>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="feed-bug">
        <Button>View All Post</Button>{" "}
        {/* <ArrowForwardIos
          style={{
            fontSize: "12px",

            display: "flex",
            marginTop: "-13px",

            marginLeft: "135px",
          }}
        />{" "} */}
      </div>
    </div>
  );
};

export default Feed;
