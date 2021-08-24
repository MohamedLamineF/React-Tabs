import React, { useState } from "react";

const Tab = ({ id, text, activeTab, changeTab, deleteTab}) => {
  return (
    <a
      className={activeTab === id ? "tabs active-tabs" : "tabs"}
      onClick={changeTab}
    >
      {`${text}`}
      <button onClick={deleteTab} style={{cursor:"pointer" , color:"Red"}}>X</button>
    </a>
  );
};

const TabContent = ({ id, text, activeContent }) => {
  return (
    <div
      className={activeContent === id ? "content  active-content" : "content"}
    >
      <h2> {`${text}`} Content</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        praesentium incidunt quia aspernatur quasi quidem facilis quo nihil vel
        voluptatum?
      </p>
    </div>
  );
};

export { Tab, TabContent };
