let elbody =document.querySelector("body");
let elbtn =document.querySelector("#btn");


elbtn.addEventListener("click", function(){
  elbody.classList.toggle("dark");
  myFunction();
});

function myFunction() {
  
  let elArrowdark =document.querySelector(".arrow1");
  let elArrowLight =document.querySelector(".arrow2");

  if (elArrowdark.style.display === "none") {
    elArrowdark.style.display = "none";
    elArrowLight.style.display = "block";
  } else {

    elArrowdark.style.display = "bolck";
    elArrowLight.style.display = "none";
  }
}
