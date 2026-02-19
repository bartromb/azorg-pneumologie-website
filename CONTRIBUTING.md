# Samenwerken via GitHub — Handleiding voor het team

## Overzicht

Deze website is gebouwd met [Astro](https://astro.build). Alle inhoud staat in **Markdown- en YAML-bestanden** in de map `src/content/`. Geen database, geen inlogscherm — gewoon tekstbestanden die via Git beheerd worden.

---

## Inhoud bewerken zonder code-kennis

### Via GitHub.com (aanbevolen voor artsen/secretariaat)

1. Ga naar [github.com](https://github.com) en log in
2. Navigeer naar het juiste bestand (zie structuur hieronder)
3. Klik op het **potlood-icoontje** (✏️) rechts bovenaan
4. Pas de tekst aan
5. Scroll naar beneden → kies **"Create a new branch and start a pull request"**
6. Geef een korte beschrijving en klik **"Propose changes"**
7. Een collega of webmaster beoordeelt de wijziging en keurt goed → automatisch online

> ⚠️ Bewerk nooit rechtstreeks op `main` — gebruik altijd een nieuwe branch.

---

## Bestandsstructuur: waar staat wat?

```
src/content/
│
├── artsen/               ← Eén YAML-bestand per arts
│   ├── kurt-tournoy.yaml
│   ├── valerie-adam.yaml
│   └── ...
│
├── campussen/            ← Eén YAML-bestand per campus
│   ├── aalst-moorselbaan.yaml
│   └── ...
│
├── aandoeningen/         ← Eén Markdown-bestand per aandoening
│   ├── astma.md
│   ├── copd.md
│   └── ...
│
├── klinieken/            ← Eén Markdown-bestand per kliniek
│   ├── slaapkliniek.md
│   └── ...
│
└── nieuws/               ← Eén Markdown-bestand per nieuwsbericht
    └── rookvrije-zorg-2024.md
```

---

## Een arts toevoegen of aanpassen

### Arts toevoegen
Maak een nieuw bestand aan in `src/content/artsen/` met naam `voornaam-achternaam.yaml`:

```yaml
naam: "Dr. Voornaam Achternaam"
titel: "Longarts"                     # Officiële titel
specialisatie: "COPD & Astma"        # Hoofdspecialisatie
geconventioneerd: true
campussen:
  - "aalst-moorselbaan"               # Gebruik de bestandsnaam zonder .yaml
  - "asse"
foto: "/images/artsen/voornaam-achternaam.jpg"  # Optioneel
bio: "Korte biografie..."             # Optioneel
volgorde: 15                          # Lagere nummers verschijnen eerst
```

**Beschikbare campussen-slugs:**
- `aalst-moorselbaan`
- `aalst-merestraat`
- `asse`
- `geraardsbergen`
- `ninove`
- `wetteren`

### Arts aanpassen
Open het bestaande `.yaml`-bestand en pas de gewenste velden aan.

---

## Een nieuwsbericht toevoegen

Maak een nieuw bestand aan in `src/content/nieuws/` met naam `korte-titel-JJJJ.md`:

```markdown
---
titel: "Titel van het bericht"
datum: 2025-03-15
tag: "Rookstop"          # Kort label, bijv. Rookstop / Onderzoek / Longkanker
excerpt: "Korte samenvatting (1-2 zinnen)"
gepubliceerd: true
---

Hier schrijf je de volledige tekst.

## Subtitel (optioneel)

Verdere uitleg...
```

---

## Een aandoening of kliniek aanpassen

Open het `.md`-bestand in `src/content/aandoeningen/` of `src/content/klinieken/`.

Het bovenste deel (tussen `---`) bevat metadata, de rest is gewone tekst in Markdown-formaat.

**Markdown basisregels:**
| Wat je typt | Resultaat |
|---|---|
| `# Grote titel` | H1 |
| `## Subtitel` | H2 |
| `**vetgedrukt**` | **vetgedrukt** |
| `*cursief*` | *cursief* |
| `- item` | Opsomming |
| `[tekst](url)` | Hyperlink |

---

## Campusinfo aanpassen (telefoon, e-mail, uren)

Open het juiste `.yaml`-bestand in `src/content/campussen/`, bijv. `aalst-moorselbaan.yaml`, en pas de gewenste velden aan.

---

## Fotos van artsen toevoegen

1. Sla de foto op als `voornaam-achternaam.jpg` (min. 300×300 px, max. 1 MB)
2. Upload naar `public/images/artsen/`
3. Zet in het YAML-bestand van de arts: `foto: "/images/artsen/voornaam-achternaam.jpg"`

---

## Technisch: lokale ontwikkeling

```bash
# 1. Repository klonen
git clone https://github.com/AZOrg/pneumologie.git
cd pneumologie

# 2. Dependencies installeren
npm install

# 3. Lokale server starten (http://localhost:4321)
npm run dev

# 4. Productie-build testen
npm run build
npm run preview
```

---

## Workflow samenwerken (Git flow)

```
main branch          ← Altijd stabiel, automatisch online
  └── feature/naam-arts-toevoegen   ← Jouw werktak
  └── fix/telefoonnummer-asse       ← Kleine fix
```

**Stappenplan:**
1. `git checkout -b feature/mijn-wijziging`
2. Pas bestanden aan
3. `git add . && git commit -m "Voeg Dr. X toe aan artsenlijst"`
4. `git push origin feature/mijn-wijziging`
5. Open een **Pull Request** op GitHub
6. Collega beoordeelt → merge naar `main` → automatisch online via GitHub Actions

---

## GitHub Secrets instellen voor deployment

Ga naar: **GitHub repo → Settings → Secrets and variables → Actions**

| Secret | Waarde |
|--------|--------|
| `DEPLOY_HOST` | IP-adres of hostname van de AZOrg-server |
| `DEPLOY_USER` | SSH-gebruikersnaam |
| `DEPLOY_SSH_KEY` | Private SSH-sleutel (zonder wachtwoord) |
| `DEPLOY_PATH` | Pad op de server, bijv. `/var/www/pneumologie/` |

---

## Vragen?

Contacteer de webmaster of maak een **Issue** aan op GitHub.
