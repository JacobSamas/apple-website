import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/images/apple.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Apple iPhone</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
