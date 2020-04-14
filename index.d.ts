declare module 'react-native-simple-compass' {
  export default class {
    static start(updateInterval: number, callback: (arg: number) => any): void;
    static stop(): void;
  }
}
