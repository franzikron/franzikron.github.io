jQuery(function ($) {
    $('.nav-toggler__button').on('click', function (e) {
        e.preventDefault();
        $('.nav--mobile').toggleClass('nav--mobile--active');
    });
});

/*
var language = window.navigator.userLanguage || window.navigator.language;
// Browser-Sprache auslesen
if (language.indexOf('de') !== -1) {
	testsprache = 'de';
} else {
	testsprache = 'en';
}
// Browser-Sprache an den Body anhängen
$('body').attr("id", 'langs-' +testsprache);
// Sprache wechseln (hier mit jquery auf bestimmte Links)
$(".languageswitcher").on('click', function(e){
	e.preventDefault();
$("body").attr( "id", 'langs-' + $(this).attr('langs'));
});
*/
