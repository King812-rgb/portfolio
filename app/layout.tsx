import "./stylesheet.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="stylesheet.css" />
      </head>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
