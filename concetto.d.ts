
declare module concetto {
  export interface WebViewOptions {
    x: number,
    y: number,
    width: number,
    height: number,
    id: string,
    file: string
  }

  export namespace view {
    export function createWebView(options: WebViewOptions): void
  }

  export namespace commands {
    export function registerCommand(command: string, callback: (...args: any[]) => any): any
  }
}