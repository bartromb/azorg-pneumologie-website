# 🫁 Pneumologie AZORG — Meertalige Website Generator

> Statische websitegenerator voor de dienst Pneumologie / Longziekten van [AZORG Ziekenhuis](https://www.azorg.be). Artsen beheren content in Excel-bestanden; het buildscript genereert automatisch een complete website in **4 talen** (NL · FR · EN · DE).

### 🔗 Live preview

| 🇧🇪 [Nederlands](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg.html) | 🇫🇷 [Français](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg-fr.html) | 🇬🇧 [English](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg-en.html) | 🇩🇪 [Deutsch](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg-de.html) |
|:---:|:---:|:---:|:---:|

## ✨ Features

- **Excel-gestuurd CMS** — artsen bewerken `.xlsx`-bestanden, geen HTML-kennis nodig
- **4 talen** — Nederlands, Frans, Engels, Duits — automatisch gegenereerd
- **Automatische vertaling** — nieuwe content wordt vertaald via [deep-translator](https://github.com/nidhaloff/deep-translator) (Google Translate) en gecached in JSON
- **Eén HTML per taal** — volledig zelfstandige bestanden, geen server nodig
- **Responsive design** — desktop, tablet & mobiel
- **Accessibility** — skip-link, ARIA-labels, focus-visible, semantische HTML
- **Progressive enhancement** — scroll-animaties via IntersectionObserver; content is altijd zichtbaar zonder JavaScript

## 📁 Projectstructuur

```
├── build.py                 ← Bouwscript (Python 3)
├── template.html            ← Jinja2 HTML-sjabloon
├── data/
│   ├── artsen.xlsx          ← Artsen (naam, specialisatie, campussen, foto-URL)
│   ├── campussen.xlsx       ← Campussen (adres, telefoon, openingsuren)
│   ├── aandoeningen.xlsx    ← Longaandoeningen
│   ├── klinieken.xlsx       ← Expertklinieken
│   ├── nieuws.xlsx          ← Nieuwsberichten
│   ├── onderzoeken.xlsx     ← Diagnostische procedures
│   ├── teksten.xlsx         ← Vrije tekstsecties (hero, about, CTA, stats)
│   └── translations.json    ← Vertaalcache (FR/EN/DE)
└── output/
    ├── longziekten-azorg.html       ← 🇧🇪 Nederlands
    ├── longziekten-azorg-fr.html    ← 🇫🇷 Frans
    ├── longziekten-azorg-en.html    ← 🇬🇧 Engels
    └── longziekten-azorg-de.html    ← 🇩🇪 Duits
```

## 🚀 Aan de slag

### Vereisten

- Python 3.8+
- `pip install openpyxl jinja2 deep-translator`

### Website genereren

```bash
# Alle 4 talen
python build.py

# Eén specifieke taal
python build.py --lang nl
python build.py --lang fr
python build.py --lang en
python build.py --lang de
```

De gegenereerde HTML-bestanden staan in `output/`. Open `longziekten-azorg.html` in een browser.

## 📝 Content bewerken

### Arts toevoegen of wijzigen

1. Open `data/artsen.xlsx`
2. Voeg een rij toe of pas een bestaande aan
3. Draai `python build.py`
4. De arts verschijnt automatisch op de website (alle 4 talen)

### Kolommen in artsen.xlsx

| Kolom | Voorbeeld | Toelichting |
|---|---|---|
| `Titel` | Dr. | Aanspreektitel |
| `Voornaam` | Valerie | |
| `Achternaam` | Adam | |
| `Functie` | Longarts | Wordt automatisch vertaald |
| `Specialisatie` | Slaapkliniek | Wordt automatisch vertaald |
| `Campussen` | Aalst Moorselbaan, Ninove | Kommagescheiden (moet exact overeenkomen met `Korte naam` in campussen.xlsx) |
| `Geconventioneerd` | Ja | |
| `Foto-URL` | https://... | Optioneel — fallback is emoji |
| `Profiel-URL` | https://www.azorg.be/nl/onze-artsen/... | Link naar profiel |
| `Kleur` | rood / teal / groen / geel / paars / donkerrood | Accentkleur op de kaart |
| `Actief` | Ja | Zet op "Nee" om te verbergen |

### Overige Excel-bestanden

Elk bestand volgt hetzelfde patroon: vul de NL-kolommen in, het buildscript vertaalt automatisch naar FR/EN/DE. Zie de bestaande rijen als voorbeeld.

## 🌍 Vertaling

Het buildscript gebruikt een **twee-stappen vertaalmechanisme**:

1. **Cache check** — kijkt in `data/translations.json` of de NL-tekst al vertaald is
2. **deep-translator** — zo niet, vertaalt via Google Translate en slaat op in de cache

### Vertaling handmatig corrigeren

Open `data/translations.json`. De structuur is:

```json
{
  "fr": {
    "Longarts": "Pneumologue",
    "Slaapkliniek": "Clinique du sommeil"
  },
  "en": {
    "Longarts": "Pulmonologist",
    "Slaapkliniek": "Sleep clinic"
  },
  "de": {
    "Longarts": "Pneumologe",
    "Slaapkliniek": "Schlafklinik"
  }
}
```

Pas de waarde aan en draai `python build.py` opnieuw. De cache wordt niet overschreven voor bestaande vertalingen.

## 🏥 Over AZORG

AZORG is het op twee na grootste ziekenhuis van Vlaanderen, met campussen in Aalst, Asse, Geraardsbergen, Ninove en Wetteren. De dienst Pneumologie telt 15 longartsen over 6 campussen.

## 📄 Licentie

Dit project is specifiek ontwikkeld voor de dienst Pneumologie van AZORG Ziekenhuis. Alle medische content, logo's en branding zijn eigendom van AZORG.

De **code** (build.py, template.html) is vrijgegeven onder de [MIT-licentie](LICENSE).
