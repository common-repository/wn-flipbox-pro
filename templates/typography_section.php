<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

?>

<div class="">
    <div class="border_color_front_label_div">
        <label class="color_front_input_label"><?php echo esc_attr($label_name); ?><label>
    </div>
    <div class="border_color_front_color_input_div">
        <button type="button" id="<?php echo esc_attr($reemplaza_aqui); ?>_typo" class="heading_front_typo">
            <span class="dashicons dashicons-admin-tools heading_front_typo_icon "></span>
        </button>
    </div>
    <div class="final"></div>
</div>
<!-- Modal Typography -->
<div id="<?php echo esc_attr($reemplaza_aqui); ?>_modal_typo" class="modal_front_heading_typo">
    <!-- Modal content -->
    <span class="close">&times;</span>
    <div class="modal_front_heading_font_family">
        <label>Font Family</label>

        <div class="dropdown">
            <input type="text" name="<?php echo esc_attr($reemplaza_aqui); ?>_fontfamily_droptext" id="<?php echo esc_attr($reemplaza_aqui); ?>_fontfamily_droptext" class="front_heading_fontfamily_droptext" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_fontfamily_droptext']); ?>">
            <button type="button" name="dropdown_btn" id="<?php echo esc_attr($reemplaza_aqui); ?>_dropdown_btn" class="dropdown_btn">
                <span id="<?php echo esc_attr($reemplaza_aqui); ?>_dropdown_btn_icon" class="dashicons dashicons-arrow-down dropdown_btn_icon"></span>
            </button>

            <div id="<?php echo esc_attr($reemplaza_aqui); ?>_myDropdown" class="dropdown-content">
                <input type="text" placeholder="Search.." id="<?php echo esc_attr($reemplaza_aqui); ?>_myInput" class="myInput">
                <div id="<?php echo esc_attr($reemplaza_aqui); ?>_dropdown_list" class="dropdown_list">
                    <?php foreach ($family_fonts as $font) { ?>
                        <span id="<?php echo esc_attr(str_replace('+', '_', $font)); ?>" class="<?php echo esc_attr($reemplaza_aqui); ?>_families" style="font-family: <?php echo esc_attr(str_replace('+', ' ', $font)); ?>;"><?php echo esc_attr(str_replace('+', ' ', $font)) ?></span>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>



    <!-- Aquiiiiiii -->
    <div class="modal_front_heading_size">
        <div class="front_heading_size_tittle_and_responsive">
            <label>Size</label>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_size_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_size_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_size_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
        </div>
        <div class="front_heading_size_slidecontainer">
            <input type="range" min="1" max="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_max_value']); ?>" value="" class="front_heading_size_barslider" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_myRange">
            <div class=front_heading_size_bar_slider_output>
                <div id="<?php echo esc_attr($reemplaza_aqui); ?>_size_selector_px" class="front_heading_size_selector_px">
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_size_selector_px_px" class="front_heading_size_selector_px_px">px</label>
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_size_selector_px_porciento" class="front_heading_size_selector_px_porciento">%</label>
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_size_selector_px_em" class="front_heading_size_selector_px_em">em</label>
                </div>
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_value_compu']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_value_compu" name="<?php echo esc_attr($reemplaza_aqui); ?>_size_value_compu">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_value_ipad']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_value_ipad" name="<?php echo esc_attr($reemplaza_aqui); ?>_size_value_ipad">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_value_phone']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_value_phone" name="<?php echo esc_attr($reemplaza_aqui); ?>_size_value_phone">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_type_of_selector']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_type_of_selector" name="<?php echo esc_attr($reemplaza_aqui); ?>_size_type_of_selector">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_max_value']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_max_value" name="<?php echo esc_attr($reemplaza_aqui); ?>_size_max_value">
                <input type="number" min="1" max="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_size_max_value']); ?>" value="" name="<?php echo esc_attr($reemplaza_aqui); ?>_size_barslider_number" class="front_heading_size_barslider_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_size_myRange_number">
            </div>
        </div>
    </div>
    <div class="modal_front_heading_font_weight">
        <label>Font Weight</label>
        <select class="front_heading_font_weight" id="<?php echo esc_attr($reemplaza_aqui); ?>_font_weight" name="<?php echo esc_attr($reemplaza_aqui); ?>_font_weight">
            <?php for ($i = 1; $i <= 9; $i++) { ?>
                <option <?php if ($i * 100 == $new_flipbox[$reemplaza_aqui . '_font_weight']) {
                            echo esc_attr('selected="selected"');
                        } ?> value="<?php echo esc_attr($i * 100); ?>"><?php echo esc_attr($i * 100); ?></option>
            <?php } ?>
        </select>
    </div>

    <div class="modal_front_heading_font_transform">
        <label>Transform</label>
        <select class="front_heading_font_transform" id="<?php echo esc_attr($reemplaza_aqui); ?>_font_transform" name="<?php echo esc_attr($reemplaza_aqui); ?>_font_transform">
            <?php
            $font_transfor = ['Default', 'Uppercase', 'Lowercase', 'Capitalize', 'Normal'];
            for ($i = 0; $i < 5; $i++) { ?>
                <option <?php if ($font_transfor[$i] == $new_flipbox[$reemplaza_aqui . '_font_transform']) {
                            echo esc_attr('selected="selected"');
                        } ?> value="<?php echo esc_attr($font_transfor[$i]); ?>"><?php echo esc_attr($font_transfor[$i]); ?></option>
            <?php } ?>
        </select>
    </div>

    <div class="final"> </div>

    <div class="modal_front_heading_font_style">
        <label>Style</label>
        <select class="front_heading_font_style" id="<?php echo esc_attr($reemplaza_aqui); ?>_font_style" name="<?php echo esc_attr($reemplaza_aqui); ?>_font_style">
            <?php
            $font_styles = array('Default', 'Normal', 'Italic', 'Oblique');
            foreach ($font_styles as $font_style) { ?>
                <option <?php if ($font_style == $new_flipbox[$reemplaza_aqui . '_font_style']) {
                            echo esc_attr('selected="selected"');
                        } ?> value="<?php echo esc_attr($font_style); ?>"><?php echo esc_attr($font_style); ?></option>
            <?php } ?>
        </select>
    </div>

    <div class="final"> </div>

    <div class="modal_front_heading_font_decoration">
        <label>Decoration</label>
        <select class="front_heading_font_decoration" id="<?php echo esc_attr($reemplaza_aqui); ?>_font_decoration" name="<?php echo esc_attr($reemplaza_aqui); ?>_font_decoration">
            <?php
            $font_decorations = array('Default', 'Underline', 'Overline', 'Line-Through', 'None');
            foreach ($font_decorations as $font_decoration) { ?>
                <option <?php if ($font_decoration == $new_flipbox[$reemplaza_aqui . '_font_decoration']) {
                            echo esc_attr('selected="selected"');
                        } ?> value="<?php echo esc_attr($font_decoration); ?>"><?php echo esc_attr($font_decoration); ?></option>
            <?php } ?>
        </select>
    </div>

    <div class="final"> </div>

    <div class="modal_front_heading_text_align">
        <label>Text Align</label>
        <select class="front_heading_text_align" id="<?php echo esc_attr($reemplaza_aqui); ?>_text_align" name="<?php echo esc_attr($reemplaza_aqui); ?>_text_align">
            <?php
            $font_decorations = array('Default', 'Left', 'Center', 'Right');
            foreach ($font_decorations as $font_decoration) { ?>
                <option <?php if ($font_decoration == $new_flipbox[$reemplaza_aqui . '_text_align']) {
                            echo esc_attr('selected="selected"');
                        } ?> value="<?php echo esc_attr($font_decoration); ?>"><?php echo esc_attr($font_decoration); ?></option>
            <?php } ?>
        </select>
    </div>

    <div class="final"> </div>

    <div class="modal_front_heading_text_line_height">
        <div class="front_heading_line_height_tittle_and_responsive">
            <label>Line Height</label>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
        </div>
        <div class="front_heading_line_height_slidecontainer">
            <input type="range" min="1" max="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_max_value']); ?>" value="" class="front_heading_line_height_barslider" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_myRange">
            <div class=front_heading_line_height_bar_slider_output>
                <div id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_selector_px" class="front_heading_line_height_selector_px">
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_selector_px_px" class="front_heading_line_height_selector_px_px">px</label>
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_selector_px_porciento" class="front_heading_line_height_selector_px_porciento">%</label>
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_selector_px_em" class="front_heading_line_height_selector_px_em">em</label>
                </div>
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_value_compu']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_value_compu" name="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_value_compu">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_value_ipad']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_value_ipad" name="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_value_ipad">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_value_phone']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_value_phone" name="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_value_phone">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_type_of_selector']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_type_of_selector" name="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_type_of_selector">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_max_value']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_max_value" name="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_max_value">
                <input type="number" min="1" max="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_line_height_max_value']); ?>" value="" name="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_barslider_number" class="front_heading_line_height_barslider_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_line_height_myRange_number">
            </div>
        </div>
    </div>

    <div class="final"> </div>

    <div class="modal_front_heading_text_line_height">
        <div class="front_heading_line_height_tittle_and_responsive">
            <label>Letter Spacing</label>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_responsive_compu" class="dashicons dashicons-desktop dashicons_responsive_selectors compu"></span>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_responsive_ipad" class="dashicons dashicons-tablet dashicons_responsive_selectors ipad"></span>
            <span id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_responsive_phone" class="dashicons dashicons-smartphone dashicons_responsive_selectors phone"></span>
        </div>
        <div class="front_heading_line_height_slidecontainer">
            <input type="range" min="1" max="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_max_value']); ?>" value="" class="front_heading_line_height_barslider" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_myRange">
            <div class=front_heading_line_height_bar_slider_output>
                <div id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_selector_px" class="front_heading_line_height_selector_px">
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_selector_px_px" class="front_heading_line_height_selector_px_px">px</label>
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_selector_px_porciento" class="front_heading_line_height_selector_px_porciento">%</label>
                    <label id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_selector_px_em" class="front_heading_line_height_selector_px_em">em</label>
                </div>
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_value_compu']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_value_compu" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_value_compu">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_value_ipad']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_value_ipad" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_value_ipad">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_value_phone']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_value_phone" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_value_phone">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_type_of_selector']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_type_of_selector" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_type_of_selector">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_max_value']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_max_value" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_max_value">
                <input type="hidden" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_min_value']); ?>" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_min_value" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_min_value">
                <input type="number" min="1" max="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_letter_spacing_max_value']); ?>" value="" name="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_barslider_number" class="front_heading_line_height_barslider_number" id="<?php echo esc_attr($reemplaza_aqui); ?>_letter_spacing_myRange_number">
            </div>
        </div>
    </div>
    <div class="final"> </div>
</div>