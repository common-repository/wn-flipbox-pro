<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

$general_options = get_option('WN_Image_Hover');
include_once plugin_dir_path(__DIR__) . 'templates/header.php';

?>

<style>
    h1 {
        text-align: center;
        font-size: 40px;
        margin-top: 100px;
        font-weight: 600;
        color: #464646;
    }

    h2 {
        text-align: left;
        font-size: 25px;
        font-weight: 600;
        color: #464646;
    }

    .principal {
        display: block;
        background: #c4c4c4;
        padding: 10px;
        margin-right: 20px;
    }

    .chucho_label {
        padding-top: 10px;
        padding-bottom: 0px;
        font-size: 20px;
    }

    p {
        font-style: italic;
    }

    .product_key_input {
        width: 230px;
    }

    .white_space {
        display: block;
        height: 200px;
    }

    .product_activation {
        font-size: 40px;
        margin-left: 15px;
        margin-top: -3px;
        color: green;

    }

    .actvated_message {
        margin-left: 20px;
        font-size: 19px;
    }

    .activate_product_button {
        background-color: #007d60 !important;
        border: none !important;
        transition: 0.4s ease;
    }

    .activate_product_button:hover {
        background-color: #005a45 !important;

    }
</style>


<h1>Settings</h1>
<br>
<h2>External Resources</h2>

<form id="load_external_resources" action="<?php echo admin_url('admin.php?page=wn_save_handler'); ?>" method="POST">

    <label class="chucho_label" for="load_google_fonts_selector">Load Google Fonts</label>
    <label class="switch" style="">
        <input type="checkbox" name="load_google_fonts_selector" id="load_google_fonts_selector" <?php if ($general_options['load_google_fonts_selector']) echo esc_attr('checked'); ?>>
        <span class="chucho round"></span>
    </label>

    <p>To improve the performance of the front end where the flipbox is showed, disable this option if you are not going to use Google Fonts or if your theme loads them by default.</p>
    <br>
    <label class="chucho_label" for="load_font_awesome_selector">Load Font Awesome 6</label>
    <label class="switch" style="">
        <input type="checkbox" name="load_font_awesome_selector" id="load_font_awesome_selector" <?php if ($general_options['load_font_awesome_selector']) echo esc_attr('checked'); ?>>
        <span class="chucho round"></span>
    </label>
    <p>To improve the performance of the front end where the flipbox is showed, disable this option if you are not going to use Icons or if your theme loads them by default.</p>


    <br>
    <br>
    <!--
    <h2>Product Key Activation</h2>

    
        <input type="text" id="product_key_input" name="product_key_input" class="product_key_input" value="<?php echo esc_attr($general_options['product_key']); ?>">
               
        <input type="submit" id="activate_product_button" name="activate_product_button" class="button-primary activate_product_button" value="Activate">
        
        <?php if ($general_options['pro'] == true) { ?>
            <span class="dashicons dashicons-yes product_activation"></span><label class="actvated_message">Succesfully Activated</label>
        <?php }; ?>

        <p>Activate your plugin to use the PRO features and unlimited updates for one year</p>
        -->
    <br>
    <input type="submit" id="activate_product_button" name="activate_product_button" class="button-primary activate_product_button" value="Save">


</form>

<div class="final"></div>

<div class="white_space"></div>




<script>
    var delete_wp_noti = document.getElementsByClassName('notice-info');
    for (var i = 0; i < delete_wp_noti.length; i++) {
        delete_wp_noti[i].style.display = 'none';
    }

    var delete_wp_noti = document.getElementsByClassName('oxi-addons-admin-notifications');
    for (var i = 0; i < delete_wp_noti.length; i++) {
        delete_wp_noti[i].style.display = 'none';
    }

    jQuery('#wn_flipbox_pro_header').insertAfter('#screen-meta');

    jQuery(document).ready(function($) {

        jQuery("#wn_flipbox_pro_header").insertAfter("#screen-meta");
        jQuery('#wpbody').css({'display' : 'block'});

    });
</script>