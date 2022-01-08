import React, { useEffect, useState } from "react";
import ReactDom from "react-dom"
import App2 from "./App2"
import TodoList from "./TodoList"
import CompApp from "./contextApi/CompApp"
import UseEffectComp from "./UseEffect/UseEffectComp"
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./clientSideRouting/RouterApp"
import store from "./redux/store";
import { Provider } from "react-redux";
import ReduxApp from "../src/redux/ReduxApp"
ReactDom.render(<>
    {/* <BrowserRouter>
        <RouterApp/>
    </BrowserRouter> */}
    <Provider store={store}>
    <ReduxApp/>
    </Provider>

    </>,document.getElementById('root'))