import React, { useContext, useEffect, useState } from "react";

import demoStateContext from "context/demoState";
import demoPropsContext from "context/demoProps";

import * as Common from "common/components";

interface IProps {}

const Demo = (props: IProps) => {
  // init
  const { demoState, setDemoState } = useContext(demoStateContext);
  const { demoProps, setDemoProps } = useContext(demoPropsContext);
  const modules: { [key: string]: { name: string; components: any } } = {
    Common: {
      name: "Common",
      components: Common,
    },
  };

  // useEffect
  useEffect(() => {
    if (!setDemoState) return;
    setDemoState({ active: true, component: "", module: "" });
  }, [setDemoState]);

  // handlers
  const moduleChange = (module: string) => {
    setDemoState((prevState: any) => {
      return { ...prevState, module: module, demoProps: {} };
    });
  };
  const componentChange = (component: string) => {
    setDemoState((prevState: any) => {
      return { ...prevState, component: component, demoProps: {} };
    });
  };
  const propChanged = (key: string, value: any) => {
    setDemoProps({
      ...demoProps,
      [key]: { ...demoProps[key], value },
    });
  };
  const changePropState = (key: string, active: any) => {
    setDemoProps({
      ...demoProps,
      [key]: { ...demoProps[key], active },
    });
  };

  // calculated
  const { component = "", module = "" } = demoState;

  return (
    <div>
      <div style={{ display: "block", margin: "5px" }}>
        {Object.keys(modules).map((key, index) => {
          const module = modules[key];
          const { name } = module;
          return (
            <button
              key={index}
              onClick={(e) => {
                moduleChange(name);
              }}
            >
              {name}
            </button>
          );
        })}
      </div>

      {module && (
        <div style={{ display: "block", margin: "5px" }}>
          {Object.keys(modules[module].components).map((key, index) => {
            const component = modules[module].components[key];
            const { name } = component;
            return (
              <button
                key={index}
                onClick={(e) => {
                  componentChange(name);
                }}
              >
                {name}
              </button>
            );
          })}
        </div>
      )}

      {module && component && (
        <div>
          {Object.keys(demoProps ? demoProps : {}).map((key: any) => {
            const propObj = demoProps[key];
            const { description, value, type, required, active } = propObj;
            return (
              <div key={key}>
                <input
                  disabled={required ? true : false}
                  checked={required || active || false}
                  type="checkbox"
                  onChange={(e) => {
                    changePropState(key, e.target.checked);
                  }}
                />
                {type == "text" ? (
                  <input
                    type="text"
                    value={value.toString()}
                    onChange={(e) => {
                      propChanged(key, e.target.value);
                    }}
                  />
                ) : (
                  <span>
                    {key}: {value.toString()}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {module && component && (
        <div style={{ display: "block", margin: "10px" }}>
          {React.createElement(
            (modules as any)[module].components[component],
            Object.keys(demoProps).reduce(
              (acc: { [key: string]: any }, key: string) => {
                if (demoProps[key].required || demoProps[key].active)
                  acc[key] = demoProps[key].value;
                return acc;
              },
              {}
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Demo;
