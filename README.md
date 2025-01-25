# TypeScript Type Error: Adding Number and String

This repository demonstrates a common type error in TypeScript that occurs when attempting to add a number and a string. The TypeScript compiler correctly identifies this type mismatch, preventing the code from compiling unless explicitly handled.

## Bug
The `add` function is designed to add two numbers. However, in the example, we try to pass a string ('10') as the second argument. This results in a type error. 

## Solution
The solution involves ensuring that both arguments passed to the `add` function are numbers. This can be done through explicit type checking or using type guards.