import React from "react";

function BarGraph() {
  return (
    <div className="main-container">
      <div className="App">
        <h1>Spending - Last 7 Days</h1>
        <div className="graph-container">
          <div className="box-container">
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-monday"></div>
              <small>mon</small>
            </div>
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-tuesday"></div>
              <small>tues</small>
            </div>
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-wednesday"></div>
              <small>wed</small>
            </div>
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-thursday"></div>
              <small>thurs</small>
            </div>
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-friday">
                <div className="bar"></div>
              </div>
              <small>fri</small>
            </div>
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-saturday">
                <div className="bar"></div>
              </div>
              <small>sat</small>
            </div>
            <div className="bar-container">
              <div className="graph-bar-container" id="graph-bar-container-sunday">
                <div className="bar"></div>
              </div>
              <small>sun</small>
            </div>
          </div>
          <div className="paragraph-container">
            <div className="paragraph-left">
              <small>Total this month</small>
              <h2>$478.33</h2>
            </div>
            <div className="paragraph-right">
              <h1>+2.4%</h1>
              <small>from last month</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarGraph;

