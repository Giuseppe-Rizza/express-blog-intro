// Testo la corretta funzionalità in seguito all'inizializzazione del progetto
// console.log("Ciao");

// Dopo aver scaricato come dipendenza Express tramite il Terminal, importo il framework Express usando CommonJS
const express = require("express");

// In questo caso non mi ritorna un oggetto, ma una funzione e quindi eseguendo questa funzione in app.js andrà a salvare l'oggettone di Express
const app = express();

// Do una porta
const port = 3000;

// Attribuisco la prima rotta /, che è il punto di entrata di qualsiasi rotta
app.get('/', (req, res) => {
    // Rispondo con "Server del mio blog"
    res.send("Server del mio blog");
});
   
// Lo metto in ascolto di qualsiasi richiesta arrivi sulla porta fissata e quando parte il server scrivi la cosa indicata tra backtick, così sono a conoscenza che è partito questo server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});