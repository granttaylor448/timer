const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
 if (key === '\u0003') {
   console.log('Thanks for using me, ciao!')
   process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    setTimeout(() => {
    console.log(`setting timer for ${key} seconds...`)
    process.stdout.write('\x07');
  },key * 1000)
  }
});

