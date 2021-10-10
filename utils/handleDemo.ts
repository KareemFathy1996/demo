const handleDemo = (
  demoState: { active: boolean; component: string; module: string },
  setDemoProps: ({}) => void,
  demoData: any,
  component: string,
  module: string
) => {
  const { active, component: demoComponent, module: demoModule } = demoState;
  if (active && component == demoComponent && module == demoModule)
    setDemoProps(demoData);
};

export default handleDemo;
