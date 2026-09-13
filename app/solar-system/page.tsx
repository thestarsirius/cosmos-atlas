import type { Metadata } from "next";
import { planets } from "@/data/planets";
import ObjectCard from "@/components/ObjectCard";
import { Breadcrumbs } from "@/components/Misc";

export const metadata: Metadata = {
  title: "النظام الشمسي",
  description: "الشمس وكواكب النظام الشمسي الثمانية، بياناتها الفيزيائية ومداراتها ومصادرها العلمية."
};

export default function SolarSystemPage() {
  const sun = planets.find((p) => p.id === "sun")!;
  const rest = planets.filter((p) => p.id !== "sun");

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
      <Breadcrumbs items={[{ labelAr: "الرئيسية", href: "/" }, { labelAr: "النظام الشمسي" }]} />
      <h1 className="font-kufi text-3xl sm:text-4xl text-ink mt-4">النظام الشمسي</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        نظامنا الشمسي يتكوّن من الشمس وكل ما يدور حولها بفعل جاذبيتها: ثمانية كواكب، وكواكب قزمة، وعشرات الأقمار،
        وحزام الكويكبات، والمذنبات، وحزام كايبر البعيد، وسحابة أورت التي تمتد إلى أطراف تأثير جاذبية الشمس.
      </p>

      <div className="mt-10">
        <ObjectCard obj={sun} href={`/solar-system/${sun.slug}`} />
      </div>

      <h2 className="font-kufi text-xl text-ink mt-12 mb-5">الكواكب الثمانية</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <ObjectCard key={p.id} obj={p} href={`/solar-system/${p.slug}`} />
        ))}
      </div>

      <div className="mt-12 rounded border border-line bg-panel/40 p-6 text-sm text-mute leading-7">
        <p>
          أجسام أخرى في النظام الشمسي — الكواكب القزمة، حزام الكويكبات، المذنبات، حزام كايبر، وسحابة أورت — قيد
          الإضافة إلى الأطلس ضمن نفس بنية البيانات المستخدمة هنا.
        </p>
      </div>
    </div>
  );
}
