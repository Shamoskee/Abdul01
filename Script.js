function borderImage(x) {
    x.style.border = "2px solid yellow";
} 

angular
.module('photoGalleryModule', [])
.controller('photoGalleryCtrl', function ($scope) {

var photoSource = [
                    [ "image/01.png","image/02.jpg","image/03.jpeg"],
                    [ "image/05.jpeg","image/03.jpeg","image/06.png"],
                    [ "image/08.jpg","image/01.png","image/04.jpeg"],
                    [ "image/07.jpeg","image/8.jpg","image/02.jpg"]                         
               ]; 

 var body = "<table width='100%' height='550'>";

    var row=3;
    var col=3;     
    
     for(var i=0;i<row;i++){

         body += "<tr>";  

        for(var j=0;j<col;j++)
        {
        	
            body +="<td> <img width='100%' height='100px' id='"+i+j+"' src='" + photoSource[i][j] + "'onmouseover=borderImage(this);></td>";
        }
        body += "</tr>";
     }

     body += "</table>";

     console.log(body);

     $("#divPhoto").html(body);

      
    
});
