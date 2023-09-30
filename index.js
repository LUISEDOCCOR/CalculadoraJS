const screenNow = document.querySelector(".now");
const screenBack = document.querySelector(".back");
let op = ""; //guardar nuestra operacion actual
let previousOp = ""; //operacion anterior

// screenNow.innerHTML = 'test test'
// screenBack.innerHTML = 'test test'

const push_data = (data) => {
  switch (data) {
    case "*":
      data = "x";
      break;
    case "/":
      data = "÷";
      break;
  }
  op += data;
  updateScreen();
};

const updateScreen = () => {
  screenNow.innerHTML = op;
};

const resultado = () => {
  try {
    if (op == "") {
      screenNow.innerHTML = `Error`;
    } else {
      var formatOp = op;
      op = op.replace("x", "*");
      op = op.replace("÷", "/");
      screenNow.innerHTML = eval(op);
      previousOp = `${formatOp} = ${eval(op)}`;
      screenBack.innerHTML = previousOp;
      op = "";
    }
  } catch {
    op = "";
    screenNow.innerHTML = `Error`;
  }
};

const screenClear = () => {
  op = "";
  screenBack.innerHTML = "";
  updateScreen();
};
const deleteScreen = () => {
  op = op.slice(0, op.length - 1);
  updateScreen();
};

const previous = () => {
  op = previousOp;
  screenBack.innerHTML = "";
  updateScreen();
};
