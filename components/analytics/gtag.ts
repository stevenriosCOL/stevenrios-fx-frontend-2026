// Declaración de tipos para Google Analytics
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

type GtagEventParams = Record<string, unknown>;

export const trackEvent = (name: string, params?: GtagEventParams) => {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", name, params);
};