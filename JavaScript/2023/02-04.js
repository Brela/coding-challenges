// 5 kyu - extract domain name form URL

/* Assignment:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.For example:

url = "http://github.com/carbonfive/raygun" -> domain name = "github" */

/* My Plan:
First, I will find the  '//'.
Then, check if the next 4 chars === 'www.' If they do then remove that part.
Then get anything after the '//' and before the '.com'
*/


function domainName(url) {
    url = url.split('')
    let i = url.indexOf('/')

    // check for http and remove up to 2nd '/'
    if (url.slice(0, 4).join('') === 'http') {
        // check for second slash
        if (url[i + 1 !== '/']) url.slice(i + 1)
        else url = url.slice(i + 2)
    }

    // now check for 'www.' and remove
    if (url.slice(0, 4).join('') === 'www.') url = url.slice(4)

    // now remove .com by finding '.'
    return url.slice(0, url.indexOf('.')).join('')
}

console.log(domainName("https://youtube.com"))  // "youtube"
console.log(domainName("https://www.github.com"))  // "github"



// other person's solution - this one is nice

function domainName2(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};