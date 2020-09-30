const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    boolean = true;

    constructor(boolean) {
        if (boolean === false) {
            this.boolean = false;
        }
    }

    convertToIntList(string) {

        let list = [];
        for (let i = 0; i < string.length; i++) {
            list.push(string.charCodeAt(i));
        }
        return list;
    }

    convertToCharList(array) {
        let string = [];
        for (const elem of array) {
            string.push(String.fromCharCode(elem))
        }
        return string;
    }


    encrypt(string, key) {
        if (typeof key !== "string" || key === '' || typeof string !== "string") {
            throw new Error;
        }
        let {arrayString, arrayKey} = this.createArrays(string, key);
        let space = 0;
        for (let i = 0; i < arrayString.length; i++) {
            if (arrayString[i] >= 97 && arrayString[i] <= 122) {
                arrayString[i] = arrayString[i] + arrayKey[i - space] - 97;
                if (arrayString[i] > 122) {
                    arrayString[i] -= 26;
                }
            } else {
                space++;
            }
        }
        let answer = arrayString.map(x => x = String.fromCharCode(x)).join('').toUpperCase();
        return this.boolean ? answer : answer.split('').reverse().join('');
    }

    createArrays(string, key) {
        let arrayString = this.convertToIntList(string.toLowerCase());
        let arrayKey = this.convertToIntList(key.toLowerCase());
        let keySize = arrayKey.length;
        for (let i = keySize; i < arrayString.length; i++) {
            arrayKey.push(arrayKey[i - keySize]);
        }
        return {arrayString, arrayKey};
    }

    decrypt(string, key) {
        if (typeof key !== "string" || key === '' || typeof string !== "string") {
            throw new Error;
        }
        let {arrayString, arrayKey} = this.createArrays(string, key);
        let space = 0;
        for (let i = 0; i < arrayString.length; i++) {
            if (arrayString[i] >= 97 && arrayString[i] <= 122) {
                arrayString[i] = arrayString[i] - arrayKey[i - space] + 97;
                if (arrayString[i] < 97) {
                    arrayString[i] += 26;
                }
            } else {
                space++;
            }
        }
        let answer = arrayString.map(x => x = String.fromCharCode(x)).join('').toUpperCase();
        return this.boolean ? answer : answer.split('').reverse().join('');

    }
}

module.exports = VigenereCipheringMachine;

