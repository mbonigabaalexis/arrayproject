const students = JSON.parse(localStorage.getItem("students")) || [];
let updateIndex=null; 


// to show div class hideon  hideen showing
document.getElementById("btn-add-student").addEventListener('click', function (e) {
       document.getElementById("form-container").classList.remove("hideorshow")

});

// close div class hideon hiden

document.getElementById("btnclose").addEventListener('click', function (e) {
       e.preventDefault();
       document.getElementById("form-container").classList.add("hideorshow");

});

// Add student data 
document.getElementById("submitadd").addEventListener('click', function (e) {
       e.preventDefault();

       let name = document.getElementById("name").value; // get data student From html form
       let email = document.getElementById("email").value;
       let phone = document.getElementById("phone").value;
       let address = document.getElementById("address").value;
       let id = students.length + 1;
       let student = { id, name, email, phone, address, };//store data in student object
       students.push(student);//push OBJECT into student array
       localStorage.setItem("students", JSON.stringify(students)); // store student  array int local storage
       location.reload();//Refresh



});  //all thes operation will be done in onclick  event

// using for loop dispay tag and information in html page

let studentlist = document.getElementById("studentlist");

for (let i = 0; i < students.length; i++) {

       let listiterm = document.createElement('li');
       listiterm.classList.add("listitem");
       let personalInfo = document.createElement('div');
       let actions = document.createElement('div');
       actions.classList.add("actions");

       let studentName = document.createElement('h3');
       let studentEmail = document.createElement('p');
       let studentPhone = document.createElement('p');
       let studentAddress = document.createElement('p');
       let updateStudent = document.createElement('button');
       let removeStudent = document.createElement('button');
       let studentId=document.createElement("b");

       // <button> remove student
       // set data to tag calling in html page
       updateStudent.innerHTML = "<i class=\"fas fa-user-edit\"><i>Update Student";
       removeStudent.innerHTML = "<i class=\"fas fa-user-times\"></i>Remove Student";
       
       studentId.innerHTML=students[i].id;
       studentName.innerHTML = students[i].name;
       studentEmail.innerHTML = students[i].email;
       studentPhone.innerHTML = students[i].phone;
       studentAddress.innerHTML = students[i].address;
       


       // append tags to their parents
       personalInfo.appendChild(studentId);
       personalInfo.appendChild(studentName);
       personalInfo.appendChild(studentEmail);
       personalInfo.appendChild(studentPhone);
       personalInfo.appendChild(studentAddress);
      


       actions.appendChild(updateStudent);
       actions.appendChild(removeStudent);


       listiterm.appendChild(personalInfo);
       listiterm.appendChild(actions);
       studentlist.appendChild(listiterm);


       //remove student 
       removeStudent.addEventListener('click', function (e) {

              let newStudents = students.filter(function (student) {
                     return student.id != students[i].id;

              });
              localStorage.setItem("students", JSON.stringify(newStudents));
              location.reload();

       });

       //close remove data

       // update student
       updateStudent.addEventListener('click', function (e) {
              document.getElementById("idupdate").value=students[i].id;
              document.getElementById("nameupdate").value=students[i].name; //show value in htmal form
              document.getElementById("emailupdate").value=students[i].email;
              document.getElementById("phoneupdate").value=students[i].phone;
              document.getElementById("addressupdate").value=students[i].address;
              

              updateIndex=i;

 document.getElementById("form-containerupdate").classList.remove("hideorshow");
     
});

};

// close loop


// update change the data
document.getElementById("submitupdate").addEventListener('click',function(e){
       e.preventDefault();
       let id=document.getElementById("idupdate").value; 
       let name=document.getElementById("nameupdate").value; 
       let email=document.getElementById("emailupdate").value;
       let phone=document.getElementById("phoneupdate").value;
       let address=document.getElementById("addressupdate").value;
       let student ={id,name,email,phone,address};

       if(updateIndex !=null){
       students[updateIndex]=student;
       localStorage.setItem("students",JSON.stringify(students));
       location.reload(); 
       }      
     
}); 

// close update


























      