const fs = require ('fs')
fs.writeFileSync ("data1.txt" , "islam mohamed"  )
fs.appendFileSync ("data1.txt" , " ,  Youssef")
const validator = require ('validator')
const yargs = require('yargs')
const data5 = require ("./data5")

yargs.command ({
   command : "add" ,
   describe : "to add an item",
   builder : {
      fname : {
         describe : "this is the first name in add command ",
         demandOption: true,
         type : "string",
      },
      lname : {
        describe : "this is the last name in add command ",
        type : "string",
      }
   },
   handler :(x) => {
      data5.addperson(x.fname , x.lname , x.age , x.city , x.id)
   }
})
yargs.parse()
/////////////////////////////
yargs.command ({
    command : "delete" ,
    describe : "to deleted an item",
    handler :(x) => {
       data5.deletedData (x.id)
    }
  })
  
  console.log(yargs.argv)
  //////////////////////////////////
  
  yargs.command ({
    command : "read",
    describe : "Read data" ,
    builder : {
         id : {
             describe : "this is id desc in read command ",
             demandOption : true ,
             type : "string"
         }
    },
    handler : (x) => {
      data5.readData(x.id)
    }
  })


  console.log(yargs.argv)
  ////////////////////////////////
  yargs.command ({
    command : "list",
     describe : "list data",
      handler : ()=> {
        data5.listData()
      }
   })
 
   console.log(yargs.argv)
   ////////////////////////////////
 