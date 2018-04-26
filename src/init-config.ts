declare const global: {
  config: {
    [key: string]: any;
  };
};

global.config = {
  foo: "FOO",
  // we may want to turn this into a string later so it's serializable
  startUpTime: new Date()
};
