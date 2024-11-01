<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

?>

<div class="front_heading_line_height_tittle_and_responsive">
    <label><?php echo esc_attr($label); ?></label>
    <span id="<?php echo esc_attr($reemplaza_aqui); ?>_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
    <span id="<?php echo esc_attr($reemplaza_aqui); ?>_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
    <span id="<?php echo esc_attr($reemplaza_aqui); ?>_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
</div>
<div class="front_heading_line_height_slidecontainer">
    <input type="range" min="" max="" value="0" class="front_heading_line_height_barslider" id="<?php echo esc_attr($reemplaza_aqui); ?>_myRange">
    <div class=front_heading_line_height_bar_slider_output>
        <div id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px" class="front_heading_line_height_selector_px">
            <label id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px_px" class="front_heading_line_height_selector_px_px">px</label>
            <?php if ($no_mostrar != '%') {?> <label id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px_porciento" class="front_heading_line_height_selector_px_porciento">%</label> <?php } ?> 
            <label id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px_em" class="front_heading_line_height_selector_px_em">em</label>
        </div>
        <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_value_compu']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_value_compu" name="<?php echo esc_attr($reemplaza_aqui); ?>_value_compu">
        <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_value_ipad']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_value_ipad" name="<?php echo esc_attr($reemplaza_aqui); ?>_value_ipad">
        <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_value_phone']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_value_phone" name="<?php echo esc_attr($reemplaza_aqui); ?>_value_phone">
        <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_type_of_selector']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_type_of_selector" name="<?php echo esc_attr($reemplaza_aqui); ?>_type_of_selector">
        <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_max_value']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_max_value" name="<?php echo esc_attr($reemplaza_aqui); ?>_max_value">
        <input type="number" min="" max="" value="0" name="<?php echo esc_attr($reemplaza_aqui); ?>_barslider_number" class="front_heading_line_height_barslider_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_myRange_number">
    </div>
</div>

<div class="final"></div>