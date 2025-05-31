const sekarang = new Date();
const options = { 
    weekday: "long", 
    day: "numeric", 
    month: "long", 
    year: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: true 
};

const kalender = sekarang.toLocaleString("en-US", options);
console.log(kalender);