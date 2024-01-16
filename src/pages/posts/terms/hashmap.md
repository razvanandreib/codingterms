---
title: Hash Map
slug: hash-map
description: A hash map, also known as a hash table or dictionary, is a data structure that stores key-value pairs.
published: "2023-08-06"
link: /terms/hash-map
---

A hash map, also known as a hash table or dictionary, is a data structure that stores key-value pairs. It provides efficient insertion, deletion, and retrieval operations. The key is used to compute a hash code, which is then mapped to a bucket or slot in the hash map. Each bucket can store multiple key-value pairs. The hash code ensures fast access to the corresponding bucket, allowing for constant-time average complexity for operations like insertion, deletion, and lookup.

When inserting a key-value pair into a hash map, the hash code of the key is computed, and the pair is placed in the corresponding bucket. If there is already a pair with the same key, it can be updated or replaced.

During retrieval, the hash map computes the hash code of the given key and looks for the corresponding bucket. It then performs a search within the bucket to find the desired key-value pair.

Hash maps are widely used because they provide fast access to data. However, collisions can occur when multiple keys have the same hash code, which means they map to the same bucket. To handle collisions, various techniques are employed, such as chaining (storing multiple pairs in the same bucket using linked lists) or open addressing (finding an alternative empty slot within the hash map).

Overall, hash maps are efficient for storing and retrieving key-value pairs when fast access is required, making them a fundamental data structure in many programming languages and applications.

## Examples of Hashmaps in different programming languages:

#### C++

```cpp
#include <iostream>

#include <unordered_map>

using namespace std;

int main() {

// Create a hashmap

unordered_map < int, string > hashmap;

// Insert key-value pairs

hashmap.insert({ 1, "Value 1"});
hashmap.insert({ 2, "Value 2"});
hashmap.insert({ 3, "Value 3"});

// Access values using keys

cout << "Value associated with key 1: " << hashmap[1] << endl;
cout << "Value associated with key 2: " << hashmap[2] << endl;
cout << "Value associated with key 3: " << hashmap[3] << endl;

// Check if a key exists

if (hashmap.find(4) != hashmap.end()) {

cout << "Key 4 found!" << endl;

} else {

cout << "Key 4 not found!" << endl;
}

// Remove a key-value pair

hashmap.erase(2);

// Iterate over key-value pairs
for (const auto & pair: hashmap) {
cout << "Key: " << pair.first << ", Value: " << pair.second << endl;
}

return 0;
}
```

#### Java

```java
import java.util.HashMap;

public class GFG {

	// Main driver method
	public static void main(String[] args)
	{
		HashMap<String, Integer> map = new HashMap<>();

		map.put("vishal", 10);
		map.put("sachin", 30);
		map.put("vaibhav", 20);

		System.out.println("Size of map is:- "
						+ map.size());
		System.out.println(map);

		if (map.containsKey("vishal")) {
			Integer a = map.get("vishal");
			System.out.println("value for key"
							+ " \"vishal\" is:- " + a);
		}
	}
}

```

#### Python

```python
class HashTable:

	# Create empty bucket list of given size
	def __init__(self, size):
		self.size = size
		self.hash_table = self.create_buckets()

	def create_buckets(self):
		return [[] for _ in range(self.size)]

	# Insert values into hash map
	def set_val(self, key, val):

		# Get the index from the key
		# using hash function
		hashed_key = hash(key) % self.size

		# Get the bucket corresponding to index
		bucket = self.hash_table[hashed_key]

		found_key = False
		for index, record in enumerate(bucket):
			record_key, record_val = record

			# check if the bucket has same key as
			# the key to be inserted
			if record_key == key:
				found_key = True
				break

		# If the bucket has same key as the key to be inserted,
		# Update the key value
		# Otherwise append the new key-value pair to the bucket
		if found_key:
			bucket[index] = (key, val)
		else:
			bucket.append((key, val))

	# Return searched value with specific key
	def get_val(self, key):

		# Get the index from the key using
		# hash function
		hashed_key = hash(key) % self.size

		# Get the bucket corresponding to index
		bucket = self.hash_table[hashed_key]

		found_key = False
		for index, record in enumerate(bucket):
			record_key, record_val = record

			# check if the bucket has same key as
			# the key being searched
			if record_key == key:
				found_key = True
				break

		# If the bucket has same key as the key being searched,
		# Return the value found
		# Otherwise indicate there was no record found
		if found_key:
			return record_val
		else:
			return "No record found"

	# Remove a value with specific key
	def delete_val(self, key):

		# Get the index from the key using
		# hash function
		hashed_key = hash(key) % self.size

		# Get the bucket corresponding to index
		bucket = self.hash_table[hashed_key]

		found_key = False
		for index, record in enumerate(bucket):
			record_key, record_val = record

			# check if the bucket has same key as
			# the key to be deleted
			if record_key == key:
				found_key = True
				break
		if found_key:
			bucket.pop(index)
		return

	# To print the items of hash map
	def __str__(self):
		return "".join(str(item) for item in self.hash_table)


hash_table = HashTable(50)

# insert some values
hash_table.set_val('gfg@example.com', 'some value')
print(hash_table)
print()

hash_table.set_val('portal@example.com', 'some other value')
print(hash_table)
print()

# search/access a record with key
print(hash_table.get_val('portal@example.com'))
print()

# delete or remove a value
hash_table.delete_val('portal@example.com')
print(hash_table)

```
