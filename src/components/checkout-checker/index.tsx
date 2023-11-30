"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";

const Checker = ({ status, number, text }: string | any) => {
  /* epected status:
   * waiting
   * completed
   * active
   */
  const [checkStatus, setCheckStatus] = useState("waiting");

  function handleStatus() {
    console.log(status);
    if (status === "completed") {
      setCheckStatus("completed");
    } else if (status === "active") {
      setCheckStatus(status);
    } else {
      setCheckStatus("waiting");
    }
  }
  useEffect(() => {
    handleStatus();
  }, [status]);

  let textActive = () => {
    if(checkStatus === "active"){
      return "textActive"
    }
  }

  return (
    <div className="checkoutChecker_container">
     
      <div className={checkStatus}>
        {checkStatus === "completed" ? (
          <img src="/images/icons/check2.png" alt="" />
        ) : (
          <p>{number}</p>
        )}
      </div>
      <p className={textActive()}>{text}</p>
    </div>
  );
};

export default Checker;
