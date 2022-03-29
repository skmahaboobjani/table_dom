// min and max salary
const employee = [
    {id: 1,
     name: "Andrew", 
     age: 30,
     salary:45000
    },
    {
        id: 2,
         name:" Brandon",
          age: 25,
          salary:75000},
    {
        id: 3, 
        name:" Christina", 
        age: 26,
        salary:65000
    },
    {id: 4,
         name: "Elena", 
         age: 28,
         salary:35000
        },
    {
        id: 5,
         name: "Felicia", 
         age: 25,
         salary:75000
        }    
]
  console.log(employee)
  const min = Math.min(...employee.map(item => item.salary))
  const max = Math.max(...employee.map(item => item.salary));
  
  console.log(min);
  console.log(max);