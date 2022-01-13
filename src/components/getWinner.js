
const winPositions = [
    //vertical
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //horizontal
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [2,4,6],
]
export default function getWinner(arr){
     for (let i = 0; i < winPositions.length; i++){
        const curr = winPositions[i];
        const [a, b, c] = curr;
        console.log(a + ' ' + arr[a].value)
        if(arr[a].value && arr[a].value === arr[b].value && arr[b].value === arr[c].value) { 
            // returns
            return { value: arr[a].value, pos: curr }
        };
     }
    return false
}