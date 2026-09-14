# Instagram-Feed Integration -- KStV Ravensberg Website

## Status: Warte auf Facebook-Zugangsdaten

---

## 1. Facebook-Seite verknüpfen

- [ ] Zugangsdaten zur alten FB-Seite "KStV Ravensberg Münster" besorgen (Admin finden) ODER neue Seite erstellen
- [ ] Instagram Business-Konto (`@kstvravensberg`) mit der Facebook-Seite verknüpfen (Meta Kontenübersicht → Konten hinzufügen)

## 2. Meta Developer App + API Token

- [ ] [developers.facebook.com](https://developers.facebook.com) → My Apps → Create App (Use Case: Other, Type: Business)
- [ ] Instagram-Produkt hinzufügen → "API Setup with Instagram Login"
- [ ] Instagram-Konto verbinden, Token generieren
- [ ] Token im [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/) zu Long-Lived Token verlängern (60 Tage)

## 3. GitHub Secret setzen

- [ ] GitHub Repo → Settings → Secrets → Actions → `INSTAGRAM_TOKEN` = das Long-Lived Token

## 4. CI/CD anpassen

- [ ] GitHub Action (`deploy.yml`) so erweitern, dass `INSTAGRAM_TOKEN` beim Build als Env-Variable verfügbar ist
- [ ] Optional: Cron-Job für regelmäßigen Rebuild (z.B. täglich), damit neue Posts automatisch erscheinen
- [ ] Optional: Token-Refresh automatisieren (alle ~55 Tage)

## 5. InstagramFeed-Komponente umbauen

- [ ] `fetchInstagramPosts()` aus `src/lib/instagram.ts` beim Build aufrufen (ist schon vorbereitet)
- [ ] Posts als Blog-Beiträge darstellen: erstes Bild + Caption-Text + Datum
- [ ] Design ans bestehende System anpassen (Playfair Display Headings, Inter Body, Cream/Gold Palette)
- [ ] Fallback auf aktuelle statische Galerie wenn kein Token gesetzt / API-Fehler
- [ ] `prefers-reduced-motion` beachten bei Animationen

## 6. Token-Wartung

- Long-Lived Token läuft nach 60 Tagen ab
- Manuell: alle ~55 Tage im Access Token Debugger verlängern + GitHub Secret updaten
- Oder: automatischen Refresh per GitHub Action einrichten
