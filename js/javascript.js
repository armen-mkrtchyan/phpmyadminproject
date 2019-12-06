/*$(document).ready(function() {
    $('.mdb-select').materialSelect();
    $('.select-wrapper.md-form.md-outline input.select-dropdown').bind('focus blur', function () {
        $(this).closest('.select-outline').find('label').toggleClass('active');
        $(this).closest('.select-outline').find('.caret').toggleClass('active');
    });
});*/
/*$(document).ready(function(){
    var count = 0
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".minus_plus").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    $(".collapse-parent").on('click', function(){
        if (count%2 == 0){
            $(this).find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }
        else{
            $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
            $(".collapse").on('hide.bs.collapse', function(){
                console.log($(this))
                $(this).find(".fa").removeClass("fa-minus").addClass("fa-plus");
                $(this).find(".collapse").removeClass("show")
            });
        }
        count++
    });
});*/


var data = [
    {
        name:'Databases',
        src:'img/dat.png',
    },
    {
        name:'SQL',
        src:'img/sql.png',
    },
    {
        name:'User accounts',
        src:'img/user.png',
    },
    {
        name:'Export',
        src:'img/exp.png',
    },
    {
        name:'Import',
        src:'img/imp.png',
    },
    {
        name:'Variables',
        src:'img/var.png',
    },
    {
        name:'Setings',
        src:'img/set.png',
    },
    {
        name:'Replication',
        src:'img/rep.png',
    },
];

// <div class="a1 border-right"> <img src="img/dat.png" alt="dat" class="dat"> <a class="navbar-brand " href="#">Databases</a></div>

var nav = document.getElementById("nav");
window.addEventListener('load', function(){
    for (var i = 0;i < data.length;i++){
        var div =document.createElement('div');
        div.setAttribute('class','a' + i + 1 + ' border-right');


        var img =document.createElement('img');
        img.setAttribute("src",`${data[i].src}`);
        img.setAttribute("alt","dat");
        img.setAttribute("class","dat");
        div.appendChild(img);

       var links= document.createElement("a");
       links.setAttribute("class", "navbar-brand");
       links.setAttribute("href", "#");
       links.setAttribute("onclick","Func1(3);");
       links.innerHTML = `${data[i].name}`;
       div.appendChild(links);
       nav.appendChild(div);
	   

	   
    };
});

var acc = document.getElementsByClassName("accordion");
var i;
var plus = document.getElementsByClassName("fa-plus");

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){

        this.classList.toggle("active");
        console.log(this);
        $(this>i).hide();
        $(this).find('i').toggleClass('fa-minus');

        var ul = this.nextElementSibling;

        if (ul.style.display === "block") {
            ul.style.display = "none";
            //    $("").show();
        } else {
            ul.style.display = "block";



        }
    }
}





function Func1(arg){
    let container = document.getElementById("content1")
    if(arg === 0){

        container.innerHTML = `<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">user_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`
    }

    if(arg === 1){

        document.getElementById("content1").innerHTML =`<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">u_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Maqwerk</td>
      <td>Otqweto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>`
    }
    if(arg === 2){
        document.getElementById("content1").innerHTML=`            <div class="container-fluid remove" id="content1" >
                <div class="row">
                    <div class="col-7" id="rem">
                        <div class="General">
                            <div class="sec1">
                                <p>General setings</p>
                            </div>
                            <img src="img/char.png" alt="char" class="char">
                            <a href="#" class="Chnge">Change password</a>

                            <div class="sec2">

                                <img src="img/ser.png" alt="ser" class="ser">
                                <p class="p1">Server connection collaction</p>
                                <div class="row">
                                    <div class="col-md-6 select-outline">

                                        <select class="mdb-select md-form md-outline colorful-select dropdown-primary">
                                            <option value="" disabled selected>utf8mb4_unicode_ci</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="app">
                            <div class="sec3">
                                <p>Appreance settings</p>
                            </div>
                            <img src="img/lang.png" alt="lang" class="lang">
                            <p class="p2">language</p>
                            <div class="row" style="display:inline-block">
                                <div class="col-md-6 select-outline">

                                    <select class="mdb-select md-form md-outline colorful-select dropdown-primary">
                                        <option value="" disabled selected>English</option>
                                        <option value="1">Armenian</option>
                                        <option value="2">Russian</option>
                                        <option value="3">Georgia</option>
                                    </select>


                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <div class="leftlinks">
                                <div class="sec4">
                            <h3>Database Server</h3>
                                </div>
                            <div>
                                <ul class="ul1">
                                    <li>Server:localhost</li>
                                    <li>Server type:</li>
                                    <li>Server version:</li>

                                </ul>
                            </div>
                        </div>
                            <div class="leftlinks2">
                            <div class="sec5">
                            <h3>Web server</h3>
                            <div>
                                <ul class="ul2">
                                    <li>nginx</li>
                                    <li>Databse client</li>
                                    <li>PHP extension</li>

                                </ul>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div class="leftlinks3">
                             <div class="sec6">
                            <h3>phpMyAdmin</h3>
                             </div>
                            <div>
                                <ul class="ul3">
                                    <li>Version information:</li>
                                    <li><a href="#">Documantation</a></li>
                                    <li><a href="#">Official Hompage</a></li>

                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
`
    }
  if(arg === 3){
      document.getElementById("contnet1").innerHTML = `
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
     </ul> `
  }
}
