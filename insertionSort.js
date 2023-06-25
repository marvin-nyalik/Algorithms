//Traverse the array from index 1 => arr[1]

function entryPoint(listToSort) {
    const sortedList = insertionSort(listToSort);
    console.log('Your sorted list...' +'\n' + sortedList);
}


function insertionSort(myList) {
    if (myList.length <= 0 ) return 'Empty list not sortable';
    for(let i = 1; i < myList.length; i += 1) {
        const temp = myList[i];
        let j = i - 1;
        
        while (j >= 0 && myList[j] > temp) {
          myList[j + 1] = myList[j];
          j--;
        }
      
        myList[j + 1] = temp;
      }

    return myList;
}

//compare the value at selected index with the value at previous indices repetitively
   //while the value is less, shift previous values 1 place to the right
   //insert at the index where the while loop ends
   
entryPoint([-1]);