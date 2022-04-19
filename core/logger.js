const info = message => {
  console.info(message);
}

module.exports = {
  info,
  logTestName: testName => {
    info(`=====================  Test case: '${testName}' =====================`);
  },

  logTestEnd: test => {
    if (test.passed) {
      info(`***** Test case: '${test.title}' passed! *****`);
    } else {
      browser.takeScreenshot();
      info(`>>>>>>>> TEST FAILED <<<<<<<<`);
    }
  },
  logStep: stepName => {
    info(`--------==[ [Step]: ${stepName} ]==--------`);
  },
}
