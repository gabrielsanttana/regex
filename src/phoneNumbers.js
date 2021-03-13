//Select any phone number in american pattern
function replacePhoneNumber(string) {
  return string.replace(
    /(?:(\+[0-9]{1,3})[ -])?\(?(\d{3})\)?[ -\.]?(\d{3})[ -\.]?(\d{4})/gm,
    "phoneNumber"
  );
}

console.log(replacePhoneNumber("1234567890")); // phoneNumber
console.log(replacePhoneNumber("123-456-7890")); // phoneNumber
console.log(replacePhoneNumber("123.456.7890")); // phoneNumber
console.log(replacePhoneNumber("123 456 7890")); // phoneNumber
console.log(replacePhoneNumber("(123) 456 7890")); // phoneNumber
console.log(replacePhoneNumber("+1 (123) 456 7890")); // phoneNumber
