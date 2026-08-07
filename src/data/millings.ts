import type { CSSProperties } from "react";

export type Milling = {
  slug: string;
  name: string;
  description: string;
  pattern: CSSProperties;
};

const line = "#d1d5db";

export const millings: Milling[] = [
  {
    slug: "vertical",
    name: "Вертикальные линии",
    description: "Строгий ритм вертикальных канавок",
    pattern: { backgroundImage: `repeating-linear-gradient(90deg, ${line} 0 2px, transparent 2px 28px)` },
  },
  {
    slug: "horizontal",
    name: "Горизонтальные линии",
    description: "Спокойная горизонтальная графика",
    pattern: { backgroundImage: `repeating-linear-gradient(0deg, ${line} 0 2px, transparent 2px 28px)` },
  },
  {
    slug: "grid",
    name: "Сетка",
    description: "Классическая сетка секций",
    pattern: {
      backgroundImage: `repeating-linear-gradient(90deg, ${line} 0 2px, transparent 2px 56px), repeating-linear-gradient(0deg, ${line} 0 2px, transparent 2px 56px)`,
    },
  },
  {
    slug: "frame",
    name: "Рамка",
    description: "Одна рамка по периметру",
    pattern: { boxShadow: `inset 0 0 0 2px ${line}` },
  },
  {
    slug: "double-frame",
    name: "Двойная рамка",
    description: "Две рамки по периметру",
    pattern: { boxShadow: `inset 0 0 0 2px ${line}, inset 0 0 0 12px #fff, inset 0 0 0 14px ${line}` },
  },
  {
    slug: "diagonal",
    name: "Диагональ",
    description: "Выразительные диагональные линии",
    pattern: { backgroundImage: `repeating-linear-gradient(45deg, ${line} 0 2px, transparent 2px 28px)` },
  },
  {
    slug: "classic",
    name: "Фигурная",
    description: "Классическая фигурная фрезеровка",
    pattern: { boxShadow: `inset 0 0 0 2px ${line}, inset 0 0 0 10px #fff, inset 0 0 0 12px ${line}` },
  },
  {
    slug: "smooth",
    name: "Без фрезеровки",
    description: "Гладкий фасад, чистая плоскость",
    pattern: {},
  },
];