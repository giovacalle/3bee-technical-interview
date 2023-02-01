export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://3bee-technical-interview.vercel.app/api"
    : "http://localhost:3000/api";
