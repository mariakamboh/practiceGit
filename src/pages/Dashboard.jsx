import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import './Dashboard.css';

function Dashboard(){
    return(
        <>
        <div className="grid-container">
        <img src="layout2.png" className="layout1" />
        <img src="Dashboard1.png" className="dashboard" />
        <img src="layout2.png" className="layout2" />
        <h2>hello</h2>
        <h3>helloooo</h3>
        <h1>heyyyyy</h1>

        </div>
        </>
    );
}
const root=createRoot(document.getElementById('root'));
root.render(<Dashboard />);