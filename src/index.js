const indexH1 = () => {
  const h1El = document.createElement("h1");
  const h1ID = document.createAttribute("id");

  h1ID.value = "main-heading";
  h1El.setAttributeNode(h1ID);

  h1El.append("Hello World!");

  document.body.append(h1El);
};

const addPTag = () => {
  const paraEl = document.createElement("p");
  const paraClass = document.createAttribute("class");
  const paraID = document.createAttribute("id");

  paraClass.value = "boring-text";
  paraEl.setAttributeNode(paraClass);

  paraID.value = "main-text";
  paraEl.setAttributeNode(paraID);

  paraEl.append("Look, I'm some text!");

  document.body.append(paraEl);
};

// "runner" function
const main = () => {
  indexH1();
  addPTag();
};

// invoke the runner!
main();
