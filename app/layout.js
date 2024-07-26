//import { Inter } from "next/font/google";
import "./globals.css";

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Manuel Martínez Bernal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 bg-fixed bg-cover text-white bg-custom-gradient">{children}</body>
    </html>
  );
}
