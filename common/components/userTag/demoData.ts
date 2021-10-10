const demoData = {
  title: {
    value: "Title",
    type: "text",
    active: false,
  },
  user: {
    required: true,
    description: "{name, type, age}",
    value: {
      name: "Kareem Fathy",
      type: "client",
      age: 25,
    },
    active: true,
  },
};

export default demoData;
