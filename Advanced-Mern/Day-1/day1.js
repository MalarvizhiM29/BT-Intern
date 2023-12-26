function save() {
  var data = localStorage.getItem("student");
  var parsedData = JSON.parse(data) || [];

  var student = {
    name: document.getElementById("name").value,
    Age: document.getElementById("age").value,
    Rollno: document.getElementById("roll").value,
  };
  parsedData.push(student);
  localStorage.setItem("student", JSON.stringify(parsedData));
}

const data = localStorage.getItem("student");
var parsedData = JSON.parse(data) || [];

if (parsedData) {
  let element = document.getElementById("details");
  let tableBody = "";

  parsedData.forEach((student) => {
    tableBody += `<tr>
    <td>${student.name}</td>
    <td>${student.Age}</td>
    <td>${student.Rollno}</td>
    </tr>`;
  });

  element.innerHTML = tableBody;
}

function filterme() {
  var studetails = JSON.parse(localStorage.getItem("student"));
  const filteredstudents = studetails.filter((student) => student.Age > 18);
  console.log(filteredstudents);
}

// function findTopper(){
//   var studetails = localStorage.getItem("student")?JSON.pa;
// }
