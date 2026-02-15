module.exports = {
  default: {
    paths: [
      "src/features/**/*.feature"
    ],
    require: [
      "src/steps/**/*.ts",
      "src/support/**/*.ts"
    ],
    tag : "@test",
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ],
    publishQuiet: true
  }
};
