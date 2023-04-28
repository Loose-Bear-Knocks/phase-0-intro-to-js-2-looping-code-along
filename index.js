const names = [];
function writeCards(names) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return cards;
}
writeCards(names);

debugger;

function countDown(i){
  for (let i = 0; i < 11 ; i++)
      console.log (i);
  }
  function VarRedeclaration(i) {
    for(let i = 4; i > 0; i--)
      console.log (i);
  }
  
