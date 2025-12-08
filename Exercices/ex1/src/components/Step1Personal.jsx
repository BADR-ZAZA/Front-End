import React from "react";
import { useFormWizard, ACTIONS } from "./formWizardContext";

export default function Step1Personal() {
  const { state, dispatch } = useFormWizard();
  const { firstName, lastName, email } = state.data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: ACTIONS.UPDATE_FIELD, payload: { name, value } }); };

  return (
    <div>
      <h2>Étape 1 — Informations personnelles</h2>
      <label>
        Prénom
        <input name="firstName" value={firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Nom
        <input name="lastName" value={lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email
        <input name="email" value={email} onChange={handleChange} type="email" />
      </label>
    </div>
  );
}
