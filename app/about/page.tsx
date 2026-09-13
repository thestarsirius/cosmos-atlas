import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Misc";

export const metadata: Metadata = {
  title: "عن أطلس الكون",
  description: "الرسالة التعليمية لأطلس الكون، وفلسفة الدقة العلمية، وإخلاء المسؤولية."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <Breadcrumbs items={[{ labelAr: "الرئيسية", href: "/" }, { labelAr: "عن أطلس الكون" }]} />
      <h1 className="font-kufi text-3xl text-ink mt-4">عن أطلس الكون</h1>

      <div className="mt-8 space-y-8 text-mute leading-8">
        <section>
          <h2 className="font-kufi text-lg text-ink mb-2">لماذا أطلس الكون؟</h2>
          <p>
            أُنشئ أطلس الكون ليكون مرجعًا تعليميًا عربيًا شاملًا عن الفلك وعلوم الكون — مبنيًا من الأساس
            باللغة العربية، لا مترجمًا آليًا عن محتوى إنجليزي.
          </p>
        </section>

        <section id="sources">
          <h2 className="font-kufi text-lg text-ink mb-2">فلسفة الدقة العلمية</h2>
          <p>
            كل معلومة رقمية أو علمية في الموقع مصدرها جهات علمية معروفة مثل ناسا ووكالة الفضاء الأوروبية
            والاتحاد الفلكي الدولي. حين تختلف القيم بين المصادر، أو حين تكون القيمة تقديرية، يُشار إلى ذلك
            صراحةً. لا يعرض الموقع بيانات مباشرة (Live Data) من واجهات برمجية خارجية على أنها حقائق ثابتة
            دون تمييزها بوضوح.
          </p>
        </section>

        <section id="accessibility">
          <h2 className="font-kufi text-lg text-ink mb-2">إمكانية الوصول</h2>
          <p>
            يُصمَّم أطلس الكون ليكون قابلًا للاستخدام عبر لوحة المفاتيح، ومتوافقًا مع قارئات الشاشة، ومحترمًا
            لإعدادات تقليل الحركة، مع تباين ألوان كافٍ في كل الصفحات.
          </p>
        </section>

        <section id="privacy">
          <h2 className="font-kufi text-lg text-ink mb-2">الخصوصية</h2>
          <p>
            لا يجمع الموقع بيانات شخصية غير ضرورية. أي ميزة تتطلب الموقع الجغرافي (مثل ميزات سماء الليل)
            تطلب الإذن صراحةً وتشرح سبب الحاجة إليه قبل استخدامه.
          </p>
        </section>

        <section id="disclaimer" className="rounded border border-line bg-panel/40 p-5">
          <h2 className="font-kufi text-lg text-ink mb-2">إخلاء المسؤولية</h2>
          <p className="text-ink">
            أطلس الكون مشروع تعليمي مستقل، وليس موقعًا رسميًا تابعًا لناسا أو وكالة الفضاء الأوروبية أو أي
            جهة علمية أخرى.
          </p>
        </section>
      </div>
    </div>
  );
}
