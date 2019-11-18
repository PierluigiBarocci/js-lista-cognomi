// Nome repo: js-lista-cognomi

// creazione array cognomi
var surname = ['Falcioni', 'Ginobli', 'Scansini', 'Montecchi', 'Capuleti', 'Bilon', 'Stramacchi'];
// Chiedi all’utente il cognome,
var utente = prompt('Inserisci il tuo cognome per favore');
if (!isNaN(utente)) {
    alert('Mi risulta che ' + utente + ' sia un numero. Riproviamo?');
    window.location.reload();
} else{
    alert('Grazie, ora lo aggiungo a questa lista: ' + surname);
    // inseriscilo in un array con altri cognomi
    surname.push(utente);
    // e stampa la lista ordinata alfabeticamente.
    alert('Fammi dare una sistemata...');
    surname.sort();

    for (var i = 0; i < surname.length; i++) {
        console.log(surname[i]);
    };
    alert('Perfetto, la lista ora è in ordine alfabetico: ' + surname);
    // Scrivi anche la posizione della lista in cui il nuovo utente si trova.
    alert('E il tuo cognome è in posizione ' + surname.indexOf(utente) + '.');
    console.log('Il tuo cognome è in posizione ' + surname.indexOf(utente) + '.');
};
