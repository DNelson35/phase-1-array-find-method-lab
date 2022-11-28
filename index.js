// code your solution here

function superbowlWin(arr){
    const obj = arr.find(item => item.result === "W")
    return (typeof(obj) === "object") ? obj.year : undefined
  }
  