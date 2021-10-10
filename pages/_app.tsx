import { useState } from "react";

import demoStateContext from "context/demoState";
import demoPropsContext from "context/demoProps";

function MyApp({ Component, pageProps }: any) {
  // state
  const [demoState, setDemoState] = useState({
    active: false,
    component: "",
    module: "",
  });
  const [demoProps, setDemoProps] = useState({});

  return (
    <demoPropsContext.Provider value={{ demoProps, setDemoProps }}>
      <demoStateContext.Provider value={{ demoState, setDemoState }}>
        <Component {...pageProps} />
      </demoStateContext.Provider>
    </demoPropsContext.Provider>
  );
}

export default MyApp;
