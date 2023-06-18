import Fuse from "fuse.js";
import { useState } from "react";
import "../styles/components/searchbar.scss";

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
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      ></label>
      <div className="relative">
        <input
          type="text"
          id="search"
          value={query}
          onChange={handleOnSearch}
          className="block w-full p-4 pl-10 text-sm 
                                text-gray-900 
                               border border-gray-300
                               rounded-lg bg-gray-50

                               focus:outline-none
                               focus:ring-blue-500
                               focus:border-blue-500"
          placeholder="Search for a coding term..."
        />
        <p>Cant find a term? Suggest to be added.</p>
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
              <a
                className="text-lg text-blue-700 hover:text-blue-900 hover:underline underline-offset-2"
                href={`/${post.frontmatter.slug}`}
              >
                {post.frontmatter.title}
              </a>
              <p className="text-sm text-gray-800">
                {post.frontmatter.description}
              </p>
            </li>
          ))}
      </ul>
    </main>
  );
}

export default Search;
