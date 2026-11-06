$(function() {
    var header = document.getElementById('header');
    var enlaces = $('#enlaces');
    var btnMenu = $('#btn-menu');
    var icono = $('#btn-menu .menu__icono-menu, #btn-menu .menu__icono');
    var anchoMovil = 1023;

    if (header && typeof Headroom !== 'undefined') {
        new Headroom(header).init();
    }

    function actualizarMenu() {
        var esMovil = $(window).width() <= anchoMovil;

        enlaces.stop(true, true);
        if (esMovil) {
            enlaces.hide().removeClass('activo');
        } else {
            enlaces.show().removeClass('activo');
        }
        btnMenu.attr('aria-expanded', String(!esMovil));
        icono.toggleClass('fa-bars', esMovil);
        icono.toggleClass('fa-times', !esMovil);
    }

    btnMenu.on('click', function(e) {
        e.preventDefault();

        if ($(window).width() > anchoMovil) {
            return;
        }

        var abierto = !enlaces.is(':visible');
        enlaces.stop(true, true).slideToggle(150).toggleClass('activo', abierto);
        btnMenu.attr('aria-expanded', String(abierto));
        icono.toggleClass('fa-bars', !abierto);
        icono.toggleClass('fa-times', abierto);
    });

    $(window).on('resize', actualizarMenu);
    actualizarMenu();
});