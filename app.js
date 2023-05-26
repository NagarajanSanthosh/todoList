//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname +"/date.js");
console.log(date.getDate());
const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"]
var workItems=[]
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req, res){
    let day = date.getDay();
    res.render("list", {listTitle:day, newListItems:items});

});
app.post("/", function(req, res){
      let item = req.body.newItem;
     
      if (req.body.list ==="Work") {
        workItems.push(item);
        console.log(workItems);
        res.redirect("/work")
      } else {
        items.push(item);
        console.log(items);
        res.redirect("/");
      }
      
   // res.render("list", {contentThere : contentHere})
    //res.send("Your query '"+contentHere+"' will look through by our team and they'll contact you soon<br>-Regards<br>Team <b>myCafe</b>")
})
app.get("/work", function (req, res) {
    res.render("list", {listTitle:"Work List", newListItems: workItems})

})
/*app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})
*/
app.get("/about", function(req, res){
    res.render("about",{
       workItems: workItems 
    });
})
app.listen(3000, function(){
    console.log("server started on port 3000");
})