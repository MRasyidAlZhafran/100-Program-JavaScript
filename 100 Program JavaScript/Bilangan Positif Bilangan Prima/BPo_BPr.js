const n = 50;

for (let num = 2; num <= n; num++) {
  let prima = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prima = false;
      break;
    }
  }

  if (prima) {
    console.log(num);
  }
}