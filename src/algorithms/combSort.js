export const combSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting
  
    const arr = [...array];
    const n = arr.length;
    let gap = n;
    let swapped = true;
  
    const getNextGap = (gap) => Math.floor(gap / 1.3) || 1;
  
    while (gap !== 1 || swapped) {
      gap = getNextGap(gap);
      swapped = false;
  
      for (let i = 0; i < n - gap; i++) {
        if (arr[i] > arr[i + gap]) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]]; // Swap
          swapped = true;
  
          updateArray([...arr]); // Update for visualization
          await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
        }
      }
    }
  
    setIsSorting(false); // Re-enable controls
  };
  