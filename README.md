# ArrayBuilder

## Overview
The `ArrayBuilder` class is a TypeScript implementation of a dynamic array. It provides basic operations such as insert, remove, and search within a custom array structure.

## Features
- **Dynamic Array**: Automatically resizes based on the operations performed.
- **Type Safety**: Ensures that all elements are numbers.
- **Error Handling**: Provides informative error messages for invalid operations.

## Implementation Details
- `length`: The total number of elements that can be held in the array.
- `insert(input: number)`: Adds a new element to the array.
- `removeAt(index: number)`: Removes the element at the specified index.
- `indexOf(input: number)`: Returns the index of the element if it exists in the array.
- `print()`: Outputs the contents of the array to the console.

## Usage
1. **Create an instance of ArrayBuilder**:
   ```typescript
   const array = new ArrayBuilder(10);

2.**Insert elements**:
```TypeScript

array.insert(3);
array.insert(5);
```
3.**Remove an element**:
```TypeScript

array.removeAt(1);
```
4.**Find the index of an element**:
```TypeScript

array.indexOf(3); // Output: 0
```
5.**Print the array**::
```TypeScript

array.print(); // Output: 3
```
