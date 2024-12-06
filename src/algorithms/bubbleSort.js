export const bubbleSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
  setIsSorting(true); // Disable controls during sorting

  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        updateArray([...arr]); // Update the array in the parent component
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay for visualization
      }
    }
  }

  setIsSorting(false); // Re-enable controls after sorting
};
