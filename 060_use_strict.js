"use strict";

// function f() {
//     console.log(this);
// }

// f();

function F() {
    this.name = 'name';
}

class G {
    constructor() {
        debugger;
        this.name = 'name';
    }
}

const obj = new G();