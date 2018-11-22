var studente = {
    "Nome " : "Davide",
    "Cognome " : "Patruno",
    "Età " : 30,
};

for (var field in studente){
  document.writeln(field + studente[field] + "<br>");
}

var studenti = [
  {
    "nome " : "Ciccio",
    "cognome " : "Bianchi",
    "età " : 22,
  },
  {
    "nome " : "Franco",
    "cognome " : "Rossi",
    "età " : 25,
  },
  {
    "nome " : "Pippo",
    "cognome " : "Verdi",
    "età " : 27,
  }
];

for (var i = 0; i < studenti.length; i++) {
  for (var field in studenti[i]){
    document.writeln(field + studenti[i][field] + "<br>");
  }
};

for (var field in studenti[0]) {
  var inserzione_utente = prompt("inserisci nome");

  studenti.push(inserzione_utente);
  console.log(studenti);
}
