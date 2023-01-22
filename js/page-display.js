
let arr = ['image/main-images/dog1_01.jpg', 'image/main-images/dog1_02.jpg'];
 
let img = document.getElementById("picture");
 
arr.forEach(i=>{img.setAttribute("src", i);
    console.log(img)
});

