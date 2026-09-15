import { Bilingual } from "./i18n";

export const spaceFacts: Bilingual[] = [
  { en: "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.", ar: "يستغرق ضوء الشمس نحو 8 دقائق و20 ثانية ليصل إلى الأرض." },
  { en: "A day on Venus is longer than its year.", ar: "يوم واحد على الزهرة أطول من سنته الكاملة." },
  { en: "The footprints on the Moon will likely last millions of years — there's no wind or water to erode them.", ar: "ستبقى آثار الأقدام على سطح القمر على الأرجح لملايين السنين — إذ لا رياح ولا ماء ليمحوها." },
  { en: "Neutron stars can spin hundreds of times per second.", ar: "يمكن للنجوم النيوترونية أن تدور حول نفسها مئات المرات في الثانية." },
  { en: "The Great Red Spot on Jupiter is a storm larger than the entire Earth.", ar: "البقعة الحمراء الكبرى على المشتري عاصفة أكبر من كوكب الأرض بأكمله." },
  { en: "There are more stars in the observable universe than grains of sand on every beach on Earth, by most estimates.", ar: "عدد النجوم في الكون المرصود، وفق معظم التقديرات، يفوق عدد حبات الرمل في كل شواطئ الأرض." },
  { en: "One teaspoon of a neutron star would weigh about as much as a mountain.", ar: "ملعقة صغيرة من مادة نجم نيوتروني قد تزن بقدر وزن جبل." },
  { en: "The largest known volcano in the solar system, Olympus Mons on Mars, is nearly three times the height of Mount Everest.", ar: "أكبر بركان معروف في النظام الشمسي، أوليمبوس مونس على المريخ، يبلغ ارتفاعه نحو ثلاثة أضعاف جبل إيفرست." },
  { en: "Space is completely silent — sound needs a medium like air to travel, and there isn't one in a vacuum.", ar: "الفضاء صامت تمامًا — يحتاج الصوت وسيطًا كالهواء للانتقال، ولا وسيط في الفراغ." },
  { en: "The Milky Way and Andromeda galaxies are on a slow collision course, expected in several billion years.", ar: "درب التبانة ومجرة أندروميدا في مسار تصادم بطيء، متوقع خلال عدة مليارات من السنين." },
  { en: "Saturn is less dense than water; in theory it would float if you found an ocean big enough.", ar: "كثافة زحل أقل من كثافة الماء؛ نظريًا سيطفو لو وُجد محيط كبير بما يكفي." },
  { en: "Some stars are so massive that they live for only a few million years — a blink compared to the Sun's ~10-billion-year lifespan.", ar: "بعض النجوم ضخمة جدًا لدرجة أنها تعيش بضعة ملايين من السنين فقط — لمحة مقارنة بعمر الشمس البالغ نحو 10 مليارات سنة." }
];

export function getDailyFact(lang: "en" | "ar", seed: number = new Date().getDate()): string {
  const idx = seed % spaceFacts.length;
  const fact = spaceFacts[idx] ?? spaceFacts[0]!;
  return fact[lang];
}
