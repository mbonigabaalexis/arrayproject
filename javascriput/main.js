



       const students=JSON.parse(localStorage.getItem("students"))||[]; //step6
       // 1. get data from from
       // 2. store data in student object
       // 3. push OBJECT into student array
       //4.store student  array int local storage
       //5.refref
       //// 6 all thes operation will be done in onclick  event  



// to show div hideon hiddeen
       document.getElementById("btn-add-student").addEventListener('click',function(e){
      document.getElementById("form-container").classList.remove("hideorshow")
 
       });

       // close div class hideon hiden

       document.getElementById("btnclose").addEventListener('click',function(e){
       e.preventDefault();
       document.getElementById("form-container").classList.add("hideorshow");

       });
       
       document.getElementById("submitdata").addEventListener('click',function(e){ //step1
              e.preventDefault();

              let name=document.getElementById("name").value;
              let email=document.getElementById("email").value;
              let phone=document.getElementById("phone").value;
              let address=document.getElementById("address").value;
              let id=document.getElementById("id").value;

              let student={name,email,phone,address,id};// step2
              students.push(student);// step3
              localStorage.setItem("students",JSON.stringify(students)); // step4
              location.reload();//step5
              
              
              


       });

      // using for loop dispay tag and information in html page

      let  studentlist=document.getElementById("studentlist");
      
      
      for(let i=0;i<students.length;i++){

        let listiterm=document.createElement('li');
            listiterm.classList.add("listitem");
           let personalInfo=document.createElement('div');
           let actions=document.createElement('div');
           actions.classList.add("actions");

       let studentName=document.createElement('h3');
       let studentEmail=document.createElement('p');
       let studentPhone=document.createElement('p');
       let studentAddress=document.createElement('p');
       let studentId=document.createElement('b');
       let removeStudent=document.createElement('button');
// <button> remove student
// set data to tag calling in html
       removeStudent.innerHTML="Remove student";
       studentName.innerHTML= students[i].name;
       studentEmail.innerHTML=students[i].email;
       studentPhone.innerHTML=students[i].phone;
       studentAddress.innerHTML=students[i].address;
       studentId.innerHTML=students[i].id;

       // append tags to their parents
       
      personalInfo.appendChild(studentName);
      personalInfo.appendChild(studentEmail);
      personalInfo.appendChild(studentPhone);
      personalInfo.appendChild(studentAddress);
      personalInfo.appendChild(studentId);
      
      
      actions.appendChild(removeStudent);

      listiterm.appendChild(personalInfo);
      listiterm.appendChild(actions);
      studentlist.appendChild(listiterm);
      }

      
