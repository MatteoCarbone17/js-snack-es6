//1.** Creare un oggetto che descriva una studentessa o uno studente, con le seguenti proprietà: `nome`, `cognome` e `età`.
//2.** Stampare a schermo attraverso un ciclo `for-in` tutte le proprietà dell'oggetto.
//3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte) e mostriamoli.

const studentessa ={
    nome : 'clara' ,
    cognome : 'lupizzi',
    eta : 24 ,

}


for (const key in studentessa) {
    console.log(key , ':' , studentessa[key] );

}


const studenti ={
    nome : [ 'clara', 'luca', 'marco' ],
    cognome : ['lupizzi', 'casella' , 'mancuso'],
    eta : [24 , 22 , 21, ],

}

for (const key in studenti) {
    console.log(key , ':' , studenti[key] );

}