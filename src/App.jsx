import { useState } from "react";
import { LangSwitcher } from "./LangSwitcher.jsx";
import "./index.css";
import css from "./App.module.css";

export default function App() {
  const [lang, setLang] = useState("uk");

  return (
    <div className={css.wrapper}>
      <p className={css.title}>
        Selected language: <span className={css.span}>{lang}</span>
      </p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </div>
  );
}
