const fs = require('fs'); // Import the file system module for file operations
const { performance } = require('perf_hooks'); // Import performance module for timing

// Function to compute and return all prime numbers up to 'maxNumber'
function getPrimes(maxNumber) {
  const sieve = new Array(maxNumber + 1).fill(true); // Create an array to mark non-prime numbers
  const primes = [];

  // 0 and 1 are not prime
  sieve[0] = false;
  sieve[1] = false;

  // Use Sieve of Eratosthenes algorithm to mark non-prime numbers
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

// Function to find Goldbach pairs for a given even integer value
function goldbach(value) {
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

// Function to print Goldbach pairs for a given value
function printGoldbach(value, primeList, outputStream) {
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

// Function to read data from a file
function readfile(filename) {
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

// Main function to orchestrate the program flow
function main() {
  const inputFile = process.argv[2]; // Get input file name from command-line arguments
  const outputFile = 'goldbach_results.txt'; // Define output file name
  const data = readfile(inputFile); // Read data from input file

  const outputStream = fs.createWriteStream(outputFile); // Create a write stream for the output file

  if (data.length === 0) {
    // If no data is read from input file, use default values
    data.push(3, 4, 14, 26, 100);
  }

  const startTime = performance.now(); // Record the start time

  for (const value of data) {
    // Iterate over each value in the data array and find Goldbach pairs
    const goldbachPairs = goldbach(value);
    // Print Goldbach pairs for the current value to both terminal and output file
    printGoldbach(value, goldbachPairs, outputStream);
  }

  outputStream.end(); // Close the output stream

  const endTime = performance.now(); // Record the end time

  // Calculate the total execution time in seconds
  const executionTime = (endTime - startTime) / 1000; // Convert milliseconds to seconds

  // Print the execution time to the terminal
  console.log(`Execution time: ${executionTime.toFixed(2)} seconds`);

  // Print a message indicating where the results have been written
  console.log(`Results have been written to ${outputFile}.`);
}

main(); // Invoke the main function
