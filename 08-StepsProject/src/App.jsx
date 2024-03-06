import { useState } from "react";
import "./App.css";

const message = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income",
];

function App() {
  const [steps, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handleNext() {
    if (steps < 3) setStep(steps + 1)
  }

  function handlePrevius() {
    if (steps > 1) setStep(steps - 1)
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps mx-24 my-auto px-6 py-24 rounded-md ">
          <div className="numbers flex justify-between">
            <div className={steps >= 1 ? "active" : ""}>1</div>
            <div className={steps >= 2 ? "active" : ""}>2</div>
            <div className={steps >= 3 ? "active" : ""} >3</div>
          </div>

          <p className="message text-center mx-10 my-11 font-bold">{steps}: {message[steps - 1]}</p>

          <div className="btn text-white flex justify-between">
            <button className="bg-blue-500" onClick={handlePrevius}>Previou</button>
            <button className="bg-blue-500" onClick={handleNext}>Next</button>

          </div>
        </div>
      )}
    </div>

  )
}


export default App
