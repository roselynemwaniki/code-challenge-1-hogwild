// src/components/FilterBar.js
import React from "react";

function FilterBar({ showGreasedOnly, setShowGreasedOnly, onSortChange }) {
  return (
    <div className="filter-bar">
      <h3>Filter and Sort Hogs</h3>
      
      {/* Greased Filter */}
      <label>
        <input 
           type="checkbox"
           checked={showGreasedOnly}
           onChange={(e) => setShowGreasedOnly(e.target.checked)}
        />
        Show Greased Hogs
      </label>

      {/* Sort Options */}
      <div>
        <label htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" onChange={(e) => onSortChange(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
