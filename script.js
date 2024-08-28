const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');

function convertToRoman(num) {
    const singles = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousands = ["", "M", "MM", "MMM", "MMMM"];
    //turn the number to a string, split individual characters and then turn each one to a number.
    const length = num.toString().length;
    const numbers = num.toString().split("").map(Number);
    let roman = '';
    let i = 0;
    
    switch (length) {      
        case 4:
            roman = thousands[numbers[i]];
            i++;
                    
        case 3:
            roman += hundreds[numbers[i]];
            i++;
                
        case 2:
            roman += tens[numbers[i]];
            i++;
                    
        case 1:
            roman += singles[numbers[i]];
    }

    result.textContent = roman;
    return;
};

convertBtn.addEventListener("click", () => { 
    convertToRoman(number.value)   
});

number.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
    convertToRoman(number.value)
}});