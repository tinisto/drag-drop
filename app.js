const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className += " invisible";
  }, 0);
  console.log("start");
}

function dragEnd() {
  this.className = "fill";
  console.log("end");
}

empties.forEach((empty) => {
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
});

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("enter");
}
function dragLeave() {
  console.log("leave");
  this.className = "empty";
}
function dragDrop() {
  console.log("drop");
  this.className = "empty";
  this.appendChild(fill);
}
function dragOver(e) {
  e.preventDefault();
  console.log("over");
}
