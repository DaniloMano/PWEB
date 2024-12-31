export default function Page1Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div>Menu principal</div>
          {children}
        </div>
      </body>
    </html>
  );
}
