import type { Metadata } from "next";
import Link from "next/link";
import { planets } from "@/data/planets";
import ObjectCard from "@/components/ObjectCard";
import { Breadcrumbs } from "@/components/Misc";

export const metadata: Metadata = {
  title: "استكشف الكون",
  description: "تصفّح كل ما يضمه أطلس الكون من كواكب ونجوم ومجرات وظواهر كونية."
};

const roadmap = [
  "النجوم", "المجرات", "السدم", "الثقوب السوداء", "الكواكب الخارجية",
  "الأقمار", "الأبراج", "المهمات الفضائية", "التلسكوبات"
];

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <Breadcrumbs items={[{ labelAr: "الرئيسية", href: "/" }, { labelAr: "استكشف" }]} />
      <h1 className="font-kufi text-3xl sm:text-4xl text-ink mt-4">استكشف الكون</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        نقطة انطلاق لتصفّح كل أقسام أطلس الكون. القسم المتاح بالكامل حاليًا هو النظام الشمسي؛ الأقسام الأخرى
        قيد البناء على نفس بنية البيانات ليسهل توسيعها لاحقًا.
      </p>

      <h2 className="font-kufi text-xl text-ink mt-10 mb-5">النظام الشمسي</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {planets.map((p) => (
          <ObjectCard key={p.id} obj={p} href={`/solar-system/${p.slug}`} />
        ))}
      </div>

      <div className="mt-12 rounded border border-line bg-panel/40 p-6">
        <h2 className="font-kufi text-lg text-ink mb-3">أقسام قيد الإضافة</h2>
        <div className="flex flex-wrap gap-2">
          {roadmap.map((r) => (
            <span key={r} className="rounded-sm border border-line px-3 py-1.5 text-sm text-faint">
              {r}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-mute">
          راجع <Link href="/glossary" className="text-ember hover:underline">قاموس الفلك</Link> المتاح بالكامل، أو
          طالع خارطة الطريق الكاملة في ملف README الخاص بالمشروع.
        </p>
      </div>
    </div>
  );
}
