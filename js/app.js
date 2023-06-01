'use strict';

/**************************************************************/

                              function Emp (id,name,departement,Level,img,salary){
    this. EmlpoyeeId=id;
    this. FullName=name;
    this. Departement=departement;
    this. level=Level;
     this.image=img;
     this.Salary=salary;
 }
    /*********************************************************/
 
                                function generateEmployeeId() {
     let employeeId;
     const usedIds = new Set();
   
     do {
       employeeId = Math.floor(Math.random() * 9000) + 1000;
     } while (usedIds.has(employeeId));
   
     usedIds.add(employeeId);
     return employeeId;
   }
    /****************************************************/
                              function calculateSalary(level){
     let salaryRange={
         Senior: { min: 1500, max: 2000 },
     Midsenior: { min: 1000, max: 1500 },
     Junior: { min: 500, max: 1000 },
     }
 
  let minSalary = salaryRange[level].min;
   let maxSalary = salaryRange[level].max;
   let randomSalary = Math.floor(minSalary + Math.random() * (maxSalary - minSalary + 1));
   let netSalary = randomSalary - (randomSalary * 0.075); 

                                  return netSalary;
 };
 /***************************************************** */
 
 let Ghazi

 = new Emp(generateEmployeeId(),"Ghazi Samer","Administration","senior", '',calculateSalary("Senior"));
 let Lana

 = new Emp(generateEmployeeId(),"Lana Ali","Finance","Senior","",calculateSalary("Senior"));
 let  Tamara

 =new Emp(generateEmployeeId(),"Tamara Ayoub","Marketing","senior","",calculateSalary("Senior"));
 let Safi

  =new Emp(generateEmployeeId(),"Safi Waleed","Administration","Mid-Senior","",calculateSalary("Midsenior"));
  let omar

  =new Emp(generateEmployeeId(),"Omar Zaid","Development","Senior","",calculateSalary("Senior"));           
  let Rana

  =new Emp(generateEmployeeId(),"Rana Saleh","Development","Junior","",calculateSalary("Junior"));
  let Hadi

  =new Emp(generateEmployeeId(),"Hadi Ahmad","Finance","Mid-Senior","",calculateSalary("Midsenior"));
 
 
   
    
                                 let employees 
                       = [Ghazi, Lana, Tamara, Safi, omar, Rana, Hadi];
     
   
        
    /************************************************************* */ 

     Emp.prototype.renderEmployees = function() {
                               let main = document.getElementsByTagName("main")[0];
        
      
    
                                let divE=document.createElement("div");
         
         main .appendChild(divE);
        divE.setAttribute("class", "card");

       
                                let employeeImg=document.createElement("img");

        employeeImg.src=this.image;
        employeeImg.alt=this.FullName;
        divE.appendChild(employeeImg);
    
       employeeImg.setAttribute("class", "div1image");
                               let content=document.createElement("div");

       divE.appendChild(content);
       content.setAttribute("class","content");

                             let emoloyeeName=document.createElement("h1");
        
        emoloyeeName.textContent=`Name: ${this.FullName} Id:${this.EmlpoyeeId} `;
        content.appendChild(emoloyeeName);
        
                         let Dep=document.createElement("h2");

        Dep.textContent=`Departement: ${this.Departement}- Level: ${this.level}`;
        content.appendChild(Dep);
        
                        let employeeSalary=document.createElement("h3");

        employeeSalary.textContent=this.Salary;
        content.appendChild(employeeSalary);
        
        

     }
     /*********************TheEnd********************************************* */
    
     
           
                                 for (let i = 0; i < employees.length; i++) {
                                  employees[i].renderEmployees();
                                                                            }
          
        
      
  
  
  