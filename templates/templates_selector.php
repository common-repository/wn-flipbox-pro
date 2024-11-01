<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/
$general_options = get_option('WN_Image_Hover');
$fileName = "layouts.txt";
$pluginDirectory = plugin_dir_path(__FILE__);
$filePath = $pluginDirectory . $fileName;
$layouts = json_decode(file_get_contents($filePath), true);

$flipboxes = $layouts;




?>

<style>
      
    #wpbody {
        display: none;
    }


    h1 {
        text-align: center;
        font-size: 40px !important;
        font-weight: 600 !important;
        color: #464646;
    }

    .general {
        margin-top: 30px;
        margin-right: 20px;
        display: block;
        padding: 0px;
    }

    .estilos {
        display: block;
        background-color: #e8e9ea;
        padding: 5px;
        padding-top: 5px;
        margin: 0px;
        margin-bottom: 0px;
        border-radius: 7px;
        box-shadow: 1px 1px 4px gray;
        margin-bottom: 65px;
        padding-top: 15px;
    }

    .contenedor {
        display: block;
        box-sizing: border-box;
        padding: 21px;
        margin: 0px;
        width: calc(100% / 3);
        float: left;
        padding: 5px;
        text-align: center;
    }

    .final {
        clear: both;
    }

    .boton_selector {
        all: unset;
        width: 120px;
        background-color: #007d60;
        padding: 24px 7px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 15px;
        padding: 7px;
        border-radius: 36px;
        color: white;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 10px;
        transition: .4s ease;
    }

    .boton_selector:hover {
        background-color: #005a45;
        cursor: pointer;
    }

    .boton_selector label {
        color: white;
        font-weight: 600;
    }

    .empty_layout_button {
        all: unset;
        width: 120px;
        background-color: #0f924a;
        padding: 8px 10px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        margin-top: 15px;
        border-radius: 36px;
        color: white;
        font-weight: 700;
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .empty_layout_button:hover {
        background-color: #0d7b3e;
        cursor: pointer;
    }

    .sub_heading {
        text-align: center;
        font-size: 17px;
    }

    .fs-type-plugin {
        display: none !important;
    }

</style>



<?php include_once plugin_dir_path(__DIR__) . 'templates/header.php';

//Loading Font Awesome
if ($general_options['load_font_awesome_selector'] == true) {
?>
    <script src="https://kit.fontawesome.com/02edc19e05.js" crossorigin="anonymous"></script>
<?php
};



?>



<div class="wrap">
    <?php include_once plugin_dir_path(__DIR__) . 'templates/notification.php'; 
    include_once plugin_dir_path(__DIR__) . 'templates/insert_flipbox.php';
    ?>

    <h1>Create New Flipbox</h1>
    <p class="sub_heading">Select either a layout from below or start with an empty one to create your flipbox.</p>

    <div id="wn_flipbox_general_content" class="general">


        <form name="add_new_image_hover_form" id="empty" method="POST" action="<?php echo esc_url(admin_url('admin.php?page=main_page')); ?>">
            <input type="hidden" id="new_flip_box" name="new_flip_box">
            <input id="empty_layout_model" type="submit" class="boton_selector" value="EMPTY LAYOUT">
        </form>



        <?php $cont = 0; ?>
        <?php for ($i = 0; $i < ceil(count($flipboxes) / 3); $i++) { ?>

            <div class="estilos">

                <?php for ($n = 0; $n < 3; $n++) { ?>

                    <?php if (array_key_exists($cont, $flipboxes)) { ?>
                        <div class="contenedor">

                            <?php wn_flipbox_insert_flipbox($cont, $flipboxes, $general_options); ?>

                            <form class="content_form" action="<?php echo esc_url(admin_url('admin.php?page=main_page')); ?>" method="POST">
                                <input type="hidden" name="content_shortcode" value="<?php echo esc_attr($flipboxes[$cont]['shortcode']); ?>">
                                <input type="submit" class="boton_selector" name="content_button_edit_layouts" value="SELECT">
                            </form>
                        </div>
                    <?php }; ?>

                <?php $cont++;
                }; ?>

                <div class="final"></div>

            </div>

        <?php }; ?>       

    </div>
</div>

<?php

?>


<script>
    var load_google_fonts = <?php if ($general_options['load_google_fonts_selector']) echo 'true';
    else echo 'false'; ?>;

    var flipboxes = <?php echo json_encode($flipboxes); ?>;
    var flipbox_to_show = <?php echo json_encode(['all' => 'all']); ?>;

    jQuery("#wn_flipbox_pro_header").insertAfter("#screen-meta");
    jQuery('#wpbody').css({'display' : 'block'});
</script>