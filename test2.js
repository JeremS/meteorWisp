Tinytest.add("global Wisp is defined", function (api){
    api.isTrue(Wisp);
});

Tinytest.add("wisp - Wisp core libraries are loaded", function (api){
    api.isTrue(Wisp.runtime.identity);
});

Tinytest.add("wisp - Wisp global declarations works", function (api){
    api.equal(global, 1);
});

