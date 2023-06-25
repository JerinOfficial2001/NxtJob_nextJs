/** @format */

import counterSlices from "@/src/store/jobReducer";
import "@/styles/globals.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
   const store = configureStore({
      reducer: {
         counter: counterSlices,
      },
   });
   return (
      <>
         <Provider store={store}>
            <Component {...pageProps} />
         </Provider>
      </>
   );
}
