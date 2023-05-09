import React from "react";
import "./Footers.css";

const Footers = () => {
  return (
    <div className="footers-main-div">
      <div className="footers-div">
        <div className="footers-col">
          <div className="footers-sub-div">
            <div className="footers-h1">Lagos Nigeria</div>
            <div className="footers-h2">
              Phone: <span>800-123-4567</span>{" "}
            </div>
            <div className="footers-h3">
              Email: <span>example@yoursite.com</span>{" "}
            </div>
          </div>
          <div className="footers-sub-div">
            <div className="footers-h1">Accra Ghana</div>
            <div className="footers-h2">
              Phone: <span>800-123-4567</span>{" "}
            </div>
            <div className="footers-h3">
              Email: <span>example@yoursite.com</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
