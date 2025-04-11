EX - Lista di Politici
===
## Consegna:
### 📌 Milestone 1:
- Effettua una chiamata API a "https://boolean-spec-frontend.vercel.app/freetestapi/politicians"
- Salva la risposta in uno useState.
- Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà: nome, immagine, posizione, biografia.

Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

### 📌 Milestone 2:
- Aggiungi un campo di ricerca (<'input type="text"'>) sopra la lista dei politici.
- Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
- ❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

### 📌 Milestone 3: 
- Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
- Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
- Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.

### 🎯 Bonus:
- Creare un array derivato che contiene tutte le posizioni politiche (position) disponibili, ma senza duplicati.
- Aggiungere un <'select'> sopra la lista che permette di filtrare i politici anche in base alla loro posizione.
- Modificare l’array filtrato per tenere conto sia della stringa di ricerca, sia della posizione selezionata.