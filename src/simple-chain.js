const CustomError = require("../extensions/custom-error");

const chainMaker = {

    array: [],

    getLength() {
        return this.array.length;
    },
    addLink(value) {
        if (value === null) {
            this.array.push('null');
            return this;
        }
        if (value === undefined) {
            this.array.push('');
        } else
            this.array.push(value);
        return this;
    },
    removeLink(position) {
        if (position < 1 || position > this.array.length || typeof position !== "number") {
            this.array = [];
            throw new Error();
        } else {
            this.array.splice(--position, 1);
        }
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        let str = "( " + this.array.join(" )~~( ") + " )";
        this.array = [];
        return str;
    }
};

module.exports = chainMaker;



