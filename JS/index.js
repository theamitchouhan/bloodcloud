
   $(function() {
    $(document).scroll(function() {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


const signIn = document.querySelector('#signIn');
const signUp = document.querySelector('#signUp');
const overlay_container = document.querySelector('.container .overlay-container');
const overlay = document.querySelector(' .container .overlay-container .overlay');

signUp.addEventListener('click', ()=> {
    container.classList.add("right-panel-active");
});

signIn.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});  