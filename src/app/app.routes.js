System.register(['./app.boards', './app.dashboard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_boards_1, app_dashboard_1;
    var routes;
    return {
        setters:[
            function (app_boards_1_1) {
                app_boards_1 = app_boards_1_1;
            },
            function (app_dashboard_1_1) {
                app_dashboard_1 = app_dashboard_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: app_boards_1.appboards },
                { path: 'dashboard/:id', component: app_dashboard_1.dashboard }
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map