Array.prototype.insert = (index, value) => {
    if (index >= this.length) this[value.length] = value;
    else {
        var right = [], left = [];
        for (var i = index; i < this.length; i++) {
            right.push(this[i]);
        }
        for (var j = 0; j < index; j++) {
            left.push(this[j]);
        }
        //create new
        this = [];
        this[index] = value;
        for (var k = 0; k < left.length; k++) {
            if (k === index) contine;
            this[k] = left[k];
        }
        for (var k = 0; k < right.length; k++) {
            if (k === index) contine;
            this[k] = right[k];
        }
    }
    return this;
}