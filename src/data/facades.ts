export type Facade = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

const make = (
  id: string,
  folder: "catalog1" | "catalog2",
  name: string
): Facade => ({
  slug: id,
  name,
  description:
    "Крашеный фасад МДФ. Любой цвет RAL, эмаль в матовом или глянцевом исполнении.",
  image: `/images/${folder}/${id.replace(`${folder}-`, "")}.png`,
});

export const facades: Facade[] = [
  // Catalog 1 — 28 моделей
  make("catalog1-image1",  "catalog1", "Фасад C1-1"),
  make("catalog1-image2",  "catalog1", "Фасад C1-2"),
  make("catalog1-image3",  "catalog1", "Фасад C1-3"),
  make("catalog1-image4",  "catalog1", "Фасад C1-4"),
  make("catalog1-image5",  "catalog1", "Фасад C1-5"),
  make("catalog1-image6",  "catalog1", "Фасад C1-6"),
  make("catalog1-image7",  "catalog1", "Фасад C1-7"),
  make("catalog1-image8",  "catalog1", "Фасад C1-8"),
  make("catalog1-image10", "catalog1", "Фасад C1-10"),
  make("catalog1-image11", "catalog1", "Фасад C1-11"),
  make("catalog1-image12", "catalog1", "Фасад C1-12"),
  make("catalog1-image13", "catalog1", "Фасад C1-13"),
  make("catalog1-image14", "catalog1", "Фасад C1-14"),
  make("catalog1-image15", "catalog1", "Фасад C1-15"),
  make("catalog1-image16", "catalog1", "Фасад C1-16"),
  make("catalog1-image17", "catalog1", "Фасад C1-17"),
  make("catalog1-image19", "catalog1", "Фасад C1-19"),
  make("catalog1-image20", "catalog1", "Фасад C1-20"),
  make("catalog1-image21", "catalog1", "Фасад C1-21"),
  make("catalog1-image22", "catalog1", "Фасад C1-22"),
  make("catalog1-image23", "catalog1", "Фасад C1-23"),
  make("catalog1-image24", "catalog1", "Фасад C1-24"),
  make("catalog1-image25", "catalog1", "Фасад C1-25"),
  make("catalog1-image26", "catalog1", "Фасад C1-26"),
  make("catalog1-image27", "catalog1", "Фасад C1-27"),
  make("catalog1-image28", "catalog1", "Фасад C1-28"),
  make("catalog1-image29", "catalog1", "Фасад C1-29"),
  make("catalog1-image30", "catalog1", "Фасад C1-30"),

  // Catalog 2 — 21 модель
  make("catalog2-image1",  "catalog2", "Фасад C2-1"),
  make("catalog2-image2",  "catalog2", "Фасад C2-2"),
  make("catalog2-image3",  "catalog2", "Фасад C2-3"),
  make("catalog2-image4",  "catalog2", "Фасад C2-4"),
  make("catalog2-image8",  "catalog2", "Фасад C2-8"),
  make("catalog2-image9",  "catalog2", "Фасад C2-9"),
  make("catalog2-image10", "catalog2", "Фасад C2-10"),
  make("catalog2-image11", "catalog2", "Фасад C2-11"),
  make("catalog2-image12", "catalog2", "Фасад C2-12"),
  make("catalog2-image13", "catalog2", "Фасад C2-13"),
  make("catalog2-image14", "catalog2", "Фасад C2-14"),
  make("catalog2-image16", "catalog2", "Фасад C2-16"),
  make("catalog2-image17", "catalog2", "Фасад C2-17"),
  make("catalog2-image18", "catalog2", "Фасад C2-18"),
  make("catalog2-image19", "catalog2", "Фасад C2-19"),
  make("catalog2-image20", "catalog2", "Фасад C2-20"),
  make("catalog2-image21", "catalog2", "Фасад C2-21"),
  make("catalog2-image22", "catalog2", "Фасад C2-22"),
  make("catalog2-image23", "catalog2", "Фасад C2-23"),
  make("catalog2-image24", "catalog2", "Фасад C2-24"),
  make("catalog2-image25", "catalog2", "Фасад C2-25"),
];

export function getFacade(slug: string) {
  return facades.find((f) => f.slug === slug);
}