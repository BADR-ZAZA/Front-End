import React, { createContext, useContext, useReducer } from "react";


/* --- initial state --- */
const initialState = {
  step: 1, // 1, 2 ou 3
  data: {
    firstName: "",
    lastName: "",
    email: "",
    newsletter: false,
    theme: "light",   // "light" | "dark"
    language: "fr"    // "fr" | "en"
  }
};


/* --- action types --- */
export const ACTIONS = {
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  UPDATE_FIELD: "UPDATE_FIELD",
  RESET_FORM: "RESET_FORM"
};


/* --- reducer --- */
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEXT_STEP:
      return { ...state, step: Math.min(3, state.step + 1) };
    case ACTIONS.PREVIOUS_STEP:
      return { ...state, step: Math.max(1, state.step - 1) };
    case ACTIONS.UPDATE_FIELD: {
      // payload: { name, value }
      const { name, value } = action.payload;
      return { ...state, data: { ...state.data, [name]: value } };
    }
    case ACTIONS.RESET_FORM:
      return initialState;
    default:
      return state;
  }
}


/* --- context --- */
const FormWizardContext = createContext(null);

export function FormWizardProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <FormWizardContext.Provider value={value}>
      {children}
    </FormWizardContext.Provider>
  );
}


/* --- helper hook --- */
export function useFormWizard() {
  const ctx = useContext(FormWizardContext);
  if (!ctx) {
    throw new Error("useFormWizard must be used inside a FormWizardProvider");
  }
  return ctx;
}