// 7 kyu - remove anchor from url

/* Complete the function/method so that it 
returns the url with anything after the anchor (#) removed. */

function removeUrlAnchor(url) {
  const poundLocation = url.split("").findIndex((el) => el === "#");
  return poundLocation >= 0 ? url.slice(0, poundLocation) : url;
}

function removeUrlAnchorImproved(url) {
  return url.split("#")[0];
}
/* 
console.log("test 1:  ", removeUrlAnchor("www.codewars.com#about"));
console.log("test 2:  ", removeUrlAnchor("www.codewars.com/katas/")); */
