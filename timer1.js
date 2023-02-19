let arr = process.argv.slice(2);
for (let i = 0; i < arr.length; i++) {
  if (typeof Number(arr[i]) === 'number' && arr[i] > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (arr[i] * 1000));
  }
}
