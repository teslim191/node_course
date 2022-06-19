const url = require("url");

// const indexUrl = new URL("https://goal.com:5000/en?id=1&status=active")
const myUrl = new URL("https://example:123@gmail.com#foo")


// full url
// console.log(indexUrl.href)

// domain name
// console.log(indexUrl.host)

// host name
// console.log(indexUrl.hostname)

// serialised query
// console.log(indexUrl.search)

// console.log(indexUrl.searchParams)

// indexUrl.searchParams.append('city','tokyo')
// console.log(indexUrl.searchParams)

// get the password of the url
// console.log(myUrl.password)

// myUrl.password = "abc"
// console.log(myUrl.href)

// get the fragment portion of the url
// console.log(myUrl.hash)

// set the fragment portion of the url
// myUrl.hash = "bar"
// console.log(myUrl.href)


// to get the serialised url origin
// console.log(myUrl.origin)
// console.log(indexUrl.origin)

// to get the pathname of the url
// console.log(indexUrl.pathname)

// to set the pathname of the url
// indexUrl.pathname = "fr"
// console.log(indexUrl.href)

// get the url protocol
// console.log(indexUrl.protocol)

// to set url protocol
// indexUrl.protocol = "ftp"
// console.log(indexUrl.href)

// to get the username portion
// console.log(myUrl.username)

// to set the username portion
myUrl.username = "sample"
console.log(myUrl.href)