import React, { useState } from 'react';
import Modal from './Modal';
import FormDataDisplay from './FormDataDisplay';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!formData && (
        <button
          onClick={handleRegisterClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Register
        </button>
      )}
      {isModalOpen && <Modal onSubmit={handleFormSubmit} />}
      {formData && <FormDataDisplay data={formData} />}
    </div>
  );
};

export default App;
