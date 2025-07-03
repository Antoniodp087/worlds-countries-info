# worlds-countries-info

> A React + Vite app che scarica dati sui paesi del mondo da una API esterna e li visualizza in una UI moderna e responsive.

## 📖 Panoramica

Questa applicazione permette di:
- 📋 Visualizzare la lista completa dei paesi.
- 🔍 Cercare un paese per nome.
- 🌍 Filtrare i paesi per regione (es. Europa, Asia, Africa…).
- 📄 Visualizzare i dettagli di un singolo paese (bandiera, capitale, popolazione, lingue, valute, confini…).
- 🎨 (Opzionale) Modalità dark/light.

---

## 🚀 Getting Started

### Prerequisiti

- Node.js ≥ 16.x
- npm o yarn

### Installazione

```bash
git clone https://github.com/Antoniodp087/worlds-countries-info.git
cd worlds-countries-info
npm install
# oppure
yarn install
````

### Avvio in sviluppo

```bash
npm run dev
# oppure
yarn dev
```

Apri il browser su `http://localhost:5173` (o la porta indicata in console).

### Build per produzione

```bash
npm run build
# oppure
yarn build
```

Una volta completata la build, i file ottimizzati verranno generati in `dist/`.

---

## 🗂️ Struttura della cartella `src`

```text
src
├── assets/                # Immagini, icone, SVG
├── components/            # Componenti riutilizzabili
│   ├── CountryCard.jsx    # Card per la visualizzazione veloce di un paese
│   ├── CountryList.jsx    # Lista di CountryCard, mappa su dati
│   ├── CountryDetail.jsx  # Dettaglio di un singolo paese
│   ├── SearchBar.jsx      # Input di ricerca con debounce
│   └── RegionFilter.jsx   # Dropdown per filtrare per continente/regione
│
├── hooks/                 # Custom React hooks
│   └── useCountries.js    # Hook per fetchare e memorizzare i dati dei paesi
│
├── services/              # Moduli per chiamate API
│   └── api.js             # Configurazione axios / endpoint REST Countries
│
├── styles/                # Fogli di stile globali / CSS modules
│   └── index.css
│
├── App.jsx                # Componente root (routing / layout generale)
├── main.jsx               # Entry point: render React in DOM
└── vite.config.js         # Configurazione Vite
```

---

## 🧩 Spiegazione dei principali file

### `main.jsx`

* Punto di ingresso dell’app.
* Importa `App.jsx` e lo monta su `<div id="root">`.
* Applica eventuali global styles e provider (es. Context, ThemeProvider).

### `App.jsx`

* Definisce la struttura base (header, footer, router).
* Gestisce lo stato globale (es. tema dark/light).
* Configura le rotte:

  * `/` → `CountryList`
  * `/country/:code` → `CountryDetail`

### `services/api.js`

```js
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

// Esempi di funzioni
export const fetchAllCountries = () =>
  api.get('/all');

export const fetchCountryByCode = (code) =>
  api.get(`/alpha/${code}`);
```

### `hooks/useCountries.js`

* Custom hook che:

  * Carica i dati con `fetchAllCountries()`
  * Fornisce funzioni per filtrare in-memory (regioni, ricerca).
  * Gestisce loading / error state.

### `components/SearchBar.jsx`

* Campo input di testo.
* Debounce di 300ms per evitare troppe chiamate al filtro.
* Chiama `onSearch(term)` sul cambiamento.

### `components/RegionFilter.jsx`

* Select/dropdown con le regioni (Europe, Asia, Americas…).
* Chiama `onSelect(region)` quando si cambia selezione.

### `components/CountryList.jsx`

* Riceve `countries` (array di oggetti country).
* Mostra griglia di `CountryCard`.

### `components/CountryCard.jsx`

* Scheda singolo paese.
* Mostra bandiera, nome comune, popolazione e regione.
* Il click rimanda a `/country/{cca3}`.

### `components/CountryDetail.jsx`

* Effettua fetch di un singola nazione via `fetchCountryByCode`.
* Mostra:

  * Bandiera in grande.
  * Nome ufficiale e comune.
  * Popolazione, area, capitale, subregione.
  * Lingue, valute.
  * Confini con altri paesi (link a detail di ciascuno).

---

## 🤝 Contribuire

1. Fai fork del repo
2. Crea un branch: `git checkout -b feature/nome-feature`
3. Commit dei tuoi cambiamenti: `git commit -m 'Aggiunge feature XYZ'`
4. Push sul branch: `git push origin feature/nome-feature`
5. Apri una Pull Request

---

## 📝 Licenza

MIT © [Antoniodp087](https://github.com/Antoniodp087)

---

*Documento generato automaticamente per aiutarti a iniziare.* Sentiti libero di migliorarlo!
