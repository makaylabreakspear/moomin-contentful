document.getElementById("menu-toggle").addEventListener("click", function (){
    document.getElementById ("menu").classList.toggle("active");
});





console.log('hello world!');

var client = contentful.createClient({
    space: 'fdt9412ua609',
    accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
  });
  
   var placeForContent = document.getElementById('place-for-content');






  //   client is helper to connect to contentful
//   getEntries is a method to get all entries from contentful
//   entries is an object that contains all the entries
client.getEntries().then(function (entries) {
    console.log(entries);
    // for each entry run the function
    entries.items.forEach(function (entry) {
        //  fields are the fields we named in contentful
        var entryDiv = document.createElement('div');
      entryDiv.classList.add('entry-div');

      if (entry.fields.name) {
        var name = document.createElement('h2');
        name.innerHTML = entry.fields.name;
        entryDiv.appendChild(name);

        
            var description = document.createElement('p');
            description.innerHTML = entry.fields.description;
            entryDiv.appendChild(description);

        var link = document.createElement('a');
        link.innerHTML = "link to " + entry.fields.name;
        link.href = entry.fields.link
        entryDiv.appendChild(link);

        placeForContent.appendChild(entryDiv);
      }
      
    });
  });
  












// // var cars = [{type:"Fiat", model:"500", color:"white"}, 
// //             {type:"Volvo", model:"XC90", color:"black"}]
// // console.log(cars[0]); // to get all info on first car
// // console.log(cars[0].type); // to get type of first car
// // console.log(cars[1].model);

// // cars.forEach (function (car) {
// //     console.log("Car Type is " + car.type);
// // });
// // var students = [
// //   {name:"Greg", grade:"A", subject:"AI", courses:[
// //                                   {name:"web Tech"}, {name:"Logo"}
// //                               ]}, 
// //   {name:"Alice", grade:"B+", subject:"Marketing", courses:[
// //                                   {name:"Biz"}, {name:"AI"}
// //                               ]}
// // ];
//  console.log(students[0].name);

// // students.forEach(function (student){
// //   console.log ("student name is " + student.name);
// //   student.courses.forEach(function (course){
// //       console.log("Course is "+ course.name);
// //   })
// // });
