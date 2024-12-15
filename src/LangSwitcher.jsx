import { useId } from "react";
import css from "./LangSwitcher.module.css";

export const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div className={css.container}>
      <label htmlFor={selectId}>Choose language</label>
      <select
        className={css.switcher}
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};
