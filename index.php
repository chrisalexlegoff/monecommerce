<?php
require('./inc/init.inc.php');
// Notre accueil
require('./inc/haut.inc.php');
?>
<h2>Notre page d'acceuil</h2>

<img src="<?php echo RACINE_SITE; ?>inc/img/test-image.jpg" alt="test image">

<p>Coincée entre le haut et le bas!</p>
<?php
Récupérer la valeur de la variable
echo getenv('NOM_VARIABLE');
echo '<br>ou<br>';
echo $_ENV['NOM_VARIABLE'];
echo $_ENV['TEST'] . "\n";
require('./inc/bas.inc.php');
