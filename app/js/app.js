
//initialise carousel flickity
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true
});

//initialise flatpicker
// flatpickr('.calendar-flatpickr', {inline: true});

$("#calendar").kendoCalendar({
    culture: "fr-FR",
    footer: false
});

var className = "is-active";
var elem = document.querySelector('#menu--main');
var content = document.querySelector('#dropdown-content');
elem.addEventListener('click', function(e) {
    e.preventDefault();
    if (content.classList) {
        content.classList.toggle(className);
    } else {
        var classes = content.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        content.className = classes.join(' ');
    }
});
