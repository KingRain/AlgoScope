export const bucketSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting
  
    const bucketSortLogic = async (arr) => {
      const n = arr.length;
      if (n <= 1) return arr;
  
      // Find the maximum and minimum values
      const max = Math.max(...arr);
      const min = Math.min(...arr);
  
      // Initialize buckets
      const bucketCount = Math.ceil(Math.sqrt(n)); // Number of buckets
      const buckets = Array.from({ length: bucketCount }, () => []);
  
      // Distribute array elements into buckets
      for (let i = 0; i < n; i++) {
        const bucketIndex = Math.floor(((arr[i] - min) / (max - min)) * (bucketCount - 1));
        buckets[bucketIndex].push(arr[i]);
        updateArray([...arr]); // Visualize each distribution step
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
      }
  
      // Sort each bucket and concatenate
      const sortedArray = [];
      for (let bucket of buckets) {
        bucket.sort((a, b) => a - b); // Using JavaScript's built-in sort
        sortedArray.push(...bucket);
  
        updateArray([...sortedArray]); // Visualize each bucket being sorted
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay

        // Visualize each bucket being finished
        updateArray([...sortedArray, ...arr.slice(sortedArray.length)]);
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
      }
  
      return sortedArray;
    };
  
    const sortedArr = await bucketSortLogic([...array]);
    updateArray(sortedArr); // Final update to display the sorted array
  
    setIsSorting(false); // Re-enable controls
  };