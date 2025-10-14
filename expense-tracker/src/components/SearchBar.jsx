function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search by description or category..."
      onChange={(e) => onSearch(e.target.value)}
      className="search-bar"
    />
  );
}

export default SearchBar;
