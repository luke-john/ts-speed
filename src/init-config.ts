// tslint:disable no-any

declare namespace NodeJS {
  interface Global {
    config: {
      [key: string]: string;
    };
    house: any;
  }
}

let willBeMutated: any = [];

// tslint:enable no-any

// @ts-ignore
global.config = {
  foo: "FOO",
  // we may want to turn this into a string later so it's serializable
  startUpTime: new Date()
};
