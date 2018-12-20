function bsearchWithoutRecursion(array,low,high,target)
{
    while(low <= high)
    {
        var mid = Math.floor((low + high)/2);
        if (array[mid] > target){
            high = mid - 1;
        }else if (array[mid] < target){
            low = mid + 1;
        }else{
            return mid;
        }
    }
    return -1;
}

