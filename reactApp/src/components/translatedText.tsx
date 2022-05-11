import React from "react";
import { useTranslation } from "react-i18next";

export default function TranslatedText(props: { text: string }) {
  const { text } = props;
  const { t, i18n } = useTranslation();
  return <span>{t(text)}</span>;
}
