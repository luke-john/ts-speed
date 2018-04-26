declare const global: {
  config: {
    [key: string]: string;
  };
};

// @ts-ignore
global.config = {
  foo: "FOO",
  // we may want to turn this into a string later so it's serializable
  startUpTime: new Date()
};
