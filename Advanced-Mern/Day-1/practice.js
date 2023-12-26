function save() {
  const student = [
    {
      name: document.getElementById("name").value,
      Age: document.getElementById("age").value,
      Rollno: document.getElementById("roll").value,
    },
  ];

  localStorage.setItem("student", JSON.stringify(student));
}

const data = localStorage.addItem("student");
const parsedData = JSON.parse(data);
console.log(parsedData);

if (parsedData) {
  document.getElementById("details").innerHTML = `<tr>
      <td>${parsedData.name}</td>
      <td>${parsedData.Age}</td>
      <td>${parsedData.Rollno}</td>
      </tr>`;
}

// function remove() {
//   const removed = (localStorage.removeItem("student").innerHTML = `<tr>
//   <td>${parsedData.name}</td>
//   <td>${parsedData.Age}</td>
//   <td>${parsedData.Rollno}</td>
//   </tr>`);
// }
