import React from "react";
import "./App.css";

const Tab = ({ id, text, activeTab, changeTab, deleteTab }) => {
  return (
    <div
      className={activeTab === id ? "tabs active-tabs" : "tabs"}
      onClick={changeTab}
    >
      <p className="tabTitle">{`${text}`}</p>
      <p onClick={deleteTab} className="closeTab">
        X
      </p>
    </div>
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
