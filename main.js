   /** function color() {
	let chapter_one = document.getElementById("chapter_one");
	chapter_one.style.backgroundColor="red";
	}
        color();

    function color_two() {
	let chapter_two = document.getElementById("chapter_two");
	chapter_two.style.backgroundColor="green";
	}
        color_two();**/

const color = function(){
  let items = document.querySelectorAll('section');
  for (let i = 0; i < items.length; i++){
      let randomNum = ((1<<24)*Math.random() | 0).toString(16);
    items[i].style.background = "#" + randomNum;
  }
}
color();