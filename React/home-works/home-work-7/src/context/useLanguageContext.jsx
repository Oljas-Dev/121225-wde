import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Context cannot be used outside Provider");
  }

  return context;
}
