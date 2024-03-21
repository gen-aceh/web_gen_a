export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      DATABASE_URL: string;
      NEXT_PUBLIC_TINY_API_KEY: string;
      NEXT_PUBLIC_EMAILJS_SERVICE_ID: string;
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
    }
  }
}
