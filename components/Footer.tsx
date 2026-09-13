import Link from "next/link";
import { footerNav } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-kufi text-lg text-ink">أطلس الكون</p>
          <p className="mt-2 text-sm text-mute leading-7 max-w-xs">
            مشروع تعليمي مستقل عن الفلك وعلوم الكون، باللغة العربية، مبني على مصادر علمية موثقة.
          </p>
        </div>

        <div>
          <p className="text-sm text-faint mb-3">الموقع</p>
          <ul className="space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-mute hover:text-ink transition-colors">
                  {item.labelAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-2">
          <p className="text-sm text-faint mb-3">إخلاء مسؤولية</p>
          <p className="text-sm text-mute leading-7 max-w-md">
            أطلس الكون مشروع تعليمي مستقل، وليس موقعًا رسميًا تابعًا لناسا أو وكالة الفضاء الأوروبية أو أي
            جهة علمية أخرى. المحتوى مبني على مصادر علمية عامة وقد لا يعكس آخر تحديث لكل قيمة رقمية.
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 text-xs text-faint font-mono">
          COSMOS — أطلس الكون · مشروع مفتوح المصدر
        </div>
      </div>
    </footer>
  );
}
