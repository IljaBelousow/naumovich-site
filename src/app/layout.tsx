import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
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
      <body className={plusJakartaSans.className}>
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}