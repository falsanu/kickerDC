class ServiceModel {
  constructor() {
    this.deps = {};
  }

  importDependency(name, dep) {
    this.deps[name] = dep;
  }
}

module.exports = ServiceModel;