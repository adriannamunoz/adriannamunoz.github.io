// To top button
mybutton = document.getElementById("myBtn");

// When scrolled down 20px from top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
 } else {
     mybutton.style.display = "none";
   }
 }

 // When clicked, scroll to top of document
 mybutton.addEventListener("click", backToTop);

 function backToTop() {
    document.body.scollTop = 0;
    document.documentElement.scrollTop = 0;
 }


 
	var tablinks = document.getElementsByClassName("tab-links");
	var tabcontents = document.getElementsByClassName("tab-contents");

		function opentab(tabname){
			for(tablink of tablinks){
				tablink.classList.remove("active-link");
			}
			for(tabcontent of tabcontents){
				tabcontent.classList.remove("active-tab");
			}
			event.currentTarget.classList.add("active-link");
			document.getElementById(tabname).classList.add("active-tab");
		}



		
		var sidemenu = document.getElementById("sidemenu");

		function openmenu(){
			sidemenu.style.right = "0";
		}
		function closemenu(){
			sidemenu.style.right = "-200px";
		}

	

		const scriptURL = '<https://script.google.com/macros/s/AKfycbyU_c6-wJ4UIIeC8aQ72lqwBFeFw8fQBRjC_kzdGIX0PyqcUCv0lE57yUYApTU6gShTig/exec>'
		const form = document.forms['submit-to-google-sheet']
		const msg = document.getElementById("msg")
	  
		form.addEventListener('submit', e => {
		  e.preventDefault()
		  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
			.then(response => {
				msg.innerHTML = "Message sent successfully"
				setTimeout(function(){
					msg.innerHTML = ""
				},5000)
				form.reset()
			})
			.catch(error => console.error('Error!', error.message))
		})
