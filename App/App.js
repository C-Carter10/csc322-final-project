const fs = require('fs');

const { performance } = require('perf_hooks');


function getPrimes(maxNumber) {
  const sieve = new Array(maxNumber + 1).fill(true); // Create an array to mark non-prime numbers
  const primes = [];

  // 0 and 1 are not prime
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= Math.sqrt(maxNumber); i++) {
    if (sieve[i]) {
      // If i is prime, mark its multiples as non-prime
      for (let j = i * i; j <= maxNumber; j += i) {
        sieve[j] = false;
      }
    }
  }

  // Collect all prime numbers
  for (let i = 2; i <= maxNumber; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

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

function printGoldbach(value, primeList, outputStream) {
  // Given the value of n and the output of goldbach(value),
  // prints out the result to the provided output stream.
  if (primeList.length === 0) {
    const noPairsMsg = `We found no Goldbach pairs for ${value}.\n`;
    outputStream.write(noPairsMsg);
    console.log(noPairsMsg);
  } else {
    const pairsMsg = `We found ${primeList.length} Goldbach pair(s) for ${value}.\n`;
    outputStream.write(pairsMsg);
    console.log(pairsMsg);
    for (const prime of primeList) {
      const difference = value - prime;
      const pairMsg = `${value} = ${prime} + ${difference}\n`;
      outputStream.write(pairMsg);
      console.log(pairMsg);
    }
  }
  outputStream.write('\n');
  console.log('');
}

function main() {
  const inputFile = process.argv[2];
  const outputFile = 'goldbach_results.txt';
  const data = readfile(inputFile);
  const outputStream = fs.createWriteStream(outputFile);

  if (data.length === 0) {
    data.push(3, 4, 14, 26, 100);
  }

  const startTime = performance.now(); // Record the start time

  for (const value of data) {
    const goldbachPairs = goldbach(value);
    printGoldbach(value, goldbachPairs, outputStream);
  }

  outputStream.end();
  const endTime = performance.now(); // Record the end time

  const executionTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds
  console.log(`Execution time: ${executionTime.toFixed(2)} seconds`);

  console.log(`Results have been written to ${outputFile}.`);
}


function readfile(filename) {
  // Reads and returns data from a file,
  // we assume no problem on opening and reading from the file.
  const data = [];
  if (filename) {
    const lines = fs.readFileSync(filename, 'utf8').split('\n');
    for (const line of lines) {
      const parsedValue = parseInt(line.trim(), 10);
      if (!isNaN(parsedValue)) {
        data.push(parsedValue);
      }
    }
  }
  return data;
}

main(); // Invoke the main program.
