export const insertionSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
  setIsSorting(true); // Disable controls during sorting

  let arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      updateArray([...arr]); // Update array for visualization
      await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
    }
    arr[j + 1] = key;
    updateArray([...arr]); // Update after placing the key
  }

  setIsSorting(false); // Re-enable controls after sorting
};
