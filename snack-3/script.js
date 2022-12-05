/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */


const listaZucchine = [
    {
        varieta : 'romana',
        peso: 1 ,
        lunghezza : 12,
    },
    {
        varieta : 'calabrese',
        peso: 3 ,
        lunghezza : 15,
    },
    {
        varieta : 'campana',
        peso: 3 ,
        lunghezza : 14,
    },
    {
        varieta : 'campana',
        peso: 3 ,
        lunghezza : 14,
    },
    {
        varieta : 'romana',
        peso: 1 ,
        lunghezza : 12,
    },
    {
        varieta : 'calabrese',
        peso: 3 ,
        lunghezza : 15,
    },
    {
        varieta : 'pugliese',
        peso: 3 ,
        lunghezza : 15,
    },
    {
        varieta : 'pugliese',
        peso: 3 ,
        lunghezza : 15,
    },
    {
        varieta : 'veneta',
        peso: 5 ,
        lunghezza : 16,
    },
    {
        varieta : 'pugliese',
        peso: 3 ,
        lunghezza : 15,
    },
    
    
];



let somma = 0; 

for (let i = 0; i < listaZucchine.length; i++) {

    somma += listaZucchine[i].peso

    
};
console.log(somma)