# 🫁 Pneumologie AZORG — Meertalige Website Generator

> Statische websitegenerator voor de dienst Pneumologie / Longziekten van [AZORG Ziekenhuis](https://www.azorg.be). Artsen beheren content in Excel-bestanden; het buildscript genereert automatisch een complete website in **4 talen** (NL · FR · EN · DE).

### 🔗 Live preview

| 🇧🇪 [Nederlands](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg.html) | 🇫🇷 [Français](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg-fr.html) | 🇬🇧 [English](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg-en.html) | 🇩🇪 [Deutsch](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/output/longziekten-azorg-de.html) |
|:---:|:---:|:---:|:---:|

## ✨ Features

- **Excel-gestuurd CMS** — artsen bewerken `.xlsx`-bestanden, geen HTML-kennis nodig
- **4 talen** — Nederlands, Frans, Engels, Duits — automatisch gegenereerd
- **Automatische vertaling** — nieuwe content wordt vertaald via [deep-translator](https://github.com/nidhaloff/deep-translator) (Google Translate) en gecached in JSON
- **Patiëntvriendelijke teksten** — ziektebeelden en klinieken beschreven in begrijpelijke taal met correcte medische terminologie
- **Google Maps integratie** — elk campusadres linkt rechtstreeks naar Google Maps
- **Plaatsnaambeveiliging** — Belgische steden (Aalst, Asse, Wetteren…) worden nooit vertaald
- **Eén HTML per taal** — volledig zelfstandige bestanden, geen server nodig
- **Responsive design** — desktop, tablet & mobiel
- **Accessibility** — skip-link, ARIA-labels, focus-visible, semantische HTML
- **Progressive enhancement** — scroll-animaties via IntersectionObserver; content is altijd zichtbaar zonder JavaScript

## 📁 Projectstructuur

```
├── build.py                 ← Bouwscript (Python 3)
├── template.html            ← Jinja2 HTML-sjabloon
├── requirements.txt         ← Python dependencies
├── index.html               ← Redirect voor GitHub Pages
├── data/
│   ├── artsen.xlsx          ← Artsen (naam, specialisatie, campussen, foto-URL)
│   ├── campussen.xlsx       ← Campussen (adres, telefoon, openingsuren)
│   ├── aandoeningen.xlsx    ← Longaandoeningen (patiëntvriendelijk)
│   ├── klinieken.xlsx       ← Expertklinieken (patiëntvriendelijk)
│   ├── nieuws.xlsx          ← Nieuwsberichten
│   ├── onderzoeken.xlsx     ← Diagnostische procedures
│   ├── teksten.xlsx         ← Vrije tekstsecties (hero, about, CTA, stats)
│   └── translations.json    ← Vertaalcache (FR/EN/DE, ~400 vertalingen)
└── output/
    ├── longziekten-azorg.html       ← 🇧🇪 Nederlands
    ├── longziekten-azorg-fr.html    ← 🇫🇷 Frans
    ├── longziekten-azorg-en.html    ← 🇬🇧 Engels
    └── longziekten-azorg-de.html    ← 🇩🇪 Duits
```

## 🚀 Aan de slag

### Vereisten

- Python 3.8+
- Virtual environment (aanbevolen)

### Installatie

```bash
git clone https://github.com/bartromb/azorg-pneumologie-website.git
cd azorg-pneumologie-website
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Website genereren

```bash
python build.py              # alle 4 talen
python build.py --lang nl    # alleen Nederlands
python build.py --lang fr    # alleen Frans
python build.py --lang en    # alleen Engels
python build.py --lang de    # alleen Duits
```

De gegenereerde HTML-bestanden staan in `output/`. Open `longziekten-azorg.html` in een browser.

## 📝 Content bewerken

### Workflow

1. Bewerk de Excel-bestanden in `data/` (of via de gedeelde OneDrive-map)
2. Draai `python build.py`
3. Bekijk het resultaat in `output/`
4. Commit en push naar GitHub

### Arts toevoegen of wijzigen

Open `data/artsen.xlsx`, voeg een rij toe of pas een bestaande aan, en draai `python build.py`. De arts verschijnt automatisch op de website in alle 4 talen.

| Kolom | Voorbeeld | Toelichting |
|---|---|---|
| `Titel` | Dr. | Aanspreektitel |
| `Voornaam` | Valerie | |
| `Achternaam` | Adam | |
| `Functie` | Longarts | Wordt automatisch vertaald |
| `Specialisatie` | Slaapkliniek | Wordt automatisch vertaald |
| `Campussen` | Aalst Moorselbaan, Ninove | Kommagescheiden, moet overeenkomen met `Korte naam` in campussen.xlsx |
| `Geconventioneerd` | Ja | |
| `Foto-URL` | https://... | Optioneel — fallback is emoji |
| `Profiel-URL` | https://www.azorg.be/nl/onze-artsen/... | Link naar profiel op azorg.be |
| `Kleur` | rood / teal / groen / geel / paars / donkerrood | Accentkleur op de kaart |
| `Actief` | Ja | Zet op "Nee" om te verbergen |

### Aandoening of kliniek bewerken

Open `data/aandoeningen.xlsx` of `data/klinieken.xlsx`. De beschrijvingen zijn geschreven in patiëntvriendelijke taal — informatief, licht medisch, met correcte terminologie. Patroon: *wat is het → wat voelt u → wat doen wij*.

### Overige Excel-bestanden

Elk bestand volgt hetzelfde principe: vul de NL-kolommen in, het buildscript vertaalt automatisch naar FR/EN/DE. Zie de bestaande rijen als voorbeeld.

## 🌍 Vertaling

Het buildscript gebruikt een **twee-stappen vertaalmechanisme**:

1. **Cache check** — kijkt in `data/translations.json` of de NL-tekst al vertaald is
2. **deep-translator** — zo niet, vertaalt via Google Translate en slaat op in de cache

### Plaatsnaambeveiliging

Belgische steden en campusnamen worden nooit naar Google Translate gestuurd. De `NO_TRANSLATE` set in `build.py` bevat o.a. Aalst, Asse, Ninove, Wetteren en Geraardsbergen. Voeg nieuwe plaatsnamen toe aan deze set indien nodig.

### Vertaling handmatig corrigeren

Open `data/translations.json`. De structuur is genest per taal:

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

Pas de waarde aan en draai `python build.py` opnieuw. Bestaande vertalingen in de cache worden niet overschreven door deep-translator.

## 🔒 Privacy & veiligheid

- **Geen tracking** — geen cookies, geen Google Analytics, geen Facebook Pixel
- **Geen externe scripts** — puur statische HTML/CSS/JS
- **Geen backend** — geen database, geen server
- **Alle links HTTPS** met `rel="noopener noreferrer"`
- **Formulier is demo** — verstuurt niets, toont alleen bevestigingsmelding

### Aandachtspunten

- **Google Fonts** wordt extern geladen (privacy/GDPR) — overweeg lokaal hosten
- **E-mailadressen** staan in plaintext in de broncode — standaard voor ziekenhuissites

## 🏥 Over AZORG

AZORG is het op twee na grootste ziekenhuis van Vlaanderen, met campussen in Aalst, Asse, Geraardsbergen, Ninove en Wetteren. De dienst Pneumologie telt 15 longartsen over 6 campussen.

## 📄 Licentie

Dit project is specifiek ontwikkeld voor de dienst Pneumologie van AZORG Ziekenhuis. Alle medische content, logo's en branding zijn eigendom van AZORG.

De **code** (build.py, template.html) is vrijgegeven onder de [MIT-licentie](LICENSE).
