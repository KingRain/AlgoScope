export const radixSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting
  
    const getMax = (arr) => Math.max(...arr);
  
    const countingSort = async (arr, exp) => {
      const n = arr.length;
      const output = new Array(n).fill(0);
      const count = new Array(10).fill(0);
  
      // Count occurrences of each digit
      for (let i = 0; i < n; i++) {
        const index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
      }
  
      // Update count[i] to store actual positions
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
  
      // Build the output array
      for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
      }
  
      // Copy output array to arr
      for (let i = 0; i < n; i++) {
        arr[i] = output[i];
        updateArray([...arr]); // Update for visualization
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
      }
    };
  
    const arr = [...array];
    const max = getMax(arr);
  
    // Perform counting sort for every digit
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      await countingSort(arr, exp);
    }
  
    setIsSorting(false); // Re-enable controls
  };
  