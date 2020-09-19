let Players = [
  {
    name: "MS Dhoni",
    age: 39,
    city: "Ranchi",
    Salary: "18 Crore",
  },

  {
    name: "Suresh Raina",
    age: 33,
    city: "Gaziabad",
    Salary: "16 Crore",
  },

  {
    name: "Kedar Jadhav",
    age: 35,
    city: "Pune",
    Salary: "12 Crore",
  },

  {
    name: "Imran Tahir",
    age: 41,
    city: "Cape Town",
    Salary: "15 Crore",
  },

  {
    name: "Shane Watson",
    age: 39,
    city: "Sydney",
    Salary: "15 Crore",
  },
];

function display(e) {
  let tabledata = "";

  e.forEach(function (player, index) {
    let newtable = `<tr>
        <td>${index + 1}</td>
        <td>${player.name}</td>
        <td>${player.age}</td>
        <td>${player.city}</td>
        <td>${player.Salary}</td>
        <td><button onclick="deleteplayer(${index})">Delete</button></td>
        </tr>`;

    tabledata += newtable;
  });
  document.getElementById("tdata").innerHTML = tabledata;
}
display(Players);

function searchByname() {
  let searchValue = document.getElementById("searchName").value;
  let newdata = Players.filter(function (player) {
    return player.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  display(newdata);
}

function searchBycity() {
  let searchValue = document.getElementById("searchCity").value;
  let newdata = Players.filter(function (player) {
    return player.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  display(newdata);
}

function deleteplayer(index) {
  Players.splice(index, 1);
  display(Players);
}
