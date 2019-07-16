document.addEventListener('DOMContentLoaded', function () {

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
    
});