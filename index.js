// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    appendCat = [...cats, "Broom"];
    return appendCat
}

function prependCat(name) {
    prependCat = ["Arnold", ...cats];
    return prependCat
}

const copyOfCatsAppend = [cats, "GoodBye Kitty"];

const copyOfCatsPrepend = ["Hello Kitty", cats.slice()];

function removeLastCat() {
    removeLastCat = cats.slice(0, -1);
    return removeLastCat
}

function removeFirstCat() {
    removeFirstCat = cats.slice(1);
    return removeFirstCat
}

cats;
