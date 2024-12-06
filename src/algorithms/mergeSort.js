export const mergeSort = async (array, updateArray, setIsSorting, sortingSpeed) => {
    setIsSorting(true); // Disable controls during sorting

    const merge = async (left, right, originalArray) => {
        let result = [];
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
            updateArray([...originalArray.slice(0, originalArray.length - left.length - right.length - result.length), ...result, ...left, ...right]); // Update for visualization
            await new Promise((resolve) => setTimeout(resolve, sortingSpeed)); // Delay
        }
        return [...result, ...left, ...right];
    };

    const mergeSortRecursive = async (arr, originalArray) => {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = await mergeSortRecursive(arr.slice(0, mid), originalArray);
        const right = await mergeSortRecursive(arr.slice(mid), originalArray);
        return await merge(left, right, originalArray);
    };

    const sortedArray = await mergeSortRecursive([...array], array);
    updateArray(sortedArray);

    setIsSorting(false); // Re-enable controls after sorting
};
