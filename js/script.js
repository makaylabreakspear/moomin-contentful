//   menu button
document.getElementById("menu-toggle").addEventListener("click", function (){
    document.getElementById ("menu").classList.toggle("active");
});





console.log('hello world!');
//   connecting the contentful
var client = contentful.createClient({
    space: 'fdt9412ua609',
    accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
  });
  
   var placeForContent = document.getElementById('place-for-content');





//  getting all entries
  //   client is helper to connect to contentful
//   getEntries is a method to get all entries from contentful
//   entries is an object that contains all the entries
client.getEntries({content_type: 'moominBooks',}).then(function (entries) {
    console.log(entries);
    // for each entry run the function
    
    entries.items.forEach(function (entry) {
        //  fields are the fields we named in contentful
        //  naming the div section 
        var entryDiv = document.createElement('div');
      entryDiv.classList.add('entry-div');
      //  img div
      var imgDiv = document.createElement('div');
      imgDiv.classList.add('img-div');
      console.log(entry.fields.mainImage.fields.file.url);
      var mainImage = document.createElement('img');
      mainImage.src = entry.fields.mainImage.fields.file.url;
      imgDiv.append(mainImage);

      placeForContent.appendChild(imgDiv);
      
         //  creating the h2s
      if (entry.fields.name) {
        var name = document.createElement('h2');
        name.innerHTML = entry.fields.name;
        entryDiv.appendChild(name);

        //  creating the body text
            var description = document.createElement('p');
            description.innerHTML = entry.fields.description;
            entryDiv.appendChild(description);
              //  creating the link
        var link = document.createElement('a');
        link.innerHTML = "link to " + entry.fields.name;
        link.href = entry.fields.link
        entryDiv.appendChild(link);
               //  putting everything in the div in the html
        placeForContent.appendChild(entryDiv);


      }
    });
  });
  client.getEntries().then(function (entries) {
    console.log(entries);
    // for each entry run the function
    entries.items.forEach(function (entry) {
        //  fields are the fields we named in contentful
      if (entry.fields.name) {
        console.log("entry name: " + entry.fields.name);
        console.log("entry link: " + entry.fields.link);
        console.log("entry image url: " + entry.fields.mainImage.fields.file.url);
      }
    });
  });
