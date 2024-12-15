import { useState } from "react";
import { LangSwitcher } from "./LangSwitcher.jsx";
import "./index.css";
import css from "./App.module.css";

export default function App() {
  const [lang, setLang] = useState("uk");
  const [coffeeSize, setCoffeeSize] = useState("sm");
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  };

  const handleCheckboxChange = (evt) => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div className={css.wrapper}>
      {/* Вибір мови */}
      <div>
        <p className={css.title}>
          Selected language: <span className={css.span}>{lang}</span>
        </p>
        <LangSwitcher value={lang} onSelect={setLang} />
      </div>

      {/* Вибір розміру кави */}
      <div className={css.coffeeWrapper}>
        <h1>Select coffee size</h1>
        <div className="options">
          <label>
            <input
              type="radio"
              name="coffeeSize"
              value="sm"
              checked={coffeeSize === "sm"}
              onChange={handleSizeChange}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              name="coffeeSize"
              value="md"
              checked={coffeeSize === "md"}
              onChange={handleSizeChange}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              name="coffeeSize"
              value="lg"
              checked={coffeeSize === "lg"}
              onChange={handleSizeChange}
            />
            Large
          </label>
        </div>
        <p>
          <b>Selected size:</b> {coffeeSize}
        </p>
      </div>

      {/* Чекбокс з умовами */}
      <div className={css.checkboxWrapper}>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={hasAccepted}
            onChange={handleCheckboxChange}
          />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>
          Proceed
        </button>
      </div>
    </div>
  );
}
