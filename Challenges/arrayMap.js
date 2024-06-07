// Function to check for contiguous subarrays that sum up to the target
function checkSubarrays(arr, target) {
    // Loop through each element of the array
    for (let start = 0; start < arr.length; start++) {
        let sum = 0;
        // Explore subarrays starting from the current element
        for (let end = start; end < arr.length; end++) {
            // Update the sum with the current element
            sum += arr[end];
            // If the sum matches the target, return true
            if (sum === target) {
                return true;
            }
        }
    }
    // If no matching subarray is found, return false
    return false;
}
