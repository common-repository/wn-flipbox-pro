<?php

$wn_flipbox_general_options = get_option('WN_Image_Hover');
$wn_flipbox_flipboxes = $wn_flipbox_general_options['flipboxes'];


//Loading Font Awesome
if ($wn_flipbox_general_options['load_font_awesome_selector'] == true) {
?>
    <script src="https://kit.fontawesome.com/02edc19e05.js" crossorigin="anonymous"></script>
<?php
};

include_once plugin_dir_path(__DIR__) . 'templates/insert_flipbox.php';
wn_flipbox_insert_flipbox($shortcode, $wn_flipbox_flipboxes, $wn_flipbox_general_options);

?>

<script>
    var load_google_fonts = <?php if ($wn_flipbox_general_options['load_google_fonts_selector']) echo 'true';
                            else echo 'false'; ?>;

    <?php
    if (function_exists('elementor_load_plugin_textdomain')) {
        include plugin_dir_path(__DIR__) . 'js/templates_selector.js';
    }
    ?>
</script>