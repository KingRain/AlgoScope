export const quickSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
  setIsSorting(true); // Disable controls during sorting

  const partition = async (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
        updateArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
      }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot
    updateArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay

    return i + 1;
  };

  const quickSortRecursive = async (arr, low, high) => {
    if (low < high) {
      let pi = await partition(arr, low, high);
      await quickSortRecursive(arr, low, pi - 1);
      await quickSortRecursive(arr, pi + 1, high);
    }
  };

  let arr = [...array];
  await quickSortRecursive(arr, 0, arr.length - 1);

  setIsSorting(false); // Re-enable controls after sorting
};
