const body = $("body");
let Total_Cost = 0;
$("#div_login").hide();
$(".dropdown").hide();
$(".for_login").hide();
const array = [
  {
    name: "American Design",
    img: "./livingrooms/3.3.jpg.jpg",
  },
];
const array1 = [
  {
    name: "Canadian Design",
    img: "./livingrooms/2.2.jpg.jpg",
  },
];
const array2 = [
  {
    name: "European Design",
    img: "./livingrooms/8.8.jpg.jpg",
  },
];
const text = [
  {
    text_1:
      "Cypress Point Ocean Terrace features a distinctive V-pattern of all-weather woven wicker, aluminum frames in a custom aged iron finish, and contemporary Weatherstone tops that emulate honed limestone.Woven wicker is finished in a rich driftwood gray coloration, offering a sophisticated neutral palette as a foundation for layering striking correlations of performance fabrics. Upholstery configurations offer the flexibility to arrange curved, straight, or circular seating to accommodate even the largest of outdoor living spaces.",
  },
  {
    text_1:
      "The relaxed and casual aesthetic of coastal styling remains the most coveted look in outdoor living today. The Harbor Isle collection from Tommy Bahama features bases with classic turnings and tapered legs, thick cast aluminum tops with intricate woven patterns, and a sophisticated walnut finish.Designs are generous in scale, accommodating today’s larger entertaining spaces. The dry-brushing effect on aluminum surfaces is applied entirely by hand, producing a finish that looks remarkably like wood. Silhouettes feature clean lines and a distinctive basket weave pattern of all-weather wicker, along with extra-plush cushioning. Explore the fresh new look of alfresco living with the signature style of Tommy Bahama.",
  },
  {
    text_1:
      "Alfresco Living is comprised of unique and distinctive accent items that are essential in putting the finishing touches on your outdoor living space. In addition to the iconic Pineapple table, available in two finishes, the collection features novelty pieces that make a statement. Also included in the assortment is our signature Tommy Bahama umbrella, and accessory items like flame guards for fire pits.Just as decorative accessories pull an interior design project together and create impact, Alfresco Living is comprised of accent items that are equally important in putting the finishing touches on your outdoor living space.",
  },
];
const feed_back = [];

const amirican_design = [
  {
    name: "Amirican_Guest room",
    Price: 300,
    Quantity: 0,
    photo: "./American design/1.1.jpg.jpg",
  },
  {
    name: "Amirican_Bedroom",
    Price: 400,
    Quantity: 0,
    photo: "./American design/2.1.jpg.jpg",
  },
  {
    name: "Amirican_living Room",
    Price: 500,
    Quantity: 0,
    photo: "./American design/5.5.jpg.jpg",
  },
];
const canadian_design = [
  {
    name: "Canadian_Guest room",
    Price: 450,
    Quantity1: 0,
    photo: "./canadian desgin/4.1.jpg.jpg",
  },
  {
    name: "Canadian_Bedroom",
    Price: 750,
    Quantity1: 0,
    photo: "./canadian desgin/4.4.jpg.jpg",
  },
  {
    name: "Canadian_living Room",
    Price: 800,
    Quantity1: 0,
    photo: "./canadian desgin/5.1.jpg.jpg",
  },
];
const European_design = [
  {
    name: "European_Guest room",
    Price: 600,
    Quantity2: 0,
    photo: "./European design/3.1.jpg.jpg",
  },
  {
    name: "European_Bedroom",
    Price: 950,
    Quantity2: 0,
    photo: "./European design/2.4.jpg.jpg",
  },
  {
    name: "European_living Room",
    Price: 890,
    Quantity2: 0,
    photo: "./European design/1.0.jpg.jpg",
  },
];

const Show_Cart = [];
const Show_Cart_canadian = [];
const Show_Cart_European = [];

