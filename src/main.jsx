import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "@/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<div className="text-xl font-semibold h-screen w-screen flex items-center justify-center">Loading.....</div>}>
      <App/>
   </Suspense>
  </Provider>
);
