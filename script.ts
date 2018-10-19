var values = ""

for (let i = 1; i <= 10 ; i++) {
    for (let j = 1; j <= 10 ; j++) {
        values+= i*j
    }
    console.log(values);
    values = "";
}
