<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/

$general_options = get_option('WN_Image_Hover');

$return_to = 'main_page';

if ($general_options['pro'] == true) {
    $pro = true;
}
else {
    $pro = false;
}



function tiene_valor($value)
{
    switch ($value) {
        case '0px':
            return false;
            break;
        case 'px':
            return false;
            break;
        case '0em':
            return false;
            break;
        case '0%':
            return false;
            break;
        case 0:
            return false;
            break;
        case '':
            return false;
            break;
        default:
            return true;
    }
}

if (isset($_POST['general_settings_submit']) || isset($_POST['save_tamplate_button']) || isset($_POST['save_tamplate_button_empty'])) {

    $general_options = get_option('WN_Image_Hover');


    $flipboxes = $general_options['flipboxes'];
    $new_flipbox = $flipboxes[sanitize_text_field($_POST['flipbox_shortcode_submit'])];

    function input_four_values_section_handler($reemplaza_aqui, $new_flipbox)
    {
        $valores_a_tratar = [
            $reemplaza_aqui . '_type_of_selector',

            'general_settings_' . $reemplaza_aqui . '_top_compu',
            'general_settings_' . $reemplaza_aqui . '_right_compu',
            'general_settings_' . $reemplaza_aqui . '_bottom_compu',
            'general_settings_' . $reemplaza_aqui . '_left_compu',

            'general_settings_' . $reemplaza_aqui . '_top_ipad',
            'general_settings_' . $reemplaza_aqui . '_right_ipad',
            'general_settings_' . $reemplaza_aqui . '_bottom_ipad',
            'general_settings_' . $reemplaza_aqui . '_left_ipad',

            'general_settings_' . $reemplaza_aqui . '_top_phone',
            'general_settings_' . $reemplaza_aqui . '_right_phone',
            'general_settings_' . $reemplaza_aqui . '_bottom_phone',
            'general_settings_' . $reemplaza_aqui . '_left_phone',
        ];

        foreach ($valores_a_tratar as $valor) {

            if (isset($_POST[$valor])) {
                if (!tiene_valor($_POST[$valor]) && strpos($valor, '_type_of_selector') == false) $new_flipbox[$valor] = '';
                else $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
            }
        };
        return $new_flipbox;
    };

    function typography_section_handler($reemplaza_aqui, $new_flipbox)
    {
        $valores_a_tratar = [
            $reemplaza_aqui . '_fontfamily_droptext',
            $reemplaza_aqui . '_size_value_compu',
            $reemplaza_aqui . '_size_value_ipad',
            $reemplaza_aqui . '_size_value_phone',
            $reemplaza_aqui . '_size_type_of_selector',
            $reemplaza_aqui . '_size_max_value',
            $reemplaza_aqui . '_size_min_value',

            $reemplaza_aqui . '_font_weight',
            $reemplaza_aqui . '_font_transform',
            $reemplaza_aqui . '_font_style',
            $reemplaza_aqui . '_font_decoration',
            $reemplaza_aqui . '_text_align',

            $reemplaza_aqui . '_line_height_value_compu',
            $reemplaza_aqui . '_line_height_value_ipad',
            $reemplaza_aqui . '_line_height_value_phone',
            $reemplaza_aqui . '_line_height_type_of_selector',
            $reemplaza_aqui . '_line_height_max_value',
            $reemplaza_aqui . '_line_height_min_value',

            $reemplaza_aqui . '_letter_spacing_value_compu',
            $reemplaza_aqui . '_letter_spacing_value_ipad',
            $reemplaza_aqui . '_letter_spacing_value_phone',
            $reemplaza_aqui . '_letter_spacing_type_of_selector',
            $reemplaza_aqui . '_letter_spacing_max_value',
            $reemplaza_aqui . '_letter_spacing_min_value',
        ];

        foreach ($valores_a_tratar as $valor) {
            if (isset($_POST[$valor])) $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
        };
        return $new_flipbox;
    };

    function text_shadow_section_handler($reemplaza_aqui, $new_flipbox)
    {
        $valores_a_tratar = [
            $reemplaza_aqui . '_text_shadow_color_input_hex',
            $reemplaza_aqui . '_text_shadow_blur_barslider_number',
            $reemplaza_aqui . '_text_shadow_horizontal_barslider_number',
            $reemplaza_aqui . '_text_shadow_vertical_barslider_number'
        ];

        foreach ($valores_a_tratar as $valor) {
            if (isset($_POST[$valor])) {
                if (!tiene_valor($_POST[$valor]) && strpos($valor, '_text_shadow_color_input_hex') == false) $new_flipbox[$valor] = '';
                else $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
            }
        };
        return $new_flipbox;
    };


    /////////////////////////Entire-Text-Section////////////////////////
    function entire_text_section_handler($reemplaza_aqui, $new_flipbox, $pro = true)
    {
        /////////////////////Typography Section///////////////////////////
        $new_flipbox = typography_section_handler($reemplaza_aqui, $new_flipbox);

        /////////////////////Text-Color////////////////////////////////////
        if ($pro) {
            if (isset($_POST[$reemplaza_aqui . '_color_input_hex'])) $new_flipbox[$reemplaza_aqui . '_color_input_hex'] = sanitize_hex_color($_POST[$reemplaza_aqui . '_color_input_hex']);
        }

        /////////////////////Text-Shadow///////////////////////////////////
        $new_flipbox = text_shadow_section_handler($reemplaza_aqui, $new_flipbox);

        //////////////////////////Margin///////////////////////////////////
        $new_flipbox = input_four_values_section_handler($reemplaza_aqui . '_margin', $new_flipbox);

        return $new_flipbox;
    };

    function barra_slider_con_input_number($reemplaza_aqui, $new_flipbox)
    {
        $valores_a_tratar = [
            $reemplaza_aqui . '_value_compu',
            $reemplaza_aqui . '_value_ipad',
            $reemplaza_aqui . '_value_phone',
            $reemplaza_aqui . '_type_of_selector',
            $reemplaza_aqui . '_max_value',
            $reemplaza_aqui . '_min_value',
        ];

        foreach ($valores_a_tratar as $valor) {
            if (isset($_POST[$valor])) {
                if (!tiene_valor($_POST[$valor])  && strpos($valor, '_type_of_selector') == false) $new_flipbox[$valor] = '';
                else $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
            }
        };
        return $new_flipbox;
    };

    function entire_border_section_handler($reemplaza_aqui, $new_flipbox, $pro = true)
    {

        $valores_a_tratar = [
            'border_color_' . $reemplaza_aqui . '_color_input_hex',

            'border_' . $reemplaza_aqui . '_thickness_value_compu',
            'border_' . $reemplaza_aqui . '_thickness_value_ipad',
            'border_' . $reemplaza_aqui . '_thickness_value_phone',
            'border_' . $reemplaza_aqui . '_thickness_type_of_selector',
            'border_' . $reemplaza_aqui . '_thickness_max_value',

            'border_' . $reemplaza_aqui . '_radius_type_of_selector',
            'general_settings_border_' . $reemplaza_aqui . '_radius_top_compu',
            'general_settings_border_' . $reemplaza_aqui . '_radius_right_compu',
            'general_settings_border_' . $reemplaza_aqui . '_radius_bottom_compu',
            'general_settings_border_' . $reemplaza_aqui . '_radius_left_compu',

            'general_settings_border_' . $reemplaza_aqui . '_radius_top_ipad',
            'general_settings_border_' . $reemplaza_aqui . '_radius_right_ipad',
            'general_settings_border_' . $reemplaza_aqui . '_radius_bottom_ipad',
            'general_settings_border_' . $reemplaza_aqui . '_radius_left_ipad',

            'general_settings_border_' . $reemplaza_aqui . '_radius_top_phone',
            'general_settings_border_' . $reemplaza_aqui . '_radius_right_phone',
            'general_settings_border_' . $reemplaza_aqui . '_radius_bottom_phone',
            'general_settings_border_' . $reemplaza_aqui . '_radius_left_phone',

            'border_' . $reemplaza_aqui . '_style_selector',
        ];

        foreach ($valores_a_tratar as $valor) {


            if (strpos($valor, "_color_input_hex") != false) {

                if ($pro) {
                    if (isset($_POST[$valor]))  $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
                } else {
                }
            } else if (strpos($valor, "_radius_top") != false || strpos($valor, "_radius_right") != false || strpos($valor, "_radius_bottom") != false || strpos($valor, "_radius_left") != false) {
                if (isset($_POST[$valor])) {
                    if (!tiene_valor($_POST[$valor])) $new_flipbox[$valor] = '';
                    else $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
                }
            } else {
                if (isset($_POST[$valor]))  $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
            }
        };
        return $new_flipbox;
    };

    /////////////////////////Entire Icon Section////////////////////////
    function entire_icon_section_handler($reemplaza_aqui, $new_flipbox)
    {


        $new_flipbox = barra_slider_con_input_number($reemplaza_aqui . '_size', $new_flipbox);

        $new_flipbox = barra_slider_con_input_number($reemplaza_aqui . '_width', $new_flipbox);

        $new_flipbox = barra_slider_con_input_number($reemplaza_aqui . '_height', $new_flipbox);

        if (isset($_POST[$reemplaza_aqui . '_color_input_hex'])) $new_flipbox[$reemplaza_aqui . '_color_input_hex'] = sanitize_hex_color($_POST[$reemplaza_aqui . '_color_input_hex']);

        if (isset($_POST[$reemplaza_aqui . '_background_color_input_hex'])) $new_flipbox[$reemplaza_aqui . '_background_color_input_hex'] = sanitize_hex_color($_POST[$reemplaza_aqui . '_background_color_input_hex']);

        $new_flipbox = input_four_values_section_handler($reemplaza_aqui . '_margin', $new_flipbox);

        $new_flipbox = input_four_values_section_handler($reemplaza_aqui . '_padding', $new_flipbox);

        $new_flipbox = entire_border_section_handler($reemplaza_aqui, $new_flipbox);

        return $new_flipbox;
    };




    //front_margin
    $new_flipbox = input_four_values_section_handler('margin', $new_flipbox);

    //front_padding
    $new_flipbox = input_four_values_section_handler('padding', $new_flipbox);

    if (isset($_POST['back_image_height_auto_height'])) $new_flipbox['back_image_height_auto_height'] = 'checked';
    else $new_flipbox['back_image_height_auto_height'] = '';

    $new_flipbox = entire_icon_section_handler('front_icon', $new_flipbox);


    function box_shadow_section_handler($reemplaza_aqui, $new_flipbox)
    {
        $valores_a_tratar = [
            $reemplaza_aqui . '_color_input_hex',
            $reemplaza_aqui . '_blur_myRange_number',
            $reemplaza_aqui . '_horizontal_myRange_number',
            $reemplaza_aqui . '_vertical_myRange_number'
        ];

        if ($_POST[$reemplaza_aqui . '_color_input_hex'] == '') {
            foreach ($valores_a_tratar as $valor) {
                $new_flipbox[$valor] = '';
            }
        } else if (
            $_POST[$reemplaza_aqui . '_blur_myRange_number'] == '0' &&
            $_POST[$reemplaza_aqui . '_horizontal_myRange_number'] == '0' &&
            $_POST[$reemplaza_aqui . '_vertical_myRange_number'] == '0'
        ) {
            foreach ($valores_a_tratar as $valor) {
                $new_flipbox[$valor] = '';
            }
        } else {
            foreach ($valores_a_tratar as $valor) {
                $new_flipbox[$valor] = sanitize_text_field($_POST[$valor]);
            }
        }

        return $new_flipbox;
    };

    ///////////////////Front-Heading-Text///////////////////////////
    $new_flipbox = entire_text_section_handler('front_heading', $new_flipbox, $pro);

    ///////////////////Front-Description-Text///////////////////////////
    $new_flipbox = entire_text_section_handler('front_description', $new_flipbox);

    ///////////////////Back-Heading-Text///////////////////////////
    $new_flipbox = entire_text_section_handler('back_heading', $new_flipbox);

    ///////////////////Front - Image Overlay////////////////////
    $new_flipbox = barra_slider_con_input_number('front_image_overlay_left', $new_flipbox);

    ///////////////////Front - Image Overlay////////////////////
    $new_flipbox = barra_slider_con_input_number('front_image_overlay_top', $new_flipbox);

    ///////////////////Front - Image Overlay////////////////////
    $new_flipbox = barra_slider_con_input_number('front_image_overlay_width', $new_flipbox);


    



    ///////////////////Back - Image Overlay////////////////////
    $new_flipbox = barra_slider_con_input_number('back_image_overlay_left', $new_flipbox);

    ///////////////////Back - Image Overlay////////////////////
    $new_flipbox = barra_slider_con_input_number('back_image_overlay_top', $new_flipbox);

    ///////////////////Back - Image Overlay////////////////////
    $new_flipbox = barra_slider_con_input_number('back_image_overlay_width', $new_flipbox);
    

    ///////////////////Back-Heading-Text///////////////////////////
    $new_flipbox = entire_text_section_handler('back_description', $new_flipbox, $pro);

    ///////////////////Back - Border Section///////////////////////////
    $new_flipbox = entire_border_section_handler('back', $new_flipbox);

    ///////////////////Back - Margin///////////////////////////
    $new_flipbox = input_four_values_section_handler('back_margin', $new_flipbox);

    ///////////////////Back - Padding///////////////////////////
    $new_flipbox = input_four_values_section_handler('back_padding', $new_flipbox);

    ///////////////////Back - Solid Color///////////////////////
    if (isset($_POST['back_solid_color_color_input_hex'])) $new_flipbox['back_solid_color_color_input_hex'] = sanitize_hex_color($_POST['back_solid_color_color_input_hex']);

    ///////////////////Back - Overlayd Width////////////////////
    $new_flipbox = barra_slider_con_input_number('back_overlay_width', $new_flipbox);

    ///////////////////Back - Overlayd Height////////////////////
    $new_flipbox = barra_slider_con_input_number('back_overlay_height', $new_flipbox);

    if (isset($_POST['back_image_background_size_selector'])) $new_flipbox['back_image_background_size_selector'] = sanitize_text_field($_POST['back_image_background_size_selector']);

    if (isset($_POST['back_image_background_position_selector'])) $new_flipbox['back_image_background_position_selector'] = sanitize_text_field($_POST['back_image_background_position_selector']);

    if (isset($_POST['front_image_background_size_selector'])) $new_flipbox['front_image_background_size_selector'] = sanitize_text_field($_POST['front_image_background_size_selector']);

    if (isset($_POST['front_image_background_position_selector'])) $new_flipbox['front_image_background_position_selector'] = sanitize_text_field($_POST['front_image_background_position_selector']);

    $new_flipbox = entire_text_section_handler('back_button_text_section', $new_flipbox);

    //$new_flipbox = entire_icon_section_handler('back_button_icon', $new_flipbox);

    $new_flipbox = entire_border_section_handler('back_button_border', $new_flipbox, $pro);

    $new_flipbox = input_four_values_section_handler('back_button_position', $new_flipbox);

    $new_flipbox = barra_slider_con_input_number('back_button_width', $new_flipbox);

    $new_flipbox = barra_slider_con_input_number('back_button_height', $new_flipbox);

    if (isset($_POST['back_button_color_color_input_hex'])) $new_flipbox['back_button_color_color_input_hex'] = sanitize_hex_color($_POST['back_button_color_color_input_hex']);

    $new_flipbox = box_shadow_section_handler('back_button_box_shadow', $new_flipbox);

    ////////////////////Back Button Hover Section/////////////////////////////
    if (isset($_POST['back_button_color_hover_color_input_hex'])) $new_flipbox['back_button_color_hover_color_input_hex'] = sanitize_hex_color($_POST['back_button_color_hover_color_input_hex']);

    if ($pro) {
        if (isset($_POST['back_button_background_color_hover_color_input_hex'])) $new_flipbox['back_button_background_color_hover_color_input_hex'] = sanitize_hex_color($_POST['back_button_background_color_hover_color_input_hex']);
    }

    $new_flipbox = box_shadow_section_handler('back_button_box_shadow_hover', $new_flipbox);

    if (isset($_POST['back_button_hover_transfor_selector'])) $new_flipbox['back_button_hover_transfor_selector'] = sanitize_text_field($_POST['back_button_hover_transfor_selector']);

    if (isset($_POST['back_button_transform_style'])) $new_flipbox['back_button_transform_style'] = sanitize_text_field($_POST['back_button_transform_style']);

    if (isset($_POST['back_button_transform_style_hover'])) $new_flipbox['back_button_transform_style_hover'] = sanitize_text_field($_POST['back_button_transform_style_hover']);

    $new_flipbox = box_shadow_section_handler('front_box_shadow', $new_flipbox);

    $new_flipbox = box_shadow_section_handler('back_box_shadow', $new_flipbox);

    $new_flipbox = barra_slider_con_input_number('front_image_width', $new_flipbox);

    $new_flipbox = barra_slider_con_input_number('front_image_height', $new_flipbox);

    if (isset($_POST['front_animation_selector'])) $new_flipbox['front_animation_selector'] = sanitize_text_field($_POST['front_animation_selector']);

    if ($pro) {
        if (isset($_POST['front_animation_duration_myRange_number'])) $new_flipbox['front_animation_duration'] = sanitize_text_field($_POST['front_animation_duration_myRange_number']);
    }

    if (isset($_POST['front_animation_time_function_selector'])) $new_flipbox['front_animation_time_function_selector'] = sanitize_text_field($_POST['front_animation_time_function_selector']);

    if (isset($_POST['front_layer_deep_myRange_number'])) $new_flipbox['front_layer_deep_value'] = sanitize_text_field($_POST['front_layer_deep_myRange_number']);

    $new_flipbox = barra_slider_con_input_number('front_layer_deep', $new_flipbox);

    if (isset($_POST['front_layer_visible'])) $new_flipbox['front_layer_visible'] = true;
    else $new_flipbox['front_layer_visible'] = false;

    if (isset($_POST['back_layer_visible'])) $new_flipbox['back_layer_visible'] = true;
    else $new_flipbox['back_layer_visible'] = false;

    

    $new_flipbox = entire_border_section_handler('front', $new_flipbox, $pro);

    if ($pro) {
        if (isset($_POST['front_solid_color_color_input_hex'])) $new_flipbox['front_solid_color_color_input_hex'] = sanitize_hex_color($_POST['front_solid_color_color_input_hex']);
    }

    if (isset($_POST['background_auto_size'])) $new_flipbox['background_auto_size'] = true;
    else $new_flipbox['background_auto_size'] = false;

    $flipboxes[sanitize_text_field($_POST['flipbox_shortcode_submit'])] = $new_flipbox;
    $general_options['flipboxes'] = $flipboxes;

    $general_options['last_saved'] = sanitize_text_field($_POST['flipbox_shortcode_submit']);
    update_option('WN_Image_Hover', $general_options);

    ///////////////////////////////////////////////////////////MODAL EDIT///////////////////////////////////////////////////
    if (isset($_POST['save_tamplate_button'])) {
        $general_options = get_option('WN_Image_Hover');

        $flipboxes = $general_options['flipboxes'];

        $new_flipbox = $flipboxes[sanitize_text_field($_POST['new_flipbox_shortcode'])];

        $containers = $new_flipbox['containers'];

        $edit_container = $containers[sanitize_text_field($_POST['container_to_edit'])];

        ////
        if (isset($_POST['front_image_overlay_image_picker_id'])) $edit_container['myprefix_image_id_overlay'] = sanitize_text_field($_POST['front_image_overlay_image_picker_id']);
        if (isset($_POST['back_image_overlay_image_picker_id'])) $edit_container['back_myprefix_image_id_overlay'] = sanitize_text_field($_POST['back_image_overlay_image_picker_id']);
        // if (isset($_POST['front_image_overlay_image_id'])) $edit_container['myprefix_image_id_overlay'] = sanitize_text_field($_POST['front_image_overlay_image_id']);
        // if (isset($_POST['front_image_overlay_image_id'])) $edit_container['back_myprefix_image_id_overlay'] = sanitize_text_field($_POST['front_image_overlay_image_id']);
        

        if (isset($_POST['image_title'])) $edit_container['image_title'] = sanitize_text_field($_POST['image_title']);

        if (isset($_POST['myprefix_image_id'])) $edit_container['myprefix_image_id'] = sanitize_text_field($_POST['myprefix_image_id']);
        if (isset($_POST['back_myprefix_image_id'])) $edit_container['back_myprefix_image_id'] = sanitize_text_field($_POST['back_myprefix_image_id']);

        if (isset($_POST['image_back_title'])) $edit_container['image_back_title'] = sanitize_text_field($_POST['image_back_title']);
        if (isset($_POST['image_back_description'])) $edit_container['image_back_description'] = ($_POST['image_back_description']);
        if (isset($_POST['image_link'])) $edit_container['image_link'] = sanitize_text_field($_POST['image_link']);

        if (isset($_POST['back_button_title'])) $edit_container['back_button_title'] = sanitize_text_field($_POST['back_button_title']);

        if (isset($_POST['image_description'])) $edit_container['image_description'] = ($_POST['image_description']);

        if (isset($_POST['icons_edit_droptext_icons'])) $edit_container['front_heading_droptext_icons'] = sanitize_text_field($_POST['icons_edit_droptext_icons']);


        if (isset($_POST['open_new_window_selector'])) {
            $edit_container['open_new_window_selector'] = "_blank";
        } else $edit_container['open_new_window_selector'] = "";

        if (isset($_POST['nofollow_selector'])) {
            $edit_container['nofollow_selector'] = "nofollow";
        } else $edit_container['nofollow_selector'] = "";

        if (isset($_POST['noreferrer_selector'])) $edit_container['noreferrer_selector'] = "no-referrer";
        else $edit_container['noreferrer_selector'] = "";


        ////

        $containers[sanitize_text_field($_POST['container_to_edit'])] = $edit_container;

        $new_flipbox['containers'] = $containers;



        $flipboxes[sanitize_text_field($_POST['new_flipbox_shortcode'])] = $new_flipbox;

        $general_options['flipboxes'] = $flipboxes;

        $general_options['last_saved'] = sanitize_text_field($_POST['new_flipbox_shortcode']);

        update_option('WN_Image_Hover', $general_options);
    };

    //////////////////////////////////////////////////////////////MODAL EMPTY//////////////////////////////////////////////////
    if (isset($_POST['save_tamplate_button_empty'])) {

        $general_options = get_option('WN_Image_Hover');

        $flipboxes = $general_options['flipboxes'];

        $new_flipbox = $flipboxes[sanitize_text_field($_POST['new_flipbox_shortcode'])];

        if (array_key_exists('containers', $new_flipbox)) {
            $containers = $new_flipbox['containers'];
        } else {
            $containers = array();
        }

        $nuevo_container = array();
        $bool1 = false;

        if (empty($containers)) {
            $nuevo_container['container_index'] = 0;
            $bool1 = true;
        } else {
            $nuevo_container['container_index'] = count($containers);
        }
        
        // if (isset($_POST['front_image_overlay_image_picker_id'])) $edit_container['myprefix_image_id_overlay'] = sanitize_text_field($_POST['front_image_overlay_image_picker_id']);
        // if (isset($_POST['back_image_overlay_image_picker_id'])) $edit_container['back_myprefix_image_id_overlay'] = sanitize_text_field($_POST['back_image_overlay_image_picker_id']);

        if (isset($_POST['front_image_overlay_empty_image_picker_id'])) $nuevo_container['myprefix_image_id_overlay'] = sanitize_text_field($_POST['front_image_overlay_empty_image_picker_id']);
        if (isset($_POST['back_image_overlay_empty_image_picker_id'])) $nuevo_container['back_myprefix_image_id_overlay'] = sanitize_text_field($_POST['back_image_overlay_empty_image_picker_id']);

        if (isset($_POST['myprefix_image_id_empty'])) $nuevo_container['myprefix_image_id'] = sanitize_text_field($_POST['myprefix_image_id_empty']);
        if (isset($_POST['back_myprefix_image_id_empty'])) $nuevo_container['back_myprefix_image_id'] = sanitize_text_field($_POST['back_myprefix_image_id_empty']);

        if (isset($_POST['image_back_title_empty'])) $nuevo_container['image_back_title'] = sanitize_text_field($_POST['image_back_title_empty']);
        if (isset($_POST['image_back_description_empty'])) $nuevo_container['image_back_description'] = sanitize_text_field($_POST['image_back_description_empty']);
        if (isset($_POST['image_link_empty'])) $nuevo_container['image_link'] = sanitize_text_field($_POST['image_link_empty']);
        if (isset($_POST['image_title_empty'])) $nuevo_container['image_title'] = sanitize_text_field($_POST['image_title_empty']);
        if (isset($_POST['image_description_empty'])) $nuevo_container['image_description'] = sanitize_text_field($_POST['image_description_empty']);

        if (isset($_POST['back_button_title_empty'])) $nuevo_container['back_button_title'] = sanitize_text_field($_POST['back_button_title_empty']);

        if (isset($_POST['icons_nuevo_droptext_icons'])) {

            $nuevo_container['front_heading_droptext_icons'] = sanitize_text_field($_POST['icons_nuevo_droptext_icons']);
        }

        if (isset($_POST['open_new_window_selector_empty'])) {
            $nuevo_container['open_new_window_selector'] = "_blank";
        } else $nuevo_container['open_new_window_selector'] = "";

        if (isset($_POST['nofollow_selector_empty'])) {
            $nuevo_container['nofollow_selector'] = "nofollow";
        } else $nuevo_container['nofollow_selector'] = "";

        if (isset($_POST['noreferrer_selector_empty'])) $nuevo_container['noreferrer_selector'] = "no-referrer";
        else $nuevo_container['noreferrer_selector'] = "";

        if ($bool1 == true) {
            $containers[0] = $nuevo_container;
        } else {
            array_push($containers, $nuevo_container);
        }

        $new_flipbox['containers'] = $containers;

        $flipboxes[sanitize_text_field($_POST['new_flipbox_shortcode'])] = $new_flipbox;

        $general_options['flipboxes'] = $flipboxes;

        $general_options['last_saved'] = sanitize_text_field($_POST['new_flipbox_shortcode']);

        update_option('WN_Image_Hover', $general_options);
    };
};

