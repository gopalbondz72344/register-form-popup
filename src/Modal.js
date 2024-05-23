import React, { useState } from 'react';

const Modal = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [interests, setInterests] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { username, email, password, gender, interests };
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 ml-[120px]">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter the Username..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              placeholder="Enter the Password..."
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <span className="block text-gray-700">Gender</span>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio"
                required
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
                className="form-radio"
                required
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
          <div className="mb-4">
            <span className="block text-gray-700">Interests</span>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value="Sports"
                checked={interests.includes('Sports')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Gaming</span>
            </label>
            <label className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value="Music"
                checked={interests.includes('Music')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Music</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                value="Travel"
                checked={interests.includes('Travel')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="ml-2">Travel</span>
            </label>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
