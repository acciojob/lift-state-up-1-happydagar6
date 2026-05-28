import React, { useState } from 'react';

// --- Child Component ---
const Child = ({ setShowModal }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      {/* Clicking the button updates the parent's state to true */}
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
    </div>
  );
};

// --- Parent Component ---
const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      
      {/* Pass the state updater function down to the Child */}
      <Child setShowModal={setShowModal} />

      {/* Conditionally render the modal content */}
      {showModal && (
        <div className="modal-content">
          {/* Changed this to an <h3> tag as required by the test! */}
          <h3>Modal Content</h3>
          <p>This is the modal content.</p>
        </div>
      )}
    </div>
  );
};

export default App;