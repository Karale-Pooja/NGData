// Local stotage option

var  cname= "SMSMPITR";
 localStorage.setItem('movie', cname );
 var res = localStorage.getItem('movie');
 console.log(res);

// localStorage.removeItem('movie');
// localStorage.clear();

// session storage option
let cllgname = "Gouri-Shankhar Poly-Tech, Satara.";
sessionStorage.setItem('collage-name',cllgname);
let result = sessionStorage.getItem('collage-name');
console.log(result);