if (isset($_POST['activate_product_button'])) {


    if (isset($_POST['load_google_fonts_selector'])) $general_options['load_google_fonts_selector'] = true;
    else $general_options['load_google_fonts_selector'] = false;
    if (isset($_POST['load_font_awesome_selector'])) $general_options['load_font_awesome_selector'] = true;
    else $general_options['load_font_awesome_selector'] = false;

    update_option('WN_Image_Hover', $general_options);

    $return_to = 'wn_flipbox_settings';
};


if (isset($_POST['content_button_delete'])) {

    $flipboxes = $general_options['flipboxes'];
    unset($flipboxes[sanitize_text_field($_POST['content_shortcode'])]);
    $general_options['flipboxes'] = $flipboxes;
    update_option('WN_Image_Hover', $general_options);

    $return_to = 'wn_image_hover';
};

if (isset($_POST['save_new_style'])) {

    $flipboxes = $general_options['flipboxes'];

    $new_flipbox = $flipboxes[sanitize_text_field($_POST['shortcode'])];

    $fileName = "layouts.txt";
    $pluginDirectory = plugin_dir_path(__FILE__);
    $filePath = $pluginDirectory . $fileName;
    $layouts = json_decode(file_get_contents($filePath), true);
    $name = sanitize_text_field($_POST['layout_name']);
    $new_flipbox['shortcode'] = $name;

    if (empty($layouts)) {
        $layouts = [];
        $layouts[$name] = $new_flipbox;
    } else {
        $layouts[$name] = $new_flipbox;
    }

    file_put_contents($filePath, json_encode($layouts));
};

