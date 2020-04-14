declare module 'react-native-simple-compass' {
  type Callback = {
    degree: number;
    accuracy: number;
  }  

  export default class {
    static start(updateInterval: number, callback: (arg: Callback) => any): void;
    static stop(): void;
  }
}
