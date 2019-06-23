module.exports = function (config) {
  config.set({
    mutator: "javascript",
    packageManager: "yarn",
    reporters: ["html", "progress"],
    transpilers: [],
    coverageAnalysis: "off",
    mutate: [
      "src/**/*.js"
    ]
  });
};
