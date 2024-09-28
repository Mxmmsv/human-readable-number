module.exports = function toReadable(number) {
    if (number <= 20) {
        return syntesNumber(number);
    }

    let digit = number % 10;
    let tens = (Math.floor(number / 10) % 10) * 10;
    let hundreds = Math.floor(number / 100);

    //! если меньше 100 либо кратные 10
    if (number < 100) {
        if (digit === 0) {
            return syntesNumber(tens);
        } else {
            return syntesNumber(tens) + " " + syntesNumber(digit);
        }
    }
    //!=============================================================================

    //! если меньше 1000 либо кратные 100 или 10
    if (number < 1000) {
        let finalHundredths = syntesNumber(hundreds) + " " + "hundred";

        if (tens === 0 && digit === 0) {
            return finalHundredths;
        } else if (tens === 0) {
            return finalHundredths + " " + syntesNumber(digit); 
        } else if (digit === 0) {
            return finalHundredths + " " + syntesNumber(tens);
        } else {
            return finalHundredths + " " + syntesNumber(tens) + " " + syntesNumber(digit); 
        }
    }
};

function syntesNumber(number) {
    switch (number) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "twelve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
        case 20:
            return "twenty";
        case 30:
            return "thirty";
        case 40:
            return "forty";
        case 50:
            return "fifty";
        case 60:
            return "sixty";
        case 70:
            return "seventy";
        case 80:
            return "eighty";
        case 90:
            return "ninety";
    }
}
