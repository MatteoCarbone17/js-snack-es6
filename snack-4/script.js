// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI





const animals = [
    { nome: 'leone', 
      famiglia: 'felidi', 
      classe: 'mammiferi' 
    },
    { nome: 'cane', 
      famiglia: 'canidi', 
      classe: 'mammiferi' 
    },
    { nome: 'gallina', 
      famiglia: 'fasianidi', 
      classe: 'uccelli' 
    },
    { nome: 'topo', 
      famiglia: 'roditore', 
      classe: 'mammiferi' 
    },
    { nome: 'delfino', 
      famiglia: 'cetaceo', 
      classe: 'mammiferi' 
    },
    { nome: 'orca', 
      famiglia: 'cataceo', 
      classe: 'mammiferi' 
    },
    { nome: 'serpente', 
      famiglia: 'rettile', 
      classe: 'sangue feddo' 
    },
    { nome: 'gatto', 
      famiglia: 'felidi', 
      classe: 'mammiferi' 
    },
 ]



 const listMammiferi = animals.filter ( (animal) => animal.classe === 'mammiferi' );
    
 console.log(listMammiferi);



 