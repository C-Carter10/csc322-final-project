# csc322-final-project
csc322 Final Project Repo

This is the repository for CSC322 Final Project

[![ESLint](https://github.com/C-Carter10/csc322-final-project/actions/workflows/eslint.yml/badge.svg)](https://github.com/C-Carter10/csc322-final-project/actions/workflows/eslint.yml)

# Instructions:
You need to implement a program to demonstrate the Goldbach conjecture. The German mathematician Christian
Goldbach (1690-1764) conjectured that every even number greater than two can be represented by a sum of two prime
numbers. This conjecture has never been proved or disproved – although it has been verified for values up to
400,000,000,000,000. As such, you may assume it is true for the cases considered in this project. The goal of the
program you are going to implement is to find all unique ways to represent a given even number as a sum of two prime
numbers. A prime number is an integer greater than one that is evenly divisible by only itself and 1. The first few prime
numbers are 2, 3, 5, 7, 11, .... There may be several ways to represent a given even number as a sum of primes. For
example, the even number 26 may be represented as 3 + 23, 7 + 19, or 13 + 13. The output of the program should
contain a summary line, telling how many Goldbach pairs can be found for a number. It is then followed by a list of
lines, in the form of n = p + q, where n is the input to the program, and p and q are the two prime values, with p ≤ q.
The lines should be sorted in ascending order of p (or descending order of q).

# Example Output:
We found 3 Goldbach pair(s) for 26.\
26 = 3 + 23\
26 = 7 + 19\
26 = 13 + 13

# Additional Info:
In order for you to be able to demonstrate your program, your program should also have a main function (or equivalent)
that allows you to read data from a file (so you can run your Goldbach function for multiple values).
For example, the Python example provided (see later) can be invoked using one of the following commands:

python goldbach.py\
python goldbach.py data.txt

# Your program should demonstrate the followings:
General Requirements:
1. Functional decomposition (into functions, subroutines, methods, etc.) – that is, your program should NOT
be just a big slump of code.
2. Documentation – you should add comments at key positions to explain what you want to do.
3. Readability – you should utilize indentation (and/or other mechanism) to ensure/enhance the readability
of your code.

Operational Requirements:

4. File handling – your program should be able to read data from a file.
5. Output – your program should be able to produce output to screen.
6. Array/list handling – your program should be able to store values to / read values from an array or a list.
7. Command line argument handling – your program should be able to handle argument(s) passed in on the command line

In particular, the following are the requirements that must be found in your program in order to fulfill the operational
requirements:

• Your program should be able to compute the Goldbach pairs for one or more input values (R4).

• For each input value, you program should first output a statement reporting how many Goldbach pairs have been found, before outputting the found Goldbach pairs. That means you will need to first store all found
Goldbach pairs so you can count them before outputting (R5 and R6).

• You should output one line for each pair of the found Goldbach pairs, in the form of input value = p + q, with p <= q. The lines should be arranged in increasing order of p (R5).

• When giving no command line argument, your program should output the Goldbach pairs for the input values of 3, 4, 14, 26, and 100 as a simple demonstration (R7).

• When given one or more command line arguments, your program should assume that the first argument to be the name of an input file, and process all numbers stored in that file. Additional arguments can be ignored (R7).

• You can assume that the input file always exists, and it contains data in the correct format (that is, no error checking is needed).

• You can assume that the input file contains one number per line, and those numbers ae always even integers between 4 to 100,000 (inclusive). The number of lines in the file is NOT known in advance, and the end of the file signals the end of input. Also, the values in the file can appear in any order (R4).

