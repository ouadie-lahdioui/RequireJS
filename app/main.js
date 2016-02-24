// création des alias/paths
require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min',
        module1: 'module/module1'
    }
});

// chargement du module
require([
	'mainModule' // app/mainModule.js
], function(mainModule) {
    console.log(mainModule.nombre); // 89
});