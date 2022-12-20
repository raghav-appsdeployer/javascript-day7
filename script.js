

const countdown = (date,id)=>{

const countDownDate = new Date(date).getTime();

const x = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;


  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(id).innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById(id).innerHTML = "EXPIRED";
  }
}, 1000);

}


const christmasId = document.getElementById('christmasId-1')
const newYearId = document.getElementById('newYearId-1')
const sakrantiId = document.getElementById('sakrantiId-1')
const republicId = document.getElementById('republicId-1')


christmasId.addEventListener('click',()=>{
    document.getElementById('christmasId-2').classList.toggle('d-none')
    countdown("Dec 25, 2022 00:00:00", 'christmasId-2')
})


newYearId.addEventListener('click',()=>{
    document.getElementById('newYearId-2').classList.toggle('d-none')
    countdown("Jan 01, 2023 00:00:00", 'newYearId-2')
})


sakrantiId.addEventListener('click',()=>{
    document.getElementById('sakrantiId-2').classList.toggle('d-none')

    countdown("Jan 14, 2023 00:00:00", 'sakrantiId-2')
})


republicId.addEventListener('click',()=>{
    document.getElementById('republicId-2').classList.toggle('d-none')

    countdown("Jan 26, 2023 00:00:00", 'republicId-2')
})




var inpId = document.getElementById("inpId");
btn = document.querySelectorAll(".btn-calculator");
var srcValue = " ";
function show(a){
  let btnValue = a.target.innerText
  if(btnValue =="C"){
      srcValue = "";
      inpId.value = srcValue;
  }
  else if(btnValue == "="){
      inpId.value = eval(srcValue);
  }
  else{
      srcValue += btnValue;
      inpId.value = srcValue;
  }
}
  for(key of btn){
      key.addEventListener('click',show)


  }