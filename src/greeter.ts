const hello = "Hello, ";
export const greetOnce = (message: string) => {
  console.log(message);
};

export const greet = (message: string, times: number) => {
  for (let t = 1; t <= times; t++) {
    console.log(message);
  }
};

export const greets = (...messages: string[]) => {
  messages.forEach((message) => {
    console.log(message);
  });
};

export const greetPrefixed = (prefix: string, message: string) => {
  console.log(prefix + message);
};

export const greetsPrefixed = (prefix: string, ...messages: string[]) => {
  messages.forEach((message) => {
    console.log(prefix + message);
  });
};

export const greetHello = (message: string) => {
  console.log(hello + message);
};

export const greetsHello = (...messages: string[]) => {
  messages.forEach((message) => {
    console.log(hello + message);
  });
};
