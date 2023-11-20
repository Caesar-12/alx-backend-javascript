const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

read.question('Welcome to Holberton School, what is your name?\n', (data) => {
  console.log(`Your name is: ${data}`);
  read.close();
});
