import React, { useState } from 'react';
import Nav from './components/Nav';
import HogList from './components/HogList';
import HogForm from './components/HogForm';
import hogs from './porkers_data';
import 'semantic-ui-css/semantic.min.css';
import './styles.css';



function App() {
  const [hogData, setHogData] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const toggleGreasedFilter = () => setShowGreased(!showGreased);

  const handleSortChange = (event) => setSortBy(event.target.value);

  const handleHideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  const handleAddHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  const filteredHogs = hogData
    .filter(hog => (showGreased ? hog.greased : true))
    .filter(hog => !hiddenHogs.includes(hog.name));

  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "weight") return a.weight - b.weight;
    return 0;
  });

  return (
    <div className="App">
      <Nav />
      <div>
        <button onClick={toggleGreasedFilter}>
          {showGreased ? "Show All Hogs" : "Show Greased Hogs Only"}
        </button>
        <select onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <HogList hogs={sortedHogs} onHideHog={handleHideHog} />
      <HogForm onAddHog={handleAddHog} />
    </div>
  );
}

export default App;
