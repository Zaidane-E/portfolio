"use client";

import { useLanguage } from "@/lib/i18n/context";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-700">
      <button
        onClick={() => setLanguage("en")}
        className={`rounded-l-md px-3 py-1.5 text-xs font-medium transition-colors ${
          language === "en"
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`rounded-r-md px-3 py-1.5 text-xs font-medium transition-colors ${
          language === "fr"
            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        }`}
        aria-label="Switch to French"
      >
        FR
      </button>
    </div>
  );
}
