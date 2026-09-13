import Link from "next/link";
import { planets } from "@/data/planets";
import ObjectCard from "@/components/ObjectCard";

const journey = [
  { labelAr: "الأرض", descAr: "نقطة انطلاقنا في الكون" },
  { labelAr: "القمر", descAr: "أقرب جسم سماوي إلينا" },
  { labelAr: "النظام الشمسي", descAr: "الشمس وثمانية كواكب" },
  { labelAr: "النجوم القريبة", descAr: "جيراننا في المجرة" },
  { labelAr: "مجرة درب التبانة", descAr: "موطننا المجري" },
  { labelAr: "المجموعة المحلية", descAr: "مجرات تجاورنا" },
  { labelAr: "عناقيد المجرات", descAr: "تجمعات مجرية ضخمة" },
  { labelAr: "الشبكة الكونية", descAr: "أكبر البنى المعروفة" },
  { labelAr: "الكون المرصود", descAr: "حدود ما نستطيع رؤيته" }
];

const exploreCategories = [
  { labelAr: "الكواكب", href: "/solar-system" },
  { labelAr: "النجوم", href: "/stars" },
  { labelAr: "الأقمار", href: "/moons" },
  { labelAr: "المجرات", href: "/galaxies" },
  { labelAr: "السدم", href: "/nebulae" },
  { labelAr: "الثقوب السوداء", href: "/black-holes" },
  { labelAr: "الكواكب الخارجية", href: "/exoplanets" },
  { labelAr: "الأبراج", href: "/constellations" },
  { labelAr: "الظواهر الكونية", href: "/universe" },
  { labelAr: "المهمات الفضائية", href: "/missions" }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
        <p className="font-mono text-xs text-faint tracking-wide">COSMOS</p>
        <h1 className="font-kufi text-4xl sm:text-6xl text-ink mt-3 text-balance max-w-3xl">
          أطلس الكون
        </h1>
        <p className="mt-5 text-lg text-mute max-w-xl leading-8">
          رحلة معرفية من الأرض إلى أبعد حدود الكون المرصود.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/explore"
            className="rounded bg-ember text-void px-5 py-3 text-sm font-medium hover:bg-ember/90 transition-colors"
          >
            ابدأ الاستكشاف
          </Link>
          <Link
            href="/random"
            className="rounded border border-line px-5 py-3 text-sm text-ink hover:border-ember/50 transition-colors"
          >
            خذني إلى مكان ما في الكون
          </Link>
        </div>
      </section>

      {/* Cosmic journey */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="font-kufi text-2xl text-ink">من الأرض إلى حدود الكون</h2>
          <p className="mt-2 text-sm text-mute max-w-prose">
            كل مستوى في هذه الرحلة يحتوي داخله كل ما قبله — أنت الآن على الأرض، التي هي جزء من النظام الشمسي، الذي
            هو جزء من المجرة، وهكذا حتى حدود ما يمكن رصده.
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-3">
            {journey.map((step, i) => (
              <li key={step.labelAr} className="rounded border border-line bg-panel/40 p-4">
                <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-kufi text-ink mt-1">{step.labelAr}</p>
                <p className="text-xs text-mute mt-1">{step.descAr}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Explore categories */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="font-kufi text-2xl text-ink">استكشف الكون</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {exploreCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="rounded border border-line px-4 py-4 text-sm text-mute hover:text-ink hover:border-ember/50 transition-colors text-center"
              >
                {cat.labelAr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Selected objects — Solar System, real data */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="flex items-baseline justify-between">
            <h2 className="font-kufi text-2xl text-ink">أجسام مختارة — النظام الشمسي</h2>
            <Link href="/solar-system" className="text-sm text-ember hover:underline">
              عرض الكل
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planets.slice(0, 6).map((p) => (
              <ObjectCard key={p.id} obj={p} href={`/solar-system/${p.slug}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Did you know */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="font-kufi text-2xl text-ink mb-8">هل تعلم؟</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "ضوء الشمس يستغرق نحو 8 دقائق ليصل إلى الأرض.",
              "أوليمبوس مونس على المريخ يبلغ ارتفاعه نحو ثلاثة أضعاف جبل إيفرست.",
              "المشتري أكبر من أن توضع كل الكواكب الأخرى بداخله تقريبًا من حيث الكتلة."
            ].map((fact) => (
              <div key={fact} className="rounded border border-ember/30 bg-ember/5 p-5">
                <p className="text-sm text-ink leading-7">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn astronomy CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="rounded border border-line bg-panel/40 p-8 flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-kufi text-2xl text-ink">تعلّم الفلك خطوة بخطوة</h2>
              <p className="mt-2 text-sm text-mute max-w-md">
                مسارات تعليمية للمبتدئين والمتوسطين والمتقدمين، من أساسيات علم الفلك إلى الفيزياء الفلكية.
              </p>
            </div>
            <Link
              href="/academy"
              className="rounded bg-ember text-void px-5 py-3 text-sm font-medium hover:bg-ember/90 transition-colors shrink-0"
            >
              ابدأ التعلم
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
