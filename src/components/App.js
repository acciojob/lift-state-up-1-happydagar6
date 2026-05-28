import React, { useState } from "react";
import './../styles/App.css';

// --- Child Component ---
// Receives the function to update the parent's state via props
const Child = ({ setShowModal }) => {
  return (
    <div className="child" style={{ backgroundColor: '#a52a2a', padding: '20px', color: 'black' }}>
      <h2>Child Component</h2>
      {/* Clicking the button calls the parent's function and passes 'true' */}
      <button onClick={() => setShowModal(true)}>
        Show Modal
      </button>
    </div>
  );
};


const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="parent" style={{ backgroundColor: "#8a2be2", padding: '20px', color: 'black' }}>
      <h1>Parent Component</h1>
        
        <Child showModal={showModal} setShowModal={setShowModal} />

        { showModal && (
          <div className="modal-content" style={{ marginTop: "20px" }}>
            <h2>Modal Content</h2>
            <p>This is the modal content.</p>
            </div>
        )}
    </div>
  )
};

export default App;