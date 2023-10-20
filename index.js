const atomTitle = document.getElementById("atomTitle");
const startButton = document.getElementById("startButton");
const endButton = document.getElementById("endButton");
const display = document.getElementById("display");

let bufferAtom = {};
// Storing Array of Atoms here
let localStorageAtoms = [];

// Get json string of atoms from Local Storage
const jsonLocalStorage = localStorage.getItem("atoms");

// Parse array of atoms
const parsedAtoms = JSON.parse(jsonLocalStorage);

// check if already have array of atoms stored in Local Storage
if (Array.isArray(parsedAtoms)) {
  localStorageAtoms = parsedAtoms;
  console.log("localStorageAtoms", localStorageAtoms);
}

const stringifiedAtoms = JSON.stringify(localStorageAtoms);

display.innerHTML = stringifiedAtoms;

startButton.onclick = () => {
  //   console.log("the value of the title", atomTitle.value);

  const newAtom = {
    title: atomTitle.value,
    start: new Date(),
  };

  // console.log("newAtom", newAtom);

  bufferAtom = newAtom;
};

endButton.onclick = () => {
  bufferAtom.end = new Date();

  console.log("bufferAtom", bufferAtom);

  // Push to global array
  const atomsArray = localStorageAtoms.push(bufferAtom);
  // Display Atoms
  const stringifiedAtoms = JSON.stringify(localStorageAtoms);

  display.innerHTML = stringifiedAtoms;

  // Save to Local Storage
  localStorage.setItem("atoms", JSON.stringify(localStorageAtoms));

  const savedAtoms = localStorage.getItem("atoms");
  console.log("savedAtoms", savedAtoms);
};
