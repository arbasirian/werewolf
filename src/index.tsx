import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";
import { persianLocale } from "localization/fa";
import useMainStore from "store/main.store";
import { MantineProvider, createEmotionCache } from "@mantine/core";
import { DirectionModel } from "models";
import rtlPlugin from "stylis-plugin-rtl";

const { lang, direction } = useMainStore.getState();

const rtlCache = createEmotionCache({
  key: "mantine-rtl",
  stylisPlugins: [rtlPlugin]
});

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
        emotionCache={direction === DirectionModel.RTL ? rtlCache : undefined}
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
