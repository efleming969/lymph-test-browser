var TestReporter = require( "./index" )

console.log("======= print report =============")

var report = [
  {
    name: "context 1",
    tests: [
      { name: "test 1a", asserts: [ "", "fail" ], logItems: [ "thing" ], error: "" },
      { name: "test 1b", asserts: [ "", "fail" ], logItems: [], error: "" }
    ]
  },
  {
    name: "context 2",
    tests: [
      { name: "test 2a", asserts: [ "fail", "fail" ], logItems: [ {name:"foo"} ], error: "" },
      { name: "test 2b", asserts: [ "", "fail" ], logItems: [{name:"bar"},{other:"gogo"}], error: "" }
    ]
  }
]

TestReporter.print( report )

