//1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const studenti ={
    nome : 'clara' ,
    cognome : 'lupizzi',
    eta : 24 ,

}


for (const key in studenti) {

    console.log(key , ':' , studenti[key] );

}
