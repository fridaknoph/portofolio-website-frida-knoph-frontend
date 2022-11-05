const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://portofolio-website-frida-knoph.herokuapp.com"
  : "https://portofolio-website-frida-knoph.herokuapp.com";
