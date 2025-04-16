
import type { Metadata } from "next";
import './assets/css/materialdesignicons.min.css'
import './assets/scss/tailwind.scss'
import "./globals.css"

export const metadata: Metadata = {
  title: "МАКСИМУМ - Спортивно-образовательный центр",
  description: "Спортивно-образовательный центр МАКСИМУМ - курсы и программы для всестороннего развития",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="light scroll-smooth" dir="ltr">
      <body className="dark:bg-slate-900">
        {children}
      </body>
    </html>
  );
}
