<?php
function flowaddthemesupports(){
	add_theme_support('automatic-feed-links');
}
/* After setup theme runs each time you refresh page and not only on theme activation */
add_action('after_setup_theme', 'flowaddthemesupports');
?>