import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header3.css";

const Header3 = () => {
  return (
    <div className="div-mans">
      <div className="div-jet">
        {/* <Image
          style={{ width: "50%", height: "10vh" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Tr37WVlNq_D90e8CxGWQjuiQ_O_ocxtNRw&usqp=CAU"
          alt="tf "
        /> */}
        <h2>RoseBank</h2>
      </div>
      <div className="div-jet1">
        <Link to="/login" style={{ textDecoration: "none" }}>
          {" "}
          <h2>Login</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header3;
