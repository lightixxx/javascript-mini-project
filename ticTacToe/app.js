const row = document.querySelectorAll('.row')
const btn = document.querySelectorAll('.btn')
const rows = [row[0], row[1], row[2]]

let turn = 'X'
// for(let i = 0; i <=3; i++) {
//   row.push('hello')
// }


const callBack = (event) => {
  if(!event.target.textContent) {
    event.target.append(turn)
    if(turn === 'X') {
      turn = 'O'
    } else {
      turn = 'X'
    }
  }
}



btn.forEach((item, index) => {
  item.addEventListener('click', callBack)
})

// console.log(rows);