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
  const text = stringToTest.textContent.trim();
  const pattern = new RegExp(regexPattern.value, getFlags());

  const matches = text.match(pattern);

  if (!matches) {
    testResult.textContent = "no match";
    return;
  }

  testResult.textContent = matches.join(", ");

  const result = text.replace(pattern, (match) => {
    return `<span class="highlight">${match}</span>`;
  });

  stringToTest.innerHTML = result;
});
