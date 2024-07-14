---
title: Inheritance
slug: inheritance
description: Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class, known as the derived or child class, to inherit properties and behaviors (methods) from an existing class, known as the base or parent class.
published: 2023-09-16
link: terms/inheritance
draft: false
---

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class, known as the derived or child class, to inherit properties and behaviors (methods) from an existing class, known as the base or parent class. This enables code reuse and the creation of a hierarchical relationship between classes. The child class can extend or override the functionalities of the parent class, facilitating the development of more specialized and enhanced versions of existing code.

#### **Python:**

```python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"

# Child class
class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

# Usage
dog = Dog("Buddy")
print(dog.speak())  # Output: Buddy barks
```

#### **Java**

```java
// Parent class
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    String speak() {
        return name + " makes a sound";
    }
}

// Child class
class Dog extends Animal {
    Dog(String name) {
        super(name);
    }

    @Override
    String speak() {
        return name + " barks";
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");
        System.out.println(dog.speak());  // Output: Buddy barks
    }
}
```

#### **Javascript**

```javascript
// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

// Child class
class Dog extends Animal {
  speak() {
    return `${this.name} barks`;
  }
}

// Usage
const dog = new Dog("Buddy");
console.log(dog.speak()); // Output: Buddy barks
```
