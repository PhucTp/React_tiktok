import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Globalstyles from "./components/Globalstyles";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Globalstyles>
            <App />
        </Globalstyles>
    </React.StrictMode>
);
