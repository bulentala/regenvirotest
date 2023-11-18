import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Hero lang={lang} />
      <AboutUs lang={lang} />
      <pre>{JSON.stringify(lang, null, 2)}</pre>
      <pre>{JSON.stringify(dictionary, null, 2)}</pre>
      <LocaleSwitcher />
      <p>Lang: {lang}</p>
      <p>{dictionary["server-component"].welcome}</p>
    </div>
  );
}
