// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="astro/client" />

interface Window {
  getController: (key: string) => AbortController;
}