<?php

/**
 * @package WN Flipbox Pro
 */
/*
/*
*/

?>

<style>
    #wpcontent {
        display: none;
    }
</style>

<script>
    jQuery(document).ready(function($) {

        jQuery('#wn_flipbox_pro_header').insertAfter('#screen-meta');
        jQuery('#wpcontent').css({
            'display': 'block'
        });
    });
</script>



<?php



if (!get_option('WN_Image_Hover')) {

    $general_options = array('myprefix_image_id' => '90', 'containers' => array());
    $general_options['containers'] = array();
    $general_options['returning_from_new'] = false;
    $general_options['flipboxes'] = null;
    $general_options['pro'] = false;
    $general_options['load_google_fonts_selector'] = true;
    $general_options['load_font_awesome_selector'] = true;
    $general_options['product_key'] = '';
    $general_options['last_flipbox_saved'] = '';
    add_option('WN_Image_Hover', $general_options);
} else {
    $general_options = get_option('WN_Image_Hover');
};

if (!empty($general_options['flipboxes'])) $flipboxes = $general_options['flipboxes'];

?>

<script>
    var new_flipbox = [];
</script>

<?php include_once plugin_dir_path(__DIR__) . 'templates/header.php'; ?>

<div class="wrap" style="">

    <?php include_once plugin_dir_path(__DIR__) . 'templates/notification.php'; ?>

    <div class="content_table">
        <table class="flipboxes_table">
            <tr>
                <th>
                    <label>ID</label>
                </th>
                <th>
                    <label>Names</label>
                </th>
                <th>
                    <label>Shortcodes</label>
                </th>
                <th>
                    <label>Edit</label>
                </th>
            </tr>
            <?php if (isset($flipboxes)) foreach ($flipboxes as $flipbox) { ?>
                <tr>
                    <td>
                        <label><?php echo esc_attr($flipbox['shortcode']); ?></label>
                    </td>
                    <td>
                        <label><?php echo esc_attr($flipbox['flipbox_name']); ?></label>
                    </td>

                    <td>
                        <input type="text" name="content_shortcode" id="content_shortcode" class="content_shortcode" value='[wn-flipbox id="<?php echo esc_attr($flipbox['shortcode']); ?>"]'>
                    </td>
                    <td>
                        <form class="content_form" action="<?php echo esc_url(admin_url('admin.php?page=main_page')); ?>" method="POST">
                            <input type="hidden" name="content_shortcode" value="<?php echo esc_attr($flipbox['shortcode']); ?>">
                            <input type="submit" class="content_button_edit" name="content_button_edit" value="Edit">
                        </form>

                        <form class="content_form" action="<?php echo esc_url(admin_url('admin.php?page=wn_save_handler')); ?>" method="POST">
                            <input type="hidden" name="content_shortcode" value="<?php echo esc_attr($flipbox['shortcode']); ?>">

                            <input type="submit" class="content_button_delete" name="content_button_delete" value="Delete">
                        </form>

                        <form class="content_form" action="<?php echo esc_url(admin_url('admin.php?page=main_page')); ?>" method="POST">
                            <input type="hidden" name="content_shortcode" value="<?php echo esc_attr($flipbox['shortcode']); ?>">

                            <input type="submit" class="content_button_clone" name="content_button_clone" value="Clone">
                        </form>
                    </td>
                </tr>
            <?php }; ?>
        </table>


    </div>

    <form name="" id="add_new_image_hover_form" method="POST" action="<?php echo esc_url(admin_url('admin.php?page=templates_selector')); ?>">
        <div id="add_new_image_hover" class="add_new_image_hover">
            <div class="border_interior">
                <!-- <input type="hidden" id="new_flip_box" name="new_flip_box">       -->
                <svg style="margin-left:auto; margin-right:auto; display:block" id="Capa_1" enable-background="new 0 0 515.556 515.556" viewBox="0 0 515.556 515.556" width="20%" xmlns="http://www.w3.org/2000/svg">
                    <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm128.889 290h-96.667v96.667h-64.444v-96.667h-96.667v-64.444h96.667v-96.667h64.444v96.667h96.667z" /></svg>
                <label>Add New</label>
            </div>
        </div>
    </form>

</div>


<script>
    jQuery("#wn_flipbox_pro_header").insertAfter("#screen-meta");
    jQuery('#wpbody').css({'display' : 'block'});
</script>