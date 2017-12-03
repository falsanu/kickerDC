let testSuite = [];
testSuite.push({'busyService': require('./services/table.service.spec')}); // busyServiceTest

testSuite.forEach(collection => {
  for (let key in collection) {
    collection[key].forEach(test => {
      describe(key, test);
    });
  }
});