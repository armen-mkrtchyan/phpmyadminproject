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

$.ajax({
    type:'GET',
    url:'json/nav.json',
    dataType:'json',
    success: function(data) {
        console.log(nav_b);

         let nav = document.getElementById("nav");

        for (let i = 0; i < data.nav_b.length; i++) {
            console.log(i)
                let div = document.createElement('div');
                div.setAttribute('class','a' + i + 1 + ' border-right');


                 let img = document.createElement('img');
                 img.setAttribute("src",`${data.nav_b[i].src}`);
                 img.setAttribute("alt","dat");
                 img.setAttribute("class","dat");
                 div.appendChild(img);

                 let links= document.createElement("a");
                 links.setAttribute("class", "navbar-brand");
                 links.setAttribute("href", "#");
                 links.innerHTML = `${data.nav_b[i].name}`;
                 div.appendChild(links);
                    nav.appendChild(div);


    }

     }
});

//
// var data = [
//     {
//         name:'Databases',
//         src:'img/dat.png',
//     },
//     {
//         name:'SQL',
//         src:'img/sql.png',
//     },
//     {
//         name:'User accounts',
//         src:'img/user.png',
//     },
//     {
//         name:'Export',
//         src:'img/exp.png',
//     },
//     {
//         name:'Import',
//         src:'img/imp.png',
//     },
//     {
//         name:'Variables',
//         src:'img/var.png',
//     },
//     {
//         name:'Setings',
//         src:'img/set.png',
//     },
//     {
//         name:'Replication',
//         src:'img/rep.png',
//     },
// ];

// <div class="a1 border-right"> <img src="img/dat.png" alt="dat" class="dat"> <a class="navbar-brand " href="#">Databases</a></div>





var leftBar = [
    {
        segmentName: "New",
        src:'img/new2.png',
        iClass: 'accordion fa fa-plus',
        segmentData : [
            {
                name : "Contact",
                src:'img/new2.png',
                href : "#",

            },
            {
                name : "Users",
                src:'img/new2.png',
                href : "#"
            }
        ]
    },
    {
        segmentName: "DB",
        src:'img/new2.png',
        iClass: 'accordion fa fa-plus',
        segmentData : [
            {
                name : "Contact Us",
                src:'img/new2.png',
                href : "#"
            },
            {
                name : "Order statuses",
                src:'img/new2.png',
                href : "#"
            },
            {
                name : "other",
                src:'img/new2.png',
                href : "#"
            }
        ]
    },
];

let renderStyle = function() {
    let container = document.getElementById("left-bar");
    for (let i = 0; i < leftBar.length; i++) {
        // create <p>
        let p = document.createElement('p');
        p.setAttribute('class', 'accordion');
        // create <img>
        let image = document.createElement('img');
        image.setAttribute('src', leftBar[i].src);
        p.appendChild(image);
        // end create <img>

        // Create i <i class="accordion fa fa-plus" aria-hidden="true">Db</i>
        let icon = document.createElement('i');
        icon.setAttribute('class', leftBar[i].iClass);
        icon.setAttribute('aria-hidden', "true");
        icon.innerHTML = leftBar[i].segmentName;
        icon.setAttribute('style', 'padding-right:100px');
        p.appendChild(icon);
        // End create i

        // Create <ul> class="panel footer-links ul6"
        let list = document.createElement('ul');
        list.setAttribute('class', 'panel footer-links ul6');

        for(let j = 0; j < leftBar[i].segmentData.length; j++) {
            let currentElement = leftBar[i].segmentData[j];
            // create <li> <li><img src="img/new.png"><a href="#" onclick="Func1(0)">Contact</a></li>-->
            let listItem = document.createElement('li');
            // Create list image
            let listImage  = document.createElement('img');
            listImage.setAttribute('src', currentElement.src);
            listItem.appendChild(listImage);
            // End create list image

            // Create a link
            let link = document.createElement('a');
            link.setAttribute('href', currentElement.href);
            link.setAttribute('onclick', `Func1(${j})`);
            link.innerHTML = currentElement.name;
            listItem.appendChild(link);
            // End create link
            // end create </li>

            // Append li to ul
            list.appendChild(listItem);
        }

        p.appendChild(list);
        // End create </ul>
        // End create </p>

        container.appendChild(p);
        container.appendChild(list);

        var acc = document.getElementsByClassName("accordion");
        var k;
        var plus = document.getElementsByClassName("fa-plus");

        for (k = 0; k < acc.length; k++) {
            acc[k].onclick = function(){

                this.classList.toggle("active");

                $(this>k).hide();
                $(this).find('k').toggleClass('fa-minus');

                var ul = this.nextElementSibling;

                if (ul.style.display === "block") {
                    ul.style.display = "none";
                    //    $("").show();
                } else {
                    ul.style.display = "block";
                }
            }
        }
    }
};

window.addEventListener('load',renderStyle);

    // for(var i=0;i<pl.length;i++){
    //     var p = document.createElement('p');
    //     p.setAttribute('class','accordion');
    //     var img = document.createElement('img');
    //     img.setAttribute('src',`${pl[i].src}`);
    //     p.appendChild(img);
    //     var it = document.createElement('i');
    //     it.setAttribute('style','padding-right:100px');
    //     it.setAttribute('class','accordion fa fa-plus');
    //     it.setAttribute('aria-hidden','true');
    //     p.appendChild(it);
    //     var ul1=document.createElement('ul');
    //     ul1.setAttribute('class','panel footer-links ul6');
    //     var li1=document.createElement('li');
    //     ul1.appendChild(li1);
    //     li1.appendChild(img);
    //     var a =document.createElement('a');
    //     a.setAttribute('href','#');
    //     a.setAttribute('onclick','Func1(0)');
    //     a.innerHTML=`${pl[i].name}`;
    //     li1.appendChild(a);
    //
    //
    // }
// })









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

}
