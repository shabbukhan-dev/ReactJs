const  SearchBox = ({ onSearch }) => {
  return (
    <div>
        <h2> Search Product </h2>
      <input
      type="text"
      placeholder="Search product by name..."
      onChange={(e) => onSearch(e.target.value)}
    />
    </div>
    
  );
}

export default SearchBox;