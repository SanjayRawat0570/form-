import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    hobbies: [''],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleHobbyChange = (index, value) => {
    const updatedHobbies = [...form.hobbies];
    updatedHobbies[index] = value;
    setForm({ ...form, hobbies: updatedHobbies });
  };
  const addHobby = () => {
    setForm({ ...form, hobbies: [...form.hobbies, ''] });
  };
  const removeHobby = (index) => {
    const updatedHobbies = form.hobbies.filter((_, i) => i !== index);
    setForm({ ...form, hobbies: updatedHobbies });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="App">
      <h1>Dynamic Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleInputChange}
          required
        />
        <h3>Hobbies:</h3>
        {form.hobbies.map((hobby, index) => (
          <div key={index} className="dynamic-field">
            <input
              type="text"
              value={hobby}
              placeholder={`Hobby ${index + 1}`}
              onChange={(e) => handleHobbyChange(index, e.target.value)}
            />
            <button type="button" onClick={() => removeHobby(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addHobby}>
          Add Hobby
        </button>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;