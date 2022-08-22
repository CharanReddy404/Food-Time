import React from "react";

function App() {
    const time = new Date().toLocaleTimeString("IT-it").slice(0, 2);
    let output;
    if (time < 12) {
        output = "Breakfast Time";
    } else if (time >= 12 && time < 18) {
        output = "Lunch Time";
    } else {
        output = "Dinner Time";
    }
    return (
        <div>
            <h1 style={{ color: "black", backgroundColor: "yellow" }}>{output}</h1>
        </div>
    );
}

export default App;