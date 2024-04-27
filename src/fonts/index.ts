import localFont from "next/font/local";

export const pixeboy = localFont({
  src: "./Pixeboy.ttf",
  variable: "--font-pixeboy",
});

export const gohu = localFont({
  src: [
    {
      path: "./Gohu/GohuFont14NerdFont-Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-gohu",
});
