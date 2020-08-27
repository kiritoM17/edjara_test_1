const fs = require('fs');
const stringify = require('csv-stringify');
let fileController = {};
let dataArray=[];
fs.readFile('MOCK_DATA.csv', 'utf8', function (err, data) {
    dataArray = data.split(/\r?\n/);
});
//get Male file csv
fileController.getMaleGenderFile=(req,res,next)=>{
    writeToFile("Male");
    res.send("le fichier male.csv a bien ete creer merci !");
};
//get Female file csv
fileController.getFemaleGenderFile=(req,res,next)=>{
    writeToFile("Female");
    res.send("le fichier female.csv a bien ete creer merci !");
};
//function to create new csv file
function writeToFile(fileGender){
    let data = [...dataArray];
    if(fileGender=='Male'){
        data= data.filter(element=>element.split(',')[4]!=="Female");
    }else{
        data= data.filter(element=>element.split(',')[4]!=="Male");
    }
    addFullNameColumn(data).then((result)=>{
        console.log(result);
        result=result.sort((a,b)=>a.split(",")[7]-b.split(",")[7]);
            fs.writeFile(fileGender+'.csv', result, (err) => {
                if (err) throw err;
              });
    }).catch((err)=>{
        throw err;
    });
}
//function add full name column
async function addFullNameColumn(table_data)
{
    let new_data=[ 'id, first_name, last_name,full_name,email,gender,ip_address,age'];
    table_data = table_data.forEach(element=>{
         element=element.split(",");
        let element_array=element[0]+","+element[1]+", "+element[2]+", "+element[1]+" "+element[2]+", "+element[3]+", "+element[4]+","+element[5]+","+element[6];
        new_data.push(element_array);
    });
    delete new_data[1];
    return  new_data;
}
module.exports=fileController;