var app = app || {};

$(function() {
    var logos = new app.LogosList();
    logos.add({
        'image': './img/logosincompletos/catar.gif',
    });
    logos.add({
        'image': './img/logosincompletos/nestle.gif',
    });
    logos.add({
        'image': './img/logosincompletos/enne.gif',
    });
    logos.add({
        'image': './img/logosincompletos/imgeve.gif',
    });
    logos.add({
        'image': './img/logosincompletos/latino.gif',
    });
    logos.add({
        'image': './img/logosincompletos/mitsu.gif',
    });
    logos.add({
        'image': './img/logosincompletos/oso.gif',
    });
    logos.add({
        'image': './img/logosincompletos/savoy.gif',
    });
    logos.add({
        'image': './img/logosincompletos/adidas.png',
    });
    logos.add({
        'image': './img/logosincompletos/alimentos-polar.png',
    });
    logos.add({
        'image': './img/logosincompletos/banesco.png',
    });
    logos.add({
        'image': './img/logosincompletos/lucky.png',
    });
    logos.add({
        'image': './img/logosincompletos/marlboro.png',
    });
    logos.add({
        'image': './img/logosincompletos/makro.png',
    });
    logos.add({
        'image': './img/logosincompletos/netuno.png',
    });
    logos.add({
        'image': './img/logosincompletos/televen.png',
    });
    logos.add({
        'image': './img/logosincompletos/tves.png',
    });
    logos.add({
        'image': './img/logosincompletos/red-bull.png',
    });
    logos.add({
        'image': './img/logosincompletos/pdvsa.png',
    });
    logos.add({
        'image': './img/logosincompletos/fiat.png',
    });
    logos.add({
        'image': './img/logosincompletos/tiorico.png',
    });
    new app.LogosView({level: 1, logos: logos});
});
