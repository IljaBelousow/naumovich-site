export type Facade = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

const make = (n: number): Facade => ({
  slug: `f${n}`,
  name: `Фасад ${n}`,
  description:
    "Мебельная деталь из МДФ — крашеная или шпонированная. Любой цвет RAL, матовое или глянцевое исполнение.",
  image: `/images/catalog1/image${n}.jpg`,
});

export const facades: Facade[] = [
  make(1), make(2), make(3), make(4), make(5), make(6), make(7), make(8),
  make(9), make(10), make(11), make(12), make(13), make(14), make(15), make(16),
  make(17), make(18), make(19), make(20), make(21), make(22), make(23), make(24),
  make(25), make(26), make(27), make(28), make(29), make(30), make(31), make(32),
  make(33), make(34), make(35), make(36), make(37), make(38), make(39), make(40),
  make(41), make(42), make(43), make(44), make(45), make(46), make(47),
];

export function getFacade(slug: string) {
  return facades.find((f) => f.slug === slug);
}