var btnSidebar =document.getElementById('sidebarManage');
var sideBar = document.getElementById('sidebar');
var navbarLink = sideBar.getElementsByClassName('navbar-link');
var slideRight = document.getElementsByClassName('btn-circle-right')[0];
var slideLeft = document.getElementsByClassName('btn-circle-left')[0];
var main = document.querySelector('main');
var cardBody = document.getElementsByClassName('card-body');


// Toggle and pass focus to sidebar onclick menu button
btnSidebar.addEventListener("click", function() {

	// Toggle sidebar
	sideBar.classList.toggle('active');

	// change expand status
	if (btnSidebar.getAttribute("aria-expanded") == "false") {
		btnSidebar.setAttribute('aria-expanded', true);
	} else {
		btnSidebar.setAttribute('aria-expanded', false);
	}

	// Move focus to sidebar without scrolling
	var x = window.scrollX;
	var y = window.scrollY;
	sideBar.focus();
	window.scrollTo(x, y);

});


// Make hidden card action button focasable
function checkTabPress(e) {
	var currentElement;

	e = e || event;

	if(e.keyCode == 9 && e.shiftKey) {
		currentElement = document.activeElement;
		focusCardBody(currentElement);
	} else if (e.keyCode == 9) {
		currentElement = document.activeElement;
		focusVertMenuBtn(currentElement);
	}
}
function focusCardBody(currentElement) {
	for (var i = 0; i < cardBody.length; ++i) {
		var btn = cardBody[i].getElementsByClassName('btn')[0];

		if (currentElement == btn) {
			cardBody[i].focus();
		}
	}	
}		
function focusVertMenuBtn(currentElement) {
	for (var i = 0; i < cardBody.length; ++i) {
		var btn = cardBody[i].getElementsByClassName('btn')[0];

		if (currentElement == cardBody[i]) {
			btn.focus();	
			btn.style.visibility = "visible";
		} else {
			btn.style.visibility = "hidden";
		}
		if (currentElement == btn) {
			btn.style.visibility = "visible";
		}
	}
}
main.addEventListener('keyup', checkTabPress);


// Change styling of side navbar link on click
sideBar.addEventListener("click", function(e) {
	for(var i = 0; i < navbarLink.length; ++i) {
		if (e.target.parentElement == navbarLink[i] || e.target == navbarLink[i]) {
			navbarLink[i].classList.add('active');
		} else {
			navbarLink[i].classList.remove('active');
		}
	}
});


// Sliding video list left-right
slideRight.addEventListener("click", function() {
	slideRight.style.visibility = "hidden";
	slideLeft.style.visibility  = "visible";
});
slideLeft.addEventListener("click", function() {
	slideLeft.style.visibility = "hidden";
	slideRight.style.visibility  = "visible";
});