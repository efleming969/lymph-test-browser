var TestReporter = require( "./index" )

console.log("======= print report =============")

var report = [
  {
    name: "context 1",
    tests: [
      { name: "test 1a", asserts: [ "", "fail" ], error: "" },
      { name: "test 1b", asserts: [ "", "fail" ], error: "" }
    ]
  },
  {
    name: "context 2",
    tests: [
      { name: "test 2a", asserts: [ "fail", "fail" ], error: "" },
      { name: "test 2b", asserts: [ "", "fail" ], error: "" }
    ]
  }
]

TestReporter.print( report )

