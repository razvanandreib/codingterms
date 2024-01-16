---
title: Recursion
slug: recursion
description: Recursion is a powerful programming concept that involves a function calling itself in order to solve a problem.
published: "2023-11-09"
link: /terms/recursion
---

# Recursion

Recursion is a powerful programming concept that involves a function calling itself in order to solve a problem. This elegant technique allows for the implementation of complex algorithms in a concise and efficient manner. In this article, we will delve into the world of recursion in three popular programming languages: JavaScript, C++, and Java.

JavaScript:

JavaScript, being a versatile and widely used language for web development, embraces recursion with its flexible syntax. One common application of recursion in JavaScript is in traversing and manipulating tree-like structures, such as the Document Object Model (DOM) in web pages.

```javascript
// Example: Factorial calculation using recursion in JavaScript
function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
```

In this example, the `factorial` function calculates the factorial of a number using recursion. The base case (`n <= 1`) ensures that the recursion stops when the input reaches a defined condition.

C++:

C++ is a powerful and low-level programming language that supports recursion, allowing for the implementation of complex algorithms and data structures. Recursion is often used in scenarios where a problem can be broken down into smaller, identical subproblems.

```cpp
// Example: Fibonacci sequence using recursion in C++
#include <iostream>

int fibonacci(int n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

int main() {
  std::cout << fibonacci(5) << std::endl; // Output: 5
  return 0;
}
```

The example above demonstrates the calculation of the Fibonacci sequence using recursion. The function `fibonacci` recursively calls itself to calculate the nth Fibonacci number.

Java:

Java, known for its portability and object-oriented nature, also supports recursion. Java's syntax is more structured compared to JavaScript, but the principles of recursion remain the same.

```java
// Example: Binary search using recursion in Java
public class BinarySearch {
  public static int binarySearch(int[] array, int target, int low, int high) {
    if (low > high) {
      return -1; // Element not found
    }

    int mid = (low + high) / 2;

    if (array[mid] == target) {
      return mid; // Element found
    } else if (array[mid] < target) {
      return binarySearch(array, target, mid + 1, high);
    } else {
      return binarySearch(array, target, low, mid - 1);
    }
  }

  public static void main(String[] args) {
    int[] sortedArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int target = 7;
    int result = binarySearch(sortedArray, target, 0, sortedArray.length - 1);

    if (result != -1) {
      System.out.println("Element found at index: " + result);
    } else {
      System.out.println("Element not found");
    }
  }
}
```

The Java example demonstrates the implementation of a binary search algorithm using recursion. The function `binarySearch` recursively divides the array and narrows down the search space until the target element is found or the search space becomes empty.

Conclusion:

Recursion is a powerful programming technique that provides an elegant solution to various problems. Whether you are working with the flexibility of JavaScript, the efficiency of C++, or the structure of Java, understanding recursion opens doors to efficient and concise algorithmic solutions. By mastering the art of self-reference, programmers can tackle complex problems with simplicity and elegance.
