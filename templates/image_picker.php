<?php

?>

<div class="front_title">
    <label><?php echo $label; ?></label>
</div>
<div class=image_parent>
    <image id="<?php echo $reemplaza_aqui; ?>_image_picker_id_preview" src="<?php echo $default_url; ?>" alt="" class="thumbnailimage">
        <input type="button" id="<?php echo $reemplaza_aqui; ?>_image_picker_media_manager" class="preview_imagen_button" value="<?php echo $button_value; ?>">
        <div id="#cortina" class="cortina">
            <div class="delelte_image_button">
                <span class="dashicons-trash dashicons"></span>
            </div>
        </div>
    </image>
    <input type="hidden" name="<?php echo $reemplaza_aqui; ?>_image_picker_id" id="<?php echo $reemplaza_aqui; ?>_image_picker_id" value="<?php echo $new_flipbox[$reemplaza_aqui . '_image_id']; ?>" class="regular-text" />
</div>
