const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "Doe"]
      },
      age: 32,
      isMale: false,
      address: {
        street: "13/A St Joseph",
        house: 10,
      },
    },
    {
      name: {
        common: "Humayoun",
        fullName: ["Humayoun", "Kabir"]
      },
      age: 33,
      isMale: false,
      address: {
        street: "13/A St Lucia",
        house: 11,
      },
    },
  ]
};


const foundPerson = (persons) => {

  document.getElementById('found-person').innerText = persons.message;
  const personContiner = document.getElementById('person-container');
  for (const person of persons.result) {
    const div = document.createElement('div')
    div.classList.add("col-sm-6");
    div.innerHTML = `
    <div class="card">
      <div class="card-header">
        <p>Person Name : ${person.name.common}<p/>
      </div>
      <div class="card-body">
          <p class="card-text">
            age: ${person.age}
          </p>
          <p class="card-text">
          street: ${person.address.street}, House no: ${person.address.house}
          </p>
          
       </div>
    </div>
    `
    personContiner.appendChild(div)
  }
}
foundPerson(person)