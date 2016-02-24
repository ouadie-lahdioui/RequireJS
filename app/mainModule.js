define('mainModule', [
    'jquery',
    'module1'
], function($, module1) {
 
    function initialize() {
        // Initialization stuff
    }

    console.log('init loaded');
 
    console.log(module1.nombre); // 88
    module1.nombre_plus();
    console.log(module1.nombre); // 89
 
    return module1;
});