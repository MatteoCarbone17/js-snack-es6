/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */





const persone = [
    { nome: 'luca', 
      cognome: 'felidi', 
      eta: '18' 
    },
    { nome: 'marco', 
      cognome: 'iannuzzi', 
      eta: '24' 
    },
    { nome: 'matteo', 
      cognome: 'ianno', 
      eta: '45' 
    },
    { nome: 'gianna', 
      cognome: 'gianna', 
      eta: '26' 
    },
    { nome: 'mirco', 
      cognome: 'ianno', 
      eta: '87' 
    },
    { nome: 'lucia', 
      cognome: 'ianno', 
      eta: '88' 
    },
    { nome: 'marta', 
      cognome: 'ianno', 
      eta: '15' 
    },
    { nome: 'clara', 
      cognome: 'ianno', 
      eta: '55' 
    },
    { nome: 'marta', 
      cognome: 'iann', 
      eta: '2' 
    },
    { nome: 'gianluca', 
      cognome: 'ianno', 
      eta: '12' 
    },
 ]



 const listcheck = persone.filter ( (persona) => persona.eta > 18 );
    
 console.log(listcheck);



 