import React, { useState } from 'react';

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: 0,
    greased: false,
    highestMedal: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: "",
      specialty: "",
      weight: 0,
      greased: false,
      highestMedal: "",
      image: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
        placeholder="Specialty"
      />
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
      />
      <label>
        Greased:
        <input
          type="checkbox"
          name="greased"
          checked={formData.greased}
          onChange={handleChange}
        />
      </label>
      <input
        type="text"
        name="highestMedal"
        value={formData.highestMedal}
        onChange={handleChange}
        placeholder="Highest Medal"
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
