import React from "react";
import { useFormWizard, ACTIONS } from "./formWizardContext";

export default function WizardNavigation() {
  const { state, dispatch } = useFormWizard();
  const { step } = state;

  return (
    <div style={{ marginTop: 20 }}>
      <button
        onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}
        disabled={step === 1}
      >
        Précédent
      </button>

      {step < 3 && (
        <button
          onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}
          style={{ marginLeft: 8 }}
        >
          Suivant
        </button>
      )}
    </div>
  );
}
