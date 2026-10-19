import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ИП Наумович — производство крашеных фасадов МДФ",
  description:
    "Изготовление мебельных деталей из МДФ — крашеных и шпонированных. Мебель на заказ по индивидуальным параметрам.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}