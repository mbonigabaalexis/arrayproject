/* <li class="listiterm">


        <div class="personal-info">
      <h2>Ndayambaje Gaetan</h2>
      <p>gaetandeo@gmail.com</p>
      <p>0782989299</p>
       </div>
       <div class="actions">
        <button >Remove Student</button>
       </div> 
       </li> */


       const student=[
         {
           name:"Ndayambaje gaetan",
           email:"gaetandeo@gmail.com",
           phone:"078328992",
           address:"GATSIBO"

       },
       {
         name:"Innocent Ishimwe",
         email:"ishimwe@gmail.com",
         phone:"07882992",
         address:"GATSIBO"
       },
       {
         name:"Mbonigaba alexis",
         email:"mbonigabalexis624@gmail.com",
         phone:"0780204570",
         address:"GATSIBO"


       },
       {
        name:" Birori patrick",
        email:"biroripatrick@gmail.com",
        phone:"078899777878",
        address:"GATSIBO"


      },
      {
        name:"Rutabara Vagne",
        email:"rutabaravagne@gmail.com",
        phone:"07879544444",
        address:"GATSIBO"

      },
      {
        name:"Muhuza Huseun",
        email:"muhuzahueseun@gmail.com",
        phone:"0780204570",
        address:"GATSIBO"


      }
      ];

      // using for loop dispay tag and information in html page

      let  studentlist=document.getElementById("studentlist");
      
      
      for(let i=0;i<student.length;i++){

        let listiterm=document.createElement('li');
            listiterm.classList.add("listitem");
           let personalInfo=document.createElement('div');
           let actions=document.createElement('div');
           actions.classList.add("actions");

       let studentName=document.createElement('h3');
       let studentEmail=document.createElement('p');
       let studentPhone=document.createElement('p');
       let studentAddress=document.createElement('p');
       let removeStudent=document.createElement('button');
// <button> remove student
// set data to tag calling in html
       removeStudent.innerHTML="Remove student";
       studentName.innerHTML= student[i].name;
       studentEmail.innerHTML=student[i].email;
       studentPhone.innerHTML=student[i].phone;
       studentAddress.innerHTML=student[i].address;

       // append tags to their parents
       
      personalInfo.appendChild(studentName);
      personalInfo.appendChild(studentEmail);
      personalInfo.appendChild(studentPhone);
      personalInfo.appendChild(studentAddress);
      
      
      actions.appendChild(removeStudent);

      listiterm.appendChild(personalInfo);
      listiterm.appendChild(actions);
      studentlist.appendChild(listiterm);


      }
