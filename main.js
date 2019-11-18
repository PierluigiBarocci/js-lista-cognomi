// Nome repo: js-lista-cognomi

// creazione array cognomi
var surname = ['Falcioni', 'Ginobli', 'Scansini', 'Montecchi', 'Capuleti', 'Bilon', 'Stramacchi'];
// Chiedi all’utente il cognome,
var utente = prompt('Inserisci il tuo cognome per favore');
// inseriscilo in un array con altri cognomi
surname.push(utente);
// e stampa la lista ordinata alfabeticamente.
surname.sort();

for (var i = 0; i < surname.length; i++) {
    console.log(surname[i]);
};
// Scrivi anche la posizione della lista in cui  il nuovo utente si trova.
console.log(surname.indexOf(utente));
