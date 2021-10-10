import { createContext } from "react";

interface demoPropsContext {
  demoProps: { [key: string]: any };
  setDemoProps: ({}) => void;
}

const demoPropsContext = createContext<demoPropsContext>(
  {} as demoPropsContext
);

export default demoPropsContext;
