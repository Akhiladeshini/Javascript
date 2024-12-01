let count = 0;
let alpha = "Akhiladeshini";

for (let value of alpha) {
    if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u' ||
        value === 'A' || value === 'E' || value === 'I' || value === 'O' || value === 'U') {
        count++;
    }
}

console.log("Number of vowels:", count);

    