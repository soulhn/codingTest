const isValid = (str) => {
  if (str.length === 0) return false;
  const stack = [];
  const bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    //여는 괄호는 push
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      //여는 경우가 아니라면 pop
      const popStr = stack.pop();
      if (popStr === undefined) return false;
      if (bracket[popStr] !== str[i]) return false;
    }
  }
  return stack.length ? false : true;
};
