
// - Create a Student Array Data Structure ( name, roll, age, class, gender, location, Admission fees ) 30.  
// now create a console data table with


const student = [

  [ 'Tanisha Tahasin', '01', '11', 'three', 'female', 'Dhaka' , 'one@gmail.com' , '200' ],

  [ 'Lipi Khatun', '02', '13', 'four', 'female', 'Uttara' , 'two@gmail.com', '220' ],

  [ 'Sobuj ISlam', '03', '17', 'five', 'male', 'Badda' , 'three@gmail.com' , '100' ],

  [ 'Moninra', '04', '20', 'three', 'female', 'Mohhakhali' , 'fore@gmail.com' , '210' ],

  [ 'Jamila Tahasin', '24', '11', 'four', 'female', 'Bonani' , 'five@gmail.com' , '120'  ],

  [ 'Sukiron', '06', '21', 'five', 'female', 'Mirpur' , 'six@gmail.com' , '320' ],

  [ 'Tasiron', '07', '23', 'three', 'female', 'Rangpur' , 'seven@gmail.com' , '400' ],

  [ 'Karim', '08', '27', 'five', 'male', 'Bogura' , 'eight@gmail.com' , '500' ],

  [ 'Rahim', '09', '15', 'four', 'male', 'Gaibandha' , 'nine@gmail.com' , '700' ],

  [ 'Jweal', '10', '18', 'five', 'male', 'Mithapukur' , 'ten@gmail.com' , '900' ],

  [ 'Asadul', '11', '30', 'three', 'male', 'Bhurungamari' , 'eleven@gmail.com' , '201' ],

  [ 'Tonika', '12', '09', 'four', 'female', 'Uttaara' , 'twelve@gmail.com' , '410' ],

  [ 'Jahid', '13', '23', 'three', 'male', 'Cummila' , 'thirteee@gmail.com' , '700' ],

  [ 'Shipon', '14', '21', 'five', 'male', 'Bourob' , 'fourteen@gmail.com' , '200' ],

  [ 'Jagodish', '15', '14', 'three', 'male', 'Shylet' , 'fifthteen@gmail.com' , '100' ],

  [ 'Kulsum', '16', '12', 'four', 'female', 'Chittagong' , 'sixteen@gmail.com' , '300' ],

  [ 'Rubayet', '17', '11', 'three', 'male', 'Joymomirhat' , 'seventeen@gmail.com' , '420' ],

  [ 'Shakib', '18', '10', 'five', 'male', 'Badda' , 'eightteen@gmail.com' , '200' ],

  [ 'Babu', '19', '19', 'three', 'male', 'Porbachall' , 'nineteen@gmail.com' , '270' ],

  [ 'Sorkar', '20', '21', 'four', 'male', 'Bosundhara' , 'twinty@gmail.com' , '150' ],

  [ 'Tamhid', '21', '27', 'three', 'male', 'Kurigram' , 'twentyone@gmail.com' , '720'  ],

  [ 'Bablu', '22', '26', 'five', 'male', 'Kurigram' , 'twentytwo@gmail.com' , '980' ],

  [ 'Songkor', '23', '08', 'three', 'male', 'Kurigram' , 'twentythree@gmail.com' , '850' ],

  [ 'Jibon', '24', '28', 'four', 'male', 'Kurigram' , 'twentyfour@gmail.com' , '710' ],

  [ 'Mahi', '25', '24', 'three', 'male', 'Kurigram' , 'twentyfive@gmail.com' , '470' ],

  [ 'Rafiq', '26', '19', 'five', 'male', 'Kurigram' , 'twentysix@gmail.com' , '807' ],

  [ 'Beauty', '27', '16', 'three', 'female', 'Gazipur' , 'twentyseven@gmail.com' , '210' ],

  [ 'Ohab', '28', '13', 'four', 'male', 'Tangail' , 'twentyeight@gmail.com' , '270' ],

  [ 'jakku', '29', '12', 'three', 'male', 'Mirzapur' , 'twentynine@gmail.com' , '790' ],

  [ 'zahan', '30', '21', 'five', 'male', 'Dhaka' , 'thirty@gmail.com' , '140' ],

  [ 'Yeasin', '31', '26', 'four', 'male', 'Rosulpur' , 'thirtyone@gmail.com' , '108' ],

];


// Student Data
/*
let total_student = 0;
student.sort().forEach( (data,index) => {
  console.log(` 
      Id           :${index +1}
      Name        : ${data[0]}
      Roll        : ${data[1]}
      Age         : ${data[2]}
      Class       : ${data[3]}
      Gender      : ${data[4]}
      Location    : ${data[5]}
      Ad.Fees     : ${data[6]}
  
  `);
  total_student ++ +(index + 1)

});
console.log(`\
============================================>
     Total Student =    ${ total_student} 

`);

*/

// =========111111111111========Total Admnission fees
/*
let total_amount = 0;
student.forEach( ( data, index) => {
 
  console.log(` ${index +1}. Student Name : ${data[0]} - Fees : ${data[7]}`);
  total_amount += +(data[7]);
  
});

console.log(`
===============================================>
Total Amount of Fees =   ${total_amount} Taka
`);
*/


// =======2222222222===========Find All Female Students
/*
 let totalFemaleStudent = 0;

 student.sort(). map( (data, index) => {
   
   if (data[4] === 'female'){
     console.log(`
      No : ${index +1}
      Name : ${data[0]}
      Gender : ${data[4]}
      Email : ${data[6]}
     
     `);
     totalFemaleStudent ++ +(data[4])
   }
 });
 console.log(`
 ===================================>
 Total Female Student =   ${totalFemaleStudent} Jon
 
 `);
*/


//=========3333333333333======== Find class wise student result
/*
let classWiseStudentThree = 0;
student.forEach ( (data, index) => {
  
  if(data[3] === 'three'){
   
    console.log(`
     
    Id : ${index +1}
    Name : ${data[0]}
    Class : ${data[3]}
    
    
    `);
    classWiseStudentThree ++ +(data[3]);


  }

});

console.log(`
 
 ===================================================>
 Class Three Total Student = ${classWiseStudentThree} Jon;

`);

*/


// =====4444444444444444=========== Location wise student result
/*
student.sort().forEach( (data, index) => {
  
  if( data[5] === 'Dhaka' || data[5] === 'Gazipur' || data[5] === 'Kurigram' ){
    console.log(`
     No : ${index +1}.
     Name : ${data[0]}
     Location : ${data[5]}
    
    `);
  }


});
*/

//==========55555555555========= find student between 10 - 25 age
/*
let conditionAge = 0;
student.forEach( ( data, index) => {
  
   if(data[2] >= 10 && data[2] <= 25){

    console.log(`
     No : ${index +1}
     Name : ${data[0]}
     Age : ${data[2]} years
    `);
    conditionAge ++ +(data[2])
   }
});

console.log(`
 ====================================>
 Total 10~25 Years Student = ${conditionAge} jon

`);
*/


