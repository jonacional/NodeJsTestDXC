const { Router } = require('express');
const router= Router();
const _=require('underscore');
 
const sum = (accumulator, currentValue) => accumulator + currentValue;
const rest = (accumulator, currentValue) => accumulator - currentValue;
const mult = (accumulator, currentValue) => accumulator * currentValue;
const div = (accumulator, currentValue) => accumulator - currentValue;

router.get('/', (req, res) =>{

try {

 const reqArray =  req.query.array;
 console.log( reqArray);
 if(Array.isArray(reqArray)){
    const arrayOfNumbers = _.map(reqArray, Number);
    console.log( arrayOfNumbers);
    if(arrayOfNumbers.includes(NaN)){

      
        res.status(422).json(
            {  data: '',
               errors: ['invalid_data_format']
            }
        )
    }else{
      var suma= arrayOfNumbers.reduce(sum);
      var resta= arrayOfNumbers.reduce(rest);
      var multiplicacion= arrayOfNumbers.reduce(mult);
      var division= arrayOfNumbers.reduce(div);
      res.status(200).json(
        {  data: {
            suma: suma,
            resta: resta,
            multiplicacion: multiplicacion,
            division: division
            },
            errors: []
        }
    )
      
    }
    
   
 }else{
     res.status(422).json(
         {  data: '',
            errors: ['invalid_data_format']
         }
     );
 }

}catch(error) {
    res.status(500).json(
        {  data: '',
           errors: ['internal_server_error']
        }
    );
 }

} );



module.exports= router;