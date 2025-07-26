import "./globals.css";

export const metadata = {
  title: "Fat to Fit Fitness Gym",
  description: "Fat To Fit Fitness Gym (Biggest Gym in Al Barsha)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
