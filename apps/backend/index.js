const fs=require("fs");
const path=require("path");

const pt=path.join(__dirname,"file","data.txt");

fs.readFile(pt, "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);


fs.writeFile("./file/data.txt","chaangee your ",(err)=>{
    if(err){
        console.log(err);
        return;
    }
})

});