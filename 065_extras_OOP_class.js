class Family {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`A new family member, ${newMember}, has been added. Now the family consists of ${this.members} person(s).`);
    }

    static makeFamily(...members) {
        return members;
    }
}

const smiths = new Family(3, 'John', 'Eva', 'Adam');
smiths.addMember('Johnny');
console.log(smiths);

console.log(Family.makeFamily('Boris', 'Hellen'));