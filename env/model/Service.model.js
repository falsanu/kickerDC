class ServiceModel {
  constructor() {
    this.deps = {};
  }

  injectDependency(name, dep) {
    this.deps[name] = dep;
  }
}

module.exports = ServiceModel;