window.onscroll = function() {myyFunction()};

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;

function myyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



let icons = document.getElementsByClassName('question-button');
console.log(icons.length);
for (let i = 0; i < icons.length; i++){
	console.log(i);
	let icon = icons[i];

	icon.addEventListener('click', function(event){
		console.log('clicked');
		if (this.parentNode.nextElementSibling.classList.contains('active')){
			this.parentNode.nextElementSibling.classList.remove('active')
		}else{
			this.parentNode.nextElementSibling.classList.add('active')
		}
   });
}