// $(window).scroll(function () {
//     if ($(window).scrollTop()) {
//       $(".header").addClass("white");
//     } else {
//       $(".header").removeClass("white");
//     }
//   });


  var className = "white";
var scrollTrigger = 80;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header")[0].classList.add(className);
  } else {
    document.getElementsByClassName("header")[0].classList.remove(className);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 3, 1000);
  counter("count2", 0, 150, 2500);
  counter("count3", 0, 40, 3000);
 });

 let  numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount ++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if(startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    },25)
})

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
const openBtn = document.querySelector('.hamburger-icon')
const closeBtn = document.querySelector('.close-btn')
const offcanvasMenu = document.querySelector('.offcanvas')

openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
})

closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');


})

