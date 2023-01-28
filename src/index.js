import React from "react"; // لازم يكون موجود في كل ملف
// react include jsx, it likes html
import ReactDOM from "react-dom/client"; // لازم يكون موجود في كل ملف بينعرض في المتصفح
import "./index.css";
import App from "./App";

// ReactDOM.render(what, where);
// what must have only one tag, or return can only return one tag

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
