
function placeDrinkOrder() {
  const drink = document.getElementById("drinkSelection").value;
  const size = document.getElementById("drinkSize").value;
  const orderResult = document.getElementById("orderResult");
  let orderMessage;

  switch (drink) {
    case "cola":
      orderMessage = `You have ordered a ${size} Cola.`;
      break;
    case "lemon":
      orderMessage = `You have ordered a ${size} Lemonade.`;
      break;
    case "orange":
      orderMessage = `You have ordered a ${size} Orangeade.`;
      break;
    default:
      orderMessage = `Please select a valid drink option.`;
  }

  orderResult.textContent = orderMessage;
}

function placeMainCourseOrder() {
  const mainCourse = document.getElementById("mainCourseSelection").value;
  const side1 = document.getElementById("side1Selection").value;
  const side2 = document.getElementById("side2Selection").value;
  const orderResult = document.getElementById("orderResult2");
  let orderMessage;

switch (mainCourse) {
  case "burger":
    orderMessage = `You have ordered a ${mainCourse} with ${side1} and ${side2}.`;
    break;
  case "pizza":
    orderMessage = `You have ordered a ${mainCourse} with ${side1} and ${side2}.`;
    break;
  case "chicken":
    orderMessage = `You have ordered a ${mainCourse} with ${side1} and ${side2}.`;
    break;
  case "pasta":
    orderMessage = `You have ordered a ${mainCourse} with ${side1} and ${side2}.`;
    break;
 case "fingers":
    orderMessage = `You have ordered a ${mainCourse} with ${side1} and ${side2}.`;
    break;
  default:
    orderMessage = `Please select a valid main course option.`;
}

    orderResult.textContent = orderMessage;
}

function placeDessertOrder() {
    const dessert = document.getElementById("dessertSelection").value;
    const dessertside = document.getElementById("dessertSideSelection").value;
    const orderResult = document.getElementById("orderResult3");
    let orderMessage;

    switch (dessert) {
        case "iceCream":
          orderMessage = `You have ordered a ${dessert} with ${dessertside}.`;
          break;
        case "ChocolateCake":
          orderMessage = `You have ordered a ${dessert} with ${dessertside}.`;
          break;
        case "cheesecake":
          orderMessage = `You have ordered a ${dessert} with ${dessertside}.`;
          break;
        case "cookie":
          orderMessage = `You have ordered a ${dessert} with ${dessertside}.`;
          break;
        default:
          orderMessage = `Please select a valid dessert option.`; // Updated default message
      }
    orderResult3.textContent = orderMessage;
  }
  

const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', saveOrder);
function saveOrder() {
  const drink = document.getElementById('orderResult').textContent;
  const mainCourse = document.getElementById('orderResult2').textContent;
  const dessert = document.getElementById('orderResult3').textContent;

  const order = {
    drink,
    mainCourse,
    dessert
  };

  localStorage.setItem('order', JSON.stringify(order));

  alert('Order saved successfully!');
}