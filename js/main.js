const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    navbar.classList.add("header-scroll");
  
  }else{
    navbar.classList.remove("header-scroll");
  }
});
////////////////////////////////////////////////////
const lis = document.querySelectorAll(".nav-item");

lis.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const elems = document.querySelector(".nav-item .active");
    console.log(elems);
    if (elems !== null) {
      elems.classList.remove("active");
    }
    nav.firstElementChild.classList.add("active");
  });
});
//////////////////////


const doctors = document.querySelectorAll(".doctor");
const myCarouselDoctor = document.getElementById("carouselExampleDark");
myCarouselDoctor.addEventListener("slide.bs.carousel", function (e) {
  if (e.relatedTarget.id == 1) {
    doctors.forEach((doctor) => doctor.classList.remove("fill-doctor"));
    doctors[0].classList.add("fill-doctor");
    document.querySelector("#discriptionDoctor h5").innerText =
      "آقای دکتر رضایی";
    document.querySelector("#discriptionDoctor p").innerText = "متخصص ارشد";
    document.querySelector("#discriptionDoctor span").innerText = "سرپرست همه";
  }
  if (e.relatedTarget.id == 2) {
    doctors.forEach((doctor) => doctor.classList.remove("fill-doctor"));
    doctors[1].classList.add("fill-doctor");
    document.querySelector("#discriptionDoctor h5").innerText =
      "  خانم دکتر حسینی";
    document.querySelector("#discriptionDoctor p").innerText = "متخصص بخش";
    document.querySelector("#discriptionDoctor span").innerText = "سرپرست خودش";
  }
  if (e.relatedTarget.id == 3) {
    doctors.forEach((doctor) => doctor.classList.remove("fill-doctor"));
    doctors[2].classList.add("fill-doctor");
    document.querySelector("#discriptionDoctor h5").innerText =
      "  خانم دکتر طباطبائی";
    document.querySelector("#discriptionDoctor p").innerText = "متخصص ژنتیک";
    document.querySelector("#discriptionDoctor span").innerText =
      "سرپرست ژنتیک";
  }
  if (e.relatedTarget.id == 4) {
    doctors.forEach((doctor) => doctor.classList.remove("fill-doctor"));
    doctors[3].classList.add("fill-doctor");
    document.querySelector("#discriptionDoctor h5").innerText =
      "  آقای دکتر رفیعی";
    document.querySelector("#discriptionDoctor p").innerText = "متخصص قلب";
    document.querySelector("#discriptionDoctor span").innerText = "سرپرست مغز";
  }
});

/////////////////////////////
const circlesAndicator = document.querySelectorAll(".circle-pos .circle");
console.log(circlesAndicator)
const caruselHeader =  document.getElementById("carouselExampleIndicators")
caruselHeader.addEventListener("slide.bs.carousel" , function(e){
  if (e.relatedTarget.id == 1) {
    circlesAndicator.forEach((circle) => circle.classList.remove("fill-circle"));
    circlesAndicator[0].classList.add("fill-circle");
  }
  if (e.relatedTarget.id == 2) {
    circlesAndicator.forEach((circle) => circle.classList.remove("fill-circle"));
    circlesAndicator[1].classList.add("fill-circle");
  }
  if (e.relatedTarget.id == 3) {
    circlesAndicator.forEach((circle) => circle.classList.remove("fill-circle"));
    circlesAndicator[2].classList.add("fill-circle");
  }
})

const sideMenu = document.querySelector(".side-menu")
const closeBtn = document.getElementById("closeBtn")


const togBtn = document.getElementById("togBtn");
togBtn.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(0)"
  sideMenu.style.opacity = 1
  sideMenu.style.visibility = "visible"

});

closeBtn.addEventListener("click" , ()=>{
    sideMenu.style.transform = "translateX(-1000px)"
    sideMenu.style.opacity = 0
  sideMenu.style.visibility = "hidden"
})