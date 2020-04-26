const express = require('express');
const app = express();
let series = [{ "id": 1, "name": "Friends" }, { "id": 2, "name": "Breaking Bad" }, { "id": 3, "name": "Dexter" }, { "id": 4, "name": "Six Feet Under" }];
app.listen(3000, () => console.log("server Running"));


app.get("/serie/:id", function(req, res) {
    let serie = series.filter(serie => serie.id == req.params.id);
    console.log(series.length);
    res.send(serie[0].name);
});