let flavors = prompt("Please enter a list of comma-separated Froyo flavors.");

flavors = flavors.split(".");

const countFlavor = (arr) => {
    const flavCount = {};
    for (let flavor of arr) {
        flavor = flavor.trim();
        flavor in flavCount ? (flavCount[flavor] += 1) : (flavCount[flavor] = 1);
    }
    return flavCount
};

console.table(countFlavor(flavors));