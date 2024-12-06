export const shellSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting
  
    const arr = [...array];
    const n = arr.length;
  
    // Start with a large gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      // Perform a gapped insertion sort
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
          updateArray([...arr]); // Update the array for visualization
          await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
        }
  
        arr[j] = temp;
        updateArray([...arr]); // Update the array for visualization
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
      }
    }
  
    setIsSorting(false); // Re-enable controls after sorting
  };
  