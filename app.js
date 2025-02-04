// Testo la corretta funzionalità in seguito all'inizializzazione del progetto
// console.log("Ciao");

// Dopo aver scaricato come dipendenza Express tramite il Terminal, importo il framework Express usando CommonJS (RICHIAMO LA LIBRERIA)
const express = require("express");

// Inizializzo Express invocandolo come una funzione e salvo il risultato in una variabile
// Per fare funzionare il framework devo eseguire la sua mega-funzione principale che mi ritornerà un oggetto che salvo nella costante chiamata app (ma che può essere chiamata in qualsiasi modo)
// Quindi in questo caso non mi ritorna un oggetto, ma una funzione e quindi eseguendo questa funzione in app andrà a salvare l'oggettone di Express
const app = express();

// Do una porta (per questo tipo di applicazioni si usa la porta 3000)
const port = 3000;

// Definisco la prima rotta /, che è il punto di entrata di qualsiasi rotta
// Le rotte leggono l'endpoint utilizzato per vedere quale specifica parte dell'API è richiesta tra quelle previste e restituiscono delle risposte sensate (ogni rotta è associata ad un'azione specifica che il server deve compiere: es. definisco un indirizzo e rispondo in un certo modo, un altro indirizzo e rispondo in un altro modo, ecc.)
// N.B.: la rotta è la corrispondenza sul server dell'endpoint che abbiamo utilizzato finora (LA ROTTA È QUELLA CHE VA A CATTURARE L'ENDPOINT)
// GET = METODO HTTP (usato per accedere alla rotta)
// / = URL CHE CORRISPONDE ALL'ENDPOINT
// Tra i due argomenti dell'arrow function REQ è l'oggetto che va a salvare tutti i dati della richiesta, mentre RES sarà l'oggetto che va a salvare tutti i dati della risposta del server (NEL COMPLESSO È LA FUNZIONE DI RISPOSTA, CHE HA LO SCOPO DI RISPONDERE QUANDO VIENE CHIAMATA LA ROTTA)
app.get("/", (req, res) => {
    // Se l'utente finisce sull'endpoint / gli ritorna un testo con scritto "Server del mio blog"
    // LA RISPOSTA (RES) PREVEDE UN METODO CHE SI CHIAMA SEND NEL QUALE POSSO INVIARE UNA STRINGA
    res.send("Server del mio blog");
});
  
// Avvio il server, mettendolo in ascolto sulla porta indicata
// Lo metto in ascolto di qualsiasi richiesta arrivi sulla porta fissata e quando parte il server scrive in console la cosa indicata tra backtick, così sono a conoscenza che è partito questo server e le cose stanno funzionando
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});