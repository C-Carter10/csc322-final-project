// This app demonstrates the Goldbach conjecture.

const cachedPrimes = {}; // Cache for storing primes

function getPrimes(maxNumber) {
  // Computes and returns all prime numbers up to 'maxNumber'
  if (cachedPrimes[maxNumber]) {
    return cachedPrimes[maxNumber];
  }
  const primes = [];
  for (let value = 2; value <= maxNumber; value++) {
    let isPrime = true;
    for (const prime of primes) {
      if (value % prime === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(value);
    }
  }
  cachedPrimes[maxNumber] = primes;
  return primes;
}

function goldbach(value) {
  // Returns a list of integers such that for each p in the list,
  // p + q = value, p <= q, and both p and q are primes.
  const result = [];
  if (value >= 4 && value % 2 === 0) {
    const primes = getPrimes(value);
    for (const prime of primes) {
      if (prime > value / 2) {
        break;
      }
      const difference = value - prime;
      if (primes.includes(difference)) {
        result.push(prime);
      }
    }
  }
  return result;
}

function printGoldbach(value, primeList) {
  // Given the value of n and the output of goldbach(value),
  // prints out the result to the screen.
  if (primeList.length === 0) {
    console.log(`We found no Goldbach pairs for ${value}.`);
  } else {
    console.log(`We found ${primeList.length} Goldbach pair(s) for ${value}.`);
    for (const prime of primeList) {
      const difference = value - prime;
      console.log(`${value} = ${prime} + ${difference}`);
    }
  }
  console.log('');
}

function main() {
  // Entry point of the program.
  const data = process.argv.slice(2).flatMap(filename => readfile(filename));
  if (data.length === 0) {
    data.push(3, 4, 14, 26, 100);
  }
  for (const value of data) {
    printGoldbach(value, goldbach(value));
  }
}

function readfile(filename) {
  // Reads and returns data from a file,
  // we assume no problem on opening and reading from the file.
  const fs = require('fs');
  const data = [];
  const lines = fs.readFileSync(filename, 'utf8').split('\n');
  for (const line of lines) {
    const parsedValue = parseInt(line.trim(), 10);
    if (!isNaN(parsedValue)) {
      data.push(parsedValue);
    }
  }
  return data;
}

main(); // Invoke the main program.
