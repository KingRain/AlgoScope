export const selectionSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
  setIsSorting(true); // Disable controls during sorting

  let arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
      updateArray([...arr]); // Update array for visualization
      await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
    }
  }

  setIsSorting(false); // Re-enable controls after sorting
};
