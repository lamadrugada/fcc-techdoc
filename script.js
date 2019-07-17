document.addEventListener('DOMContentLoaded', function () {

    //MARK.JS
    const SEARCH_INPUT = document.querySelector('#searchinput');
    const SEARCH_BUTTON = document.querySelector('#searchbutton');
    const CONTEXT = document.querySelectorAll('.main-section');
    const INSTANCE = new Mark(CONTEXT);

    let getMarked = () => {
        event.preventDefault();
        INSTANCE.unmark();
        INSTANCE.mark(SEARCH_INPUT.value);
        SEARCH_INPUT.value = "";
    };

    SEARCH_BUTTON.addEventListener('click', getMarked);
    

    //HAMBURGER
    const TOGGLER = document.querySelector('.toggler');
    const NAVIGATION_LIST = document.querySelector('.navList');
    
    let toggleMenu = () => {
        NAVIGATION_LIST.classList.toggle('show');
    }

    TOGGLER.addEventListener('click', toggleMenu);
});