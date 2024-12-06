export const cocktailSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting
  
    let arr = [...array];
    let swapped = true;
    let start = 0;
    let end = arr.length - 1;
  
    while (swapped) {
      swapped = false;
  
      // Forward pass
      for (let i = start; i < end; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
          swapped = true;
          updateArray([...arr]); // Update the array for visualization
          await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
        }
      }
  
      if (!swapped) break;
  
      swapped = false;
      end--;
  
      // Backward pass
      for (let i = end - 1; i >= start; i--) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
          swapped = true;
          updateArray([...arr]); // Update the array for visualization
          await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
        }
      }
      start++;
    }
  
    setIsSorting(false); // Re-enable controls after sorting
  };
  