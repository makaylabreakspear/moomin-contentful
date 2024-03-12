var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');
document.getElementById("menu-toggle").addEventListener("click", function (){
  document.getElementById ("menu").classList.toggle("active");
});
console.log(id);

var client = contentful.createClient({
    space: 'fdt9412ua609',
    accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
  });


  var product = document.getElementById('product');
  client.getEntry(id).then(function (entry) {
    console.log(entry);

    

    var imgDiv = document.createElement('div');
    imgDiv.classList.add('img-div2');
    console.log(entry.fields.mainImage.fields.file.url);
    var mainImage = document.createElement('img');
    mainImage.src = entry.fields.mainImage.fields.file.url;
    imgDiv.append(mainImage);
    product.appendChild(imgDiv);

    var entryDiv = document.createElement('div');
    entryDiv.classList.add('entry-div2');
    var name = document.createElement('h2');
    name.innerHTML = entry.fields.name;
    entryDiv.appendChild(name);
       //  putting everything in the div in the html
product.appendChild(entryDiv);
    var description = document.createElement('p');
    description.innerHTML = entry.fields.description;
    entryDiv.appendChild(description);
      //  creating the link
var link = document.createElement('a');
link.innerHTML = "link to " + entry.fields.name;
link.href = entry.fields.link
entryDiv.appendChild(link);


       //  putting everything in the div in the html
product.appendChild(entryDiv);
var galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');
    entry.fields.gallery.forEach(function(image){
        var img = document.createElement('img');
        img.src = image.fields.file.url;
        galleryDiv.appendChild(img);
    });
    product.appendChild(galleryDiv);


  });
