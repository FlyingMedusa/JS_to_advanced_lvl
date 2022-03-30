const obj = {
    id: 1,
    name: 'Tester Testowy',
    pwdHash: 'jifuhcbfdao9876r24tf53gebgfh',
    isAdmin: true,
    hasAvatar: true,
};

function filter(obj) {
    const {id, name, hasAvatar} = obj;
    return {id, name, hasAvatar};
}

console.log(filter(obj));