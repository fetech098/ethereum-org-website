<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>www.internet-start.net.</title>
</head>
<body>
    <h1 id="header">Esto es JavaScript</h1>

    <script>
        document.body.appendChild(document.createTextNode('Hola Mundo!'));
    
        var h1 = document.getElementById('header'); // contiene la referencia al tag <h1>
        h1 = document.getElementsByTagName('h1')[0]; // accediendo al mismo elemento <h1>
    </script>

    <noscript>Tu navegador no admite JavaScript, o JavaScript está deshabilitado.</noscript>
</body>
</html>
