'use-client';

import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";

export default function CustomProvider({children}) {
    return <Provider store={store}>{children}
    </Provider>
}