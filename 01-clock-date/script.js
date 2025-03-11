const time = document.getElementById('time')
const date = document.getElementById('date')

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

function clock(){
      const newDate = new Date();
      const hours = newDate.getHours();
      const newHours = (hours > 12) ? (hours % 12).toString().padStart(2,0) : hours.toString().padStart(2,0);
      const minutes = newDate.getMinutes().toString().padStart(2,0);;
      const seconds = newDate.getSeconds().toString().padStart(2,0);;
      const ampm = (hours>12)?'PM':'AM'
      
      time.innerText = `${newHours}:${minutes}:${seconds} ${ampm}`
      date.innerText = newDate.toLocaleDateString(undefined, options)
}

setInterval(clock,1000)

clock()