export function compareNumbers(guess, correctNum){
    if (guess === correctNum){
        return '0';
    } else if (guess < correctNum) {
        return '-1';
    } else (guess > correctNum); {
        return '1';
    }
}