if (isset($_POST['save_new_shortcode'])) {

    $flipboxes = $general_options['flipboxes'];

    $new_flipbox = $flipboxes[sanitize_text_field($_POST['shortcode'])];

    $new_flipbox['flipbox_name'] = sanitize_text_field($_POST['flipbox_name']);

    $flipboxes[sanitize_text_field($_POST['shortcode'])] = $new_flipbox;

    $general_options['flipboxes'] = $flipboxes;

    $general_options['last_saved'] = sanitize_text_field($_POST['shortcode']);

    update_option('WN_Image_Hover', $general_options);
};

if (isset($_POST['delete_submit_button'])) {

    $cadena = sanitize_text_field($_POST['container_index_submit']);
    $cadena = str_replace('button_delete_', '', $cadena);

    $flipboxes = $general_options['flipboxes'];

    $new_flipbox = $flipboxes[sanitize_text_field($_POST['flipbox_shortcode_submit'])];

    $containers = $new_flipbox['containers'];

    unset($containers[$cadena]);
    $containers = array_values($containers);

    $cont = 0;

    for ($cont = 0; $cont < count($containers); $cont++) {
        $containers[$cont]['container_index'] = $cont;
    }

    $new_flipbox['containers'] = $containers;

    $flipboxes[sanitize_text_field($_POST['flipbox_shortcode_submit'])] = $new_flipbox;
    $general_options['flipboxes'] = $flipboxes;

    $general_options['last_saved'] = sanitize_text_field($_POST['flipbox_shortcode_submit']);

    update_option('WN_Image_Hover', $general_options);
};





?>
<script type="text/javascript">
    var delete_wp_noti = document.getElementsByClassName('notice-info');
    for (var i = 0; i < delete_wp_noti.length; i++) {
        delete_wp_noti[i].style.display = 'none';
    }
    document.location.href = "<?php echo admin_url('admin.php?page=' . $return_to); ?>";
</script>