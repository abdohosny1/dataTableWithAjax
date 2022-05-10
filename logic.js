
function Student(_id, _name, _age, _address, _degree, _track, _courses) {
  return {
    Id: _id,
    Name: _name,
    Age: _age,
    Address: _address,
    Degree: _degree,
    Track: _track,
    Courses: _courses,

  }
}

// var table;
// $(document).ready(function () {
//     table= $('#example').DataTable();
//     var counter = 1;

//  });
window.addEventListener("load", function () {




  $.ajax({
    url: "http://localhost:3000/student",
    method: "get",
    success: function (data) {
      console.log("TEst");
      console.log("data", data);
      getAllStudent(data)
      //   return data;

    },
    error: function (errorMessag) {
      console.log(errorMessag);
    },
  });


  add.addEventListener("click", function () {
    showForm();
  });

  Saving.addEventListener("click", function () {
    if (confirm('Are you sure you want to Save this Student into the Table?')) {
      hideform();
      formid = document.getElementById("formid");
      one = document.getElementById("namestdu").value,
        two = document.getElementById("age").value,
        three = document.getElementById("address").value,
        four = document.getElementById("degree").value,
        five = document.getElementById("track").value,
        six = document.getElementById("courses").value,

        onestudent = Student(0, one, parseInt(two), three, parseInt(four), five, six);
      console.log(onestudent);

      //  $.post("/students.json", onestudent );
      var dataaa = {

        name: one,
        age: parseInt(two),
        address: three,
        degree: parseInt(four),
        track: five,
        courses: six
      };
      console.log(dataaa);

      //         $.post("http://localhost:3000/student",
      // dataaa,
      // function(data,status){
      //   alert("You add your student");
      // });

      $.ajax({
        url: "http://localhost:3000/student",
        method: "POST",
        dataType: "text",
        data: dataaa,
        success: function (data) {
          console.log("TEst");
          console.log("data", data);
          // alert("You add your student");
          getAllStudent(data);

        },
        error: function (errorMessag) {
          console.log("Error", errorMessag);
        },
      });

      removeDataFromForm();





    } else {

    }


  });




  // SavingEdit.addEventListener("click", function () {
  //   one = document.getElementById("namestdu").value,
  //     two = document.getElementById("age").value,
  //     three = document.getElementById("address").value,
  //     four = document.getElementById("degree").value,
  //     five = document.getElementById("track").value,
  //     six = document.getElementById("courses").value,

  //     onestudent = Student(0, one, parseInt(two), three, parseInt(four), five, six);
  //   console.log(onestudent);

  //   //  $.post("/students.json", onestudent );
  //   var updata = {

  //     name: one,
  //     age: parseInt(two),
  //     address: three,
  //     degree: parseInt(four),
  //     track: five,
  //     courses: six
  //   };


  //   update(element.id, updata);


  // })




});//end




function getAllStudent(e) {


  table = document.getElementById("example");
  e.forEach(element => {
    console.log(e.name);

    var createTr = document.createElement("tr");
    var nameTd = document.createElement("td");
    var ageTd = document.createElement("td");
    var addressTd = document.createElement("td");
    var degreeTd = document.createElement("td");
    var trackTd = document.createElement("td");
    var courseTd = document.createElement("td");
    var deleteTd = document.createElement("td");
    var updateTd = document.createElement("td");



    nameTd.innerText = element.name;
    ageTd.innerText = element.age;
    addressTd.innerText = element.address;
    degreeTd.innerText = element.degree;
    trackTd.innerText = element.track;
    courseTd.innerText = element.courses;
    deleteTd.innerHTML = `<button id="deletee" >Delete</button>`;
    deleteTd.onclick = function () {
      if (confirm('Are you sure you want to Delete this Student into the Table?')) {
        console.log(element.id);
        del(element.id);

      }
    };

    updateTd.innerHTML = `<button id="edit">Edit</button>`;
    updateTd.onclick = function () {
      if (confirm('Are you sure you want to Edit this Student into the Table?')) {
        console.log(element.id);
        showForm();
        namestdu.value = element.name;
        age.value = element.age;
        addressst = address.value;
        degree.index = element.degree;
        track.value = element.track;
        courses.value = element.courses;

        SavingEdit.addEventListener("click", function () {
          
          one = document.getElementById("namestdu").value,
            two = document.getElementById("age").value,
            three = document.getElementById("address").value,
            four = document.getElementById("degree").value,
            five = document.getElementById("track").value,
            six = document.getElementById("courses").value,
      
          
      
          //  $.post("/students.json", onestudent );
           updata = {
      
            name: one,
            age: parseInt(two),
            address: three,
            degree: parseInt(four),
            track: five,
            courses: six
          };
      
      
          update( updata,element.id);
      
      
        })

      }

    }


    createTr.appendChild(nameTd);
    createTr.appendChild(ageTd);
    createTr.appendChild(addressTd);
    createTr.appendChild(degreeTd);
    createTr.appendChild(trackTd);
    createTr.appendChild(courseTd);
    createTr.appendChild(deleteTd);
    createTr.appendChild(updateTd);


    table.appendChild(createTr);






  });


}


// function getStudent(){

//     $.ajax({
//         url: "/students.json",
//         method: "get",
//         success: function (data) {
//           console.log("TEst");
//           console.log(data);
//         // createCharacter(data);
//         return data;

//         },
//         error: function (errorMessag) {
//           console.log(errorMessag);
//         },
//       });
// }

function AddAllStudent(body) {

  $.ajax({
    url: "/students.json",
    method: "post",
    data: body,
    success: function (data) {
      console.log("TEst");
      console.log(data);
      // createCharacter(data);

    },
    error: function (errorMessag) {
      console.log(errorMessag);
    },
  });
}


function del(e) {


  $.ajax({
    url: `http://localhost:3000/student/${e}`,
    method: "delete",
    dataType: "text",

    success: function (data) {
      console.log("TEst");
      console.log("data", data);
      // alert("You add your student");
      getAllStudent(data);

    },
    error: function (errorMessag) {
      console.log("Error", errorMessag);
    },
  });


}
function update(data, id) {


  $.ajax({
    url: `http://localhost:3000/student/${id}`,
    method: "put",
    dataType: "text",
    data: data,

    success: function (data) {
      console.log("TEst");
      console.log("data", data);
      // alert("You add your student");
      getAllStudent(data);

    },
    error: function (errorMessag) {
      console.log("Error", errorMessag);
    },
  });


}

function showForm() {
  tabledata.style.display = "none";
  tabform.style.display = "inline";
}
function hideform() {
  tabform.style.display = "none";
  tabledata.style.display = "inline";
}
function removeDataFromForm() {
  // this fun to remove data on clicking Add New Students button
  namestdu.value = "", age.value = "", address.value = "", degree.value = "", track.value = "", courses.value = "";
}