//to add img and button and header from arrays
array.forEach(function (element, index) {
  ////first array
  $("#for_card").append(`<div class='div_card'>
    <h4>${element.name}</h4>
    <img src=${element.img}>
    <button id="array-button" class="Design-Button">Read More</button>
    
    </div>`);
});
array1.forEach(function (elements, index) {
  ////second array
  $("#for_card").append(`<div class='div_card'>
    <h4>${elements.name}</h4>
    <img src=${elements.img}>
    <button id="array1-button1" class="Design-Button">Read More</button>
    
    </div>`);
});
array2.forEach(function (elementd, index) {
  ////third array
  $("#for_card").append(`<div class='div_card'>
    <h4>${elementd.name}</h4>
    <img src=${elementd.img}>
    <button id="array2-button2" class="Design-Button">Read More</button>
    
    </div>`);
});
////// this part for
$("#array-button").click(function () {
  $("#hello").html("");
  $("#textt").html("");
  $("#to_hide").hide();
  $("#textt").append(`<p class="p_about">${text[0].text_1} </p>`);
  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
  </tr></table>`);
  amirican_design.forEach(function (elementw, index) {
    $("#Tbl").append(`<tr><td>${elementw.name}</td>
    <td>${elementw.Price} JOD</td>
    <td>${elementw.Quantity}</td>
    <td><button class="Design-Button1" id="Add" data-prod-id1=${index}>AddToCart</button></td>
    <td><button class="Design-Button1" id="Delt" data-prod-id1=${index}>Delete</button></td>
    <td><img src="${elementw.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});
//this part to work on button add for the fist array **********for add button on first div*****************************************************************

$(document).on("click", "#Add", function () {
  $(".dropdown").show();
  const array_index = amirican_design[$(this).attr("data-prod-id1")];

  array_index.Quantity += 1; //add the 1 to value of quantity

  /////////////////////////////////////////////////////////////// this function to add the value in array show cart of every desgin
  if (Show_Cart[$(this).attr("data-prod-id1")] == undefined) {
    Show_Cart.push({
      namecart: array_index.name,
      pricecart: array_index.Price,
      Quantitycart: array_index.Quantity,
    });
  } else {
    Show_Cart[$(this).attr("data-prod-id1")].Quantitycart += 1;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////

  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
        </tr></table>`); ///add table
  const add = amirican_design.forEach(function (elementw, index) {
    //add element with value to table by using foreach
    $("#Tbl").append(`<tr><td>${elementw.name}</td>
          <td>${elementw.Price} JOD</td>
          <td>${elementw.Quantity}</td>
          <td><button class="Design-Button1" id="Add" data-prod-id1=${index}>AddToCart</button></td>
          <td><button class="Design-Button1" id="Delt" data-prod-id1=${index}>Delete</button></td>
          <td><img src="${elementw.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});

//this part to work on button delete for the first array **********for delete button on first div*****************************************************************

$(document).on("click", "#Delt", function () {
  const array_index = amirican_design[$(this).attr("data-prod-id1")];
  if (array_index.Quantity > 0) {
    array_index.Quantity -= 1;
    ////////////////////////////////////////////////////////////// for delete value from show cart from every desing
    Show_Cart[$(this).attr("data-prod-id1")].Quantitycart -= 1;

    ////////////////////////////////////////////////////////////
  }
  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
        </tr></table>`); ///add table
  amirican_design.forEach(function (elementw, index) {
    //add element with value to table by using foreach
    $("#Tbl").append(`<tr><td>${elementw.name}</td>
          <td>${elementw.Price} JOD</td>
          <td>${elementw.Quantity}</td>
          <td><button class="Design-Button1" id="Add" data-prod-id1=${index}>AddToCart</button></td>
          <td><button class="Design-Button1" id="Delt" data-prod-id1=${index}>Delete</button></td>
          <td><img src="${elementw.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});

//////////////////////////////////////////////////////////////////////////////////////// for the second div(read more and second design)

$("#array1-button1").click(function () {
  $("#hello").html("");
  $("#textt").html("");
  $("#textt").append(`<p class="p_about">${text[1].text_1} </p>`);
  $("#to_hide").hide();
  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
  </tr></table>`);
  canadian_design.forEach(function (elementq, index1) {
    $("#Tbl").append(`<tr><td>${elementq.name}</td>
    <td>${elementq.Price} JOD</td>
    <td>${elementq.Quantity1}</td>
    <td><button class="Design-Button1" id="Add1" data-prod-id2=${index1}>AddToCart</button></td>
    <td><button class="Design-Button1" id="Delt1" data-prod-id2=${index1}>Delete</button></td>
    <td><img src="${elementq.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});
//this part to work on button add for the second array **********for add button on second div*****************************************************************

$(document).on("click", "#Add1", function () {
  $("#hello").html("");
  $(".dropdown").show();
  const array_index1 = canadian_design[$(this).attr("data-prod-id2")];

  array_index1.Quantity1 += 1; //add the 1 to value of quantity
  //////////////////////////////////////////////////////////////////////////////this function to add the value in array show cart canadian_design
  if (Show_Cart_canadian[$(this).attr("data-prod-id2")] === undefined) {
    Show_Cart_canadian.push({
      namecart1: array_index1.name,
      pricecart1: array_index1.Price,
      Quantitycart1: array_index1.Quantity1,
    });
    console.log(Show_Cart_canadian);
  } else {
    Show_Cart_canadian[$(this).attr("data-prod-id2")].Quantitycart1 += 1;
    console.log(Show_Cart_canadian);
    //////////////////////////////////////////////////////////////////////////
  }

  //$("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
          </tr></table>`); ///add table
  const add = canadian_design.forEach(function (elementq, index1) {
    //add element with value to table by using foreach
    $("#Tbl").append(`<tr><td>${elementq.name}</td>
            <td>${elementq.Price} JOD</td>
            <td>${elementq.Quantity1}</td>
            <td><button class="Design-Button1" id="Add1" data-prod-id2=${index1}>AddToCart</button></td>
            <td><button class="Design-Button1" id="Delt1" data-prod-id2=${index1}>Delete</button></td>
            <td><img src="${elementq.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});
//this part to work on button delete for the second array **********for delete button on second div*****************************************************************

$(document).on("click", "#Delt1", function () {
  const array_index1 = canadian_design[$(this).attr("data-prod-id2")];
  if (array_index1.Quantity1 > 0) {
    array_index1.Quantity1 -= 1;
    ////////////////////////////////////////////////////////////////////for delete value from show cart canadian_design
    Show_Cart_canadian[$(this).attr("data-prod-id2")].Quantitycart1 -= 1;
    console.log(Show_Cart_canadian);
    /////////////////////////////////////////////////////////////////
  }
  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
        </tr></table>`); ///add table
  canadian_design.forEach(function (elementq, index1) {
    //add element with value to table by using foreach
    $("#Tbl").append(`<tr><td>${elementq.name}</td>
          <td>${elementq.Price} JOD</td>
          <td>${elementq.Quantity1}</td>
          <td><button class="Design-Button1" id="Add1" data-prod-id2=${index1}>AddToCart</button></td>
          <td><button class="Design-Button1" id="Delt1" data-prod-id2=${index1}>Delete</button></td>
          <td><img src="${elementq.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});

//////////////////////////////////////////////////////////////////////////////////////// for the third div(read more and third design)
$("#array2-button2").click(function () {
  $("#hello").html("");
  $("#textt").html("");
  $("#to_hide").hide();
  $("#textt").append(`<p class="p_about">${text[2].text_1} </p>`);

  $("#hello").append(`<table id="Tbl"><tr>
  <th >Name</th>
  <th>Price</th>
  <th>Quantity</th>
  <th>Add</th>
  <th>Delete</th>
  <th>Photo</th>
  </tr></table>`);
  European_design.forEach(function (elementz, index4) {
    $("#Tbl").append(`<tr><td>${elementz.name}</td>
    <td>${elementz.Price} JOD</td>
    <td>${elementz.Quantity2}</td>
    <td><button class="Design-Button1" id="Add4" data-prod-id3=${index4}>AddToCart</button></td>
    <td><button class="Design-Button1" id="Delt4" data-prod-id3=${index4}>Delete</button></td>
    
    <td><img src="${elementz.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
    console.log(`data-prod-id3=${index4}`);
  });
});
//this part to work on button add for the second array **********for add button on third div*****************************************************************

$(document).on("click", "#Add4", function () {
  console.log($(this).attr("data-prod-id3"));
  $(".dropdown").show();
  const array_index2 = European_design[$(this).attr("data-prod-id3")];
  array_index2.Quantity2 += 1; //add the 1 to value of quantity
  ////////////////////////////////////////////////////////////////////////////this function to add the value in array show cart canadian_design
  if (Show_Cart_European[$(this).attr("data-prod-id3")] === undefined) {
    Show_Cart_European.push({
      namecart2: array_index2.name,
      pricecart2: array_index2.Price,
      Quantitycart2: array_index2.Quantity2,
    });
    console.log(Show_Cart_European);
  } else {
    Show_Cart_European[$(this).attr("data-prod-id3")].Quantitycart2 += 1;
    console.log(Show_Cart_European);
  }
  //////////////////////////////////////////////////////////////////////////////
  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
    <th >Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Add</th>
    <th>Delete</th>
    <th>Photo</th>
      </tr></table>`); ///add table
  const add = European_design.forEach(function (elementz, index4) {
    //add element with value to table by using foreach
    $("#Tbl").append(`<tr><td>${elementz.name}</td>
        <td>${elementz.Price} JOD</td>
        <td>${elementz.Quantity2}</td>
        <td><button class="Design-Button1" id="Add4" data-prod-id3=${index4}>AddToCart</button></td>
        <td><button class="Design-Button1" id="Delt4" data-prod-id3=${index4}>Delete</button></td>
        
        <td><img src="${elementz.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});
//this part to work on button delete for the first array **********for delete button on third div*****************************************************************

$(document).on("click", "#Delt4", function () {
  const array_index2 = European_design[$(this).attr("data-prod-id3")];
  if (array_index2.Quantity2 > 0) {
    array_index2.Quantity2 -= 1;
    ////////////////////////////////////////////////////////////////////for delete value from show cart canadian_design
    Show_Cart_European[$(this).attr("data-prod-id3")].Quantitycart2 -= 1;
    console.log(Show_Cart_European);
  }
  /////////////////////////////////////////////////////////////////////////
  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
        <th >Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Add</th>
        <th>Delete</th>
        <th>Photo</th>
        </tr></table>`); ///add table
  European_design.forEach(function (elementz, index4) {
    //add element with value to table by using foreach
    $("#Tbl").append(`<tr><td>${elementz.name}</td>
          <td>${elementz.Price} JOD</td>
          <td>${elementz.Quantity2}</td>
          <td><button class="Design-Button1" id="Add4" data-prod-id3=${index4}>AddToCart</button></td>
          <td><button class="Design-Button1" id="Delt4" data-prod-id3=${index4}>Delete</button></td>
          <td><img src="${elementz.photo}"style ="width: 90px; height: 90px;"></td><tr>`);
  });
});

//create modal for feedback when click on message button

$("#button_send").click(function () {
  if (
    $("#name").val() === "" &&
    $("#email").val() === "" &&
    $("#message").val() === ""
  ) {
    $("#myModal").style.display = "none";
  } else {
    feed_back.push(
      { name: $("#name").val() },
      { email: $("#email").val() },
      { message: $("#message").val() }
    );
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    $("#modal_text").html(`Hi , ${feed_back[0].name}
  <br/>
  Thanks for reaching out! We just wanted to let you know that we have received your request and will respond to your message ASAP.
  If you have an update such as additional information, please share your updates by hitting reply to <span>SEND MESSAGE</span>
  We’ll be in touch soon!</br>
  <span id="n">customer service Team</span> `);
  let name = $("#name").val();
  let Message = $("#message").val();
  localStorage.setItem("name", name);
  localStorage.setItem("Message", Message );
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  }
 
});
//for click on rigester and login

const x=$("#loIn");
const y=$("#rig");
const z=$("#bunt"); 
 function register() {
  
  x.hide();
  y.show();
  z.css("left","110px");
}
function Log_In() {
  
  x.show();
  y.hide();
  z.css("left","0");
}
$("#log_in").click(function () {
  $(".for_login").show();
  x.show();
  y.hide();
  $("#parlo").html("");
  $("btn_log").html("");
  $("#pareg").html("");
});

//using local storage to save the user name and password

$("#regs").click(function () {
  let Email1 = $("#email1").val();
  let passwored = $("#pass1").val();
  let passworedR = $("#pass2").val();
  if($("#pass1").val()===$("#pass2").val()){
  localStorage.setItem("email", Email1);
  localStorage.setItem("password", passwored);
  localStorage.setItem("passwordR", passworedR);
  $("#email1").val("");
  $("#pass1").val("");
  $("#pass2").val("");
  $(".for_login").hide();
}else{
  $("#pareg").append(`<p>Please Enter the Corect password</p>`)
}
});

$("#log").click(function () {
  
  if($("#Pass").val()===localStorage.getItem("password")&&$("#Em").val()===localStorage.getItem("email")){
    $("#Pass").val("");
    $("#Em").val("");
    
    $(".for_login").hide();
    $("#photo_header p").html("Welcome");
  }else{
    $("#parlo").append(`<p> email or password incorrect </p>`)
  }
  
  
});

///////////////////////////////////////to show the selected from customer
$("#show_1").click(function () {
  let Total_Cost = 0;
  $("#pay").html(""); 
  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Cost</th>
        
        </tr></table>`);

  Show_Cart.forEach(function (show, index_show) {
    Total_Cost = Total_Cost + show.pricecart * show.Quantitycart;
    //add element with value to table by using foreach
    if (show.Quantitycart > 0) {
      //for delete row if Quantitycart equal zero
      $("#Tbl").append(`<tr id="show_tr">
      <td>${show.namecart}</td>
      <td>${show.pricecart} JOD</td>
      <td>${show.Quantitycart}</td>
      <td>${show.pricecart * show.Quantitycart} JOD</td>
      
      </tr>`);
    }
  });
  console.log(Total_Cost);
  $("#Tbl").append(`total cost<td>${Total_Cost} JOD</td>`);
  $("#pay").append(`<button class="Design-Button1"><i style="font-size:20px" class="fa fa-cc-paypal"></i> Pay Pal</button>`)
  
});

////////////////////////////////////////////////////////////////////to show the selected from customer for second desgin
$("#show_2").click(function () {
  let Total_Cost1 = 0;
  $("#pay").html(""); 
  $("#hello").html(""); //remove contint inside div_about"
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
        <th >Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Cost</th>
        </tr></table>`);

  Show_Cart_canadian.forEach(function (show2, index_show1) {
    Total_Cost1 = Total_Cost1 + show2.pricecart1 * show2.Quantitycart1;
    //add element with value to table by using foreach

    if (show2.Quantitycart1 > 0) {
      //for delete row if Quantitycart1 equal zero
      $("#Tbl").append(`<tr id="show2_tr">
          <td>${show2.namecart1}</td>
          <td>${show2.pricecart1} JOD</td>
          <td>${show2.Quantitycart1}</td>
          <td>${show2.pricecart1 * show2.Quantitycart1}</td>
          </tr>`);
    }
  });

  console.log(Total_Cost);
  $("#Tbl").append(`<td>${Total_Cost1} JOD</td>`);
  $("#pay").append(`<button class="Design-Button1"><i style="font-size:20px" class="fa fa-cc-paypal"></i> Pay Pal</button>`)
});
///////////////////////////////////////////////////////////to show the selected from customer for third desgin
$("#show_3").click(function () {
  let Total_Cost2 = 0;
  $("#hello").html(""); //remove contint inside div_about"
  $("#pay").html(""); 
  $("#to_hide").hide(); //hide div(to_hide)
  $("#hello").append(`<table id="Tbl"><tr>
        <th >Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Cost</th>
        </tr></table>`);

  Show_Cart_European.forEach(function (show3, index_show2) {
    Total_Cost2 = Total_Cost2 + show3.pricecart2 * show3.Quantitycart2;
    //add element with value to table by using foreach

    if (show3.Quantitycart2 > 0) {
      //for delete row if Quantitycart2 equal zero
      $("#Tbl").append(`<tr id="show3_tr">
          <td>${show3.namecart2}</td>
          <td>${show3.pricecart2} JOD</td>
          <td>${show3.Quantitycart2}</td>
          <td>${show3.pricecart2 * show3.Quantitycart2}</td>
          </tr>`);
    }
  });
  console.log(Total_Cost2);
  $("#Tbl").append(`<td>${Total_Cost2} JOD</td>`);
  $("#pay").append(`<button class="Design-Button1"><i style="font-size:20px" class="fa fa-cc-paypal"></i> Pay Pal</button>`)
});
