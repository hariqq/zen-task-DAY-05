var str = "foo bar baz"

console.log(

str.split(' ')
   .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
   .join(' ')

)
// returns "Foo Bar Baz"