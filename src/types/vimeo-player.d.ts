declare module "@vimeo/player" {
  export default class Player {
    constructor(element: HTMLIFrameElement | HTMLElement | string, options?: Record<string, unknown>);

    ready(): Promise<void>;
    play(): Promise<void>;
    pause(): Promise<void>;
    destroy(): Promise<void>;

    on(event: "error", callback: (error: unknown) => void): void;
    on(event: string, callback: (...args: unknown[]) => void): void;
  }
}
