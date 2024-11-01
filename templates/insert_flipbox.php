<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

global $wn_flipboxes_to_show;
$wn_flipboxes_to_show = [];

?>

<style>
    .wn_flipbox_containers_parent {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .wn_flipbox_container {
        display: none;
        position: relative;
        perspective: 1000px;
    }

    .wn_flipbox_container * {
        word-wrap: normal;
        font-size: 16px;
        line-height: 1px;
        letter-spacing: 1px;
        margin: 0px;
        padding: 0px;
    }

    .wn_flipbox_container_inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transform-style: preserve-3d;
    }

    .wn_flipbox_front_preview_image {
        position: relative;
        transform-style: preserve-3d;
        background-repeat: no-repeat;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .wn_flipbox_icon_div_container i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .wn_flipbox_icon_div_container {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .wn_flipbox_front_heading_description {
        
        display: block;
        font-size: 30px;
        color: red;
        text-align: center;
    }

    .wn_flipbox_front_heading_text {
        all:unset;
        display: block;
        font-size: 40px;
        font-weight: 100;
        line-height: 40px;
        text-shadow: none;
        padding: 0px;
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    .wn_flipbox_back_heading_text {
        display: block;
        font-size: 40px;
        font-weight: 100;
        line-height: 40px;
        text-shadow: none;
        padding: 0px;
        text-align: center;        
    }

    .wn_flipbox_back_description_text {
        display: block;
        font-size: 30px;
        color: red;
        text-align: center;
    }

    .wn_flipbox_overlay {
        display: block;
        position: absolute;
        transform-style: preserve-3d;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    .wn_flipbox_back_info {
        display: block;
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translate(0%, -50%);
        backface-visibility: hidden;
    }

    .wn_flipbox_back_preview_image {
        position: relative;
        display: block;
        transform-style: preserve-3d;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        backface-visibility: hidden;
    }


    .wn_flipbox_back_section_button_text {
        display: block;
        transition: color 0.4s ease;
    }

    .wn_flipbox_back_section_button_text:hover {
        cursor: pointer;
    }


    .wn_flipbox_back_section_button {
        position: absolute;
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        outline: 1px solid transparent;
        transition: transform 0.2s ease, background-color 0.3s ease, color 0.4s ease,
            box-shadow 0.3s ease, opacity 2s ease;
    }

    .wn_flipbox_back_section_button:hover {
        cursor: pointer;
    }

    .wn_flipbox_front_info {
        display: block;
        position: absolute;
        width: 100%;
        top: 50%;  
        height: 10px;
        transform: translateY(-50%);
        backface-visibility: hidden;
    }

    .wn_flipbox_front_image_overlay, .wn_flipbox_back_image_overlay {
        display: block;
        position: absolute;
        transform: translate(-50%, -50%);  
        outline: 1px solid transparent; 
        top: 50%; 
        left: 50%;  
        z-index: -1;
    }
</style>

<?php function wn_flipbox_insert_flipbox($shortcode, $flipboxes, $general_options)
{

    $new_flipbox = $flipboxes[$shortcode];

    $containers = $new_flipbox['containers'];

    global $wn_flipboxes_to_show;
    $wn_flipboxes_to_show[$new_flipbox['shortcode']] = $new_flipbox['shortcode'];

    $shortcode = $shortcode;



?>


    <div class="wn_flipbox_containers_parent">
        <?php foreach ($containers as $container) { ?>

            <div id="container_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_container">

                <div id="container_inner_<?php echo esc_attr($new_flipbox['shortcode'] . '_' .  $container['container_index']); ?>" class="wn_flipbox_container_inner">

                    <div id="preview_image_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_front_preview_image">
                        <div id="front_info_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_front_info">
                            <img id="front_image_overlay_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_front_image_overlay" src="">
                           
                            <div id="icon_div_container_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_icon_div_container">
                                <i id="icon_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="<?php echo esc_attr($container['front_heading_droptext_icons']); ?>"></i>
                            </div>
                            <label id="front_heading_text_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_front_heading_text"><?php echo esc_attr($container['image_title']); ?></label>
                            <br>
                            <label id="front_heading_description_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_front_heading_description"><?php echo esc_attr($container['image_description']); ?><label>
                        </div>
                    </div>

                    <div id="overlay_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_overlay">
                        <div id="back_preview_image_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_preview_image">
                            
                            <div id="back_info_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_info">
                            <img id="back_image_overlay_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_image_overlay" src="">
                                <div>
                                    <label id="back_heading_text_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_heading_text"><?php echo esc_attr($container['image_back_title']); ?></label>
                                    <br>
                                    <label id="back_description_text_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_description_text"><?php echo esc_attr($container['image_back_description']); ?></label>
                                </div>
                                <a rel="<?php echo esc_attr($container['nofollow_selector']); ?>" referrerpolicy="<?php echo esc_attr($container['noreferrer_selector']); ?>" href="<?php echo esc_attr($container['image_link']); ?>" target="<?php echo esc_attr($container['open_new_window_selector']); ?>">
                                    <div id="back_section_button_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_section_button">
                                        <label id="back_section_button_text_<?php echo esc_attr($new_flipbox['shortcode'] . '_' . $container['container_index']); ?>" class="wn_flipbox_back_section_button_text"><?php echo esc_attr($container['back_button_title']); ?></label>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>

    <script>
        var flipboxes = <?php echo json_encode($flipboxes); ?>;
        // console.log('hola');
        var flipbox_to_show = <?php echo json_encode($wn_flipboxes_to_show); ?>;
    </script>



<?php }; ?>