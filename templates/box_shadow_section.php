<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/
?>

<?php color_picker($reemplaza_aqui, 'Color', $new_flipbox); ?>

<div class="modal_front_heading_text_shadow_color">
    <div class="front_heading_text_shadow_blur_tittle_and_responsive">
        <label>Blur</label>
        <div class="final"></div>
    </div>
    <div class="front_heading_text_shadow_blur_slidecontainer">
        <input type="range" min="0" max="100" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_blur_myRange_number']); ?>" class="front_heading_text_shadow_blur_myRange" id="<?php echo esc_attr($reemplaza_aqui); ?>_blur_myRange">
        <input type="number" min="0" max="100" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_blur_myRange_number']); ?>" name="<?php echo esc_attr($reemplaza_aqui); ?>_blur_myRange_number" class="front_heading_text_shadow_blur_myRange_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_blur_myRange_number">
    </div>
</div>
<div class="final"></div>

<div class="modal_front_heading_text_shadow_color">
    <div class="front_heading_text_shadow_blur_tittle_and_responsive">
        <label>Horizontal</label>
        <div class="final"></div>
    </div>
    <div class="front_heading_text_shadow_blur_slidecontainer">
        <input type="range" min="-100" max="100" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_horizontal_myRange_number']); ?>" class="front_heading_text_shadow_horizontal_myRange" id="<?php echo esc_attr($reemplaza_aqui); ?>_horizontal_myRange">
        <input type="number" min="-100" max="100" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_horizontal_myRange_number']); ?>" name="<?php echo esc_attr($reemplaza_aqui); ?>_horizontal_myRange_number" class="front_heading_text_shadow_blur_myRange_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_horizontal_myRange_number">
    </div>
</div>
<div class="final"></div>

<div class="modal_front_heading_text_shadow_color">
    <div class="front_heading_text_shadow_blur_tittle_and_responsive">
        <label>Vertical</label>
        <div class="final"></div>
    </div>
    <div class="front_heading_text_shadow_blur_slidecontainer">
        <input type="range" min="-100" max="100" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_vertical_myRange_number']); ?>" class="front_heading_text_shadow_horizontal_myRange" id="<?php echo esc_attr($reemplaza_aqui); ?>_vertical_myRange">
        <input type="number" min="-100" max="100" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_vertical_myRange_number']); ?>" name="<?php echo esc_attr($reemplaza_aqui); ?>_vertical_myRange_number" class="front_heading_text_shadow_blur_myRange_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_vertical_myRange_number">
    </div>
</div>
<div class="final"></div>