var app = app || {};

$(function() {
    var levels = new app.LevelsList();

    for(var i = 1; i <= 15; i++) {
        levels.add({
            level_number: i,
        });
    }

    new app.LevelsView(levels);
});
