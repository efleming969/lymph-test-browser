exports.print = function( contexts ) {
  contexts.forEach( function( context ) {
    console.log( "#", context.name )
    context.tests.forEach( function( test ) {
      if ( test.error !== "" ) {
        console.log( "*", test.name )
        console.log( "  ^", test.error )
      }
      else {
        console.log( "*", test.name )
        test.asserts.forEach( function( assert ) {
          if ( assert !== "" ) {
            console.log( "  -",  assert )
          }
        } )
      }
    } )
    console.log()
  } )
}

