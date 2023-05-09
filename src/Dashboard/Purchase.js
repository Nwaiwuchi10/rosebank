import React from "react";
import "./Purchase.css";
import { FaRegCreditCard, FaMoneyCheck, FaPhone } from "react-icons/fa";

export const Purchase = () => {
  return (
    <div>
      <div className="div-main2">
        <div className="div-brancher">
          <span>
            <FaMoneyCheck className="f-icon" />
          </span>
          <p>Deposit</p>
        </div>
        <div className="div-brancher2">
          <span>
            <FaPhone className="f-icon" />
          </span>
          <p>Airtime</p>
        </div>
        <div className="div-brancher3">
          <span>
            <FaRegCreditCard className="f-icon" />
          </span>
          <p>Pay Bills</p>
        </div>
      </div>
    </div>
  );
};
