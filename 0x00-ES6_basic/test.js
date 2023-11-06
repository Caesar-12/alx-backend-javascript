const myself = {
    my_name: "Mhidae",
    detail () {
        console.log(this);
    }
};

myself.detail();

const detail = myself.detail.bind(myself)

detail();

const square = function(num) {
    return num * num;
};

const squaret = (num) => {
    return num * num
};

const squarep = (num) => num * num

console.log(square(4));
console.log(squaret(5));
console.log(squarep(6));

const proof = [
    {id: 1, alive: true},
    {id: 2, alive: false},
    {id: 3, alive: true}
];

console.log(proof.filter(function(value) {return proof.alive; }));
console.log(proof.filter((value) => proof.alive));

