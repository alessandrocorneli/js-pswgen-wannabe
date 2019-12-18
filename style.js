var nome = prompt("Oh hey, un nuovo rifugiato qui nella nostra Capital City. Identificati novellino, dimmi il tuo nome:");
console.log(nome);
var cognome = prompt ("Mi hai preso per uno sprovveduto?? Devi darmi anche il tuo cognome se vuoi il tuo passaporto: ");
console.log(cognome);
var colore = prompt ("Capisco, beh siccome hai un bel nome, ti farò un regalo... Di che colore lo vuoi il passaporto per entrare in città?");
console.log(colore);
var nuovaPassword = nome + cognome + colore + '19';
document.writeln("<p>Ecco a te, questo è il tuo codice personale:</p>")
document.writeln(nuovaPassword);
document.writeln("<p>Il codice fa schifo? Ehy, non venirmi a dire come scrivere i codici personali, pivello.</p>")
document.writeln("<p>Entra pure, ma cerca di non fare troppi danni.</p>")
