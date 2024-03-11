var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: 'fdt9412ua609',
    accessToken: 'AOznWQA6p9nTvEus8d_87okFOAfNuTUzj31CTf3jAtM',
  });


  var product = document.getElementById('product');
  client.getEntry(id).then(function (entry) {
    console.log(entry);
    var name = document.createElement('h3');
    name.innerHTML = entry.fields.name;
    product.appendChild(name);

    var galleryDiv = document.createElement('div');
    galleryDiv.classList.add('gallery');
    entry.fields.gallery.forEach(function(image){
        var img = document.createElement('img');
        img.src = image.fields.file.url;
        galleryDiv.appendChild(img);
    });
    product.appendChild(galleryDiv);

  });
