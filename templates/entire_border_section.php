<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/
?>

<div class="">
    <div class="border_color_front_label_div">
        <label class="color_front_input_label">Style<label>
    </div>
    <div class="border_color_front_color_input_div">
        <?php $border_styles = array('None', 'Solid', 'Dotted', 'Dashed', 'Double', 'Groove', 'Ridge', 'Inset', 'Outset'); ?>
        <select class="border_front_style_selector" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_style_selector" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_style_selector">
            <?php for ($i = 0; $i < count($border_styles); $i++) { ?>
                <option <?php if ($border_styles[$i] == $new_flipbox['border_' . $reemplaza_aqui . '_style_selector']) {
                            echo esc_attr('selected="selected"');
                        } ?> value="<?php echo esc_attr($border_styles[$i]); ?>"><?php echo esc_attr($border_styles[$i]); ?></option>
            <?php } ?>
        </select>
    </div>
    <div class="final"></div>
</div>
<div class="padding_front_div">
    <div class="border_color_front_label_div">
        <label class="color_front_input_label">Color <?php if ($pro == false) echo '<span style="color:red; font-weight:200;">(Pro)</span>'; ?><label>
    </div>
    <div class="border_color_front_color_input_div">
        <input style="display: none;" type="color" id="border_color_<?php echo esc_attr($reemplaza_aqui); ?>_color_input" name="border_color_<?php echo esc_attr($reemplaza_aqui); ?>_color_input" class="border_color_front_color_input">
        <input type="button" id="border_color_<?php echo esc_attr($reemplaza_aqui); ?>_color_shower" class="border_color_front_color_shower">
        <input type="text" name="border_color_<?php echo esc_attr($reemplaza_aqui); ?>_color_input_hex" id="border_color_<?php echo esc_attr($reemplaza_aqui); ?>_color_input_hex" class="border_color_front_color_input_hex" value="<?php echo esc_attr($new_flipbox['border_color_' . $reemplaza_aqui . '_color_input_hex']); ?>">
    </div>
    <div class="final">
    </div>
</div>
<div class="padding_front_div">
    <div class="border_front_thickness_tittle_and_responsive">
        <label>Width</label>
        <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
        <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
        <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
    </div>
    <div class="border_front_thickness_slidecontainer">
        <input type="range" min="0" max="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_max_value']); ?>" value="" class="border_front_thickness_barslider" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_myRange">
        <div class=border_front_thickness_bar_slider_output>
            <div id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_selector_px" class="border_front_thickness_selector_px">
                <label id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_selector_px_px" class="border_front_thickness_selector_px_px">px</label>
                <!-- <label id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_selector_px_porciento" class="border_front_thickness_selector_px_porciento">%</label> -->
                <label id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_selector_px_em" class="border_front_thickness_selector_px_em">em</label>
            </div>
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_value_compu']); ?>" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_value_compu" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_value_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_value_ipad']); ?>" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_value_ipad" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_value_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_value_phone']); ?>" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_value_phone" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_value_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_type_of_selector']); ?>" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_type_of_selector" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_type_of_selector">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_max_value']); ?>" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_max_value" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_max_value">
            <input type="number" min="0" max="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_thickness_max_value']); ?>" value="" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_barslider_number" class="border_front_thickness_barslider_number" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_thickness_myRange_number">
        </div>
    </div>
</div>
<div class="padding_front_div_width">
    <div class="border_front_radius_tittle_and_responsive">
        <label>Radius</label>
        <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
        <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
        <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
    </div>
    <div id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_selector_px" class="border_front_radius_selector_px">
        <label id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_selector_px_px" class="border_front_radius_selector_px_px">px</label>
        <label id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_selector_px_porciento" class="border_front_radius_selector_px_porciento">%</label>
        <label id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_selector_px_em" class="border_front_radius_selector_px_em">em</label>
    </div>
    <div class="padding_settings_div">
        <div>
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['border_' . $reemplaza_aqui . '_radius_type_of_selector']); ?>" id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_type_of_selector" name="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_type_of_selector">

            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_top_compu']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top_compu" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_right_compu']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right_compu" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_bottom_compu']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom_compu" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom_compu">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_left_compu']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left_compu" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left_compu">

            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_top_ipad']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top_ipad" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_right_ipad']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right_ipad" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_bottom_ipad']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom_ipad" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom_ipad">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_left_ipad']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left_ipad" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left_ipad">

            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_top_phone']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top_phone" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_right_phone']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right_phone" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_bottom_phone']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom_phone" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom_phone">
            <input type="hidden" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_left_phone']); ?>" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left_phone" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left_phone">

            <input type="number" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top" class="general_settings_border_front_radius_top" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_top" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_top_compu']); ?>">
            <input type="number" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right" class="general_settings_border_front_radius_right" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_right" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_right_compu']); ?>">
            <input type="number" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom" class="general_settings_border_front_radius_bottom" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_bottom" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_bottom_compu']); ?>">
            <input type="number" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left" class="general_settings_border_front_radius_left" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_left" value="<?php echo esc_attr($new_flipbox['general_settings_border_' . $reemplaza_aqui . '_radius_left_compu']); ?>">

            <button type="button" id="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_button" class="general_settings_border_front_radius_button" name="general_settings_border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_button">
                <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_dahsicon_link_icon" class="dashicons dashicons-admin-links"></span>
                <span id="border_<?php echo esc_attr($reemplaza_aqui); ?>_radius_dahsicon_brokenlink_icon" class="dashicons_broken_link_itial_status dashicons dashicons-editor-unlink"></span>
            </button>
        </div>
        <div class="general_settings_border_front_radius_labels">
            <span>Top</span>
            <span>Right</span>
            <span>Bottom</span>
            <span>Left</span>
            <span> </span>
        </div>
    </div>
</div>

<div class="final"></div>