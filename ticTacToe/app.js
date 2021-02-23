const row = document.querySelectorAll('.row')
const btn = document.querySelectorAll('.btn')
const result = document.querySelector('.result')
// const rows = 
const 줄들 = [row[0], row[1], row[2]]
const 칸들 = [
  [btn[0], btn[1], btn[2]],
  [btn[3], btn[4], btn[5]],
  [btn[6], btn[7], btn[8]]
]
let turn = 'X'
// for(let i = 0; i <=3; i++) {
//   row.push('hello')
// }




const callBack = (event) => {
  // console.log(event.target); // 칸
  // console.log(event.target.parentNode); // 줄
  // console.log(event.target.parentNode.parentNode) // container

  const 몇줄 = 줄들.indexOf(event.target.parentNode);
  // console.log(몇줄);

  const 몇칸 = 칸들[몇줄].indexOf(event.target);
  // console.log(몇칸);

  // 칸이 채워져있는가
  if(칸들[몇줄][몇칸].textContent !== '') { 
    // 빈칸이 아닐 때
    alert('다른칸 누르셔')
  } else {
    // 빈칸일 때
    칸들[몇줄][몇칸].textContent = turn

    // 세칸이 다 채워졌는가?
    let 다참 = false
    
    // 가로줄 검사
    if (
      칸들[몇줄][0].textContent === turn &&
      칸들[몇줄][1].textContent === turn &&
      칸들[몇줄][2].textContent === turn
      ) {
      다참 = true
    }

    // 세로줄 검사
    if (
      칸들[0][몇칸].textContent === turn && 
      칸들[1][몇칸].textContent === turn && 
      칸들[2][몇칸].textContent === turn
      ) {
      다참 = true
    }

    // 대각선 검사
    if (몇줄 - 몇칸 === 0) { // 대각선 검사 필요한 경우
      if (
        칸들[0][0].textContent === turn &&
        칸들[1][1].textContent === turn &&
        칸들[2][2].textContent === turn
        ) {
        다참 = true
      }
    }

    if (Math.abs(몇줄 - 몇칸) === 2) {
      if (
        칸들[0][2].textContent === turn &&
        칸들[1][1].textContent === turn &&
        칸들[2][0].textContent === turn
        ) {
        다참 = true
      }
    }

    // 다 찼으면
    if (다참) {
      result.textContent = `${turn} 님이 승리!`
      
      // 초기화
      turn = 'X'
      칸들.forEach( (줄) => {
        줄.forEach(칸 => {
          칸.textContent = ''
        })
      })
    } else{
      if(turn === 'X'){
        turn = 'O'
      } else {
        turn = 'X'
      }
    }  
  }

  

  // if(!event.target.textContent) {
  //   event.target.append(turn)
  //   if(turn === 'X') {
  //     turn = 'O'
  //   } else {
  //     turn = 'X'
  //   }
  // }
}

btn.forEach((item, index) => {
  
  item.addEventListener('click', callBack)
})


// console.log(rows);
