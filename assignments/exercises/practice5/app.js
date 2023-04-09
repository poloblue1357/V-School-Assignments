function solution(year) {
    if(year.toString().length < 3) {
      return 1                  
    }
    // else if(year < 2005) {
    //   return year.toString().slice(0, 2)
    // }
    else if(year % 100 === 0) {
        return year.toString().slice(0, 2)
    }
    else if(year.toString().length < 4) {
        return year.toString().slice(0, 1)
    }
    else if(year.toString().length < 5) {
        return year.toString().slice(0, 2)
    }
  }
  
  console.log("Hello World!")
  console.log(solution(1907))
  console.log(solution(1700))
  console.log(solution(458))
