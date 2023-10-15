import Fuse from "fuse.js";
import { useState } from "react";
import "../styles/components/searchbar.scss";
import React from "react";

const options = {
  keys: ["frontmatter.title", "frontmatter.description", "frontmatter.slug"],
  includeMatches: true,
  minMatchCharlength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  //user's input
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <main className="searchbar">
      <label htmlFor="search"></label>
      <div className="relative">
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleOnSearch}
          placeholder="Search for a coding term..."
        />
        <p>
          Cant find a term? <a href="/suggestterm">Suggest to be added</a>.
        </p>
      </div>

      {query.length > 1 && (
        <div className="found">
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
          {query}'
        </div>
      )}

      <ul className="postfound">
        {posts &&
          posts.map((post) => (
            <li className="py-2">
              <a href={`/terms/${post.frontmatter.slug}`}>
                {post.frontmatter.title}
              </a>
              <p>{post.frontmatter.description}</p>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Search;
