---
title: Hash Map
slug: hash-map
description: A hash map, also known as a hash table or dictionary, is a data structure that stores key-value pairs.
published: "05.08.2023"
---

A hash map, also known as a hash table or dictionary, is a data structure that stores key-value pairs. It provides efficient insertion, deletion, and retrieval operations. The key is used to compute a hash code, which is then mapped to a bucket or slot in the hash map. Each bucket can store multiple key-value pairs. The hash code ensures fast access to the corresponding bucket, allowing for constant-time average complexity for operations like insertion, deletion, and lookup.

When inserting a key-value pair into a hash map, the hash code of the key is computed, and the pair is placed in the corresponding bucket. If there is already a pair with the same key, it can be updated or replaced.

During retrieval, the hash map computes the hash code of the given key and looks for the corresponding bucket. It then performs a search within the bucket to find the desired key-value pair.

Hash maps are widely used because they provide fast access to data. However, collisions can occur when multiple keys have the same hash code, which means they map to the same bucket. To handle collisions, various techniques are employed, such as chaining (storing multiple pairs in the same bucket using linked lists) or open addressing (finding an alternative empty slot within the hash map).

Overall, hash maps are efficient for storing and retrieving key-value pairs when fast access is required, making them a fundamental data structure in many programming languages and applications.

<code>
    let i = 0;
</code>
