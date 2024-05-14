const getMainHeadingText = () => {
  const headingText = document.querySelector("#main-heading").textContent;

  console.log(headingText);
};

const getAllMainText = () => {
  const mainTextArr = [];

  document.querySelectorAll(".main-text").forEach((node) => {
    mainTextArr.push(node.textContent);
  });

  const mainTextStr = mainTextArr.join(",");

  console.log(mainTextStr);
};

const setSubtitleText = () => {
  document.querySelector("#subtitle").textContent = "This is a subtitle!";
};

const modifyDivClassList = () => {
  const divClassList = document.querySelector("#modify-classes").classList;
  divClassList.remove("bad-class");
  divClassList.add("new-class");
};

const addH2 = () => {
  const h2El = document.createElement("h2");
  const h2ID = document.createAttribute("id");

  h2ID.value = "h2-test";
  h2El.setAttributeNode(h2ID);

  // h2El.innerText = "Another one!";
  h2El.append("Another one!");

  document.body.append(h2El);
};

const removeOldInfo = () => {
  const oldInfo = document.querySelector("#old-info");

  oldInfo.remove();
};

const makeAlphabet = () => {
  const alphabetList = document.querySelector("#alphabet");
  const alphabetCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alphabetList.dataset.numLetters; i++) {
    const liEl = document.createElement("li");

    liEl.append(`${alphabetCaps[i]} is letter #${i + 1} in the alphabet`);
    alphabetList.append(liEl);
  }
};

const makeBio = () => {
  document.querySelector("#my-bio").innerHTML = `
  <h2 id="bio-heading">About Me</h2>
  <p>My name is Zo and I like learn cool new things</p>
  <h3 id="hobby-heading">My Hobbies</h3>
  <ul>
    <li>Running</li>
    <li>Reading</li>
    <li>Writing</li>
  </ul>`;
};

// "runner" function
const main = () => {
  // read
  getMainHeadingText();
  getAllMainText();

  // update
  setSubtitleText();
  modifyDivClassList();

  // create
  addH2();

  // delete
  removeOldInfo();

  // more advanced stuff!
  makeAlphabet();
  makeBio();
};

// invoke the runner!
main();
