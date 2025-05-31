function outerFunction() {
  const message = "Hello from the closure!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const storedFunction = outerFunction();

storedFunction();
