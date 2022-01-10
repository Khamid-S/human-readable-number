module.exports = function toReadable (number) {
    const numbers = {
        '00': '',
        '0': '',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '11': 'eleven',
        '12': 'twelve',
        '13': 'thirteen',
        '14': 'fourteen',
        '15': 'fifteen',
        '16': 'sixteen',
        '17': 'seventeen',
        '18': 'eighteen',
        '19': 'nineteen',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '60': 'sixty',
        '70': 'seventy',
        '80': 'eighty',
        '90': 'ninety',
    }
    let num = number.toString();
    if(num.length == 1){
        return num.replace(num[0], numbers[num[0]]).trim()
    }
    else if(num.length == 2){
        if(num[0]!=='1'){
        return num.replace(num[0], numbers[num[0]+'0']+' ')
        .replace(num[1], numbers[num[1]]).trim().replace('  ', ' ');
        }
        else return num.replace(num[0]+num[1], numbers[num[0]+num[1]]).trim();
    }
    else{
        if(num[1]!=='1'){
        return num.replace(num[0], numbers[num[0]]+' hundred ')
        .replace(num[1], numbers[num[1]+'0']+' ')
        .replace(num[2], numbers[num[2]]).trim().replace('  ', ' ');
        }
        else return num.replace(num[0], numbers[num[0]]+' hundred ')
        .replace(num[1]+num[2], numbers[num[1]+num[2]]).trim();
    }
    
}
