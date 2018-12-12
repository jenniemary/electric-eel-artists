
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


$(document).ready(function() {
    $(".slides").responsiveSlides();

    $('.timer').startTimer({
        classNames: {
            hours: 'myClass-hours',
            minutes: 'myClass-minutes',
            seconds: 'myClass-seconds',
            clearDiv: 'myClass-clearDiv',
            timeout: 'myClass-timeout'
        }
    });

    $('#myBtn').on('click', function() {
        topFunction();
    });
});
