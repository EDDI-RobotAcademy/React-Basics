const sum = (one, two) => {
    return one + two
}

const person = (name, age) => {
    return {
        name,
        age,
    };
};

const toggle = (a) => {
    return !a;
};

const range = (start, end) => {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
};

module.exports = {
    sum,
    person,
    toggle,
    range,
}