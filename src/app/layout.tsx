import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Изготовление мебели и крашеных фасадов МДФ — ИП Наумович",
  description:
    "Изготовление мебели и крашеных фасадов из МДФ по индивидуальным размерам. Каталог фрезерованных фасадов, мебельных деталей и интерьерных решений.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}