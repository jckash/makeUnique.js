// Write your solution below:

  
  function stringDuplicate(str) {
    let nowUnique = ""

    for (let i = 0; i < str.length; i++){
        if(nowUnique.includes(str[i])) {
            continue
        } else {
            nowUnique += str[i]
        }
    }
    return nowUnique

  }