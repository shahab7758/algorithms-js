let unSortedArray = [64, 25, 12, 22, 11];

function bubbleSort(arr){
    let i,j,n=arr.length;
    for(i=0; i<n-1; i++){
        for(j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log("sorted array bs", arr)
}
bubbleSort(unSortedArray);