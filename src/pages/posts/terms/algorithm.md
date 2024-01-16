---
title: Algorithm
slug: algorithm
description: An algorithm is a step-by-step set of instructions or a well-defined procedure designed to perform a specific task or solve a particular problem.
published: "2023-08-12"
link: /terms/algorithm
---

Algorithm:

An algorithm is a step-by-step set of instructions or a well-defined procedure designed to perform a specific task or solve a particular problem. It serves as a blueprint for solving problems and is a fundamental concept in computer science and programming. Algorithms can be expressed in natural language, flowcharts, or programming languages and are used to streamline the process of problem-solving and computation.

Code Examples in Different Languages:

## **Python:**

```python
# Example: Bubble Sort Algorithm
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Usage
my_list = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(my_list)
print("Sorted array:", my_list)
```

## **Java:**

```java
// Example: Binary Search Algorithm
public class BinarySearch {
    int binarySearch(int arr[], int x) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == x) return mid;
            if (arr[mid] < x) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    // Usage
    public static void main(String args[]) {
        BinarySearch binarySearch = new BinarySearch();
        int arr[] = {2, 3, 4, 10, 40};
        int x = 10;
        int result = binarySearch.binarySearch(arr, x);
        if (result == -1)
            System.out.println("Element not present in array");
        else
            System.out.println("Element found at index " + result);
    }
}
```

## **JavaScript:**

```javascript
// Example: Factorial Calculation using Recursion
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

// Usage
let number = 5;
console.log(`Factorial of ${number} is: ${factorial(number)}`);
```
