let currentLang = "ja"; // 👈 set default here ("en" or "ja")
let translations = {};

async function loadLang(lang) {
  const res = await fetch("/lang/lang.json");
  translations = await res.json();
  currentLang = lang;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = getTranslation(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", getTranslation(key));
  });
}

function getTranslation(key) {
  const keys = key.split(".");
  let value = translations[currentLang];
  keys.forEach((k) => {
    if (value && value[k]) {
      value = value[k];
    }
  });
  return value || key;
}

document.addEventListener("DOMContentLoaded", () => {
  loadLang(currentLang); // load default language on page load
});

