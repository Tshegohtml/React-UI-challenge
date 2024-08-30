import React from "react";


function BarGraph() {
  return (
    <div className="main-container">
      <div className="App">
        <h1>Spending - Last 7 Days</h1>
        <div className="graph-container">
          <div className="graph-bar-container graph-bar-container-monday">
            <div className="bar"></div>
            <h1>Mon</h1>
          </div>
          <div className="graph-bar-container graph-bar-container-tuesday">
            <div className="bar"></div>
            <h1>Tue</h1>
          </div>
          <div className="graph-bar-container graph-bar-container-wednesday">
            <div className="bar"></div>
            <h1>Wed</h1>
          </div>
          <div className="graph-bar-container graph-bar-container-thursday">
            <div className="bar"></div>
            <h1>Thu</h1>
          </div>
          <div className="graph-bar-container graph-bar-container-friday">
            <div className="bar"></div>
            <h1>Fri</h1>
          </div>
          <div className="graph-bar-container graph-bar-container-saturday">
            <div className="bar"></div>
            <h1>Sat</h1>
          </div>
          <div className="graph-bar-container graph-bar-container-sunday">
            <div className="bar"></div>
            <h1>Sun</h1>
          </div>
        </div>
        <div className="paragraph">
          <div>
            <h1>Total this month</h1>
            <h2>$478.33</h2>
          </div>
          <div>
            <h1>+2.4%</h1>
            <h2>from last month</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarGraph;
