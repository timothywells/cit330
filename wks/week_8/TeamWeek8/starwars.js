const nextBTN = document.querySelector("#next");
const prevBTN = document.querySelector("#previous");
const shipList = document.getElementById("ships");
const messages = document.getElementById("message");

async function displayShips(url) {
  const response = await fetch(`${url}`);
  const data = await response.json();
  console.log("Loading...");
  console.log(data);
  shipList.innerHTML = "";

  buildPages(data.count);

  nextBTN.value = data.next;
  prevBTN.value = data.previous;

  if (data.next == null) {
    nextBTN.classList = "hidden";
  } else {
    nextBTN.classList.remove("hidden");
  }

  if (data.previous == null) {
    prevBTN.classList = "hidden";
  } else {
    prevBTN.classList.remove("hidden");
  }

  data.results.forEach((ship) => {
    let shipName = ship.name;
    let shipItem = document.createElement("li");
    shipItem.className = "deathstar";
    shipItem.value = false;
    shipItem.innerHTML = shipName;
    shipList.appendChild(shipItem);

    shipItem.addEventListener("click", () => displayDetails(shipItem, ship));
  });
}

function displayDetails(shipItem, ship) {
  
  if(shipItem.innerHTML === ship.name){
    shipItem.innerHTML =
      ship.name +
      "<ul> <li>Model: " +
      ship.model +
      "</li> <li>Starship Class: " +
      ship.starship_class +
      "</li> <li> Cost: " +
      ship.cost_in_credits +
      "</li> <li> Length: " +
      ship.length +
      "</li> <li> Crew: " +
      ship.crew +
      "</li> </ul>";
  } else {
    shipItem.innerHTML = ship.name;
  }  
}

function buildPages(count){
  let pagesDiv = document.getElementById('pages');
  pagesDiv.innerHTML = "";
  let pages = parseInt(count/10);
  if (count % 10 != 0){
    pages += 1;
  }
  
  for (let i=1; i <= pages; i++){
    
    let page = document.createElement('button');
    page.innerHTML = "Page " + i;
    page.addEventListener('click', () => displayShips('https://swapi.dev/api/starships/?page=' + i));
    pagesDiv.appendChild(page);
  }


}

function handleError(err) {
  console.log("HELP me Obi-wan Kenobi " + err);
}

nextBTN.addEventListener("click", () => displayShips(nextBTN.value));
prevBTN.addEventListener("click", () => displayShips(prevBTN.value));

displayShips("https://swapi.dev/api/starships/").catch(handleError);
