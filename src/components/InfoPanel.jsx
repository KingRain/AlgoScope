import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import '../styles/InfoPanel.css';

export default function InfoPanel({ algorithm, description }) {
  const [displayAlgorithm, setDisplayAlgorithm] = useState(algorithm);
  const [animationState, setAnimationState] = useState("slide-in");

  const algoDetails = description[displayAlgorithm];

  useEffect(() => {
    if (algorithm !== displayAlgorithm) {
      setAnimationState("slide-out");
      setTimeout(() => {
        setDisplayAlgorithm(algorithm);
        setAnimationState("slide-in");
      }, 300);
    }
  }, [algorithm, displayAlgorithm]);

  if (!algoDetails) {
    return (
      <div className="flex flex-col items-center justify-center border rounded-lg bg-text shadow-lg w-full h-auto p-6">
        <h2 className="text-background text-lg font-bold">
          Please select an algorithm to view its details :D
        </h2>
      </div>
    );
  }

  return (
    <MathJaxContext>
      <div
        className={`flex flex-col border rounded-lg bg-text shadow-lg w-full h-auto p-6 space-y-4 transition-transform duration-300 ${animationState}`}
      >
        {/* Algorithm Title */}
        <h1 className="font-extrabold text-2xl text-background mb-2 text-center underline">
          {displayAlgorithm}
        </h1>

        {/* Complexity Section */}
        <div>
          <h2 className="text-lg text-background font-bold mb-2">📊 Complexities:</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Time Complexity */}
            <div className="flex flex-col items-center">
              <p className="text-background text-sm font-bold mb-1">Time Complexity</p>
              <div className="rounded-lg h-16 w-32 bg-primary text-center flex items-center justify-center">
                <MathJax>
                  <span className="text-background text-2xl font-bold">
                    {algoDetails.timeComplexity}
                  </span>
                </MathJax>
              </div>
            </div>

            {/* Space Complexity */}
            <div className="flex flex-col items-center">
              <p className="text-background text-sm font-bold mb-1">Space Complexity</p>
              <div className="rounded-lg h-16 w-32 bg-primary text-center flex items-center justify-center">
                <MathJax>
                  <span className="text-background text-2xl font-bold">
                    {algoDetails.spaceComplexity}
                  </span>
                </MathJax>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features Section */}
        <div>
          <h2 className="text-lg text-background font-bold mb-2">✨ Key Features:</h2>
          <ul className="list-disc list-inside space-y-1 text-background text-base font-medium">
            {algoDetails.description.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </MathJaxContext>
  );
}

InfoPanel.propTypes = {
  algorithm: PropTypes.string.isRequired,
  description: PropTypes.objectOf(
    PropTypes.shape({
      timeComplexity: PropTypes.string.isRequired,
      spaceComplexity: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};
