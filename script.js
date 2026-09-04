const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags() {
  let flags = "";

  if (caseInsensitiveFlag.checked) {
    flags += "i";
  }

  if (globalFlag.checked) {
    flags += "g";
  }

  return flags;
}

testButton.addEventListener("click", () => {
  const text = stringToTest.innerHTML.trim();
  const pattern = new RegExp(regexPattern.value, getFlags());

  const result = pattern.match(text);

  console.log(text);
  console.log(pattern);
  console.log(result);

  if (result) {
    testResult.innerHTML = `<span class="highlight">${text}</span>`;
  } else {
    testResult.innerHTML = `<span class="highlight"></span>`;
  }
});
