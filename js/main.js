var priceList = {
  "Personal Pizza": 6,
  "Medium Pizza": 10,
  "Large Pizza": 14,
  "Extra Large Pizza": 16,
  "Extra Cheese": 3,
  "Cheese Stuffed Crust": 3
}

var reciept = {}

$(".btn").click(function () {
  //Get Size and add to reciept object.
  var sizeArray = document.getElementsByClassName("size")
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      reciept[sizeArray[i].value] = priceList[sizeArray[i].value]
    }
  }

  //Get Meats and add to reciept object
  var meatArray = document.getElementsByClassName("meats");
  var freeMeat = false

  for (var i = 0; i < meatArray.length; i++) {
    if (meatArray[i].checked) {
      //first meat free
      if (freeMeat === true) {
        reciept[meatArray[i].value] = 1
      } else {
        reciept[meatArray[i].value] = 0
        freeMeat = true
      }
    }
  }

  //Get Veggies and add to reciept object
  var veggiesArray = document.getElementsByClassName("veggies");
  var freeVeggies = false

  for (var i = 0; i < veggiesArray.length; i++) {
    if (veggiesArray[i].checked) {
      //first veg free
      if (freeVeggies === true) {
        reciept[veggiesArray[i].value] = 1
      } else {
        reciept[veggiesArray[i].value] = 0
        freeVeggies = true
      }
    }
  }

  //Get Cheese and add to reciept object
  var cheeseArray = document.getElementsByClassName("cheese");

  for (var i = 0; i < cheeseArray.length; i++) {
    if (cheeseArray[i].checked) {
      //Extra Cheese is $3
      if (cheeseArray[i].value === "Extra cheese") {
        reciept[cheeseArray[i].value] = 3
      } else {
        reciept[cheeseArray[i].value] = 0
      }
    }
  }

  //Get sauce and add to reciept object
  var sauceArray = document.getElementsByClassName("sauce");

  for (var i = 0; i < sauceArray.length; i++) {
    if (sauceArray[i].checked) {
      reciept[sauceArray[i].value] = 0
    }
  }

  //Get Crust and add to reciept object
  var crustArray = document.getElementsByClassName("crust");

  for (var i = 0; i < crustArray.length; i++) {
    if (crustArray[i].checked) {
      //Cheese Stuffed Crust is $3
      if (crustArray[i].value === "Cheese Stuffed Crust") {
        reciept[crustArray[i].value] = 3
      } else {
        reciept[crustArray[i].value] = 0
      }
    }
  }



  console.log(reciept)
  // Reset
  reciept = {}
  freeMeat = false
  var freeVeggies = false
})