const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get("/heroes", (req,res) => {
    const heroes = [
    {
      id: 1,
      name: "Iron Man",
    },
    {
      id: 2,
      name: "Thor",
    },
    {
      id: 3,
      name: "Hawkeye",
    },
   ];
  
   res.json(heroes);
});

app.get("/hero", (req,res) => {
    const hero = {
      id: 1,
      name: "Iron Man",
    }
  
   res.json(hero);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));