import { useState } from 'react';
import './index.css'

const message = [
  "Learn React",
  "Apply for jobs",
  "Invest your new income"
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button className='close' onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className='message'>
            Step {step}: {message[step - 1]}
          </p>

          <div className='buttons'>

            <button className='bg-green-600  text-slate-100' onClick={handlePrevious}>Previous</button>

            <button className='bg-green-600 text-slate-100' onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>

  )
}


export default App
