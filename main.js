const container = document.querySelector('.container'),
      counter = document.querySelector('.count'),
      header = document.querySelector('.header'); 
      
let arr = [],
    count = 0,
    winArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];

// Create array
for( let i = 0; i < 16; i++) {
  let col = document.createElement('div');
  col.classList.add('col');
  col.textContent = i+1;
  if(col.textContent == 16) {
    col.textContent = '';
    col.classList.add('empty');
  }
  arr.push(col);
}


// Random sort
arr.sort(function(){ 
  return 0.5 - Math.random();
});


for(let j = 0; j < arr.length; j++) {
  container.appendChild(arr[j]);
}

// Event 
let empCols = document.querySelectorAll('.empty');

arr.forEach((item, index, array) => {

  item.addEventListener('click', function (e) {

  item.setAttribute('data-index', index);
    if(empCols.length == 1 && (array[index - 1] && array[index - 1].classList.contains('empty')) || (array[index + 1] && array[index + 1].classList.contains('empty')) || (array[index + 4] && array[index + 4].classList.contains('empty')) || (array[index - 4] && array[index - 4].classList.contains('empty'))) {
      let emptyCol = document.querySelector('.empty');
      emptyCol.innerHTML = array[e.target.getAttribute('data-index')].innerHTML;
      emptyCol.classList.remove('empty');
      array[e.target.getAttribute('data-index')].innerHTML = '';
      array[e.target.getAttribute('data-index')].classList.add('empty');
      count++;      
    } else {
      return ;
    }

   let newArr = array.map(item => {
    return item.textContent
   });

  counter.textContent = count; 

  //  Alert win message
  if(console.log(JSON.stringify(newArr)==JSON.stringify(winArr))) {
    let alertBox = document.createElement('div');
    let btn = document.createElement('button');
    alertBox.classList.add('alert');
    btn.classList.add('btn');
    header.appendChild(alertBox);
    header.appendChild(btn);
    alertBox.textContent = "Congratulations, You Won!!!";
    btn.textContent = 'start again';
    btn.addEventListener('click', () => {window.location.reload()} );
   } 
  });
});


     let alertBox = document.createElement('div');
     let btn = document.createElement('button');
     alertBox.classList.add('alert');
     btn.classList.add('btn');
     header.appendChild(alertBox);
     header.appendChild(btn);
     alertBox.textContent = "Congratulations, You Won!!!";
     btn.textContent = 'start again';
     btn.addEventListener('click', () => {window.location.reload()} );





