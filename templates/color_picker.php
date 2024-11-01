<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

?>

<div class="padding_front_div">
    <div class="front_heading_color_label_div">
        <label class="color_front_input_label"><?php echo esc_attr($label_name . ' '); ?> <?php if ($pro == false) echo '<span style="color:red; font-weight:200;">(Pro)</span>'; ?><label>
    </div>
    <div class="front_heading_color_color_input_div">
        <input style="display: none;" type="color" id="<?php echo $reemplaza_aqui; ?>_color_input" class="front_heading_color_color_input">
        <input type="button" id="<?php echo esc_attr($reemplaza_aqui); ?>_color_shower" class="front_heading_color_color_shower">
        <input type="text" name="<?php echo esc_attr($reemplaza_aqui); ?>_color_input_hex" id="<?php echo esc_attr($reemplaza_aqui); ?>_color_input_hex" class="front_heading_color_color_input_hex" value="<?php echo esc_attr($new_flipbox[$reemplaza_aqui . '_color_input_hex']); ?>">
    </div>
    <div class="final"></div>
</div>