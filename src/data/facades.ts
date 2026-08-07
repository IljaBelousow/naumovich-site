export type Facade = {
  slug: string;
  name: string;
  description: string;
};

export const facades: Facade[] = [
  { slug: "milan", name: "Милан", description: "Строгие вертикальные линии, спокойный ритм фрезеровки." },
  { slug: "praga", name: "Прага", description: "Геометричная сетка с глубокими вертикальными канавками." },
  { slug: "venezia", name: "Венеция", description: "Мягкая классическая фрезеровка с рамкой по периметру." },
  { slug: "neapol", name: "Неаполь", description: "Лаконичный фасад с тонкими горизонтальными линиями." },
  { slug: "firenze", name: "Флоренция", description: "Фрезеровка с изящной двойной рамкой." },
  { slug: "verona", name: "Верона", description: "Крупные прямоугольные секции, современный характер." },
  { slug: "turin", name: "Турин", description: "Минималистичная фрезеровка без рамки, чистая плоскость." },
  { slug: "genoa", name: "Генуя", description: "Диагональный рисунок, выразительная графика фасада." },
];

export function getFacade(slug: string) {
  return facades.find((f) => f.slug === slug);
}