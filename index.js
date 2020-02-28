// const customName = document.getElementById('customname');
// const randomize = document.querySelector('.randomize');
// const story = document.querySelector('.story');
// let newStory,xItem,yItem,zItem,name;
// var weight = 300;
// var temperature = 94;
// function randomValueFromArray(array){
//   return array[Math.floor(Math.random()*array.length)];
// }
// var storyText ;
// let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
// let insertY = ['the soup kitchen','Disneyland','the White House'];
// let insertZ =['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
//   document.getElementById('cn').onclick = () => {
//   document.title = '笑话生成器';
//   document.getElementById('lbl-customname').textContent = '请输入自定义的名字：';
//   document.getElementById('lbl-cn').textContent = '中国';
//   document.getElementById('lbl-us').textContent = '美国';
//   document.getElementById('lbl-uk').textContent = '英国';
//   document.getElementById('customname').placeholder = '李雷';
//   document.querySelector('.randomize').textContent = '随机生成笑话';
// };

// document.getElementById('us').onclick =
// document.getElementById('uk').onclick = () => {
//   document.title = 'Silly story generator';
//   document.getElementById('lbl-customname').textContent = 'Enter custom name:';
//   document.getElementById('lbl-cn').textContent = 'CN';
//   document.getElementById('lbl-us').textContent = 'US';
//   document.getElementById('lbl-uk').textContent = 'UK';
//   document.getElementById('customname').placeholder = 'Bob';
//   document.querySelector('.randomize').textContent = 'Generate random story';
// };

// randomize.addEventListener('click', result);

// function result() {
//   if(document.getElementById("uk").checked) {
//      weight = Math.round(0.07*300);
//      temperature =  Math.round(5/9*(94-32));
//   }else{
//     weight = 300;
//     temperature = 94;
    
//   }
//   storyText = 'It was '+temperature+' fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs '+weight+' pounds, and it was a hot day.';
//   newStory = storyText;
//   xItem = randomValueFromArray(insertX);
//   yItem = randomValueFromArray(insertY);
//   zItem = randomValueFromArray(insertZ);
//  newStory = newStory.replace(':insertx:',xItem);
//  newStory = newStory.replace(':insertx:',xItem);
//  newStory = newStory.replace(':inserty:',yItem);
//  newStory = newStory.replace(':insertz:',zItem);

//   if(customName.value !== '') {
//     var name = customName.value;
//     newStory = newStory.replace('Bob',name);
//   }

  

//   story.textContent = newStory;
//   story.style.visibility = 'visible';
// }
//

window.onload = function(){

  let div = document.querySelectorAll("div");
  let mask = document.querySelector("#mask");
  // let big = document.querySelector("#big");
  let bigImg = document.querySelector("#big>img");
  let imgList = document.querySelector("#imgList");
  let btn = document.querySelector('input[type="button"]');
  // let smallMask = document.querySelector('.smallMask');
  btn.onclick = function(){
    changeLight(this);
  }
  function changeLight(el){
    console.log(el.value);
    if(el.value =='变亮'){
      el.value = '变暗';
      mask.style.display = 'none';
    }else{
      el.value = '变亮';
      mask.style.display = 'block';
    }
  }
  imgList.onclick = function(e){
    changImg(e);
  }

 function changImg(el){
   bigImg.src = el.target.src;
 }
//   for(let i =0; i<div.length;i++){
//   div[i].style.backgroundColor =  'rgb('+rand(255)+','+rand(255)+','+rand(255)+')';
//   div[i].onclick = function(){
//     bgChange(this);
//   }
// }
// function bgChange(el){
//   el.style.backgroundColor = 'rgb('+rand(255)+','+rand(255)+','+rand(255)+')';
// }
// function rand(num){
//    return Math.floor(Math.random()*(num+1));
// }
// 移动
    let distance = -360;
    let gap;
    // let move = document.querySelector("#move");
    let ul = document.querySelector('ul');
    let clone = ul.children[4].cloneNode(true);
    console.log(ul.offsetLeft);
    ul.insertBefore(clone,ul.children[0]);
    let moveIng = function(){
      if(ul.offsetLeft > distance){
        gap = setInterval(moveDiv,30);   
        } 
      }
    let step = 1;
    function moveDiv(){
      ul.style.left = ul.offsetLeft - step +'px';
      if(ul.offsetLeft <= distance){
        console.log(ul.offsetLeft)
         // clearInterval(gap);
        ul.style.left = -60+'px';
      }
    }
    // moveIng();
    console.log(big);
    ul.onmouseenter = function(){
      clearInterval(gap);
      ul.onmouseleave = function(){
       // gap = setInterval(moveDiv,30);
      }
    }
    // microscope
    // big.onmouseenter = function(e){
    //   console.log('enter');
    //   big.onmousemove = function(e){
    //   console.log('move');
    //   smallMask.style.display = 'block';

    //   smallMask.style.left = e.pageX < 60 ? 60+'px' :e.pageX -60 +'px';
    //   smallMask.style.left = e.pageX > 60 ? 60:e.pageX -60 +'px';
    //   smallMask.style.top = e.pageY -80 + 'px';
    // }
    //   big.onmouseleave = function(){
    //     console.log('leave');
    //     smallMask.style.display = 'none';
    //     big.onmousemove = null;
    //   }
    }
