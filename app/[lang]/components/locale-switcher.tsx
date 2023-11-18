"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className='flex space-x-2'>
      {i18n.locales.map((locale) => {
        return (
          <div key={locale}>
            <Link href={redirectedPathName(locale)}>
              {locale.toUpperCase()}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
