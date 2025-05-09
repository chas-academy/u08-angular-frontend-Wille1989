export class ErrorHandler {
    static getErrorMessage(error: any): string {
      if (!error || !error.status) {
        return 'Ett okänt fel inträffade.';
      }
  
      switch (error.status) {
        case 0:
          return 'Ingen kontakt med servern.';
        case 400:
          return 'Ogiltig begäran. Kontrollera dina inmatningar.';
        case 401:
          return 'Du är inte inloggad.';
        case 403:
          return 'Du har inte behörighet att utföra detta.';
        case 404:
          return 'Resursen kunde inte hittas.';
        case 409:
          return 'Konflikt. Datan finns redan eller är i konflikt.';
        case 500:
          return 'Ett internt serverfel inträffade.';
        default:
          return `Ett fel inträffade. Statuskod: ${error.status}`;
      }
    }
  }
  