<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

?>

<?php barra_slider_con_input_number($reemplaza_aqui . '_size', $new_flipbox, 'Size'); ?>

<!-- Width -->
<?php barra_slider_con_input_number($reemplaza_aqui . '_width', $new_flipbox, 'Width'); ?>

<!-- Height -->
<?php barra_slider_con_input_number($reemplaza_aqui . '_height', $new_flipbox, 'Height'); ?>

<!-- Color -->
<?php color_picker($reemplaza_aqui, 'Color', $new_flipbox, $pro); ?>

<!-- Background-Color -->
<?php color_picker($reemplaza_aqui . '_background', 'Background Color', $new_flipbox, $pro); ?>

<!-- Margin -->
<?php input_four_values_section($reemplaza_aqui . '_margin', 'Margin', $new_flipbox); ?>

<!-- Padding -->
<?php input_four_values_section($reemplaza_aqui . '_padding', 'Padding', $new_flipbox); ?>

<!-- Border Section -->
<div class="border_color_front_label_div">
    <label class="color_front_input_label">Border<label>
</div>
<div class="border_color_front_color_input_div">
    <button type="button" name="heading_front_typo" id="<?php echo esc_attr($reemplaza_aqui); ?>_border_button" class="heading_front_typo">
        <span class="dashicons dashicons-admin-tools heading_front_typo_icon "></span>
    </button>
</div>

<div class="final"></div>
<div id="<?php echo esc_attr($reemplaza_aqui); ?>_border_modal_front_typo" class="modal_front_heading_typo">
    <!-- Modal content -->
    <span class="close">&times;</span>
    <?php entire_border_section($reemplaza_aqui, $new_flipbox); ?>
</div>
<div class="final"></div>