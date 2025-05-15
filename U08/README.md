# Discar & Tillverkare – Frontend (Angular)

Detta är en enkel, modulär frontend-applikation byggd med Angular som används för att hantera **discar** och deras **tillverkare**. Applikationen fungerar som ett adminverktyg där man kan:

- Skapa, visa, uppdatera och ta bort discar och tillverkare.
- Se vilka discar som tillhör en viss tillverkare.
- Navigera smidigt mellan listor, detaljerade vyer och formulär via en tydlig layout.
- Kommunicera med ett fristående RESTful API (backend) byggt med Node/Express.

Frontend och backend är separata projekt, vilket gör applikationen enkel att vidareutveckla, underhålla och testa.

Deployad version av projektet: <https://u08-wille1989.netlify.app>

## 🚀 Komma igång som utvecklare

För nya utvecklare som vill bidra eller testa projektet lokalt:

### 1. Installera Angular CLI (om du inte redan har det)

```bash
npm install -g @angular/cli

git clone https://github.com/chas-academy/u08-angular-frontend-Wille1989.git
cd U08
npm install

starta applikationen
ng serve

applikationen körs nu på http://localhost:4200



## 📁 Projektstruktur

```text
src/
├── app/
│   ├── core/                            # Kärnlogik som delas över hela appen
│   │   ├── services/                    # HTTP-anrop till backend (discar och tillverkare)
│   │   └── utils/                       # Hjälpklasser, t.ex. global felhantering
│
│   ├── features/                        # Funktionella delar uppdelade per område
│   │   ├── disc/                        # Allt relaterat till discar
│   │   │   ├── disc-by-id/              # Visar enskild disc samt tar bort disc
│   │   │   ├── disc-create/             # Formulär för att skapa ny disc
│   │   │   ├── disc-list/               # Lista alla discar
│   │   │   └── disc-update/             # Formulär för att uppdatera en disc
│   │   ├── manufacturer/                # Allt relaterat till tillverkare
│   │   │   ├── manufacturer-by-id/      # Visar enskild tillverkare samt tar bort tillverkare och tillhörande discar
│   │   │   ├── manufacturer-create/     # Formulär för att skapa tillverkare
│   │   │   ├── manufacturer-list/       # Lista alla tillverkare
│   │   │   └── manufacturer-update/     # Formulär för att uppdatera tillverkare
│   │   ├── models/                      # Datamodeller och hjälpfunktioner
│   │   │   ├── api-response.model.ts    # Modell för generella API-svar
│   │   │   ├── disc.factory.ts          # Hjälpfunktion för att skapa disc-objekt
│   │   │   ├── disc.model.ts            # Typdefinition för disc
│   │   │   └── manufacturer.model.ts    # Typdefinition för tillverkare
│
│   ├── shared/                          # Återanvändbara komponenter
│   │   └── components/
│   │       └── navigation/
│   │           └── navigation-buttons/  # Navigeringsknappar för att byta vy
