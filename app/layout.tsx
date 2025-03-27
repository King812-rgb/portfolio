import { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio site",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>

      <body className="bg-black text-white w-full mx-auto px-6 m-10">
        {children}
      </body>
    </html>
  );
}
