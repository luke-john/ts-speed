declare const global: {
  config: {
    [key: string]: string;
  };
  // tslint:disable-next-line:no-any
  house: any;
};

// @ts-ignore
global.config = {
  foo: "FOO",
  // we may want to turn this into a string later so it's serializable
  startUpTime: new Date()
};
