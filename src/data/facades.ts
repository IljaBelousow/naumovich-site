export type Facade = {
  slug: string;
  name: string;
  description?: string;  // <-- добавили знак ?
  image: string;
  gallery?: string[];
  category: "milled" | "handles" | "edge" | "work_facades" | "work_furniture";
};

// 1. Фрезерованные фасады (47 шт)
const milledFacades: Facade[] = Array.from({ length: 47 }, (_, i) => {
  const n = i + 1;
  return {
    slug: `f${n}`,
    name: `ИПН-${n}`,
    description: "Фрезерованный фасад МДФ.",
    image: `/images/catalog1/image${n}.jpg`,
    category: "milled",
  };
}).filter(f => f.slug !== "f18");

// 2. Профиль края
const edgeProfile: Facade = {
  slug: "edge-profile",
  name: "Профиль края",
  description: "18 видов профиля кромки.",
  image: "/images/profil_kraya.jpg",
  category: "edge",
};

// 3. Ручки
const handles: Facade[] = [
  { slug: "handle-1", name: "Ручка Gola", description: "Алюминиевый профиль.", image: "/images/handles/gola.jpg", category: "handles" },
];

// 4. Наши работы
const portfolioWorks: Facade[] = [
  { slug: "work-1", name: "Проект 1", category: "work_facades", image: "/images/catalog2/photo1/5195250767357484499.jpg", gallery: ["/images/catalog2/photo1/5195250767357484499.jpg", "/images/catalog2/photo1/5195250767357484500.jpg", "/images/catalog2/photo1/5195250767357484501.jpg"] },
  { slug: "work-2", name: "Проект 2", category: "work_facades", image: "/images/catalog2/photo2/5195250767357484496.jpg", gallery: ["/images/catalog2/photo2/5195250767357484496.jpg", "/images/catalog2/photo2/5195250767357484497.jpg", "/images/catalog2/photo2/5195250767357484498.jpg"] },
  { slug: "work-3", name: "Проект 3", category: "work_facades", image: "/images/catalog2/photo3/5195250767357484492.jpg", gallery: ["/images/catalog2/photo3/5195250767357484492.jpg", "/images/catalog2/photo3/5195250767357484493.jpg", "/images/catalog2/photo3/5195250767357484494.jpg", "/images/catalog2/photo3/5195250767357484495.jpg"] },
  { slug: "work-4", name: "Проект 4", category: "work_facades", image: "/images/catalog2/photo4/5195250767357484510.jpg", gallery: ["/images/catalog2/photo4/5195250767357484510.jpg", "/images/catalog2/photo4/5195250767357484511.jpg", "/images/catalog2/photo4/5195250767357484512.jpg", "/images/catalog2/photo4/5195250767357484513.jpg", "/images/catalog2/photo4/5195250767357484514.jpg"] },
  { slug: "work-5", name: "Проект 5", category: "work_facades", image: "/images/catalog2/photo5/5195250767357484502.jpg", gallery: ["/images/catalog2/photo5/5195250767357484502.jpg", "/images/catalog2/photo5/5195250767357484503.jpg", "/images/catalog2/photo5/5195250767357484504.jpg", "/images/catalog2/photo5/5195250767357484505.jpg"] },
  { slug: "work-6", name: "Проект 6", category: "work_facades", image: "/images/catalog2/photo6/5195250767357484529.jpg", gallery: ["/images/catalog2/photo6/5195250767357484529.jpg", "/images/catalog2/photo6/5195250767357484530.jpg", "/images/catalog2/photo6/5195250767357484531.jpg", "/images/catalog2/photo6/5195250767357484532.jpg"] },
  { slug: "work-7", name: "Проект 7", category: "work_facades", image: "/images/catalog2/photo7/5195250767357484525.jpg", gallery: ["/images/catalog2/photo7/5195250767357484525.jpg", "/images/catalog2/photo7/5195250767357484526.jpg", "/images/catalog2/photo7/5195250767357484527.jpg", "/images/catalog2/photo7/5195250767357484528.jpg"] },
  { slug: "work-8", name: "Проект 8", category: "work_facades", image: "/images/catalog2/photo8/5195250767357484544.jpg", gallery: ["/images/catalog2/photo8/5195250767357484544.jpg"] },
  { slug: "work-9", name: "Проект 9", category: "work_facades", image: "/images/catalog2/photo9/5195250767357484543.jpg", gallery: ["/images/catalog2/photo9/5195250767357484543.jpg"] },
  { slug: "work-10", name: "Проект 10", category: "work_facades", image: "/images/catalog2/photo10/5195250767357484542.jpg", gallery: ["/images/catalog2/photo10/5195250767357484542.jpg"] },
  { slug: "work-11", name: "Проект 11", category: "work_facades", image: "/images/catalog2/photo11/5195250767357484541.jpg", gallery: ["/images/catalog2/photo11/5195250767357484541.jpg"] },
  { slug: "work-12", name: "Проект 12", category: "work_facades", image: "/images/catalog2/photo12/5195250767357484539.jpg", gallery: ["/images/catalog2/photo12/5195250767357484539.jpg", "/images/catalog2/photo12/5195250767357484540.jpg"] },
  { slug: "work-13", name: "Проект 13", category: "work_facades", image: "/images/catalog2/photo13/5195250767357484538.jpg", gallery: ["/images/catalog2/photo13/5195250767357484538.jpg"] },
  { slug: "work-14", name: "Проект 14", category: "work_facades", image: "/images/catalog2/photo14/5195250767357484537.jpg", gallery: ["/images/catalog2/photo14/5195250767357484537.jpg"] },
  { slug: "work-15", name: "Проект 15", category: "work_facades", image: "/images/catalog2/photo15/5195250767357484536.jpg", gallery: ["/images/catalog2/photo15/5195250767357484536.jpg"] },
  { slug: "work-16", name: "Проект 16", category: "work_facades", image: "/images/catalog2/photo16/5195250767357484535.jpg", gallery: ["/images/catalog2/photo16/5195250767357484535.jpg"] },
  { slug: "work-17", name: "Проект 17", category: "work_facades", image: "/images/catalog2/photo17/5195250767357484547.jpg", gallery: ["/images/catalog2/photo17/5195250767357484547.jpg", "/images/catalog2/photo17/5195250767357484548.jpg", "/images/catalog2/photo17/5195250767357484549.jpg", "/images/catalog2/photo17/5195250767357484550.jpg", "/images/catalog2/photo17/5195250767357484551.jpg"] },
  { slug: "work-18", name: "Проект 18", category: "work_facades", image: "/images/catalog2/photo18/5195250767357484545.jpg", gallery: ["/images/catalog2/photo18/5195250767357484545.jpg", "/images/catalog2/photo18/5195250767357484546.jpg"] },
  { slug: "work-19", name: "Проект 19", category: "work_facades", image: "/images/catalog2/photo19/5195250767357484616.jpg", gallery: ["/images/catalog2/photo19/5195250767357484616.jpg", "/images/catalog2/photo19/5195250767357484618.jpg"] },
  { slug: "work-20", name: "Проект 20", category: "work_facades", image: "/images/catalog2/photo20/5195250767357484615.jpg", gallery: ["/images/catalog2/photo20/5195250767357484615.jpg"] },
  { slug: "work-21", name: "Проект 21", category: "work_facades", image: "/images/catalog2/photo21/5195250767357484614.jpg", gallery: ["/images/catalog2/photo21/5195250767357484614.jpg"] },
  { slug: "work-22", name: "Проект 22", category: "work_facades", image: "/images/catalog2/photo22/5195250767357484612.jpg", gallery: ["/images/catalog2/photo22/5195250767357484612.jpg", "/images/catalog2/photo22/5195250767357484613.jpg"] },
  { slug: "work-23", name: "Проект 23", category: "work_facades", image: "/images/catalog2/photo23/5195250767357484563.jpg", gallery: ["/images/catalog2/photo23/5195250767357484563.jpg"] },
  { slug: "work-24", name: "Проект 24", category: "work_facades", image: "/images/catalog2/photo24/5195250767357484562.jpg", gallery: ["/images/catalog2/photo24/5195250767357484562.jpg"] },
  { slug: "work-25", name: "Проект 25", category: "work_facades", image: "/images/catalog2/photo25/5195250767357484560.jpg", gallery: ["/images/catalog2/photo25/5195250767357484560.jpg", "/images/catalog2/photo25/5195250767357484561.jpg"] },
  { slug: "work-26", name: "Проект 26", category: "work_facades", image: "/images/catalog2/photo26/5195250767357484634.jpg", gallery: ["/images/catalog2/photo26/5195250767357484634.jpg", "/images/catalog2/photo26/5195250767357484635.jpg", "/images/catalog2/photo26/5195250767357484636.jpg"] },
  { slug: "work-27", name: "Проект 27", category: "work_facades", image: "/images/catalog2/photo27/5195250767357484626.jpg", gallery: ["/images/catalog2/photo27/5195250767357484626.jpg", "/images/catalog2/photo27/5195250767357484627.jpg", "/images/catalog2/photo27/5195250767357484628.jpg", "/images/catalog2/photo27/5195250767357484629.jpg", "/images/catalog2/photo27/5195250767357484630.jpg", "/images/catalog2/photo27/5195250767357484631.jpg", "/images/catalog2/photo27/5195250767357484632.jpg", "/images/catalog2/photo27/5195250767357484633.jpg", "/images/catalog2/photo27/5195250767357484665.jpg"] },
  { slug: "work-28", name: "Проект 28", category: "work_facades", image: "/images/catalog2/photo28/5195250767357484619.jpg", gallery: ["/images/catalog2/photo28/5195250767357484619.jpg", "/images/catalog2/photo28/5195250767357484620.jpg", "/images/catalog2/photo28/5195250767357484622.jpg", "/images/catalog2/photo28/5195250767357484623.jpg", "/images/catalog2/photo28/5195250767357484624.jpg", "/images/catalog2/photo28/5195250767357484625.jpg"] },
  { slug: "work-29", name: "Проект 29", category: "work_facades", image: "/images/catalog2/photo29/5195250767357484617.jpg", gallery: ["/images/catalog2/photo29/5195250767357484617.jpg"] },
  { slug: "work-30", name: "Проект 30", category: "work_facades", image: "/images/catalog2/photo30/5195250767357484638.jpg", gallery: ["/images/catalog2/photo30/5195250767357484638.jpg", "/images/catalog2/photo30/5195250767357484639.jpg", "/images/catalog2/photo30/5195250767357484641.jpg", "/images/catalog2/photo30/5195250767357484642.jpg", "/images/catalog2/photo30/5195250767357484659.jpg", "/images/catalog2/photo30/5195250767357484660.jpg", "/images/catalog2/photo30/5195250767357484661.jpg", "/images/catalog2/photo30/5195250767357484662.jpg", "/images/catalog2/photo30/5195250767357484663.jpg", "/images/catalog2/photo30/5195250767357484664.jpg", "/images/catalog2/photo30/5195250767357484666.jpg", "/images/catalog2/photo30/5195250767357484667.jpg"] },
  { slug: "work-31", name: "Проект 31", category: "work_facades", image: "/images/catalog2/photo31/5195250767357484637.jpg", gallery: ["/images/catalog2/photo31/5195250767357484637.jpg"] },
  { slug: "work-32", name: "Проект 32", category: "work_facades", image: "/images/catalog2/photo32/5193205216168320169.jpg", gallery: ["/images/catalog2/photo32/5193205216168320169.jpg", "/images/catalog2/photo32/5193205216168320170.jpg", "/images/catalog2/photo32/5193205216168320171.jpg", "/images/catalog2/photo32/5193205216168320172.jpg"] },
  { slug: "work-33", name: "Проект 33", category: "work_facades", image: "/images/catalog2/photo33/5193205216168320121.jpg", gallery: ["/images/catalog2/photo33/5193205216168320121.jpg", "/images/catalog2/photo33/5193205216168320122.jpg", "/images/catalog2/photo33/5193205216168320123.jpg", "/images/catalog2/photo33/5193205216168320124.jpg", "/images/catalog2/photo33/5193205216168320125.jpg", "/images/catalog2/photo33/5193205216168320126.jpg"] },
  { slug: "work-34", name: "Проект 34", category: "work_facades", image: "/images/catalog2/photo34/5193205216168320173.jpg", gallery: ["/images/catalog2/photo34/5193205216168320173.jpg", "/images/catalog2/photo34/5193205216168320174.jpg", "/images/catalog2/photo34/5193205216168320175.jpg", "/images/catalog2/photo34/5193205216168320176.jpg", "/images/catalog2/photo34/5193205216168320177.jpg", "/images/catalog2/photo34/5193205216168320178.jpg", "/images/catalog2/photo34/5193205216168320179.jpg", "/images/catalog2/photo34/5193205216168320180.jpg", "/images/catalog2/photo34/5193205216168320181.jpg", "/images/catalog2/photo34/5193205216168320182.jpg", "/images/catalog2/photo34/5193205216168320183.jpg", "/images/catalog2/photo34/5193205216168320184.jpg", "/images/catalog2/photo34/5193205216168320185.jpg", "/images/catalog2/photo34/5193205216168320186.jpg", "/images/catalog2/photo34/5193205216168320187.jpg", "/images/catalog2/photo34/5193205216168320188.jpg"] },
  { slug: "work-35", name: "Проект 35", category: "work_facades", image: "/images/catalog2/photo35/5193205216168320189.jpg", gallery: ["/images/catalog2/photo35/5193205216168320189.jpg", "/images/catalog2/photo35/5193205216168320190.jpg", "/images/catalog2/photo35/5193205216168320191.jpg", "/images/catalog2/photo35/5193205216168320192.jpg", "/images/catalog2/photo35/5193205216168320193.jpg", "/images/catalog2/photo35/5193205216168320194.jpg", "/images/catalog2/photo35/5193205216168320195.jpg", "/images/catalog2/photo35/5193205216168320196.jpg", "/images/catalog2/photo35/5193205216168320197.jpg", "/images/catalog2/photo35/5193205216168320198.jpg"] },
  { slug: "work-36", name: "Проект 36", category: "work_facades", image: "/images/catalog2/photo36/5193205216168320199.jpg", gallery: ["/images/catalog2/photo36/5193205216168320199.jpg", "/images/catalog2/photo36/5193205216168320201.jpg", "/images/catalog2/photo36/5193205216168320202.jpg", "/images/catalog2/photo36/5193205216168320203.jpg", "/images/catalog2/photo36/5193205216168320204.jpg", "/images/catalog2/photo36/5193205216168320205.jpg", "/images/catalog2/photo36/5193205216168320206.jpg", "/images/catalog2/photo36/5193205216168320207.jpg", "/images/catalog2/photo36/5193205216168320208.jpg", "/images/catalog2/photo36/5193205216168320209.jpg", "/images/catalog2/photo36/5193205216168320210.jpg", "/images/catalog2/photo36/5193205216168320211.jpg", "/images/catalog2/photo36/5193205216168320212.jpg", "/images/catalog2/photo36/5193205216168320213.jpg", "/images/catalog2/photo36/5193205216168320214.jpg", "/images/catalog2/photo36/5193205216168320215.jpg", "/images/catalog2/photo36/5193205216168320216.jpg", "/images/catalog2/photo36/5193205216168320217.jpg", "/images/catalog2/photo36/5193205216168320218.jpg", "/images/catalog2/photo36/5193205216168320219.jpg", "/images/catalog2/photo36/5193205216168320238.jpg", "/images/catalog2/photo36/5193205216168320239.jpg", "/images/catalog2/photo36/5193205216168320240.jpg", "/images/catalog2/photo36/5193205216168320241.jpg", "/images/catalog2/photo36/5193205216168320242.jpg", "/images/catalog2/photo36/5195457015982005152.jpg", "/images/catalog2/photo36/5195457015982005153.jpg", "/images/catalog2/photo36/5195457015982005154.jpg", "/images/catalog2/photo36/5195457015982005156.jpg", "/images/catalog2/photo36/5195457015982005159.jpg", "/images/catalog2/photo36/5195457015982005160.jpg", "/images/catalog2/photo36/5195457015982005161.jpg", "/images/catalog2/photo36/5195457015982005162.jpg", "/images/catalog2/photo36/5195457015982005163.jpg", "/images/catalog2/photo36/5195457015982005164.jpg", "/images/catalog2/photo36/5195457015982005165.jpg", "/images/catalog2/photo36/5195457015982005166.jpg", "/images/catalog2/photo36/5195457015982005167.jpg", "/images/catalog2/photo36/5195457015982005168.jpg", "/images/catalog2/photo36/5195457015982005169.jpg", "/images/catalog2/photo36/5195457015982005170.jpg", "/images/catalog2/photo36/5195457015982005172.jpg"] },
  { slug: "work-37", name: "Проект 37", category: "work_facades", image: "/images/catalog2/photo37/5195457015982005171.jpg", gallery: ["/images/catalog2/photo37/5195457015982005171.jpg"] },
  { slug: "work-38", name: "Проект 38", category: "work_facades", image: "/images/catalog2/photo38/5195457015982005173.jpg", gallery: ["/images/catalog2/photo38/5195457015982005173.jpg", "/images/catalog2/photo38/5195457015982005174.jpg", "/images/catalog2/photo38/5195457015982005175.jpg", "/images/catalog2/photo38/5195457015982005178.jpg", "/images/catalog2/photo38/5195457015982005179.jpg", "/images/catalog2/photo38/5195457015982005181.jpg", "/images/catalog2/photo38/5195457015982005182.jpg"] },
];

export const facades: Facade[] = [
  ...milledFacades,
  edgeProfile,
  ...handles,
  ...portfolioWorks,
];

export function getFacade(slug: string) {
  return facades.find((f) => f.slug === slug);
}