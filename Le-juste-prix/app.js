/*number = 42;*/
/*const input = prompt('Devinez le juste prix');*/

let number = Math.floor(Math.random() * 150);
alert('Le nombre est' + number);
console.log('Le nombre est' + number);
while (true) {
  const input = prompt(' Devinez le juste prix');
  if (input < number) {
    alert('Le chiffre est plus grand');
  } else if (input > number) {
    alert('le chiffre est plus petit');
  } else {
    alert('Vous avez le juste prix!!');
    break;
  }
}
