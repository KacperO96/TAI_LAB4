var values = "";
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        values += i * j;
    }
    console.log(values);
    values = "";
}
