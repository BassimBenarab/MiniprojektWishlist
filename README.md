# 🎁 Miniprojekt – Wishlist App  
**Udviklet af:** Bassim Benarab  
**Uddannelse:** Datamatiker
**Semester:** 2. semester  
**Dato:** November 2025  

---

## 🧠 Projektbeskrivelse
Dette projekt er en simpel **wishlist-applikation** udviklet som en del af miniprojektet på datamatikeruddannelsen.  
Formålet med applikationen er at give brugeren mulighed for at:
- Oprette ønsker (items)
- Se en oversigt over alle ønsker
- Slette ønsker  
Data håndteres i en **SQLite-database**, og systemet er bygget med et simpelt **Node.js/Express backend** og et **frontend** der kommunikerer med API’et.

---

## ⚙️ Teknologier brugt
**Backend:**
- Node.js (v20+)
- Express.js
- CORS
- SQLite3
- Nodemon (til udvikling)

**Frontend:**
- Simpelt HTML/JS interface (index.html)
- Fetch API til at kalde backendens endpoints

---

## 🧩 Projektstruktur
MiniprojektWishlist/
│
├── backend/
│ ├── src/
│ │ ├── server.js # Express server med API routes
│ │ └── db.js # Database initialisering og funktioner
│ ├── package.json
│ ├── wishlist.db # SQLite databasefil
│ └── ...
│
├── frontend/
│ └── index.html # Simpel frontend til test
│
├── resources/
│ ├── create_db.sql # Database struktur
│ └── seed_data.sql # Eksempeldata
│
├── .github/workflows/ # GitHub Actions workflow (CI)
├── .gitignore
└── README.md

yaml
Kopier kode

---

## 🚀 Sådan kører du projektet lokalt

### 1️⃣ Klon projektet
```bash
git clone https://github.com/BassimBenarab/MiniprojektWishlist.git
cd MiniprojektWishlist/backend
2️⃣ Installer afhængigheder
bash
Kopier kode
npm install
3️⃣ Start serveren
bash
Kopier kode
npm run dev
4️⃣ Åbn i browseren
Gå til:
👉 http://localhost:3000

Du kan nu tilgå API’et:

GET /api/wishlist → henter alle ønsker

POST /api/wishlist → tilføjer et nyt ønske

DELETE /api/wishlist/:id → sletter et ønske

🧪 API-eksempler
Tilføj et nyt ønske

bash
Kopier kode
POST http://localhost:3000/api/wishlist
Content-Type: application/json

{
  "title": "Nye fodboldstøvler"
}
Svar:

json
Kopier kode
{
  "success": true
}
🧱 Databasestruktur
Tabel: wishlist

Kolonne	Type	Beskrivelse
id	INTEGER	Primærnøgle
title	TEXT	Ønskets titel

🔄 GitHub Actions (CI)
Projektet indeholder et simpelt workflow i .github/workflows/ci.yml, som:

Kører npm install

Validerer projektets opsætning

Tjekker om serveren kan bygges uden fejl

✨ Perspektivering
Dette projekt er en del af min læring i backend-udvikling med Node.js og SQLite.
Det demonstrerer forståelse for:

REST API design

Asynkrone kald med async/await

Simpel databaseintegration

Versionsstyring med Git og GitHub

📞 Kontakt
Navn: Bassim Benarab
E-mail: Kickotte7@gmail.com
Telefon: 61 67 99 94

“Kode skal ikke bare virke — det skal forstås.”
– Bassim Benarab

yaml
Kopier kode

---

### 🧾 Sådan gør du nu:
1. Åbn din projektmappe.  
2. Gå til `README.md`.  
3. Slet alt gammelt indhold.  
4. Indsæt teksten ovenfor.  
5. Gem filen og kør:
   ```bash
   git add README.md
   git commit -m "add final README for submission"
   git push origin dev