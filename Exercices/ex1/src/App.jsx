import React from "react";
import { FormWizardProvider } from "./components/formWizardContext";
import Step1Personal from "./components/Step1Personal";
import Step2Preferences from "./components/Step2Preferences";
import Step3Summary from "./components/Step3Summary";
import WizardNavigation from "./components/WizardNavigation";
import { useFormWizard } from "./components/formWizardContext";

function StepsRouter() {
  const { state } = useFormWizard();
  switch (state.step) {
    case 1:
      return <Step1Personal />;
    case 2:
      return <Step2Preferences />;
    case 3:
      return <Step3Summary />;
    default:
      return <Step1Personal />;
  }
}

export default function App() {
  return (
    <FormWizardProvider>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
        <h1>Assistant de formulaire multi-étapes</h1>
        <StepsRouter />
        <WizardNavigation />
      </div>
    </FormWizardProvider>
  );
}
