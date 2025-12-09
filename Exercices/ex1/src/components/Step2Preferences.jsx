import React from "react";
import { useFormWizard, ACTIONS } from "./formWizardContext";

export default function Step2Preferences() {
  const { state, dispatch } = useFormWizard();
  const { newsletter, theme, language } = state.data;

  const toggleNewsletter = (e) => {
    dispatch({ type: ACTIONS.UPDATE_FIELD, payload: { name: "newsletter", value: e.target.checked } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: ACTIONS.UPDATE_FIELD, payload: { name, value } });
  };

  return (
    <div>
      <h2>Étape 2 — Préférences</h2>

      <label>
        <input type="checkbox" checked={newsletter} onChange={toggleNewsletter} />
        S'inscrire à la newsletter
      </label>
      <br />

      <div>
        Thème :
        <label>
          <input type="radio" name="theme" value="light" checked={theme === "light"} onChange={handleChange} />
          Light
        </label>
        <label>
          <input type="radio" name="theme" value="dark" checked={theme === "dark"} onChange={handleChange} />
          Dark
        </label>
      </div>

      <div>
        Langue :
        <select name="language" value={language} onChange={handleChange}>
          <option value="fr">Français (fr)</option>
          <option value="en">English (en)</option>
        </select>
      </div>
    </div>
  );
}
