import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { persianLocale } from "localization/fa";
import useMainStore from "store/main.store";
import { MantineProvider } from "@mantine/core";

const { lang, direction } = useMainStore.getState();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider messages={persianLocale} locale={lang} defaultLocale="en">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          dir: direction,
          fontFamily: "IRANSans"
        }}
      >
        <App />
      </MantineProvider>
    </IntlProvider>
  </React.StrictMode>
);

document.getElementsByTagName("html")[0].setAttribute("dir", direction);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
