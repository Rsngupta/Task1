//  let btn = document.getElementById("btn");
//  console.log('hello ')

//  function getData() {
//      console.log("Button Clicked")
fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
    return data.json()
}).then((objectData) => {
    console.log(objectData[0].id);
    let tableData = "";
    //  data.forEach(element => {
    //  console.log("ID:", element.id)
    //  console.log("Name:", element.name)
    //  console.log("Username:", element.username)
    //  console.log("email:", element.email)
    //  console.log("website:", element.website)
    //  console.log("Phone:", element.phone)
    //  console.log("Adress:", element.address)
    //  console.log(data)
    //  tableData.innerHTML += `
    //      <
    //      div > ID: $ { element.id } < /div> <
    //      div > Name: $ { element.name } < /div> <
    //      div > Username: $ { element.username } < /div> <
    //      div > email: $ { element.email } < /div> <
    //      div > website: $ { element.website } < /div> <
    //      div > Phone: $ { element.phone } < /div>

    //  `
    objectData.map((values) => {
        tableData += ` <tr>
                <td>${values.id}</td>
                <td>${values.name}</td>
                <td>${values.username}</td>
                 <td>${values.phone}</td>
                 <td>${values.website}</td>
                 <td>${values.email}</td>
                 </tr>`;

    });
    document.getElementById("allpost").innerHTML = tableData;
})