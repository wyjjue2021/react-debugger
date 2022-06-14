/*
 * @Author: 吴俊杰 20717@etransfar.com
 * @Date: 2022-04-18 15:12:39
 * @LastEditors: 吴俊杰 20717@etransfar.com
 * @LastEditTime: 2022-06-14 09:06:30
 * @FilePath: /个人工作/react-debugger/src/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(<App></App>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
