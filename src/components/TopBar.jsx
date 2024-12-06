import { useState, useEffect, useRef } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { quickSort } from "../algorithms/quickSort";
import { mergeSort } from "../algorithms/mergeSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";

export default function TopBar() {
  const [currentAlgo, setCurrentAlgo] = useState("");
  const [currentSpeed, setCurrentSpeed] = useState(50);
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const startTimeRef = useRef(null);

  const handleAlgoChange = (algo) => {
    setCurrentAlgo(algo);
    generateArray();
  };

  const handleSpeedChange = (speed) => {
    setCurrentSpeed(speed);
  };

  const generateArray = () => {
    if (isSorting) return;
    const newArray = Array.from(
      { length: 100 },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
  };

  const stopSorting = () => {
    setIsSorting(false);
  };

  const selectAndRunAlgo = () => {
    startTimeRef.current = Date.now();
    setIsSorting(true);
    switch (currentAlgo) {
      case "BubbleSort":
        bubbleSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "QuickSort":
        quickSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "MergeSort":
        mergeSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "SelectionSort":
        selectionSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "InsertionSort":
        insertionSort(array, setArray, setIsSorting, currentSpeed);
        break;
      default:
        setIsSorting(false);
        break;
    }
  };

  useEffect(() => {
    if (!isSorting && startTimeRef.current) {
      const endTime = Date.now();
      setTimeElapsed((endTime - startTimeRef.current) / 1000);
      startTimeRef.current = null;
    }
  }, [isSorting]);

  return (
    <>
      <nav className="bg-background text-text p-2 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl px-4 font-bold bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
            AlgoScope <span className="text-secondary">🚀</span>
          </h1>
        </div>
      </nav>
      <div className="container px-4 mx-auto flex items-center p-2 bg-background border-b">
        <p className="text-base font-normal text-text mr-2">
          Select Algorithm:
        </p>
        <select
          value={currentAlgo}
          onChange={(e) => handleAlgoChange(e.target.value)}
          className="p-1 bg-background text-text border border-text rounded mr-4"
        >
          <option value="">Select</option>
          <option value="BubbleSort">Bubble Sort</option>
          <option value="QuickSort">Quick Sort</option>
          <option value="MergeSort">Merge Sort</option>
          <option value="SelectionSort">Selection Sort</option>
          <option value="InsertionSort">Insertion Sort</option>
        </select>
        <p className="text-base font-normal text-text mr-2">Speed (inverted):</p>
        <input
          type="range"
          min="10"
          max="100"
          value={currentSpeed}
          onChange={(e) => handleSpeedChange(e.target.value)}
          className="p-1 bg-background text-text border rounded mr-4 accent-primary"
        />
        <button
          onClick={selectAndRunAlgo}
          disabled={isSorting}
          className="p-1 px-4 bg-primary text-background font-normal rounded mr-2"
        >
          Visualize
        </button>
        <button
          onClick={generateArray}
          disabled={isSorting}
          className="p-1 px-4 bg-secondary text-text font-normal rounded"
        >
          Reset
        </button>
        <button
        onClick={stopSorting}
        disabled={!isSorting}
        className="p-1 px-4 bg-accent text-text font-normal rounded ml-2"
      >
        Stop
      </button>
      </div>
      <div className="flex flex-col items-center p-6 bg-background h-full">
        <h1 className="text-2xl font-bold text-text mb-4">
          {currentAlgo} Visualizer.
        </h1>
        <div className="flex items-end justify-center border rounded-lg bg-text shadow-lg w-full max-w-4xl h-64 p-4">
          {array.map((value, idx) => (
            <div
              key={idx}
              className={` bg-blue-500 transition-all duration-75 ${
                isSorting ? "bg-red-400" : "bg-blue-500"
              }`}
              style={{
                height: `${value * 2}px`,
                width: "24px",
              }}
            ></div>
          ))}
        </div>
        {!isSorting && timeElapsed > 0 && (
          <p className="text-base font-normal text-text mt-4">
            Time Elapsed: {timeElapsed} seconds
          </p>
        )}
      </div>
    </>
  );
}
