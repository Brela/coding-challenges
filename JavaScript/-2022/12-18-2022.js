// MINE 
function removeExclamationMarks(s) {
    return s.replaceAll('!', '')
}

// ALTERNATE
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}