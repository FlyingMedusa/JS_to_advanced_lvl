// solution 1 - that

const max = {
    children: ['Abby', 'Sandy'],
    showChildren: function() {
        const that = this;
        this.children.forEach(function(child, index) {
            console.log(that.children[index]);
        });
    },
};

max.showChildren();

// solution 2 - for of

const rex = {
    children: ['Abby2', 'Sandy2'],
    showChildren2: function() {
        for (child of this.children) {
            console.log(child);
        };
    },
};

rex.showChildren2();

// solution 3 - arrow function

const barny = {
    children: ['Abby3', 'Sandy3'],
    showChildren3: function() {
        this.children.forEach((child, index) => {
            console.log(this.children[index]);
        });
    },
};

barny.showChildren3();

// solution 4 - bind

const fluffy = {
    children: ['Abby4', 'Sandy4'],
    showChildren4: function() {
        this.children.forEach(function(child, index) {
            console.log(this.children[index]);
        }.bind(this));
    },
};

fluffy.showChildren4();