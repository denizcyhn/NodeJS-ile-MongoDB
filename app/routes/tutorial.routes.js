module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // yeni tutorial oluşturma
    router.post("/", tutorials.create);
  
    
    router.get("/", tutorials.findAll);
  
    
    router.get("/published", tutorials.findAllPublished);
  
    
    router.get("/:id", tutorials.findOne);
  
    // nir tane güncelle id'ye göre
    router.put("/:id", tutorials.update);
  
    // id'ye göre bi tane sil
    router.delete("/:id", tutorials.delete);
  
    // toplu sil
    router.delete("/", tutorials.deleteAll);
  
    app.use("/api/tutorials", router);
  };