class Watch {
  public onComplete: any;

  constructor({ config }) {
    this.onComplete = config.onComplete;
  }
  // Add hooks to Jest lifecycle events
  apply(jestHooks) {
    jestHooks.onTestRunComplete((results) => {
      this.onComplete(results);
    });
  }

  // Get the prompt information for interactive plugins
  getUsageInfo(globalConfig) {
    console.log(globalConfig);
  }

  // Executed when the key from `getUsageInfo` is input
  run(globalConfig, updateConfigAndRun) {
    console.log(globalConfig);
    console.log(updateConfigAndRun);
  }
}

module.exports = Watch;
