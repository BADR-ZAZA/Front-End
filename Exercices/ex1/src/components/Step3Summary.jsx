import React from "react";
import { useFormWizard, ACTIONS } from "./formWizardContext";

export default function Step3Summary() {
  const { state, dispatch } = useFormWizard();
  const d = state.data;

  const handleConfirm = () => {
    // Ici: soumettre vers API ou afficher toast
    alert("Formulaire confirmé — données :\n" + JSON.stringify(d, null, 2));
    // optionnel : reset
    // dispatch({ type: ACTIONS.RESET_FORM });
  };

  return (
    <div>
      <h2>Étape 3 — Récapitulatif</h2>
      <dl>
        <dt>Prénom</dt><dd>{d.firstName || "-"}</dd>
        <dt>Nom</dt><dd>{d.lastName || "-"}</dd>
        <dt>Email</dt><dd>{d.email || "-"}</dd>
        <dt>Newsletter</dt><dd>{d.newsletter ? "Oui" : "Non"}</dd>
        <dt>Thème</dt><dd>{d.theme}</dd>
        <dt>Langue</dt><dd>{d.language}</dd>
      </dl>

      <button onClick={handleConfirm}>Confirmer</button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET_FORM })}>Réinitialiser</button>
    </div>
  );
}
