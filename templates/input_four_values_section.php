<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

?>

<div class="front_heading_margin_front_div">
    <div class="front_heading_margin_tittle_and_responsive">
        <label><?php echo esc_attr($label); ?></label>
        <span id="<?php echo esc_attr($reemplaza_aqui); ?>_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
        <span id="<?php echo esc_attr($reemplaza_aqui); ?>_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
        <span id="<?php echo esc_attr($reemplaza_aqui); ?>_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
    </div>
    <div class="final"></div>
    <div id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px" class="front_heading_margin_selector_px">
        <label id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px_px" class="front_heading_margin_selector_px_px">px</label>
        <label id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px_porciento" class="front_heading_margin_selector_px_porciento">%</label>
        <label id="<?php echo esc_attr($reemplaza_aqui); ?>_selector_px_em" class="front_heading_margin_selector_px_em">em</label>
    </div>
    <div class="final"></div>
    <div class="front_heading_margin_settings_div">
        <div>
            <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_type_of_selector']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>type_of_selector" name="<?php echo esc_attr($reemplaza_aqui); ?>_type_of_selector">

            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_top_compu']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top_compu" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_right_compu']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right_compu" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_bottom_compu']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom_compu" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_left_compu']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left_compu" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left_compu">

            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_top_ipad']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top_ipad" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_right_ipad']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right_ipad" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_bottom_ipad']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom_ipad" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_left_ipad']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left_ipad" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left_ipad">

            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_top_phone']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top_phone" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_right_phone']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right_phone" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_bottom_phone']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom_phone" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_left_phone']); ?>" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left_phone" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left_phone">


            <input type="number" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top" class="general_settings_front_heading_margin_top" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_top" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_top_compu']); ?>">
            <input type="number" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right" class="general_settings_front_heading_margin_right" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_right" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_right_compu']); ?>">
            <input type="number" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom" class="general_settings_front_heading_margin_bottom" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_bottom" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_bottom_compu']); ?>">
            <input type="number" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left" class="general_settings_front_heading_margin_left" name="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_left" value="<?php echo esc_attr($new_flipbox['general_settings_' . $reemplaza_aqui . '_left_compu']); ?>">


            <button type="button" id="general_settings_<?php echo esc_attr($reemplaza_aqui); ?>_button" class="general_settings_margin_button" name="">
                <span id="<?php echo esc_attr($reemplaza_aqui); ?>_dahsicon_link_icon" class=" dashicons dashicons-admin-links"></span>
                <span id="<?php echo esc_attr($reemplaza_aqui); ?>_dahsicon_brokenlink_icon" class="dashicons_broken_link_itial_status dashicons dashicons-editor-unlink"></span>
            </button>

        </div>
        <div class="general_settings_front_heading_margin_labels">
            <span>Top</span>
            <span>Right</span>
            <span>Bottom</span>
            <span>Left</span>
            <span> </span>
        </div>
    </div>
</div>