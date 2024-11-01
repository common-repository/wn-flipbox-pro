<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/
?>

<div class="front_heading_text_shadow">
    <div class="border_color_front_label_div">
        <label class="color_front_input_label"><?php echo esc_attr($label_name); ?><label>
    </div>
    <div class="border_color_front_color_input_div">
        <div class="contenedor_del_boton">
            <button type="button" name="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow" class="heading_front_text_shadow">
                <span class="dashicons dashicons-admin-tools heading_front_text_shadow_icon "></span>
            </button>
            <div id="<?php echo esc_attr($reemplaza_aqui); ?>_modal_text_shadow" class="modal_front_heading_text_shadow">
                <!-- Modal content -->
                <span class="close">&times;</span>

                <div class="modal_front_heading_text_shadow_color">
                    <div class="front_heading_color_label_div">
                        <label class="color_front_input_label">Color<label>
                    </div>
                    <div class="front_heading_color_color_input_div">
                        <input style="display: none;" type="color" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_color_input" class="front_heading_color_color_input">
                        <input type="button" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_color_shower" class="front_heading_color_color_shower">
                        <input type="text" name="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_color_input_hex" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_color_input_hex" class="front_heading_color_color_input_hex" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_color_input_hex']); ?>">
                    </div>
                    <div class="final"></div>
                </div>

                <div class="final"> </div>

                <div class="modal_front_heading_text_shadow_color">
                    <div class="front_heading_text_shadow_blur_tittle_and_responsive">
                        <label>Blur</label>
                        <div class="final"></div>
                    </div>
                    <div class="front_heading_text_shadow_blur_slidecontainer">
                        <input type="range" min="<?php echo esc_attr($min_blur); ?>" max="<?php echo esc_attr($max_blur); ?><label>" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_blur_barslider_number']); ?>" class="front_heading_text_shadow_blur_myRange" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_blur_myRange">
                        <input type="number" min="<?php echo esc_attr($min_blur); ?>" max="<?php echo esc_attr($max_blur); ?>" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_blur_barslider_number']); ?>" name="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_blur_barslider_number" class="front_heading_text_shadow_blur_myRange_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_blur_myRange_number">
                    </div>
                </div>

                <div class="modal_front_heading_text_shadow_color">
                    <div class="front_heading_text_shadow_horizontal_tittle_and_responsive">
                        <label>Horizontal</label>
                        <div class="final"></div>
                    </div>
                    <div class="front_heading_text_shadow_horizontal_slidecontainer">
                        <input type="range" min="<?php echo esc_attr($min_hor); ?>" max="<?php echo esc_attr($max_hor); ?>" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_horizontal_barslider_number']); ?>" class="front_heading_text_shadow_horizontal_myRange" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_horizontal_myRange">
                        <input type="number" min="<?php echo esc_attr($min_hor); ?>" max="<?php echo esc_attr($max_hor); ?>" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_horizontal_barslider_number']); ?>" name="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_horizontal_barslider_number" class="front_heading_text_shadow_horizontal_myRange_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_horizontal_myRange_number">
                    </div>
                </div>

                <div class="modal_front_heading_text_shadow_color">
                    <div class="front_heading_text_shadow_vertical_tittle_and_responsive">
                        <label>Vertical</label>
                        <div class="final"></div>
                    </div>
                    <div class="front_heading_text_shadow_vertical_slidecontainer">
                        <input type="range" min="<?php echo esc_attr($min_vert); ?>" max="<?php echo esc_attr($max_vert); ?>" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_vertical_barslider_number']); ?>" class="front_heading_text_shadow_vertical_myRange" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_vertical_myRange">
                        <input type="number" min="<?php echo esc_attr($min_vert); ?>" max="<?php echo esc_attr($max_vert); ?>" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_text_shadow_vertical_barslider_number']); ?>" name="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_vertical_barslider_number" class="front_heading_text_shadow_vertical_myRange_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_shadow_vertical_myRange_number">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="final"></div>
</div>