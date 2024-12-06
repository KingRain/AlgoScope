export const heapSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting
  
    const heapify = async (arr, n, i) => {
      let largest = i; // Initialize largest as root
      let left = 2 * i + 1; // Left child
      let right = 2 * i + 2; // Right child
  
      // If left child is larger than root
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      // If right child is larger than the largest so far
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      // If the largest is not the root
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
  
        updateArray([...arr]); // Update the array for visualization
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
  
        // Recursively heapify the affected sub-tree
        await heapify(arr, n, largest);
      }
    };
  
    const arr = [...array];
    const n = arr.length;
  
    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }
  
    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
      updateArray([...arr]); // Update the array for visualization
      await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
      await heapify(arr, i, 0); // Call heapify on the reduced heap
    }
  
    setIsSorting(false); // Re-enable controls after sorting
  };
  