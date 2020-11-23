  // Quake View handler
export default class QuakesView {

    renderQuakeList(quakeList, listElement) {
      //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
      listElement.innerHTML = "";

      quakeList.features.forEach(element => {
         const something = document.createElement('li');
         something.setAttribute("data-id", element.id);
         something.innerHTML = `${changeStupidDate(new Date(element.properties.time))} : ${element.properties.title}`;
         listElement.appendChild(something);

      });

      //listElement.innerHTML = quakeList.features.map(quake => {
      //  return `${quake.properties.title}, ${new Date(quake.properties.time)}`;}).join('');
    }

    renderQuake(quake, element) {
      document.getElementById("back").classList.remove('hidden');
      const quakeProperties = Object.entries(quake.properties);
      console.log("Quake Properties");
      console.log(quakeProperties);
      // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier!
      element.innerHTML = `<p>${changeStupidDate(new Date(quake.properties.time))} : ${quake.properties.title}</p>` + quakeProperties
      .map(item => {
        if (item[0] === 'time' || item[0] === 'updated') {
          return `<p>${item[0]}: ${new Date(item[1])}</p>`;
        } else return `<p>${item[0]}: ${item[1]}</p>`;
      })
      .join('');
    }

}


function changeStupidDate(date){
   const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
   let hour = date.getHours();
   let AmPm = 'AM';
   if (hour > 12){
      hour = hour - 12;
      AmPm = 'PM';
   } else if (hour == 0){
      hour = 12;
      AmPm = 'AM';
   }

   let someDate = `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} - ${hour}:${date.getMinutes()} ${AmPm}`;

   return someDate;
}
