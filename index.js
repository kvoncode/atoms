const atomTitle = document.getElementById("atomTitle");
const startButton = document.getElementById("startButton");
const endButton = document.getElementById("endButton");
const display = document.getElementById("display");

let bufferAtom = {};

startButton.onclick = () => {
  //   console.log("the value of the title", atomTitle.value);

  const newAtom = {
    title: atomTitle.value,
    start: new Date(),
  };

  console.log("newAtom", newAtom);

  bufferAtom = newAtom;
};

endButton.onclick = () => {
  bufferAtom.end = new Date();

  console.log("bufferAtom", bufferAtom);

  // Display Atoms

  display.innerHTML = JSON.stringify(bufferAtom);
};
