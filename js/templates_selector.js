jQuery(document).ready(function ($) {
  jQuery("#empty_template").click(function () {
    jQuery("#empty").submit();
  });
  function animation_time_func(valor) {
    switch (valor) {
      case "bounce":
        return "cubic-bezier(.56,.64,.69,1.28)";
        break;
      case "smooth-bounce":
        return "cubic-bezier(.25,.1,.34,1.17)";
        break;
      case "fast-bounce":
        return "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        break;
      case "deep-bounce":
        return "cubic-bezier(.2,.85,.4,1.275)";
        break;
      case "slow-to-fast":
        return "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
        break;
      default:
        return valor;
        break;
    }
  }

  function selecionar_animacion(
    valor,
    animation_duration,
    animation_time_function,
    flipbox_plus_container, new_flipbox
  ) {
    switch (valor) {
      case "none":
        {
          // none();
        }
        break;
      case "FadeIn":
        {
          // none();
          fadeIn(
            animation_duration,
            animation_time_function,
            flipbox_plus_container
          );
        }
        break;
      case "Flip X":
        {
          // none();
          flipX(
            animation_duration,
            animation_time_function,
            flipbox_plus_container
          );
        }
        break;
      case "Flip Y":
        {
          // none();
          flipY(
            animation_duration,
            animation_time_function,
            flipbox_plus_container
          );
        }
        break;
      case "3D FlipX":
        {
          // none();
          flipX3D(
            animation_duration,
            animation_time_function,
            flipbox_plus_container, new_flipbox
          );
        }
        break;
      case "3D FlipY":
        {
          // none();
          flipY3D(
            animation_duration,
            animation_time_function,
            flipbox_plus_container, new_flipbox
          );
        }
        break;
      default: {
        //Nada
      }
    }
  }

  function append_elements(objetivo, valor, ovjetivo_trigger, funcion) {
    jQuery(
      "<style type='text/css'> .modificador_hover_" +
        funcion +
        "_" +
        objetivo.id +
        " { " +
        valor +
        "; } </style>"
    ).appendTo("#" + objetivo.id);
    jQuery("#" + ovjetivo_trigger.id).hover(
      function () {
        jQuery("#" + objetivo.id).addClass(
          "modificador_hover_" + funcion + "_" + objetivo.id
        );
      },
      function () {
        jQuery("#" + objetivo.id).removeClass(
          "modificador_hover_" + funcion + "_" + objetivo.id
        );
      }
    );
  }

  function fadeIn(
    animation_duration,
    animation_time_function,
    flipbox_plus_container
  ) {
    var container = document.getElementById(
      "container_" + flipbox_plus_container
    );

    // var container_inner = document.getElementById('container_inner_' + flipbox_plus_container);
    var front_preview_image = document.getElementById(
      "preview_image_" + flipbox_plus_container
    );
    var overlay = document.getElementById("overlay_" + flipbox_plus_container);
    var front_info = document.getElementById(
      "front_info_" + flipbox_plus_container
    );
    var back_info = document.getElementById(
      "back_info_" + flipbox_plus_container
    );

    overlay.style.transition =
      "opacity " + animation_duration + "s " + animation_time_function;
    front_preview_image.style.transition =
      "opacity " + animation_duration + "s " + animation_time_function;
    overlay.style.opacity = "0";
    front_preview_image.style.opacity = "1";

    
    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';

    append_elements(overlay, " opacity: 1 !important ", container, "fadeIn");
    append_elements(
      front_preview_image,
      " opacity: 0 !important ",
      container,
      "fadeIn"
    );
  }

  function flipY(
    animation_duration,
    animation_time_function,
    flipbox_plus_container
  ) {
    var container = document.getElementById(
      "container_" + flipbox_plus_container
    );
    var container_inner = document.getElementById(
      "container_inner_" + flipbox_plus_container
    );
    var front_preview_image = document.getElementById(
      "preview_image_" + flipbox_plus_container
    );
    var overlay = document.getElementById("overlay_" + flipbox_plus_container);
    var back_preview_image = document.getElementById(
      "back_preview_image_" + flipbox_plus_container
    );
    var front_info = document.getElementById(
      "front_info_" + flipbox_plus_container
    );
    var back_info = document.getElementById(
      "back_info_" + flipbox_plus_container
    );

    //flipY
    jQuery("#" + container.id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";

    front_preview_image.style.opacity = 1;
    front_preview_image.style.visibility = "visible";
    front_preview_image.style.backfaceVisibility = "hidden";
    jQuery(front_preview_image).css({
      "-webkit-backface-visibility": "hidden",
    });

    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    jQuery(overlay).css({ "-webkit-backface-visibility": "hidden" });
    jQuery(back_preview_image).css({ "-webkit-backface-visibility": "hidden" });

    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';

    overlay.style.transform = "rotateY(180deg)";
    append_elements(
      container_inner,
      " transform: rotateY(180deg) ",
      container,
      "flipY"
    );
  }

  function flipX(
    animation_duration,
    animation_time_function,
    flipbox_plus_container
  ) {
    var container = document.getElementById(
      "container_" + flipbox_plus_container
    );
    var container_inner = document.getElementById(
      "container_inner_" + flipbox_plus_container
    );
    var front_preview_image = document.getElementById(
      "preview_image_" + flipbox_plus_container
    );
    var overlay = document.getElementById("overlay_" + flipbox_plus_container);
    var back_preview_image = document.getElementById(
      "back_preview_image_" + flipbox_plus_container
    );
    var front_info = document.getElementById(
      "front_info_" + flipbox_plus_container
    );
    var back_info = document.getElementById(
      "back_info_" + flipbox_plus_container
    );

    ///flipX
    jQuery("#" + container.id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";

    front_preview_image.style.opacity = 1;
    front_preview_image.style.visibility = "visible";
    front_preview_image.style.backfaceVisibility = "hidden";
    jQuery(front_preview_image).css({
      "-webkit-backface-visibility": "hidden",
    });

    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    jQuery(overlay).css({ "-webkit-backface-visibility": "hidden" });
    jQuery(back_preview_image).css({ "-webkit-backface-visibility": "hidden" });

    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';

    overlay.style.transform = "rotateX(180deg)";
    append_elements(
      container_inner,
      " transform: rotateX(180deg); ",
      container,
      "flipX"
    );
  }

  function flipX3D(
    animation_duration,
    animation_time_function,
    flipbox_plus_container, new_flipbox
  ) {
    var container = document.getElementById(
      "container_" + flipbox_plus_container
    );
    var container_inner = document.getElementById(
      "container_inner_" + flipbox_plus_container
    );
    var front_preview_image = document.getElementById(
      "preview_image_" + flipbox_plus_container
    );
    var overlay = document.getElementById("overlay_" + flipbox_plus_container);
    var front_info = document.getElementById(
      "front_info_" + flipbox_plus_container
    );
    var back_info = document.getElementById(
      "back_info_" + flipbox_plus_container
    );
    var back_preview_image = document.getElementById(
      "back_preview_image_" + flipbox_plus_container
    );

    ///flipX3D
    var front_layer_visible;
    if (new_flipbox['front_layer_visible'] == true) front_layer_visible = 'visible'; else front_layer_visible = 'hidden';
    var back_layer_visible;
    if (new_flipbox['back_layer_visible'] == true) back_layer_visible = 'visible'; else back_layer_visible = 'hidden';      
    front_info.style.backfaceVisibility = front_layer_visible;
    back_info.style.backfaceVisibility = back_layer_visible;

    var front_layer_deep = new_flipbox['front_layer_deep_value'] + 'px';
    container_inner.style.transform = "translateZ(-" + front_layer_deep + ")";

    jQuery("#" + container.id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";
    front_preview_image.style.backfaceVisibility = "hidden";
    jQuery(front_preview_image).css({
      "-webkit-backface-visibility": "hidden",
    });

    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    jQuery(overlay).css({ "-webkit-backface-visibility": "hidden" });
    jQuery(back_preview_image).css({ "-webkit-backface-visibility": "hidden" });
    overlay.style.transform = "rotateX(180deg)";

    front_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";
    back_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";

    append_elements(
      container_inner,
      " transform: translateZ(-" + front_layer_deep + ") rotateX(180deg) !important",
      container,
      "flipX3D"
    );
  }

  function flipY3D(
    animation_duration,
    animation_time_function,
    flipbox_plus_container, new_flipbox
  ) {
    var container = document.getElementById(
      "container_" + flipbox_plus_container
    );
    var container_inner = document.getElementById(
      "container_inner_" + flipbox_plus_container
    );
    var front_preview_image = document.getElementById(
      "preview_image_" + flipbox_plus_container
    );

    var overlay = document.getElementById("overlay_" + flipbox_plus_container);
    var front_info = document.getElementById(
      "front_info_" + flipbox_plus_container
    );
    var back_info = document.getElementById(
      "back_info_" + flipbox_plus_container
    );
    var back_preview_image = document.getElementById(
      "back_preview_image_" + flipbox_plus_container
    );

    ///flipY3D
    var front_layer_visible;
    if (new_flipbox['front_layer_visible'] == true) front_layer_visible = 'visible'; else front_layer_visible = 'hidden';
    var back_layer_visible;
    if (new_flipbox['back_layer_visible'] == true) back_layer_visible = 'visible'; else back_layer_visible = 'hidden';      
    front_info.style.backfaceVisibility = front_layer_visible;
    back_info.style.backfaceVisibility = back_layer_visible;

    var front_layer_deep = new_flipbox['front_layer_deep_value'] + 'px';    
    container_inner.style.transform = "translateZ(-" + front_layer_deep + ")";

    jQuery("#" + container.id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";
    front_preview_image.style.backfaceVisibility = "hidden";
    jQuery(front_preview_image).css({
      "-webkit-backface-visibility": "hidden",
    });

    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    jQuery(overlay).css({ "-webkit-backface-visibility": "hidden" });
    jQuery(back_preview_image).css({ "-webkit-backface-visibility": "hidden" });
    overlay.style.transform = "rotateY(180deg)";

    front_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";
    back_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";

    append_elements(
      container_inner,
      " transform: translateZ(-" + front_layer_deep + ") rotateY(180deg) !important",
      container,
      "flipY3D"
    );
  }

  jQuery.each(flipboxes, function (shortcode, new_flipbox) {
    if (shortcode in flipbox_to_show || "all" in flipbox_to_show) {
      var containers = new_flipbox["containers"];
      var animation_duration = new_flipbox["front_animation_duration"];
      var animation_time_function = animation_time_func(
        new_flipbox["front_animation_time_function_selector"]
      );

      if (load_google_fonts) {
        var loacal_fonts = [
          "Arial",
          "Helvetica Neue",
          "Courier New",
          "Times New Roman",
          "Comic Sans MS",
          "Verdana",
          "Impact",
          "cursive",
          "inherit",
        ];

        if (
          !loacal_fonts.includes(
            new_flipbox["front_heading_fontfamily_droptext"]
          )
        ) {
          jQuery("head").append(
            '<link href="https://fonts.googleapis.com/css2?family=' +
              new_flipbox["front_heading_fontfamily_droptext"] +
              '&display=swap" rel="stylesheet">'
          );
        }
        if (
          !loacal_fonts.includes(
            new_flipbox["front_description_fontfamily_droptext"]
          )
        ) {
          jQuery("head").append(
            '<link href="https://fonts.googleapis.com/css2?family=' +
              new_flipbox["front_description_fontfamily_droptext"] +
              '&display=swap" rel="stylesheet">'
          );
        }
        if (
          !loacal_fonts.includes(
            new_flipbox["back_heading_fontfamily_droptext"]
          )
        ) {
          jQuery("head").append(
            '<link href="https://fonts.googleapis.com/css2?family=' +
              new_flipbox["back_heading_fontfamily_droptext"] +
              '&display=swap" rel="stylesheet">'
          );
        }
        if (
          !loacal_fonts.includes(
            new_flipbox["back_description_fontfamily_droptext"]
          )
        ) {
          jQuery("head").append(
            '<link href="https://fonts.googleapis.com/css2?family=' +
              new_flipbox["back_description_fontfamily_droptext"] +
              '&display=swap" rel="stylesheet">'
          );
        }
        if (
          !loacal_fonts.includes(
            new_flipbox["back_button_text_section_fontfamily_droptext"]
          )
        ) {
          jQuery("head").append(
            '<link href="https://fonts.googleapis.com/css2?family=' +
              new_flipbox["back_button_text_section_fontfamily_droptext"] +
              '&display=swap" rel="stylesheet">'
          );
        }
      }

      jQuery.each(new_flipbox, function (index, value) {});

      jQuery.each(containers, function (container_index, container) {
        var flipbox_plus_container = shortcode + "_" + container_index;

        selecionar_animacion(
          new_flipbox["front_animation_selector"],
          animation_duration,
          animation_time_function,
          flipbox_plus_container, new_flipbox
        );

        if (container["back_button_title"] == "") {
          jQuery(
            "#back_section_button_" + shortcode + "_" + container_index
          ).css({ display: "none" });
        } else {
          jQuery(
            "#back_section_button_" + shortcode + "_" + container_index
          ).css({ display: "block" });
        }

        //Container
        jQuery("#container_" + flipbox_plus_container).css({
          display: "block",
        });



        //front_preview_image
        var valor = new_flipbox["front_image_background_size_selector"];
        if (valor == "Fit") valor = "100% 100%";
        jQuery("#preview_image_" + flipbox_plus_container).css(
          "background-size",
          valor
        );
        jQuery("#preview_image_" + flipbox_plus_container).css(
          "background-position",
          new_flipbox["front_image_background_position_selector"]
        );
        jQuery("#preview_image_" + flipbox_plus_container).css(
          "background-image",
          "url('" + container["myprefix_image_id"] + "')"
        );

        jQuery("#preview_image_" + flipbox_plus_container).css({
          "background-repeat": "no-repeat",
        });
        jQuery("#preview_image_" + flipbox_plus_container).css({
          "box-shadow":
            new_flipbox["front_box_shadow_horizontal_myRange_number"] +
            "px " +
            new_flipbox["front_box_shadow_vertical_myRange_number"] +
            "px " +
            new_flipbox["front_box_shadow_blur_myRange_number"] +
            "px " +
            new_flipbox["front_box_shadow_color_input_hex"],
        });
        jQuery("#preview_image_" + flipbox_plus_container).css({
          outline: "1px solid transparent",
        });

        jQuery("#front_image_overlay_" + flipbox_plus_container).attr(
          "src",
          container["myprefix_image_id_overlay"]
        );

        jQuery("#back_image_overlay_" + flipbox_plus_container).attr(
          "src",
          container["back_myprefix_image_id_overlay"]
        );

        //icon_div_container
        if (container["front_heading_droptext_icons"] == "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css({
            display: "none",
          });
        else
          jQuery("#icon_div_container_" + flipbox_plus_container).css({
            display: "block",
          });

        //front_heading_text
        jQuery("#front_heading_text_" + flipbox_plus_container).css(
          "text-shadow",
          new_flipbox["front_heading_text_shadow_horizontal_barslider_number"] +
            "px " +
            new_flipbox["front_heading_text_shadow_vertical_barslider_number"] +
            "px " +
            new_flipbox["front_heading_text_shadow_blur_barslider_number"] +
            "px " +
            new_flipbox["front_heading_text_shadow_color_input_hex"]
        );
        jQuery("#back_heading_text_" + flipbox_plus_container).css({
          "text-shadow":
            new_flipbox[
              "back_heading_text_shadow_horizontal_barslider_number"
            ] +
            "px " +
            new_flipbox["back_heading_text_shadow_vertical_barslider_number"] +
            "px " +
            new_flipbox["back_heading_text_shadow_blur_barslider_number"] +
            "px " +
            new_flipbox["back_heading_text_shadow_color_input_hex"],
        });
        jQuery("#back_description_text_" + flipbox_plus_container).css({
          "text-shadow":
            new_flipbox[
              "back_description_text_shadow_horizontal_barslider_number"
            ] +
            "px " +
            new_flipbox[
              "back_description_text_shadow_vertical_barslider_number"
            ] +
            "px " +
            new_flipbox["back_description_text_shadow_blur_barslider_number"] +
            "px " +
            new_flipbox["back_description_text_shadow_color_input_hex"],
        });
        jQuery("#front_heading_description_" + flipbox_plus_container).css({
          "text-shadow":
            new_flipbox[
              "front_description_text_shadow_horizontal_barslider_number"
            ] +
            "px " +
            new_flipbox[
              "front_description_text_shadow_vertical_barslider_number"
            ] +
            "px " +
            new_flipbox["front_description_text_shadow_blur_barslider_number"] +
            "px " +
            new_flipbox["front_description_text_shadow_color_input_hex"],
        });
        jQuery("#back_section_button_text_" + flipbox_plus_container).css({
          "text-shadow":
            new_flipbox[
              "back_button_text_section_text_shadow_horizontal_barslider_number"
            ] +
            "px " +
            new_flipbox[
              "back_button_text_section_text_shadow_vertical_barslider_number"
            ] +
            "px " +
            new_flipbox[
              "back_button_text_section_text_shadow_blur_barslider_number"
            ] +
            "px " +
            new_flipbox["back_button_text_section_text_shadow_color_input_hex"],
        });

        //hover back_section_button_text
        jQuery(
          "<style type='text/css'> .back_section_button_text_" +
            flipbox_plus_container +
            " { color: " +
            new_flipbox["back_button_color_hover_color_input_hex"] +
            " !important;" +
            "} </style>"
        ).appendTo("#back_section_button_text_" + flipbox_plus_container);
        jQuery("#back_section_button_" + flipbox_plus_container).hover(
          function () {
            jQuery(
              "#back_section_button_text_" + flipbox_plus_container
            ).addClass("back_section_button_text_" + flipbox_plus_container);
          },
          function () {
            jQuery(
              "#back_section_button_text_" + flipbox_plus_container
            ).removeClass("back_section_button_text_" + flipbox_plus_container);
          }
        );

        jQuery("#back_section_button_" + flipbox_plus_container).css({
          "box-shadow":
            new_flipbox["back_button_box_shadow_horizontal_myRange_number"] +
            "px " +
            new_flipbox["back_button_box_shadow_vertical_myRange_number"] +
            "px " +
            new_flipbox["back_button_box_shadow_blur_myRange_number"] +
            "px " +
            new_flipbox["back_button_box_shadow_color_input_hex"],
        });
        jQuery("#back_section_button_" + flipbox_plus_container).css({
          outline: "1px solid transparent",
        });

        //hover back_section_button
        jQuery(
          "<style type='text/css'> .back_section_button_" +
            flipbox_plus_container +
            " { " +
            new_flipbox["back_button_transform_style_hover"] +
            "; background-color: " +
            new_flipbox["back_button_background_color_hover_color_input_hex"] +
            " !important; box-shadow: " +
            new_flipbox[
              "back_button_box_shadow_hover_horizontal_myRange_number"
            ] +
            "px " +
            new_flipbox[
              "back_button_box_shadow_hover_vertical_myRange_number"
            ] +
            "px " +
            new_flipbox["back_button_box_shadow_hover_blur_myRange_number"] +
            "px " +
            new_flipbox["back_button_box_shadow_hover_color_input_hex"] +
            " !important;" +
            "} </style>"
        ).appendTo("#back_section_button_" + flipbox_plus_container);
        jQuery("#back_section_button_" + flipbox_plus_container).hover(
          function () {
            jQuery("#back_section_button_" + flipbox_plus_container).addClass(
              "back_section_button_" + flipbox_plus_container
            );
          },
          function () {
            jQuery(
              "#back_section_button_" + flipbox_plus_container
            ).removeClass("back_section_button_" + flipbox_plus_container);
          }
        );

        jQuery("#back_section_button_" + flipbox_plus_container).css({
          animation: new_flipbox["back_button_transform_style"].replace(
            "animation:",
            ""
          ),
        });

        //back_preview_image
        var valor = new_flipbox["back_image_background_size_selector"];
        if (valor == "Fit") valor = "100% 100%";
        jQuery("#back_preview_image_" + flipbox_plus_container).css(
          "background-size",
          valor
        );
        jQuery("#back_preview_image_" + flipbox_plus_container).css(
          "background-position",
          new_flipbox["back_image_background_position_selector"]
        );
        jQuery("#back_preview_image_" + flipbox_plus_container).css({
          "background-repeat": "no-repeat",
        });

        jQuery("#back_preview_image_" + flipbox_plus_container).css(
          "background-image",
          "url('" + container["back_myprefix_image_id"] + "')"
        );
        jQuery("#back_preview_image_" + flipbox_plus_container).css({
          "box-shadow":
            new_flipbox["back_box_shadow_horizontal_myRange_number"] +
            "px " +
            new_flipbox["back_box_shadow_vertical_myRange_number"] +
            "px " +
            new_flipbox["back_box_shadow_blur_myRange_number"] +
            "px " +
            new_flipbox["back_box_shadow_color_input_hex"],
        });
        jQuery("#back_preview_image_" + flipbox_plus_container).css({
          outline: "1px solid transparent",
        });

        /////////////////////////////////////Condicionales para que cargue mas rapido//////////////////////////////////////////////

        //container
        if (new_flipbox["general_settings_margin_top_compu"] != "")
          jQuery("#container_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_margin_top_compu"]
          );
        if (new_flipbox["general_settings_margin_right_compu"] != "")
          jQuery("#container_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_margin_right_compu"]
          );
        if (new_flipbox["general_settings_margin_bottom_compu"] != "")
          jQuery("#container_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_margin_bottom_compu"]
          );
        if (new_flipbox["general_settings_margin_left_compu"] != "")
          jQuery("#container_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_margin_left_compu"]
          );

        if (new_flipbox["general_settings_margin_top_ipad"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_margin_top_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_margin_right_ipad"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_margin_right_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_margin_bottom_ipad"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_margin_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_margin_left_ipad"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_margin_left_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_margin_top_phone"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_margin_top_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_margin_right_phone"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_margin_right_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_margin_bottom_phone"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_margin_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_margin_left_phone"] != "")
          jQuery("#container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_margin_left_phone"] +
              "!important ;}}</style>"
          );

        //front_overlay_image
        if (new_flipbox["front_image_overlay_left_value_compu"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).css({
            left: new_flipbox["front_image_overlay_left_value_compu"],
          });
        if (new_flipbox["front_image_overlay_top_value_compu"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).css({
            top: new_flipbox["front_image_overlay_top_value_compu"],
          });
        if (new_flipbox["front_image_overlay_width_value_compu"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).css({
            width: new_flipbox["front_image_overlay_width_value_compu"],
          });

        //767
        if (new_flipbox["front_image_overlay_left_value_ipad"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_image_overlay_' +
              flipbox_plus_container +
              " { left:" +
              new_flipbox["front_image_overlay_left_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["front_image_overlay_top_value_ipad"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_image_overlay_' +
              flipbox_plus_container +
              " { top:" +
              new_flipbox["front_image_overlay_top_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["front_image_overlay_width_value_ipad"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_image_overlay_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["front_image_overlay_width_value_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["front_image_overlay_left_value_phone"] != "")
        jQuery("#front_image_overlay_" + flipbox_plus_container).append(
          '<style type="text/css">@media screen and (max-width: 480px){ #front_image_overlay_' +
            flipbox_plus_container +
            " { left:" +
            new_flipbox["front_image_overlay_left_value_phone"] +
            "!important ;}}</style>"
        );

        if (new_flipbox["front_image_overlay_top_value_phone"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_image_overlay_' +
              flipbox_plus_container +
              " { top:" +
              new_flipbox["front_image_overlay_top_value_phone"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["front_image_overlay_width_value_phone"] != "")
          jQuery("#front_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_image_overlay_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["front_image_overlay_width_value_phone"] +
              "!important ;}}</style>"
          );




        //back_overlay_image
        if (new_flipbox["back_image_overlay_left_value_compu"] != "")
        jQuery("#back_image_overlay_" + flipbox_plus_container).css({
          left: new_flipbox["back_image_overlay_left_value_compu"],
        });
        if (new_flipbox["back_image_overlay_top_value_compu"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).css({
            top: new_flipbox["back_image_overlay_top_value_compu"],
          });
        if (new_flipbox["back_image_overlay_width_value_compu"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).css({
            width: new_flipbox["back_image_overlay_width_value_compu"],
          });

        //767
        if (new_flipbox["back_image_overlay_left_value_ipad"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_image_overlay_' +
              flipbox_plus_container +
              " { left:" +
              new_flipbox["back_image_overlay_left_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["back_image_overlay_top_value_ipad"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_image_overlay_' +
              flipbox_plus_container +
              " { top:" +
              new_flipbox["back_image_overlay_top_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["back_image_overlay_width_value_ipad"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_image_overlay_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["back_image_overlay_width_value_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["back_image_overlay_left_value_phone"] != "")
        jQuery("#back_image_overlay_" + flipbox_plus_container).append(
          '<style type="text/css">@media screen and (max-width: 480px){ #back_image_overlay_' +
            flipbox_plus_container +
            " { left:" +
            new_flipbox["back_image_overlay_left_value_phone"] +
            "!important ;}}</style>"
        );

        if (new_flipbox["back_image_overlay_top_value_phone"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_image_overlay_' +
              flipbox_plus_container +
              " { top:" +
              new_flipbox["back_image_overlay_top_value_phone"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["back_image_overlay_width_value_phone"] != "")
          jQuery("#back_image_overlay_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_image_overlay_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["back_image_overlay_width_value_phone"] +
              "!important ;}}</style>"
          );

        //front_preview_image
        if (new_flipbox["front_image_width_value_compu"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css({
            width: new_flipbox["front_image_width_value_compu"],
          });
        if (new_flipbox["front_image_height_value_compu"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css({
            height: new_flipbox["front_image_height_value_compu"],
          });
        if (new_flipbox["front_solid_color_color_input_hex"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css({
            "background-color":
              new_flipbox["front_solid_color_color_input_hex"],
          });
        if (new_flipbox["border_front_style_selector"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-style",
            new_flipbox["border_front_style_selector"]
          );
        if (new_flipbox["border_front_thickness_value_compu"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-width",
            new_flipbox["border_front_thickness_value_compu"]
          );
        if (new_flipbox["border_color_front_color_input_hex"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-color",
            new_flipbox["border_color_front_color_input_hex"]
          );
        if (new_flipbox["general_settings_border_front_radius_top_compu"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-top-left-radius",
            new_flipbox["general_settings_border_front_radius_top_compu"]
          );
        if (
          new_flipbox["general_settings_border_front_radius_right_compu"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-top-right-radius",
            new_flipbox["general_settings_border_front_radius_right_compu"]
          );
        if (
          new_flipbox["general_settings_border_front_radius_bottom_compu"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-bottom-right-radius",
            new_flipbox["general_settings_border_front_radius_bottom_compu"]
          );
        if (
          new_flipbox["general_settings_border_front_radius_left_compu"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).css(
            "border-bottom-left-radius",
            new_flipbox["general_settings_border_front_radius_left_compu"]
          );

        if (new_flipbox["front_image_width_value_ipad"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["front_image_width_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_image_height_value_ipad"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { height:" +
              new_flipbox["front_image_height_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["border_front_thickness_value_ipad"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_front_thickness_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_border_front_radius_top_ipad"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox["general_settings_border_front_radius_top_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_radius_right_ipad"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox["general_settings_border_front_radius_right_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_radius_bottom_ipad"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox["general_settings_border_front_radius_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_border_front_radius_left_ipad"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #preview_image_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox["general_settings_border_front_radius_left_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["front_image_width_value_phone"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["front_image_width_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_image_height_value_phone"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { height:" +
              new_flipbox["front_image_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["border_front_thickness_value_phone"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_front_thickness_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_border_front_radius_top_phone"] != "")
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox["general_settings_border_front_radius_top_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_radius_right_phone"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox["general_settings_border_front_radius_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_radius_bottom_phone"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox["general_settings_border_front_radius_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_radius_left_phone"] != ""
        )
          jQuery("#preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #preview_image_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox["general_settings_border_front_radius_left_phone"] +
              "!important ;}}</style>"
          );

        //Front Info
        if (new_flipbox["general_settings_padding_top_compu"] != "")
          jQuery("#front_info" + flipbox_plus_container).css(
            "padding-top",
            new_flipbox["general_settings_padding_top_compu"]
          );
        if (new_flipbox["general_settings_padding_right_compu"] != "")
          jQuery("#front_info" + flipbox_plus_container).css(
            "padding-right",
            new_flipbox["general_settings_padding_right_compu"]
          );
        if (new_flipbox["general_settings_padding_bottom_compu"] != "")
          jQuery("#front_info" + flipbox_plus_container).css(
            "padding-bottom",
            new_flipbox["general_settings_padding_bottom_compu"]
          );
        if (new_flipbox["general_settings_padding_left_compu"] != "")
          jQuery("#front_info" + flipbox_plus_container).css(
            "padding-left",
            new_flipbox["general_settings_padding_left_compu"]
          );

        if (new_flipbox["general_settings_padding_top_ipad"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { padding-top:" +
              new_flipbox["general_settings_padding_top_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_padding_right_ipad"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { padding-right:" +
              new_flipbox["general_settings_padding_right_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_padding_bottom_ipad"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { padding-bottom:" +
              new_flipbox["general_settings_padding_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_padding_left_ipad"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #container_' +
              flipbox_plus_container +
              " { padding-left:" +
              new_flipbox["general_settings_padding_left_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_padding_top_phone"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { padding-top:" +
              new_flipbox["general_settings_padding_top_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_padding_right_phone"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { padding-right:" +
              new_flipbox["general_settings_padding_right_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_padding_bottom_phone"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { padding-bottom:" +
              new_flipbox["general_settings_padding_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_padding_left_phone"] != "")
          jQuery("#front_info" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #container_' +
              flipbox_plus_container +
              " { padding-left:" +
              new_flipbox["general_settings_padding_left_phone"] +
              "!important ;}}</style>"
          );

        //icon_div_container
        if (new_flipbox["front_icon_width_value_compu"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css({
            width: new_flipbox["front_icon_width_value_compu"],
          });
        if (new_flipbox["front_icon_height_value_compu"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css({
            height: new_flipbox["front_icon_height_value_compu"],
          });
        if (new_flipbox["front_icon_background_color_input_hex"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css({
            "background-color":
              new_flipbox["front_icon_background_color_input_hex"],
          });

        if (new_flipbox["general_settings_front_icon_margin_top_compu"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_front_icon_margin_top_compu"]
          );
        if (new_flipbox["general_settings_front_icon_margin_right_compu"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_front_icon_margin_right_compu"]
          );
        if (
          new_flipbox["general_settings_front_icon_margin_bottom_compu"] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_front_icon_margin_bottom_compu"]
          );
        if (new_flipbox["general_settings_front_icon_margin_left_compu"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_front_icon_margin_left_compu"]
          );

        if (new_flipbox["border_front_icon_style_selector"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-style",
            new_flipbox["border_front_icon_style_selector"]
          );
        if (new_flipbox["border_front_icon_thickness_value_compu"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-width",
            new_flipbox["border_front_icon_thickness_value_compu"]
          );
        if (new_flipbox["border_color_front_icon_color_input_hex"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-color",
            new_flipbox["border_color_front_icon_color_input_hex"]
          );

        if (
          new_flipbox["general_settings_border_front_icon_radius_top_compu"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-top-left-radius",
            new_flipbox["general_settings_border_front_icon_radius_top_compu"]
          );
        if (
          new_flipbox[
            "general_settings_border_front_icon_radius_right_compu"
          ] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-top-right-radius",
            new_flipbox["general_settings_border_front_icon_radius_right_compu"]
          );
        if (
          new_flipbox[
            "general_settings_border_front_icon_radius_bottom_compu"
          ] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-bottom-right-radius",
            new_flipbox[
              "general_settings_border_front_icon_radius_bottom_compu"
            ]
          );
        if (
          new_flipbox["general_settings_border_front_icon_radius_left_compu"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).css(
            "border-bottom-left-radius",
            new_flipbox["general_settings_border_front_icon_radius_left_compu"]
          );

        //767
        if (new_flipbox["front_icon_width_value_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["front_icon_width_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_icon_height_value_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { height:" +
              new_flipbox["front_icon_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["border_front_icon_thickness_value_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_front_icon_thickness_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_front_icon_margin_top_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_front_icon_margin_top_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_margin_right_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_front_icon_margin_right_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_margin_bottom_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_front_icon_margin_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_margin_left_ipad"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_front_icon_margin_left_ipad"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_border_front_icon_radius_top_ipad"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_top_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_icon_radius_right_ipad"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_right_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_front_icon_radius_bottom_ipad"
          ] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_bottom_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_icon_radius_left_ipad"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_left_ipad"
              ] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["front_icon_width_value_phone"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["front_icon_width_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_icon_height_value_phone"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { height:" +
              new_flipbox["front_icon_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["border_front_icon_thickness_value_phone"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_front_icon_thickness_value_phone"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_front_icon_margin_top_phone"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_front_icon_margin_top_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_margin_right_phone"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_front_icon_margin_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_icon_margin_bottom_phone"] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_front_icon_margin_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_margin_left_phone"] != "")
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_front_icon_margin_left_phone"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_border_front_icon_radius_top_phone"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_top_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_front_icon_radius_right_phone"
          ] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_right_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_front_icon_radius_bottom_phone"
          ] != ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_front_icon_radius_left_phone"] !=
          ""
        )
          jQuery("#icon_div_container_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_div_container_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox[
                "general_settings_border_front_icon_radius_left_phone"
              ] +
              "!important ;}}</style>"
          );

        //icon
        if (new_flipbox["front_icon_size_value_compu"] != "")
          jQuery("#icon_" + flipbox_plus_container).css({
            "font-size": new_flipbox["front_icon_size_value_compu"],
          });
        if (new_flipbox["front_icon_color_input_hex"] != "")
          jQuery("#icon_" + flipbox_plus_container).css({
            color: new_flipbox["front_icon_color_input_hex"],
          });

        if (new_flipbox["general_settings_front_icon_padding_top_compu"] != "")
          jQuery("#icon_" + flipbox_plus_container).css(
            "padding-top",
            new_flipbox["general_settings_front_icon_padding_top_compu"]
          );
        if (
          new_flipbox["general_settings_front_icon_padding_right_compu"] != ""
        )
          jQuery("#icon_" + flipbox_plus_container).css(
            "padding-right",
            new_flipbox["general_settings_front_icon_padding_right_compu"]
          );
        if (
          new_flipbox["general_settings_front_icon_padding_bottom_compu"] != ""
        )
          jQuery("#icon_" + flipbox_plus_container).css(
            "padding-bottom",
            new_flipbox["general_settings_front_icon_padding_bottom_compu"]
          );
        if (new_flipbox["general_settings_front_icon_padding_left_compu"] != "")
          jQuery("#icon_" + flipbox_plus_container).css(
            "padding-left",
            new_flipbox["general_settings_front_icon_padding_left_compu"]
          );

        //767
        if (new_flipbox["front_icon_size_value_ipad"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["front_icon_size_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_padding_top_ipad"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_' +
              flipbox_plus_container +
              " { padding-top:" +
              new_flipbox["general_settings_front_icon_padding_top_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_padding_right_ipad"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_' +
              flipbox_plus_container +
              " { padding-right:" +
              new_flipbox["general_settings_front_icon_padding_right_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_icon_padding_bottom_ipad"] != ""
        )
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_' +
              flipbox_plus_container +
              " { padding-bottom:" +
              new_flipbox["general_settings_front_icon_padding_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_padding_left_ipad"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #icon_' +
              flipbox_plus_container +
              " { padding-left:" +
              new_flipbox["general_settings_front_icon_padding_left_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["front_icon_size_value_phone"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["front_icon_size_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_padding_top_phone"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_' +
              flipbox_plus_container +
              " { padding-top:" +
              new_flipbox["general_settings_front_icon_padding_top_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_icon_padding_right_phone"] != ""
        )
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_' +
              flipbox_plus_container +
              " { padding-right:" +
              new_flipbox["general_settings_front_icon_padding_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_icon_padding_bottom_phone"] != ""
        )
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_' +
              flipbox_plus_container +
              " { padding-bottom:" +
              new_flipbox["general_settings_front_icon_padding_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_front_icon_padding_left_phone"] != "")
          jQuery("#icon_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #icon_' +
              flipbox_plus_container +
              " { padding-left:" +
              new_flipbox["general_settings_front_icon_padding_left_phone"] +
              "!important ;}}</style>"
          );

        //front_heading_text
        if (new_flipbox["front_heading_fontfamily_droptext"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "font-family",
            new_flipbox["front_heading_fontfamily_droptext"]
          );
        if (new_flipbox["front_heading_size_value_compu"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "font-size",
            new_flipbox["front_heading_size_value_compu"]
          );
        if (new_flipbox["front_heading_font_weight"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "font-weight",
            new_flipbox["front_heading_font_weight"]
          );
        if (new_flipbox["front_heading_font_transform"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "text-transform",
            new_flipbox["front_heading_font_transform"]
          );
        if (new_flipbox["front_heading_text_align"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "text-align",
            new_flipbox["front_heading_text_align"]
          );
        if (new_flipbox["front_heading_font_style"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "font-style",
            new_flipbox["front_heading_font_style"]
          );
        if (new_flipbox["front_heading_font_decoration"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "text-decoration",
            new_flipbox["front_heading_font_decoration"]
          );
        if (new_flipbox["front_heading_line_height_value_compu"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "line-height",
            new_flipbox["front_heading_line_height_value_compu"]
          );
        if (new_flipbox["front_heading_letter_spacing_value_compu"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "letter-spacing",
            new_flipbox["front_heading_letter_spacing_value_compu"]
          );
        if (new_flipbox["front_heading_color_input_hex"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "color",
            new_flipbox["front_heading_color_input_hex"]
          );

        if (
          new_flipbox["general_settings_front_heading_margin_top_compu"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_front_heading_margin_top_compu"]
          );
        if (
          new_flipbox["general_settings_front_heading_margin_right_compu"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_front_heading_margin_right_compu"]
          );
        if (
          new_flipbox["general_settings_front_heading_margin_bottom_compu"] !=
          ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_front_heading_margin_bottom_compu"]
          );
        if (
          new_flipbox["general_settings_front_heading_margin_left_compu"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_front_heading_margin_left_compu"]
          );

        //767
        if (new_flipbox["front_heading_size_value_ipad"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["front_heading_size_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_heading_line_height_value_ipad"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["front_heading_line_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_heading_letter_spacing_value_ipad"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["front_heading_letter_spacing_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_front_heading_margin_top_ipad"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_front_heading_margin_top_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_heading_margin_right_ipad"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_front_heading_margin_right_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_heading_margin_bottom_ipad"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_front_heading_margin_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_heading_margin_left_ipad"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_front_heading_margin_left_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["front_heading_size_value_phone"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["front_heading_size_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_heading_line_height_value_phone"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["front_heading_line_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_heading_letter_spacing_value_phone"] != "")
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["front_heading_letter_spacing_value_phone"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_front_heading_margin_top_phone"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_front_heading_margin_top_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_heading_margin_right_phone"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_front_heading_margin_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_heading_margin_bottom_phone"] !=
          ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_front_heading_margin_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_heading_margin_left_phone"] != ""
        )
          jQuery("#front_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_front_heading_margin_left_phone"] +
              "!important ;}}</style>"
          );

        //back_heading_text
        if (new_flipbox["back_heading_fontfamily_droptext"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "font-family": new_flipbox["back_heading_fontfamily_droptext"],
          });
        if (new_flipbox["back_heading_size_value_compu"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "font-size": new_flipbox["back_heading_size_value_compu"],
          });
        if (new_flipbox["back_heading_font_weight"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "font-weight": new_flipbox["back_heading_font_weight"],
          });
        if (new_flipbox["back_heading_font_transform"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "text-transform": new_flipbox["back_heading_font_transform"],
          });
        if (new_flipbox["back_heading_text_align"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "text-align": new_flipbox["back_heading_text_align"],
          });
        if (new_flipbox["back_heading_font_style"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css(
            "font-style",
            new_flipbox["back_heading_font_style"]
          );
        if (new_flipbox["back_heading_font_decoration"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "text-decoration": new_flipbox["back_heading_font_decoration"],
          });
        if (new_flipbox["back_heading_line_height_value_compu"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "line-height": new_flipbox["back_heading_line_height_value_compu"],
          });
        if (new_flipbox["back_heading_letter_spacing_value_compu"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            "letter-spacing":
              new_flipbox["back_heading_letter_spacing_value_compu"],
          });
        if (new_flipbox["back_heading_color_input_hex"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css({
            color: new_flipbox["back_heading_color_input_hex"],
          });

        if (new_flipbox["general_settings_back_heading_margin_top_compu"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_back_heading_margin_top_compu"]
          );
        if (
          new_flipbox["general_settings_back_heading_margin_right_compu"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_back_heading_margin_right_compu"]
          );
        if (
          new_flipbox["general_settings_back_heading_margin_bottom_compu"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_back_heading_margin_bottom_compu"]
          );
        if (
          new_flipbox["general_settings_back_heading_margin_left_compu"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_back_heading_margin_left_compu"]
          );

        //767
        if (new_flipbox["back_heading_size_value_ipad"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["back_heading_size_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_heading_line_height_value_ipad"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["back_heading_line_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_heading_letter_spacing_value_ipad"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["back_heading_letter_spacing_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_back_heading_margin_top_ipad"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_heading_margin_top_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_heading_margin_right_ipad"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_back_heading_margin_right_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_heading_margin_bottom_ipad"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_back_heading_margin_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_heading_margin_left_ipad"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_back_heading_margin_left_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["back_heading_size_value_phone"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["back_heading_size_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_heading_line_height_value_phone"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["back_heading_line_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_heading_letter_spacing_value_phone"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["back_heading_letter_spacing_value_phone"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_back_heading_margin_top_phone"] != "")
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_heading_margin_top_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_heading_margin_right_phone"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_back_heading_margin_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_heading_margin_bottom_phone"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_back_heading_margin_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_heading_margin_left_phone"] != ""
        )
          jQuery("#back_heading_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_heading_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_back_heading_margin_left_phone"] +
              "!important ;}}</style>"
          );

        //back_description_tption_text
        if (new_flipbox["back_description_fontfamily_droptext"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "font-family": new_flipbox["back_description_fontfamily_droptext"],
          });
        if (new_flipbox["back_description_size_value_compu"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "font-size": new_flipbox["back_description_size_value_compu"],
          });
        if (new_flipbox["back_description_font_weight"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "font-weight": new_flipbox["back_description_font_weight"],
          });
        if (new_flipbox["back_description_font_transform"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "text-transform": new_flipbox["back_description_font_transform"],
          });
        if (new_flipbox["back_description_text_align"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "text-align": new_flipbox["back_description_text_align"],
          });
        if (new_flipbox["back_description_font_style"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css(
            "font-style",
            new_flipbox["back_description_font_style"]
          );
        if (new_flipbox["back_description_font_decoration"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "text-decoration": new_flipbox["back_description_font_decoration"],
          });
        if (new_flipbox["back_description_line_height_value_compu"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "line-height":
              new_flipbox["back_description_line_height_value_compu"],
          });
        if (new_flipbox["back_description_letter_spacing_value_compu"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            "letter-spacing":
              new_flipbox["back_description_letter_spacing_value_compu"],
          });
        if (new_flipbox["back_description_color_input_hex"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).css({
            color: new_flipbox["back_description_color_input_hex"],
          });

        if (
          new_flipbox["general_settings_back_description_margin_top_compu"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_back_description_margin_top_compu"]
          );
        if (
          new_flipbox["general_settings_back_description_margin_right_compu"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_back_description_margin_right_compu"]
          );
        if (
          new_flipbox[
            "general_settings_back_description_margin_bottom_compu"
          ] != ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_back_description_margin_bottom_compu"]
          );
        if (
          new_flipbox["general_settings_back_description_margin_left_compu"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_back_description_margin_left_compu"]
          );

        //767
        if (new_flipbox["back_description_size_value_ipad"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["back_description_size_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_description_line_height_value_ipad"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["back_description_line_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_description_letter_spacing_value_ipad"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["back_description_letter_spacing_value_ipad"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_back_description_margin_top_ipad"] != ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_description_margin_top_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_description_margin_right_ipad"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox[
                "general_settings_back_description_margin_right_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_description_margin_bottom_ipad"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_back_description_margin_bottom_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_description_margin_left_ipad"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox[
                "general_settings_back_description_margin_left_ipad"
              ] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["back_description_size_value_phone"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["back_description_size_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_description_line_height_value_phone"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["back_description_line_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_description_letter_spacing_value_phone"] != "")
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["back_description_letter_spacing_value_phone"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_back_description_margin_top_phone"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox[
                "general_settings_back_description_margin_top_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_description_margin_right_phone"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox[
                "general_settings_back_description_margin_right_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_description_margin_bottom_phone"
          ] != ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_back_description_margin_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_description_margin_left_phone"] !=
          ""
        )
          jQuery("#back_description_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_description_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox[
                "general_settings_back_description_margin_left_phone"
              ] +
              "!important ;}}</style>"
          );

        //front_heading_description
        if (new_flipbox["front_description_fontfamily_droptext"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "font-family": new_flipbox["front_description_fontfamily_droptext"],
          });
        if (new_flipbox["front_description_size_value_compu"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "font-size": new_flipbox["front_description_size_value_compu"],
          });
        if (new_flipbox["front_description_font_weight"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "font-weight": new_flipbox["front_description_font_weight"],
          });
        if (new_flipbox["front_description_font_transform"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "text-transform": new_flipbox["front_description_font_transform"],
          });
        if (new_flipbox["front_description_text_align"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "text-align": new_flipbox["front_description_text_align"],
          });
        if (new_flipbox["front_description_font_style"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css(
            "font-style",
            new_flipbox["front_description_font_style"]
          );
        if (new_flipbox["front_description_font_decoration"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "text-decoration": new_flipbox["front_description_font_decoration"],
          });
        if (new_flipbox["front_description_line_height_value_compu"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "line-height":
              new_flipbox["front_description_line_height_value_compu"],
          });
        if (new_flipbox["front_description_letter_spacing_value_compu"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            "letter-spacing":
              new_flipbox["front_description_letter_spacing_value_compu"],
          });
        if (new_flipbox["front_description_color_input_hex"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).css({
            color: new_flipbox["front_description_color_input_hex"],
          });

        if (
          new_flipbox["general_settings_front_description_margin_top_compu"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_front_description_margin_top_compu"]
          );
        if (
          new_flipbox[
            "general_settings_front_description_margin_right_compu"
          ] != ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_front_description_margin_right_compu"]
          );
        if (
          new_flipbox[
            "general_settings_front_description_margin_bottom_compu"
          ] != ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox[
              "general_settings_front_description_margin_bottom_compu"
            ]
          );
        if (
          new_flipbox["general_settings_front_description_margin_left_compu"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_front_description_margin_left_compu"]
          );

        //767
        if (new_flipbox["front_description_size_value_ipad"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["front_description_size_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_description_line_height_value_ipad"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["front_description_line_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_description_letter_spacing_value_ipad"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["front_description_letter_spacing_value_ipad"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_front_description_margin_top_ipad"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox[
                "general_settings_front_description_margin_top_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_description_margin_right_ipad"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox[
                "general_settings_front_description_margin_right_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_front_description_margin_bottom_ipad"
          ] != ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_front_description_margin_bottom_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_description_margin_left_ipad"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox[
                "general_settings_front_description_margin_left_ipad"
              ] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["front_description_size_value_phone"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["front_description_size_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_description_line_height_value_phone"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["front_description_line_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["front_description_letter_spacing_value_phone"] != "")
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox["front_description_letter_spacing_value_phone"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_front_description_margin_top_phone"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox[
                "general_settings_front_description_margin_top_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_front_description_margin_right_phone"
          ] != ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox[
                "general_settings_front_description_margin_right_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_front_description_margin_bottom_phone"
          ] != ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_front_description_margin_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_front_description_margin_left_phone"] !=
          ""
        )
          jQuery("#front_heading_description_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #front_heading_description_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox[
                "general_settings_front_description_margin_left_phone"
              ] +
              "!important ;}}</style>"
          );

        //back_section_button_text
        if (new_flipbox["back_button_text_section_fontfamily_droptext"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "font-family":
              new_flipbox["back_button_text_section_fontfamily_droptext"],
          });
        if (new_flipbox["back_button_text_section_size_value_compu"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "font-size":
              new_flipbox["back_button_text_section_size_value_compu"],
          });
        if (new_flipbox["back_button_text_section_font_weight"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "font-weight": new_flipbox["back_button_text_section_font_weight"],
          });
        if (new_flipbox["back_button_text_section_font_transform"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "text-transform":
              new_flipbox["back_button_text_section_font_transform"],
          });
        if (new_flipbox["back_button_text_section_font_style"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css(
            "font-style",
            new_flipbox["back_button_text_section_font_style"]
          );
        if (new_flipbox["back_button_text_section_font_decoration"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "text-decoration":
              new_flipbox["back_button_text_section_font_decoration"],
          });
        if (new_flipbox["back_button_text_section_text_align"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "text-align": new_flipbox["back_button_text_section_text_align"],
          });
        if (
          new_flipbox["back_button_text_section_line_height_value_compu"] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "line-height":
              new_flipbox["back_button_text_section_line_height_value_compu"],
          });
        if (
          new_flipbox["back_button_text_section_letter_spacing_value_compu"] !=
          ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            "letter-spacing":
              new_flipbox[
                "back_button_text_section_letter_spacing_value_compu"
              ],
          });
        if (new_flipbox["back_button_text_section_color_input_hex"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).css({
            color: new_flipbox["back_button_text_section_color_input_hex"],
          });

        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_top_compu"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox[
              "general_settings_back_button_text_section_margin_top_compu"
            ]
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_right_compu"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox[
              "general_settings_back_button_text_section_margin_right_compu"
            ]
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_bottom_compu"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox[
              "general_settings_back_button_text_section_margin_bottom_compu"
            ]
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_left_compu"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox[
              "general_settings_back_button_text_section_margin_left_compu"
            ]
          );

        //767
        if (new_flipbox["back_button_text_section_size_value_ipad"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["back_button_text_section_size_value_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["back_button_text_section_line_height_value_ipad"] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["back_button_text_section_line_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["back_button_text_section_letter_spacing_value_ipad"] !=
          ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox[
                "back_button_text_section_letter_spacing_value_ipad"
              ] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_top_ipad"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_top_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_right_ipad"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_right_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_bottom_ipad"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_bottom_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_left_ipad"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_left_ipad"
              ] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["back_button_text_section_size_value_phone"] != "")
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { font-size:" +
              new_flipbox["back_button_text_section_size_value_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["back_button_text_section_line_height_value_phone"] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { line-height:" +
              new_flipbox["back_button_text_section_line_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["back_button_text_section_letter_spacing_value_phone"] !=
          ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { letter-spacing:" +
              new_flipbox[
                "back_button_text_section_letter_spacing_value_phone"
              ] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_top_phone"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_top_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_right_phone"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_right_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_bottom_phone"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_back_button_text_section_margin_left_phone"
          ] != ""
        )
          jQuery("#back_section_button_text_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_text_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox[
                "general_settings_back_button_text_section_margin_left_phone"
              ] +
              "!important ;}}</style>"
          );

        //back_section_button_button
        if (new_flipbox["back_button_color_color_input_hex"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "background-color":
              new_flipbox["back_button_color_color_input_hex"],
          });
        if (new_flipbox["back_button_width_value_compu"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            width: new_flipbox["back_button_width_value_compu"],
          });
        if (new_flipbox["back_button_height_value_compu"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "padding-top": new_flipbox["back_button_height_value_compu"],
          });
        if (new_flipbox["back_button_height_value_compu"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "padding-bottom": new_flipbox["back_button_height_value_compu"],
          });

        if (
          new_flipbox["border_color_back_button_border_color_input_hex"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-color":
              new_flipbox["border_color_back_button_border_color_input_hex"],
          });
        if (new_flipbox["border_back_button_border_style_selector"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-style":
              new_flipbox["border_back_button_border_style_selector"],
          });
        if (
          new_flipbox["border_back_button_border_thickness_value_compu"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-width":
              new_flipbox["border_back_button_border_thickness_value_compu"],
          });

        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_top_compu"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-top-left-radius":
              new_flipbox[
                "general_settings_border_back_button_border_radius_top_compu"
              ],
          });
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_right_compu"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-top-right-radius":
              new_flipbox[
                "general_settings_border_back_button_border_radius_right_compu"
              ],
          });
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_bottom_compu"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-bottom-right-radius":
              new_flipbox[
                "general_settings_border_back_button_border_radius_bottom_compu"
              ],
          });
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_left_compu"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css({
            "border-bottom-left-radius":
              new_flipbox[
                "general_settings_border_back_button_border_radius_left_compu"
              ],
          });

        if (
          new_flipbox["general_settings_back_button_position_top_compu"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_back_button_position_top_compu"]
          );
        if (
          new_flipbox["general_settings_back_button_position_right_compu"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_back_button_position_right_compu"]
          );
        if (
          new_flipbox["general_settings_back_button_position_bottom_compu"] !=
          ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_back_button_position_bottom_compu"]
          );
        if (
          new_flipbox["general_settings_back_button_position_left_compu"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_back_button_position_left_compu"]
          );

        //767
        if (new_flipbox["border_back_button_border_thickness_value_ipad"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_back_button_border_thickness_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_button_width_value_ipad"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["back_button_width_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_button_height_value_ipad"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { padding-top:" +
              new_flipbox["back_button_height_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_button_height_value_ipad"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { padding-bottom:" +
              new_flipbox["back_button_height_value_ipad"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_top_ipad"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_top_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_right_ipad"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_right_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_bottom_ipad"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_bottom_ipad"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_left_ipad"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_left_ipad"
              ] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_back_button_position_top_ipad"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_button_position_top_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_button_position_right_ipad"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_back_button_position_right_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_button_position_bottom_ipad"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_back_button_position_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_button_position_left_ipad"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_back_button_position_left_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (
          new_flipbox["border_back_button_border_thickness_value_phone"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_back_button_border_thickness_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_button_width_value_phone"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["back_button_width_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_button_height_value_phone"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { padding-top:" +
              new_flipbox["back_button_height_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_button_height_value_phone"] != "")
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { padding-bottom:" +
              new_flipbox["back_button_height_value_phone"] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_top_phone"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_top_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_right_phone"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_right_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_bottom_phone"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox[
            "general_settings_border_back_button_border_radius_left_phone"
          ] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox[
                "general_settings_border_back_button_border_radius_left_phone"
              ] +
              "!important ;}}</style>"
          );

        if (
          new_flipbox["general_settings_back_button_position_top_phone"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_button_position_top_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_button_position_right_phone"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_back_button_position_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_button_position_bottom_phone"] !=
          ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox[
                "general_settings_back_button_position_bottom_phone"
              ] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_back_button_position_left_phone"] != ""
        )
          jQuery("#back_section_button_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_section_button_' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_back_button_position_left_phone"] +
              "!important ;}}</style>"
          );

        //back_info
        if (new_flipbox["general_settings_back_padding_top_compu"] != "")
          jQuery("#back_info_" + flipbox_plus_container).css(
            "padding-top",
            new_flipbox["general_settings_back_padding_top_compu"]
          );
        if (new_flipbox["general_settings_back_padding_right_compu"] != "")
          jQuery("#back_info_" + flipbox_plus_container).css(
            "padding-right",
            new_flipbox["general_settings_back_padding_right_compu"]
          );
        if (new_flipbox["general_settings_back_padding_bottom_compu"] != "")
          jQuery("#back_info_" + flipbox_plus_container).css(
            "padding-bottom",
            new_flipbox["general_settings_back_padding_bottom_compu"]
          );
        if (new_flipbox["general_settings_back_padding_left_compu"] != "")
          jQuery("#back_info_" + flipbox_plus_container).css(
            "padding-left",
            new_flipbox["general_settings_back_padding_left_compu"]
          );

        //767
        if (new_flipbox["general_settings_back_padding_top_ipad"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_info' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_padding_top_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_padding_right_ipad"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_info' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_back_padding_right_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_padding_bottom_ipad"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_info' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_back_padding_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_padding_left_ipad"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_info' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_back_padding_left_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["general_settings_back_padding_top_phone"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_info' +
              flipbox_plus_container +
              " { margin-top:" +
              new_flipbox["general_settings_back_padding_top_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_padding_right_phone"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_info' +
              flipbox_plus_container +
              " { margin-right:" +
              new_flipbox["general_settings_back_padding_right_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_padding_bottom_phone"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_info' +
              flipbox_plus_container +
              " { margin-bottom:" +
              new_flipbox["general_settings_back_padding_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_back_padding_left_phone"] != "")
          jQuery("#back_info_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_info' +
              flipbox_plus_container +
              " { margin-left:" +
              new_flipbox["general_settings_back_padding_left_phone"] +
              "!important ;}}</style>"
          );

        //back_preview_image
        if (new_flipbox["back_overlay_width_value_compu"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "width",
            new_flipbox["back_overlay_width_value_compu"]
          );
        if (new_flipbox["back_overlay_height_value_compu"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "height",
            new_flipbox["back_overlay_height_value_compu"]
          );

        if (new_flipbox["back_solid_color_color_input_hex"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "background-color",
            new_flipbox["back_solid_color_color_input_hex"]
          );

        if (new_flipbox["border_back_style_selector"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-style",
            new_flipbox["border_back_style_selector"]
          );
        if (new_flipbox["border_back_thickness_value_compu"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-width",
            new_flipbox["border_back_thickness_value_compu"]
          );
        if (new_flipbox["border_color_back_color_input_hex"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-color",
            new_flipbox["border_color_back_color_input_hex"]
          );

        if (new_flipbox["general_settings_border_back_radius_top_compu"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-top-left-radius",
            new_flipbox["general_settings_border_back_radius_top_compu"]
          );
        if (
          new_flipbox["general_settings_border_back_radius_right_compu"] != ""
        )
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-top-right-radius",
            new_flipbox["general_settings_border_back_radius_right_compu"]
          );
        if (
          new_flipbox["general_settings_border_back_radius_bottom_compu"] != ""
        )
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-bottom-right-radius",
            new_flipbox["general_settings_border_back_radius_bottom_compu"]
          );
        if (new_flipbox["general_settings_border_back_radius_left_compu"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).css(
            "border-bottom-left-radius",
            new_flipbox["general_settings_border_back_radius_left_compu"]
          );

        //767
        if (new_flipbox["back_overlay_width_value_ipad"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["back_overlay_width_value_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_overlay_height_value_ipad"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { height:" +
              new_flipbox["back_overlay_height_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["border_back_thickness_value_ipad"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_back_thickness_value_ipad"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_border_back_radius_top_ipad"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox["general_settings_border_back_radius_top_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_border_back_radius_right_ipad"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox["general_settings_border_back_radius_right_ipad"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_back_radius_bottom_ipad"] != ""
        )
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox["general_settings_border_back_radius_bottom_ipad"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_border_back_radius_left_ipad"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 767px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox["general_settings_border_back_radius_left_ipad"] +
              "!important ;}}</style>"
          );

        //480
        if (new_flipbox["back_overlay_width_value_phone"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { width:" +
              new_flipbox["back_overlay_width_value_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["back_overlay_height_value_phone"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { height:" +
              new_flipbox["back_overlay_height_value_phone"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["border_back_thickness_value_phone"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-width:" +
              new_flipbox["border_back_thickness_value_phone"] +
              "!important ;}}</style>"
          );

        if (new_flipbox["general_settings_border_back_radius_top_phone"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-top-left-radius:" +
              new_flipbox["general_settings_border_back_radius_top_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_back_radius_right_phone"] != ""
        )
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-top-right-radius:" +
              new_flipbox["general_settings_border_back_radius_right_phone"] +
              "!important ;}}</style>"
          );
        if (
          new_flipbox["general_settings_border_back_radius_bottom_phone"] != ""
        )
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-bottom-right-radius:" +
              new_flipbox["general_settings_border_back_radius_bottom_phone"] +
              "!important ;}}</style>"
          );
        if (new_flipbox["general_settings_border_back_radius_left_phone"] != "")
          jQuery("#back_preview_image_" + flipbox_plus_container).append(
            '<style type="text/css">@media screen and (max-width: 480px){ #back_preview_image_' +
              flipbox_plus_container +
              " { border-bottom-left-radius:" +
              new_flipbox["general_settings_border_back_radius_left_phone"] +
              "!important ;}}</style>"
          );

        //overlay
        if (new_flipbox["general_settings_back_margin_top_compu"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_back_margin_top_compu"]
          );
        if (new_flipbox["general_settings_back_margin_right_compu"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_back_margin_right_compu"]
          );
        if (new_flipbox["general_settings_back_margin_bottom_compu"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_back_margin_bottom_compu"]
          );
        if (new_flipbox["general_settings_back_margin_left_compu"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_back_margin_left_compu"]
          );

        //767
        if (new_flipbox["general_settings_back_margin_top_ipad"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_back_margin_top_ipad"]
          );
        if (new_flipbox["general_settings_back_margin_right_ipad"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_back_margin_right_ipad"]
          );
        if (new_flipbox["general_settings_back_margin_bottom_ipad"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_back_margin_bottom_ipad"]
          );
        if (new_flipbox["general_settings_back_margin_left_ipad"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_back_margin_left_ipad"]
          );

        //480
        if (new_flipbox["general_settings_back_margin_top_phone"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-top",
            new_flipbox["general_settings_back_margin_top_phone"]
          );
        if (new_flipbox["general_settings_back_margin_right_phone"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-right",
            new_flipbox["general_settings_back_margin_right_phone"]
          );
        if (new_flipbox["general_settings_back_margin_bottom_phone"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-bottom",
            new_flipbox["general_settings_back_margin_bottom_phone"]
          );
        if (new_flipbox["general_settings_back_margin_left_phone"] != "")
          jQuery("#overlay_" + flipbox_plus_container).css(
            "margin-left",
            new_flipbox["general_settings_back_margin_left_phone"]
          );
      });
    }
  });


});
