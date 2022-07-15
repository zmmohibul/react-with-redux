import React from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

function App() {
    let name = "Mohib"
    return (
        <div>
            <h1>Hi there {name}</h1>
            <h2>{new Date().toLocaleDateString()}</h2>
            <input style={{ color: 'red' }} type="number" min={5} />
        </div>        
    );
}

root.render(<App />);