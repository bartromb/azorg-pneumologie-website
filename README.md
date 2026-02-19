# Dienst Pneumologie — AZOrg Ziekenhuis

Draft website van de Dienst Pneumologie / Longziekten van AZOrg Ziekenhuis.

**Gebouwd met** [Astro](https://astro.build) · **Inhoud via** Markdown/YAML in Git · **Deployment** via GitHub Actions naar eigen AZOrg-server

---
## 🔎 Statische pagina (demo)

- **Preview (rendered):** [longziekten-azorg-v2.html](https://htmlpreview.github.io/?https://github.com/bartromb/azorg-pneumologie-website/blob/main/longziekten-azorg-v2.html)  
  *(als je op de link klikt, zie je de statische HTML-pagina in je browser)*
- **Bronbestand in deze repo:** [`longziekten-azorg-v2.html`](./longziekten-azorg-v2.html)



## 🚀 Snel starten

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # Statische site in dist/
```

## 📁 Structuur

```
src/
  content/           ← Alle bewerkbare inhoud (artsen, campussen, nieuws…)
  components/        ← Nav, Footer
  layouts/           ← BaseLayout
  pages/             ← Pagina-routes
  styles/            ← Global CSS
public/
  images/            ← Artsenfoto's, logo's
.github/workflows/   ← Automatische build & deploy
```

## ✏️ Inhoud bewerken

Zie **[CONTRIBUTING.md](./CONTRIBUTING.md)** voor de volledige handleiding, ook voor niet-technische medewerkers.

## 🔧 Deployment

Bij elke push naar `main` bouwt GitHub Actions de site en deployt via rsync naar de AZOrg-server. Zie `.github/workflows/deploy.yml` en stel de nodige GitHub Secrets in.

## 📞 Contact

Vragen? Open een [Issue](../../issues) of contacteer de webmaster.
