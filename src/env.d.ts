// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="astro/client" />

declare module '../utils/eventController.js' {
  export function getController(key: string): AbortController;
  export function abortController(key: string): void;
  export function cleanupAllControllers(): void;
}