/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */

//points 1-2 



const auto = [
    {
        marca : 'audi',
        modello : 'cabrio',
        alimentazione : 'benzina',
    },
    {
        marca : 'fiat',
        modello: '5 porte',
        alimentazione: 'diesel',
    },
    {
        marca : 'ford',
        modello : '3 porte',
        alimentazione : 'elettrico'
    },
    {
        marca : 'audi',
        modello : 'cabrio',
        alimentazione : 'benzina'
    },
    {
        marca : 'fiat',
        modello : '5 porte',
        alimentazione : 'benzina'
    },
    {
        marca : 'audi',
        modello : 'cabrio',
        alimentazione : 'benzina'
    },
    {
        marca : 'audi',
        modello : '3 porte',
        alimentazione : 'gpl'
    },
    {
        marca : 'ford',
        modello : '3 porte',
        alimentazione : 'gpl',
    },
    {
        marca : 'audi',
        modello : 'cabrio',
        alimentazione : 'benzina',
    },
    {
        marca : 'renaut',
        modello : '9 porte',
        alimentazione : 'diesel',
    },
    
    
];


const benzina = [];
const diesel = [];
const varie = [];


for (let i = 0; i < auto.length; i++) {
    const currentauto = auto [i];
    if (currentauto.alimentazione === 'benzina') {
        benzina.push(currentauto);
        
    } else if (currentauto.alimentazione === 'diesel') {
        diesel.push(currentauto);
    } else{
        varie.push(currentauto);
    }
}

console.log( benzina , diesel , varie )