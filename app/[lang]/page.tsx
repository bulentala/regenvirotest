import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import LocaleSwitcher from "./components/locale-switcher";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import OurGoal from "./components/OurGoal";
import Help from "./components/Help";
import Footer from "./components/Footer";
export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} />
      <AboutUs lang={lang} />
      <Products lang={lang} />
      <OurGoal lang={lang} />
      <Help lang={lang} />
      {/* <div>DENEME</div>
      <div className='bg-white absolute z-50'>
        <pre>{JSON.stringify(lang, null, 2)}</pre>
        <pre>{JSON.stringify(dictionary, null, 2)}</pre>
        <LocaleSwitcher />
        <p>Lang: {lang}</p>
        <p>{dictionary["server-component"].welcome}</p>
      </div>*/}
    </>
  );
}
