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
