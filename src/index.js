module.exports = function toReadable (number) {
  let obj = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 
    13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety',
    100: 'hundred' };    
    if (number > -1 && number < 21) return obj[number];
    if (number % 100 == 0) return obj[number / 100] + " " + obj[100];
    if (number > 100 && number % 100 > 0 &&  number % 100 < 21) return obj[(number - (number % 100))/100] + " " + obj[100] + " " + obj[number % 100];
    if (number > 100 && number % 10 == 0) return obj[(number - (number % 100))/100] + " " + obj[100] + " " + obj[number % 100];
    if (number > 100 && number % 100 > 20 &&  number % 100 < 100) {
        return obj[(number - (number % 100))/100] + " " + obj[100] + " " + obj[number%100 - number%10] + " " + obj[number % 10];
    }
    if (number % 10 == 0) return obj[number];
    if (number > 20 && number < 100) return obj[number - (number % 10)] + " " + obj[number % 10];
}
