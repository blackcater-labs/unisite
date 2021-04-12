const rangeParser = require(`parse-numeric-range`);

module.exports = (language) => {
  if (!language) {
    return ``;
  }
  if (language.split(`{`).length > 1) {
    const [splitLanguage, ...options] = language.split(`{`);
    let customOptions = {};
    let highlightLines = [];
    let outputLines = [];
    let showLineNumbersLocal = false;
    let numberLinesStartAt;
    let promptUserLocal;
    let promptHostLocal;
    // Options can be given in any order and are optional

    options.forEach((option) => {
      option = option.slice(0, -1);
      let [left, right] = option.split(`:`);

      left = left.replace(/ /g, "");
      right = right ? right.trim() : right;

      // Test if the option is for line highlighting
      if (!right && rangeParser(option).length > 0) {
        highlightLines = rangeParser(option).filter((n) => n > 0);
      }
      // Test if the option is for line numbering
      // Option must look like `numberLines: true` or `numberLines: <integer>`
      // Otherwise we disable line numbering

      if (
        !!right &&
        left === `numberLines` &&
        (right === `true` ||
          Number.isInteger(parseInt(right.replace(/ /g, ``), 10)))
      ) {
        showLineNumbersLocal = true;
        numberLinesStartAt =
          right === `true` ? 1 : parseInt(right.replace(/ /g, ``), 10);
      }
      if (!!right && left === `promptHost`) {
        promptHostLocal = right;
      }
      if (!!right && left === `promptUser`) {
        promptUserLocal = right;
      }
      if (!!right && left === `outputLines`) {
        outputLines = rangeParser(right).filter((n) => n > 0);
      }
      if (!!right && left) {
        customOptions[left.trim()] = right;
      }
    });

    return {
      splitLanguage,
      highlightLines,
      showLineNumbersLocal,
      numberLinesStartAt,
      outputLines,
      promptUserLocal,
      promptHostLocal,
      customOptions,
    };
  }

  return { splitLanguage: language };
};
