import React, { useState } from "react";
import "./App.css";
import { Tab, TabContent } from "./Tabs";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const changeTab = (key) => {
    setCurrentTab(key);
  };

  const [tabNum, setTabNum] = useState(0);
  const tabTitleGen = () => {
    setTabNum(tabNum + 1);
    return "Tab " + tabNum;
  };
  const [tabsArray, setTabArray] = useState([]);

  const addTab = () => {
    setTabArray([...tabsArray, { id: tabNum, title: tabTitleGen() }]);
  };
  const removeTab = (id) => {
    setTabArray(tabsArray.filter((tab) => tab.id !== id));
  };

  return (
    <div>
      <div className="bloc-tabs">
        {tabsArray.map((tab) => (
          <Tab
            id={tab.id}
            text={tab.title}
            activeTab={currentTab}
            changeTab={() => changeTab(tab.id)}
            deleteTab={() => removeTab(tab.id)}
          />
        ))}
        {tabsArray.length === 0 ? (
          <button onClick={addTab} className="newTab">
            Add Tab
          </button>
        ) : (
          <button onClick={addTab} className="addTab">
            +
          </button>
        )}
      </div>

      <div className="content-tabs">
        {tabsArray.map((tab) => (
          <TabContent id={tab.id} text={tab.title} activeContent={currentTab} />
        ))}
      </div>
    </div>
  );
}

export default App;
