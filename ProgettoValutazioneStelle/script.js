const ratingInputs = document.getElementsByName('rating');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
    let ratingValue;

    for (const input of ratingInputs) {
        if (input.checked) {
            ratingValue = input.value;
            break;
        }
    }

    if (ratingValue) {
        const fileName = 'rating.txt';
        const fileContent = `Valutazione: ${ratingValue}`;

        const fileBlob = new Blob([fileContent], {type: 'text/plain'});
        const fileUrl = URL.createObjectURL(fileBlob);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.download = fileName;
        downloadLink.click();
    } else {
        alert('Per favore, seleziona una valutazione.');
    }
});

/*

COMMENTI DEL CODICE::

const ratingInputs = document.getElementsByName('rating');: questa riga di codice seleziona tutti gli input con il nome "rating" e li memorizza in una variabile chiamata "ratingInputs".

const submitBtn = document.getElementById('submit-btn');: questa riga di codice seleziona il pulsante di invio del form e lo memorizza in una variabile chiamata "submitBtn".

submitBtn.addEventListener('click', () => {...}: questo codice aggiunge un ascoltatore di eventi al pulsante di invio. Quando l'utente fa clic sul pulsante, il codice all'interno delle parentesi graffe verrà eseguito.

let ratingValue;: questa riga di codice dichiara una variabile chiamata "ratingValue" che verrà utilizzata per memorizzare il valore della valutazione selezionata dall'utente.

for (const input of ratingInputs) {...}: questo ciclo for attraversa tutti gli input "rating" selezionati in precedenza. Per ciascuno di essi, il codice controlla se l'input è stato selezionato dall'utente (if (input.checked) {...}). Se l'input è stato selezionato, il valore viene memorizzato nella variabile "ratingValue".

if (ratingValue) {...}: questo codice controlla se la variabile "ratingValue" è stata impostata. Se sì, il codice procede a creare un file di testo con il nome "rating.txt" e il contenuto "Valutazione: {ratingValue}".

const fileBlob = new Blob([fileContent], {type: 'text/plain'});: questo codice crea un oggetto Blob con il contenuto del file di testo.

const fileUrl = URL.createObjectURL(fileBlob);: questo codice crea un URL temporaneo per il file di testo, utilizzando l'oggetto Blob.

const downloadLink = document.createElement('a');: questo codice crea un nuovo elemento "a" (un link) che verrà utilizzato per scaricare il file di testo.
downloadLink.href = fileUrl;: questo codice imposta l'URL del link sul URL temporaneo creato in precedenza.

downloadLink.download = fileName;: questo codice imposta il nome del file di testo come nome del file di download.

downloadLink.click();: questo codice fa clic sul link appena creato, scaricando il file di testo.
*/
