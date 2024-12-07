import { useState, useEffect, useRef } from "react";
import { bubbleSort } from "../algorithms/bubbleSort";
import { quickSort } from "../algorithms/quickSort";
import { mergeSort } from "../algorithms/mergeSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { bucketSort } from "../algorithms/bucketSort";
import { cocktailSort } from "../algorithms/cocktailSort";
import { combSort } from "../algorithms/combSort";
import { heapSort } from "../algorithms/heapSort";
import { shellSort } from "../algorithms/shellSort";
import { radixSort } from "../algorithms/radixSort";
import InfoPanel from "./InfoPanel";

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
      case "BucketSort":
        bucketSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "CocktailSort":
        cocktailSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "CombSort":
        combSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "HeapSort":
        heapSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "ShellSort":
        shellSort(array, setArray, setIsSorting, currentSpeed);
        break;
      case "RadixSort":
        radixSort(array, setArray, setIsSorting, currentSpeed);
        break;
      default:
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


  //Create a nested list with Name of algorithm and items like Timecomplexity, space complexity and descripton
  const algoInfo = {
    BubbleSort: {
      timeComplexity: "O(n^2)",
      spaceComplexity: "O(1)",
      description: [
        "Comparison-based sorting algorithm.",
        "Stable sort: Maintains the relative order of equal elements.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Optimized with an early stopping condition if no swaps occur.",
        "Simple but inefficient for large datasets.",
      ],
    },
    QuickSort: {
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(log n)",
      description: [
        "Divide-and-conquer sorting algorithm.",
        "Not stable: May change the relative order of equal elements.",
        "In-place algorithm: Requires O(log n) extra memory.",
        "Optimal average-case performance for large datasets.",
        "Worst-case performance can be improved with randomized pivot selection.",
      ],
    },
    MergeSort: {
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      description: [
        "Divide-and-conquer sorting algorithm.",
        "Stable sort: Maintains the relative order of equal elements.",
        "Out-of-place algorithm: Requires O(n) extra memory.",
        "Optimal worst-case performance for large datasets.",
        "Recursive implementation can be slow for small datasets.",
      ],
    },
    SelectionSort: {
      timeComplexity: "O(n^2)",
      spaceComplexity: "O(1)",
      description: [
        "Comparison-based sorting algorithm.",
        "Not stable: May change the relative order of equal elements.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Simple but inefficient for large datasets.",
        "Optimal for small datasets or partially sorted arrays.",
      ],
    },
    InsertionSort: {
      timeComplexity: "O(n^2)",
      spaceComplexity: "O(1)",
      description: [
        "Comparison-based sorting algorithm.",
        "Stable sort: Maintains the relative order of equal elements.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Optimal for small datasets or partially sorted arrays.",
        "Simple but inefficient for large datasets.",
      ],
    },
    BucketSort: {
      timeComplexity: "O(n + k)",
      spaceComplexity: "O(n + k)",
      description: [
        "Distribution-based sorting algorithm.",
        "Stable sort: Maintains the relative order of equal elements.",
        "Requires prior knowledge of the input range.",
        "Optimal for uniformly distributed data.",
        "Inefficient for large or non-uniformly distributed data.",
      ],
    },
    CocktailSort: {
      timeComplexity: "O(n^2)",
      spaceComplexity: "O(1)",
      description: [
        "Variation of Bubble Sort.",
        "Also known as Cocktail Shaker Sort or Bidirectional Bubble Sort.",
        "Stable sort: Maintains the relative order of equal elements.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Optimized to sort in both directions.",
      ],
    },
    CombSort: {
      timeComplexity: "O(n^2)",
      spaceComplexity: "O(1)",
      description: [
        "Variation of Bubble Sort.",
        "Introduces a gap between compared elements.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Optimized for large datasets.",
        "Simple but inefficient for small datasets.",
      ],
    },
    HeapSort: {
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(1)",
      description: [
        "Comparison-based sorting algorithm.",
        "Not stable: May change the relative order of equal elements.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Optimal worst-case performance for large datasets.",
        "Optimal for partially sorted arrays.",
      ],
    },
    ShellSort: {
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(1)",
      description: [
        "Variation of Insertion Sort.",
        "Compares elements at a fixed interval.",
        "In-place algorithm: Requires no extra memory beyond the input.",
        "Optimal for medium-sized datasets.",
        "Simple but inefficient for small or large datasets.",
      ],
    },
    RadixSort: {
      timeComplexity: "O(nk)",
      spaceComplexity: "O(n + k)",
      description: [
        "Distribution-based sorting algorithm.",
        "Stable sort: Maintains the relative order of equal elements.",
        "Requires prior knowledge of the input range.",
        "Optimal for integer data.",
        "Inefficient for floating-point data.",
      ],
    },
  };


  return (
    <>
      <div className="h-screen overflow-x-hidden">
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
            <option value="BucketSort">Bucket Sort</option>
            <option value="CocktailSort">Cocktail Sort</option>
            <option value="CombSort">Comb Sort</option>
            <option value="HeapSort">Heap Sort</option>
            <option value="ShellSort">Shell Sort</option>
            <option value="RadixSort">Radix Sort</option>
          </select>
          <p className="text-base font-normal text-text mr-2">
            Speed (inverted):
          </p>
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
        <div className="flex">
          <div className="flex flex-col items-center p-6 bg-background h-auto w-2/3">
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
          <div className="p-6 bg-background h-auto w-1/3">
            <InfoPanel algorithm={currentAlgo} description={algoInfo}/>
          </div>
        </div>
      </div>
    </>
  );
}
