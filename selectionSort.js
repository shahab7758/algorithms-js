let arr = [64,25,12,22,11]


function selectionSort(arr){
    let i,j,minIndex,n=arr.length;

    for(i=0; i<n-1; i++){
        minIndex=i;
        for(j=i+1; j<n; j++){
            if(arr[j]<arr[minIndex])
            minIndex=j
        }
        //swap
        let temp= arr[i]
        arr[i]= arr[minIndex]
        arr[minIndex]= temp
    }
    console.log("sorted array", arr)
}

 selectionSort(arr)