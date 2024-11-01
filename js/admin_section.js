var animation_duration = "";

var animation_time_function = "";

jQuery(document).ready(function ($) {
  for (container in containers) {
    if (containers[container]["back_button_title"] == "") {
      jQuery(
        "#" + containers[container]["container_index"] + "_back_section_button"
      ).css({ display: "none" });
    } else {
      jQuery(
        "#" + containers[container]["container_index"] + "_back_section_button"
      ).css({ display: "block" });
    }
    jQuery(
      "#" + containers[container]["container_index"] + "_preview_image"
    ).css(
      "background-image",
      "url('" + containers[container]["myprefix_image_id"] + "')"
    );

    jQuery(
      "#" + containers[container]["container_index"] + "_front_image_overlay"
    ).attr(
      "src", 
      containers[container]["myprefix_image_id_overlay"]    
    );

    jQuery(
      "#" + containers[container]["container_index"] + "_back_preview_image"
    ).css(
      "background-image",
      "url('" + containers[container]["back_myprefix_image_id"] + "')"
    );

    jQuery(
      "#" + containers[container]["container_index"] + "_back_image_overlay"
    ).attr(
      "src", 
      containers[container]["back_myprefix_image_id_overlay"]    
    );
  }

  //<<<<<<<<<<<<<GENERAL SETTINGS>>>>>>>>>>>>>>>>>>//

  jQuery(".container").css({ display: "block" });

  var aplicar_todos_margin = true;


  //Display block a todos los Compu de responsive dashicons
  jQuery(".compu").css({ display: "block" });

  input_four_elemnents(
    "margin",
    ".container",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    false,
    false,
    false,
    false,
    false
  );

  input_four_elemnents(
    "padding",
    ".front_info",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    false,
    false,
    false,
    false,
    false
  );

  // /***********************************************Image Height****************************************************** */

  entire_border_section("front", ".front_preview_image", false);

  color_picker_using_html(
    "front_solid_color",
    ".front_preview_image",
    "background-color",
    false
  );

  var all_objt_styles = [];

  function entire_border_section(reemplaza_aqui, objetivo, hover) {
    var hover = hover || false;

    var my_style = "";

    if (hover) all_objt_styles[objetivo] = [];

    ////Border Style/////
    if (!hover)
      jQuery(objetivo).css({
        "border-style":
          new_flipbox["border_" + reemplaza_aqui + "_style_selector"],
      });
    else {
      my_style =
        "border-style : " +
        new_flipbox["border_" + reemplaza_aqui + "_style_selector"];
      all_objt_styles[objetivo]["border-style"] = my_style;
      actualizar_hover();
    }

    jQuery("#border_" + reemplaza_aqui + "_style_selector").on(
      "input",
      function () {
        if (!hover)
          jQuery(objetivo).css({ "border-style": jQuery(this).val() });
        else {
          my_style = "border-style : " + jQuery(this).val();
          all_objt_styles[objetivo]["border-style"] = my_style;

          actualizar_hover();
        }
      }
    );

    ////Color////
    color_picker_using_html(
      "border_color_" + reemplaza_aqui,
      objetivo,
      "border-color",
      hover
    );

    ////Width////
    barra_slider_con_numero(
      "border_" + reemplaza_aqui + "_thickness",
      objetivo,
      "border-width",
      50,
      500,
      10,
      50,
      0,
      0,
      0,
      0,
      false,
      hover
    );

    ////Radius////
    input_four_elemnents(
      "border_" + reemplaza_aqui + "_radius",
      objetivo,
      "border-top-left-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      false,
      false,
      false,
      false,
      hover
    );
  }

  function actualizar_hover() {
    var hover_styles = "";

    for (var objetivo in all_objt_styles) {
      for (var propiedades in all_objt_styles[objetivo]) {
        hover_styles =
          hover_styles +
          all_objt_styles[objetivo][propiedades] +
          " !important;";
      }
      aplicar_cambios(hover_styles, objetivo);
      hover_styles = "";
    }

    function aplicar_cambios(hover_styles, objetivo) {
      jQuery(
        "<style type='text/css'> .redbold{ " + hover_styles + "} </style>"
      ).appendTo("body");
      jQuery(objetivo).hover(
        function () {
          jQuery(objetivo).addClass("redbold");
        },
        function () {
          jQuery(objetivo).removeClass("redbold");
        }
      );
    }
  }

  function load_google_fonts(font_families) {
    for (cont = 0; cont < font_families.length; cont++) {
      item = font_families[cont];
      
      if(!check_if_includes_system_fonts(item.replace(/\ /g, '+'))) {
        jQuery("head").append(
          '<link href="https://fonts.googleapis.com/css2?family=' +
            item +
            '&display=swap" rel="stylesheet">'
        );
      }
    }
  }

  var bool3 = true;
  jQuery("#dropdown_list").scroll(function () {
    if (bool3) {
      esperar("dropdown_list");
      bool3 = false;
    }
  });

  var y;
  function esperar(lista) {
    setTimeout(function () {
      y = document.getElementById(lista).scrollHeight;
      bool3 = true;
      var resultado = calcular_scroll_porciento(
        jQuery("#" + lista).scrollTop(),
        y - 200
      );

      load_google_fonts(
        devlover_array_visible_scroll(font_families, resultado)
      );
    }, 500);
  }

  function calcular_scroll_porciento(position, max_scroll) {
    return (position * 100) / max_scroll;
  }

  var array_elements;
  var array_element_to_left;
  var visible_font_families = [];
  var already_loaded_font_families = [];

  function devlover_array_visible_scroll(font_families_array, porciento) {
    array_elements = font_families_array.length - 1;
    array_element_to_left = Math.round((array_elements * porciento) / 100) - 6;
    visible_font_families = [];
    for (cont = 0; cont <= 11; cont++) {
      if (
        array_element_to_left < 0 ||
        array_element_to_left > font_families_array.length - 1
      ) {
        //No hacer nada
      } else {
        if (
          already_loaded_font_families.includes(
            font_families_array[array_element_to_left]
          ) ||
          check_if_includes_system_fonts(
            font_families_array[array_element_to_left]
          )
        ) {
          //Nada
        } else {
          visible_font_families.push(
            font_families_array[array_element_to_left]
          );
          already_loaded_font_families.push(
            font_families_array[array_element_to_left]
          );
        }
      }
      array_element_to_left++;
    }

    return visible_font_families;
  }

  function check_if_includes_system_fonts(font_family) {
    switch (font_family) {
      case "Arial":
        return true;
      case "Helvetica+Neue":
        return true;
      case "Courier+New":
        return true;
      case "Times+New+Roman":
        return true;
      case "Comic+Sans+MS":
        return true;
      case "Verdana":
        return true;
      case "Impact":
        return true;
      case "cursive":
        return true;
      case "inherit":
        return true;
      default:
        return false;
    }
  }

  //Interaccionar con el Modal (Front Heading Typo)
  var modalactivo = false;
  jQuery("#heading_front_typo").click(function (e) {
    e.preventDefault();
    if (modalactivo) {
      jQuery("#modal_front_typo").css({ display: "none" });
      modalactivo = false;
    } else {
      jQuery("#modal_front_typo").css({ display: "block" });
      modalactivo = true;
    }
  });

  jQuery(".close").click(function () {
    jQuery("#modal_front_typo").css({ display: "none" });
    modalactivo = false;
  });

  //Interaccionar con el Modal (Text Shadown)
  var modalactivo_text_shadow = false;
  jQuery("#heading_front_text_shadow").click(function (e) {
    e.preventDefault();
    if (modalactivo_text_shadow) {
      jQuery("#modal_front_text_shadow").css({ display: "none" });
      modalactivo_text_shadow = false;
    } else {
      jQuery("#modal_front_text_shadow").css({ display: "block" });
      modalactivo_text_shadow = true;
    }
  });

  jQuery(".close").click(function () {
    jQuery("#modal_front_text_shadow").css({ display: "none" });
    modalactivo_text_shadow = false;
  });

  jQuery("#font-selector").change(function () {
    var selected = jQuery("#font-selector option:selected").text();
    jQuery(this).css("font-family", selected);
  });

  function typography_section(reemplaza_aqui, objetivo, hover) {
    hover = hover || false;

    var my_style = "";

    if (hover) all_objt_styles[objetivo] = [];

    var objetivo_parent = jQuery(objetivo).parent();

    //Interaccionar con el Modal (Front Description Typo)
    var modalactivo = false;
    jQuery("#" + reemplaza_aqui + "_typo").click(function (e) {
      e.preventDefault();
      if (modalactivo) {
        jQuery("#" + reemplaza_aqui + "_modal_typo").css({ display: "none" });
        modalactivo = false;
      } else {
        jQuery("#" + reemplaza_aqui + "_modal_typo").css({ display: "block" });
        modalactivo = true;
      }
    });

    jQuery(".close").click(function () {
      jQuery("#" + reemplaza_aqui + "_modal_typo").css({ display: "none" });
      modalactivo = false;
    });

    ////////////Font-Family////////////
    jQuery("#" + reemplaza_aqui + "_dropdown_btn").click(function () {
      document.getElementById(reemplaza_aqui + "_myDropdown").classList.toggle("show");
      document.getElementById(reemplaza_aqui + "_dropdown_btn").classList.toggle("active_dropdown_btn");
      document.getElementById(reemplaza_aqui + "_fontfamily_droptext").classList.toggle("active_droptext");
    });
    var abajo = true;
    jQuery("#" + reemplaza_aqui + "_dropdown_btn").click(function () {
      if (abajo == false) {
        jQuery("#" + reemplaza_aqui + "_dropdown_btn_icon").removeClass(
          "dashicons-arrow-up"
        );
        jQuery("#" + reemplaza_aqui + "_dropdown_btn_icon").addClass(
          "dashicons-arrow-down"
        );
        abajo = true;
      } else {
        jQuery("#" + reemplaza_aqui + "_dropdown_btn_icon").removeClass(
          "dashicons-arrow-down"
        );
        jQuery("#" + reemplaza_aqui + "_dropdown_btn_icon").addClass(
          "dashicons-arrow-up"
        );
        abajo = false;
      }
    });

    jQuery("." + reemplaza_aqui + "_families").click(function (e) {
      document
        .getElementById(reemplaza_aqui + "_myDropdown")
        .classList.toggle("show");
      document
        .getElementById(reemplaza_aqui + "_dropdown_btn")
        .classList.toggle("active_dropdown_btn");
      document
        .getElementById(reemplaza_aqui + "_fontfamily_droptext")
        .classList.toggle("active_droptext");
      jQuery("#" + reemplaza_aqui + "_fontfamily_droptext").val(
        e.target.id.replace(/\_/g, " ")
      );
      jQuery("#" + reemplaza_aqui + "_fontfamily_droptext").css({
        "font-family": e.target.id.replace(/\_/g, " "),
      });
      if (!hover)
        jQuery(objetivo).css({
          "font-family": e.target.id.replace(/\_/g, " "),
        });
      else {
        my_style = "font-family : " + e.target.id.replace(/\_/g, " ");
        all_objt_styles[objetivo]["font-family"] = my_style;
        actualizar_hover();
      }

      if (
        already_loaded_font_families.includes(
          e.target.id.replace(/\_/g, "+")
        ) ||
        check_if_includes_system_fonts(e.target.id.replace(/\_/g, "+"))
      ) {
      } 
      else {
        load_google_fonts([e.target.id.replace(/\_/g, "+")]);
      }
    });

    bool3 = true;
    jQuery("#" + reemplaza_aqui + "_dropdown_list").scroll(function () {
      if (bool3) {
        esperar(reemplaza_aqui + "_dropdown_list");
        bool3 = false;
      }
    });

    if (!hover)
      jQuery(objetivo).css({
        "font-family": new_flipbox[
          reemplaza_aqui + "_fontfamily_droptext"
        ].replace(/\+/g, " "),
      });
    else {
      my_style =
        "font-family : " +
        new_flipbox[reemplaza_aqui + "_fontfamily_droptext"].replace(
          /\+/g,
          " "
        );
      all_objt_styles[objetivo]["font-family"] = my_style;
      actualizar_hover();
    }
    load_google_fonts([new_flipbox[reemplaza_aqui + "_fontfamily_droptext"]]);

    ////////////Size////////////
    barra_slider_con_numero(
      reemplaza_aqui + "_size",
      objetivo,
      "font-size",
      100,
      1000,
      20,
      500,
      0,
      0,
      0,
      0,
      "",
      hover
    );

    ////////////Weight////////////
    jQuery("#" + reemplaza_aqui + "_font_weight").on("input", function () {
      if (!hover) jQuery(objetivo).css({ "font-weight": this.value });
      else {
        my_style = "font-weight : " + this.value;
        all_objt_styles[objetivo]["font-weight"] = my_style;
        actualizar_hover();
      }
    });
    if (!hover)
      jQuery(objetivo).css({
        "font-weight": new_flipbox[reemplaza_aqui + "_font_weight"],
      });
    else {
      my_style =
        "font-weight : " + new_flipbox[reemplaza_aqui + "_font_weight"];
      all_objt_styles[objetivo]["font-weight"] = my_style;
      actualizar_hover();
    }

    ////////////Transform////////////
    jQuery("#" + reemplaza_aqui + "_font_transform").on("input", function () {
      if (!hover) jQuery(objetivo).css({ "text-transform": this.value });
      else {
        my_style = "text-transform : " + this.value;
        all_objt_styles[objetivo]["text-transform"] = my_style;
        actualizar_hover();
      }
    });
    if (!hover)
      jQuery(objetivo).css({
        "text-transform": new_flipbox[reemplaza_aqui + "_font_transform"],
      });
    else {
      my_style =
        "text-transform : " + new_flipbox[reemplaza_aqui + "_font_transform"];
      all_objt_styles[objetivo]["text-transform"] = my_style;
      actualizar_hover();
    }

    ////////////Style////////////
    jQuery("#" + reemplaza_aqui + "_font_style").on("input", function () {
      if (!hover) jQuery(objetivo).css({ "font-style": this.value });
      else {
        my_style = "font-style : " + this.value;
        all_objt_styles[objetivo]["font-style"] = my_style;
        actualizar_hover();
      }
    });
    if (!hover)
      jQuery(objetivo).css({
        "font-style": new_flipbox[reemplaza_aqui + "_font_style"],
      });
    else {
      my_style = "font-style : " + new_flipbox[reemplaza_aqui + "_font_style"];
      all_objt_styles[objetivo]["font-style"] = my_style;
      actualizar_hover();
    }

    ////////////Decoration////////////
    jQuery("#" + reemplaza_aqui + "_font_decoration").on("input", function () {
      if (!hover) jQuery(objetivo).css({ "text-decoration": this.value });
      else {
        my_style = "text-decoration : " + this.value;
        all_objt_styles[objetivo]["text-decoration"] = my_style;
        actualizar_hover();
      }
    });
    if (!hover)
      jQuery(objetivo).css({
        "text-decoration": new_flipbox[reemplaza_aqui + "_font_decoration"],
      });
    else {
      my_style =
        "text-decoration : " + new_flipbox[reemplaza_aqui + "_font_decoration"];
      all_objt_styles[objetivo]["text-decoration"] = my_style;
      actualizar_hover();
    }

    ////////////Text-Align////////////
    jQuery("#" + reemplaza_aqui + "_text_align").on("input", function () {
      if (!hover) jQuery(objetivo).css({ "text-align": this.value });
      else {
        my_style = "text-align : " + this.value;
        all_objt_styles[objetivo]["text-align"] = my_style;
        actualizar_hover();
      }
    });
    if (!hover)
      jQuery(objetivo).css({
        "text-align": new_flipbox[reemplaza_aqui + "_text_align"],
      });
    else {
      my_style = "text-align : " + new_flipbox[reemplaza_aqui + "_text_align"];
      all_objt_styles[objetivo]["text-align"] = my_style;
      actualizar_hover();
    }

    ////////////Line-Height////////////
    barra_slider_con_numero(
      reemplaza_aqui + "_line_height",
      objetivo,
      "line-height",
      200,
      500,
      20,
      100,
      0,
      0,
      0,
      0,
      "",
      hover
    );

    ////////////Letter-Spacing////////////
    barra_slider_con_numero(
      reemplaza_aqui + "_letter_spacing",
      objetivo,
      "letter-spacing",
      200,
      500,
      20,
      100,
      0,
      0,
      0,
      0,
      "",
      hover
    );

    jQuery("#" + reemplaza_aqui + "_myInput").keyup(function () {
      var input, filter, ul, li, a, i;
      input = document.getElementById(reemplaza_aqui + "_myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById(reemplaza_aqui + "_myDropdown");
      a = div.getElementsByTagName("span");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    });
  }

  function text_shadow(reemplaza_aqui, objetivo, hover) {
    hover = hover || false;
    var my_style = "";
    if (hover) all_objt_styles[objetivo] = [];

    var modalactivo_text_shadow = false;
    jQuery("#" + reemplaza_aqui + "_text_shadow").click(function (e) {
      e.preventDefault();
      if (modalactivo_text_shadow) {
        jQuery("#" + reemplaza_aqui + "_modal_text_shadow").css({
          display: "none",
        });
        modalactivo_text_shadow = false;
      } else {
        jQuery("#" + reemplaza_aqui + "_modal_text_shadow").css({
          display: "block",
        });
        modalactivo_text_shadow = true;
      }
    });
    jQuery(".close").click(function () {
      jQuery("#" + reemplaza_aqui + "_modal_text_shadow").css({
        display: "none",
      });
      modalactivo_text_shadow = false;
    });

    color_picker_using_html(
      reemplaza_aqui + "_text_shadow",
      objetivo,
      "text-shadowV2",
      hover
    );

    aplicar_blur(reemplaza_aqui + "_text_shadow", objetivo, hover);
    aplicar_horizontal(reemplaza_aqui + "_text_shadow", objetivo, hover);
    aplicar_vertical(reemplaza_aqui + "_text_shadow", objetivo, hover);

    var color =
      jQuery("#" + reemplaza_aqui + "_text_shadow_color_input_hex").val() ||
      "none";
    var blur =
      jQuery("#" + reemplaza_aqui + "_text_shadow_blur_myRange_number").val() ||
      "0";
    var horizontal =
      jQuery(
        "#" + reemplaza_aqui + "_text_shadow_horizontal_myRange_number"
      ).val() || "0";
    var vertical =
      jQuery(
        "#" + reemplaza_aqui + "_text_shadow_vertical_myRange_number"
      ).val() || "0";
    if (!hover)
      jQuery(objetivo).css(
        "text-shadow",
        color + " " + horizontal + "px " + vertical + "px " + blur + "px"
      );
    else {
      my_style =
        "text-shadow : " +
        color +
        " " +
        horizontal +
        "px " +
        vertical +
        "px " +
        blur +
        "px";
      all_objt_styles[objetivo]["text-shadow"] = my_style;
      actualizar_hover();
    }
  }

  entire_text_section_script("front_description", ".front_heading_description");
  entire_text_section_script("front_heading", ".front_heading_text");

  entire_text_section_script("back_heading", ".back_heading_text");
  entire_text_section_script("back_description", ".back_description_text");

  entire_border_section("back", ".back_preview_image", false);

  input_four_elemnents(
    "back_margin",
    ".overlay",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    false,
    true,
    true,
    false
  );

  input_four_elemnents(
    "back_padding",
    ".back_info",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left",
    false,
    false,
    false,
    false
  );

  color_picker_using_html(
    "back_solid_color",
    ".back_preview_image",
    "background-color"
  );

  barra_slider_con_numero(
    "back_overlay_width",
    ".back_preview_image",
    "width",
    500,
    2000,
    50,
    10,
    0,
    0,
    0,
    0
  );

  barra_slider_con_numero(
    "back_overlay_height",
    ".back_preview_image",
    "height",
    500,
    2000,
    50,
    10,
    0,
    0,
    0,
    0
  );

  entire_text_section_script(
    "back_button_text_section",
    ".back_section_button_text"
  );

  // entire_text_section_script('back_button_text_section_hover', '.back_section_button_text', true);

  function entire_text_section_script(reemplaza_aqui, objetivo, hover) {
    hover = hover || false;

    //////Typography-Section////////////////
    typography_section(reemplaza_aqui, objetivo, hover);

    /////Text-Color/////
    color_picker_using_html(reemplaza_aqui, objetivo, "color", hover);

    //////////////////////Text-Shadow/////////////////////////
    text_shadow(reemplaza_aqui, objetivo, hover);

    /////////Description-Margin//////////////
    input_four_elemnents(
      reemplaza_aqui + "_margin",
      objetivo,
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      false,
      false,
      false,
      false,
      hover
    );
  }

  // //////////////////////Text-Shadow/////////////////////////
  // text_shadow('front_description', '.front_heading_description');

  function set_valor_text_shadowV2(reemplaza_aqui, objetivo, valor, hover) {
    var my_style = "";

    if (hover) all_objt_styles[objetivo] = [];

    var blur =
      jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val() || "0";
    var horizontal =
      jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val() || "0";
    var vertical =
      jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val() || "0";
    if (!hover)
      jQuery(objetivo).css(
        "text-shadow",
        valor + " " + horizontal + "px " + vertical + "px " + blur + "px"
      );
    else {
      my_style =
        "text-shadow" +
        " : " +
        valor +
        " " +
        horizontal +
        "px " +
        vertical +
        "px " +
        blur +
        "px";
      all_objt_styles[objetivo]["text-shadow"] = my_style;
      actualizar_hover();
    }
  }

  function aplicar_blur(reemplaza_aqui, objetivo, hover) {
    hover = hover || false;

    var my_style = "";

    if (hover) all_objt_styles[objetivo] = [];

    //Blur
    jQuery("#" + reemplaza_aqui + "_blur_myRange").on("input", function () {
      jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val(this.value);
      var horizontal =
        jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val() ||
        "0";
      var vertical =
        jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val() || "0";
      var color =
        jQuery("#" + reemplaza_aqui + "_color_input_hex").val() || "none";
      if (!hover)
        jQuery(objetivo).css(
          "text-shadow",
          color +
            " " +
            horizontal +
            "px " +
            vertical +
            "px " +
            this.value +
            "px"
        );
      else {
        my_style =
          "text-shadow : " +
          color +
          " " +
          horizontal +
          "px " +
          vertical +
          "px " +
          this.value +
          "px";
        all_objt_styles[objetivo]["text-shadow"] = my_style;
        actualizar_hover();
      }
    });

    jQuery("#" + reemplaza_aqui + "_blur_myRange_number").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_blur_myRange").val(this.value);
        var horizontal =
          jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val() ||
          "0";
        var vertical =
          jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val() ||
          "0";
        var color =
          jQuery("#" + reemplaza_aqui + "_color_input_hex").val() || "none";
        if (!hover)
          jQuery(objetivo).css(
            "text-shadow",
            color +
              " " +
              horizontal +
              "px " +
              vertical +
              "px " +
              this.value +
              "px"
          );
        else {
          my_style =
            "text-shadow : " +
            color +
            " " +
            horizontal +
            "px " +
            vertical +
            "px " +
            this.value +
            "px";
          all_objt_styles[objetivo]["text-shadow"] = my_style;
          actualizar_hover();
        }
      }
    );
  }

  function aplicar_horizontal(reemplaza_aqui, objetivo, hover) {
    hover = hover || false;
    var my_style = "";
    if (hover) all_objt_styles[objetivo] = [];

    //Horizontal
    jQuery("#" + reemplaza_aqui + "_horizontal_myRange").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val(
          this.value
        );
        var blur =
          jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val() || "0px";
        var vertical =
          jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val() ||
          "0px";
        var color =
          jQuery("#" + reemplaza_aqui + "_color_input_hex").val() || "none";
        if (!hover)
          jQuery(objetivo).css(
            "text-shadow",
            color + " " + this.value + "px " + vertical + "px " + blur + "px"
          );
        else {
          my_style =
            "text-shadow : " +
            color +
            " " +
            this.value +
            "px " +
            vertical +
            "px " +
            blur +
            "px";
          all_objt_styles[objetivo]["text-shadow"] = my_style;
          actualizar_hover();
        }
      }
    );

    jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_horizontal_myRange").val(this.value);
        var blur =
          jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val() || "0px";
        var vertical =
          jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val() ||
          "0px";
        var color =
          jQuery("#" + reemplaza_aqui + "_color_input_hex").val() || "none";
        if (!hover)
          jQuery(objetivo).css(
            "text-shadow",
            color + " " + this.value + "px " + vertical + "px " + blur + "px"
          );
        else {
          my_style =
            "text-shadow : " +
            color +
            " " +
            this.value +
            "px " +
            vertical +
            "px " +
            blur +
            "px";
          all_objt_styles[objetivo]["text-shadow"] = my_style;
          actualizar_hover();
        }
      }
    );
  }

  function aplicar_vertical(reemplaza_aqui, objetivo, hover) {
    hover = hover || false;
    var my_style = "";
    if (hover) all_objt_styles[objetivo] = [];

    //vertical
    jQuery("#" + reemplaza_aqui + "_vertical_myRange").on("input", function () {
      jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val(this.value);
      var blur =
        jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val() || "0px";
      var horizontal =
        jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val() ||
        "0px";
      var color =
        jQuery("#" + reemplaza_aqui + "_color_input_hex").val() || "none";
      if (!hover)
        jQuery(objetivo).css(
          "text-shadow",
          color + " " + horizontal + "px " + this.value + "px " + blur + "px"
        );
      else {
        my_style =
          "text-shadow : " +
          color +
          " " +
          horizontal +
          "px " +
          this.value +
          "px " +
          blur +
          "px";
        all_objt_styles[objetivo]["text-shadow"] = my_style;
        actualizar_hover();
      }
    });

    jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_vertical_myRange").val(this.value);
        var blur =
          jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val() || "0px";
        var horizontal =
          jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val() ||
          "0px";
        var color =
          jQuery("#" + reemplaza_aqui + "_color_input_hex").val() || "none";
        if (!hover)
          jQuery(objetivo).css(
            "text-shadow",
            color + " " + horizontal + "px " + this.value + "px " + blur + "px"
          );
        else {
          my_style =
            "text-shadow : " +
            color +
            " " +
            horizontal +
            "px " +
            this.value +
            "px " +
            blur +
            "px";
          all_objt_styles[objetivo]["text-shadow"] = my_style;
          actualizar_hover();
        }
      }
    );
  }

  var abajo = true;
  jQuery("#dropdown_btn").click(function () {
    if (abajo == false) {
      jQuery(".dropdown_btn_icon").removeClass("dashicons-arrow-up");
      jQuery(".dropdown_btn_icon").addClass("dashicons-arrow-down");
      abajo = true;
    } else {
      jQuery(".dropdown_btn_icon").removeClass("dashicons-arrow-down");
      jQuery(".dropdown_btn_icon").addClass("dashicons-arrow-up");
      abajo = false;
    }
  });

  jQuery("#myInput").keyup(function () {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("span");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  });

  /////////////////////////////////////////////// FONT SIZE ///////////////////////////////////////////////
  // barra_slider_con_numero('front_heading_size', '.front_heading_text', 'font-size', 100, 1000, 20, 100, 0, 0, 0, 0);

  function color_picker_using_html(reemplaza_aqui, objetivo, propiedad, hover) {
    hover = hover || false;

    var my_style = "";

    if (hover) all_objt_styles[objetivo] = [];

    jQuery("#" + reemplaza_aqui + "_color_shower").click(function () {
      jQuery("#" + reemplaza_aqui + "_color_input").click();
    });

    var color = jQuery("#" + reemplaza_aqui + "_color_input_hex").val();

    if (color == "") {
      jQuery("#" + reemplaza_aqui + "_color_shower").addClass(
        "empty_background"
      );
    } else {
      jQuery("#" + reemplaza_aqui + "_color_shower").removeClass(
        "empty_background"
      );
      jQuery("#" + reemplaza_aqui + "_color_shower").css({
        "background-color": color,
      });
    }
    color_modificador(color);

    jQuery("#" + reemplaza_aqui + "_color_input").on("input", function () {
      jQuery("#" + reemplaza_aqui + "_color_shower").removeClass(
        "empty_background"
      );
      jQuery("#" + reemplaza_aqui + "_color_input_hex").val(this.value);
      jQuery("#" + reemplaza_aqui + "_color_shower").css({
        "background-color": this.value,
      });
      color_modificador(this.value);
    });

    jQuery("#" + reemplaza_aqui + "_color_input_hex").on("input", function () {
      if (this.value == "") {
        jQuery("#" + reemplaza_aqui + "_color_shower").addClass(
          "empty_background"
        );
        jQuery("#" + reemplaza_aqui + "_color_input").val("");
      } else {
        jQuery("#" + reemplaza_aqui + "_color_shower").removeClass(
          "empty_background"
        );
        jQuery("#" + reemplaza_aqui + "_color_shower").css({
          "background-color": this.value,
        });
        jQuery("#" + reemplaza_aqui + "_color_input").val(this.value);
      }
      color_modificador(this.value);
    });

    function color_modificador(valor) {
      //modificador css
      switch (propiedad) {
        case "text-shadow":
          break;

        case "text-shadowV2":
          set_valor_text_shadowV2(reemplaza_aqui, objetivo, valor, hover);
          break;

        case "box-shadow":
          apply_box_shadow_values(reemplaza_aqui, objetivo, valor);
          break;

        default: {
          if (!hover) {
            jQuery(objetivo).css(propiedad, valor);
          } else {
            my_style = propiedad + " : " + valor;
            all_objt_styles[objetivo][propiedad] = my_style;
            actualizar_hover();
          }
        }
      }
    }
  }

  // obtener_valor_text_shadow('.front_heading_text', '#FFFFFF');

  function barra_slider_con_numero(
    reemplaza_aqui,
    objetivo,
    propiedad,
    barra_max_px,
    number_max_px,
    barra_max_em,
    number_max_em,
    barra_min_px,
    number_min_px,
    barra_min_em,
    number_min_em,
    propiedad2,
    hover
  ) {
    propiedad2 = propiedad2 || propiedad;

    if (propiedad2 == 'translate' || propiedad2 == 'translateX' || propiedad2 == 'translateY' || 
        propiedad2 == 'translateZ' || propiedad2 == 'translate3d' || propiedad2 == 'scale' 
        || propiedad2 == 'scale3d' || propiedad2 == 'scaleX' || propiedad2 == 'scaleY' 
        || propiedad2 == 'scaleZ' || propiedad2 == 'rotate' || propiedad2 == 'rotate3d' 
        || propiedad2 == 'roateX' || propiedad2 == 'rotateY' || propiedad2 == 'rotateZ')

    hover = hover || false;

    var my_style = "";

    function app_trans_format (input) {

      if (propiedad == 'transform') {
        return propiedad2 + '(' + input + ')';
      }
      else {
        return input;
      }
    }

    jQuery(objetivo).append(
      '<style type="text/css">@media screen and (max-width: 767px){' +
        objetivo +
        ":hover { " +
        propiedad +
        ":" +
        this.value +
        tipo_de_selector +
        " !important}}</style>"
    );

    if (hover) all_objt_styles[objetivo] = [];

    var tipo_de_selector = "px";
    jQuery("#" + reemplaza_aqui + "_selector_px_px").click(function () {
      jQuery("#" + reemplaza_aqui + "_selector_px_px").css({ color: "red" });
      jQuery("#" + reemplaza_aqui + "_selector_px_porciento").css({
        color: "#444",
      });
      jQuery("#" + reemplaza_aqui + "_selector_px_em").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_myRange").prop("max", barra_max_px);
      jQuery("#" + reemplaza_aqui + "_myRange").prop("min", barra_min_px);
      jQuery("#" + reemplaza_aqui + "_myRange_number").prop(
        "max",
        number_max_px
      );
      jQuery("#" + reemplaza_aqui + "_myRange_number").prop(
        "min",
        number_min_px
      );
      jQuery(
        "#" +
          reemplaza_aqui +
          "_myRange, #" +
          reemplaza_aqui +
          "_myRange_number"
      ).prop("step", "1");
      jQuery("#" + reemplaza_aqui + "_type_of_selector").val("px");
      jQuery("#" + reemplaza_aqui + "_max_value").val(barra_max_px);
      jQuery("#" + reemplaza_aqui + "_min_value").val(barra_min_px);

      tipo_de_selector = "px";
    });
    jQuery("#" + reemplaza_aqui + "_selector_px_porciento").click(function () {
      jQuery("#" + reemplaza_aqui + "_selector_px_px").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_selector_px_porciento").css({
        color: "red",
      });
      jQuery("#" + reemplaza_aqui + "_selector_px_em").css({ color: "#444" });
      jQuery(
        "#" +
          reemplaza_aqui +
          "_myRange, #" +
          reemplaza_aqui +
          "_myRange_number"
      ).prop("max", "100");
      jQuery(
        "#" +
          reemplaza_aqui +
          "_myRange, #" +
          reemplaza_aqui +
          "_myRange_number"
      ).prop("min", "0");
      jQuery(
        "#" +
          reemplaza_aqui +
          "_myRange, #" +
          reemplaza_aqui +
          "_myRange_number"
      ).prop("step", "1");
      jQuery("#" + reemplaza_aqui + "_type_of_selector").val("%");
      jQuery("#" + reemplaza_aqui + "_max_value").val(100);

      tipo_de_selector = "%";
    });
    jQuery("#" + reemplaza_aqui + "_selector_px_em").click(function () {
      jQuery("#" + reemplaza_aqui + "_selector_px_px").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_selector_px_porciento").css({
        color: "#444",
      });
      jQuery("#" + reemplaza_aqui + "_selector_px_em").css({ color: "red" });
      jQuery("#" + reemplaza_aqui + "_myRange").prop("max", barra_max_em);
      jQuery("#" + reemplaza_aqui + "_myRange").prop("min", barra_min_em);
      jQuery("#" + reemplaza_aqui + "_myRange_number").prop(
        "max",
        number_max_em
      );
      jQuery("#" + reemplaza_aqui + "_myRange_number").prop(
        "min",
        number_min_em
      );
      jQuery(
        "#" +
          reemplaza_aqui +
          "_myRange, #" +
          reemplaza_aqui +
          "_myRange_number"
      ).prop("step", ".1");
      jQuery("#" + reemplaza_aqui + "_type_of_selector").val("em");
      jQuery("#" + reemplaza_aqui + "_max_value").val(barra_max_em);
      jQuery("#" + reemplaza_aqui + "_min_value").val(barra_min_em);
      tipo_de_selector = "em";
    });

    if (!hover)
      jQuery(objetivo).css(
        propiedad,
        app_trans_format(new_flipbox[reemplaza_aqui + "_value_compu"])
      );
    else {
      my_style =
        propiedad + " : " + new_flipbox[reemplaza_aqui + "_value_compu"];
      all_objt_styles[objetivo][propiedad] = my_style;
      actualizar_hover();
    }

    if (!hover)
      jQuery(objetivo).css(
        propiedad2,
        app_trans_format(new_flipbox[reemplaza_aqui + "_value_compu"])
      );
    else {
      my_style =
        propiedad2 + " : " + new_flipbox[reemplaza_aqui + "_value_compu"];
      all_objt_styles[objetivo][propiedad2] = my_style;
      actualizar_hover();
    }

    switch (new_flipbox[reemplaza_aqui + "_type_of_selector"]) {
      case "px":
        jQuery("#" + reemplaza_aqui + "_selector_px_px").click();
        break;
      case "%":
        jQuery("#" + reemplaza_aqui + "_selector_px_porciento").click();
        break;
      case "em":
        jQuery("#" + reemplaza_aqui + "_selector_px_em").click();
        break;
      default:
        jQuery("#" + reemplaza_aqui + "_selector_px_px").click();
    }

    //Bar Slider Selector
    var slider = document.getElementById(reemplaza_aqui + "_myRange");
    var output = document.getElementById(reemplaza_aqui + "_myRange_number");
    // output.innerHTML = slider.value;
    slider.oninput = function () {
      if (responsive_selector == "compu") {
        output.value = this.value;
        jQuery("#" + reemplaza_aqui + "_value_compu").val(
          this.value + tipo_de_selector
        ).trigger("change");

        if (!hover)
          jQuery(objetivo).css(propiedad, app_trans_format(this.value + tipo_de_selector));
        else {
          my_style = propiedad + " : " + this.value + tipo_de_selector;
          all_objt_styles[objetivo][propiedad] = my_style;
          actualizar_hover();
        }

        if (!hover)
          jQuery(objetivo).css(propiedad2, app_trans_format(this.value + tipo_de_selector));
        else {
          my_style = propiedad2 + " : " + this.value + tipo_de_selector;
          all_objt_styles[objetivo][propiedad2] = my_style;
          actualizar_hover();
        }
      }
      if (responsive_selector == "ipad") {
        output.value = this.value;
        jQuery("#" + reemplaza_aqui + "_value_ipad").val(
          this.value + tipo_de_selector
        ).trigger("change");

        if (!hover)
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              "{ " +
              propiedad +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector ) +
              " !important}}</style>"
          );
        else {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              ":hover { " +
              propiedad +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
        }

        if (!hover)
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              "{ " +
              propiedad2 +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector) +
              " !important}}</style>"
          );
        else {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              ":hover { " +
              propiedad2 +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
        }

        //Agregar modificador CSS para responsive
        //Agregar modificador CSS para responsive
      }
      if (responsive_selector == "phone") {
        output.value = this.value;
        jQuery("#" + reemplaza_aqui + "_value_phone").val(
          this.value + tipo_de_selector
        ).trigger("change");

        if (!hover)
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              "{ " +
              propiedad +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector) +
              " !important}}</style>"
          );
        else {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              ":hover { " +
              propiedad +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
        }

        if (!hover)
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              "{ " +
              propiedad2 +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector) +
              " !important}}</style>"
          );
        else
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              ":hover { " +
              propiedad2 +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
        //Agregar modificador CSS para responsive
        //Agregar modificador CSS para responsive
      }
    };
    output.oninput = function () {
      if (responsive_selector == "compu") {
        slider.value = this.value;
        jQuery("#" + reemplaza_aqui + "_value_compu").val(
          this.value + tipo_de_selector
        ).trigger("change");

        if (!hover)
          jQuery(objetivo).css(propiedad, app_trans_format(this.value + tipo_de_selector));
        else {
          my_style = propiedad + " : " + this.value + tipo_de_selector;
          all_objt_styles[objetivo][propiedad] = my_style;
          actualizar_hover();
        }

        if (!hover)
          jQuery(objetivo).css(propiedad2, app_trans_format(this.value + tipo_de_selector));
        else {
          my_style = propiedad2 + " : " + this.value + tipo_de_selector;
          all_objt_styles[objetivo][propiedad2] = my_style;
          actualizar_hover();
        }
      }
      if (responsive_selector == "ipad") {
        slider.value = this.value;
        jQuery("#" + reemplaza_aqui + "_value_ipad").val(
          this.value + tipo_de_selector
        ).trigger("change");
        if (!hover) {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              "{ " +
              propiedad +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector ) +
              " !important}}</style>"
          );
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              "{ " +
              propiedad2 +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector ) +
              " !important}}</style>"
          );
        } else {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              ":hover { " +
              propiedad +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 767px){' +
              objetivo +
              ":hover { " +
              propiedad2 +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
        }
      }
      if (responsive_selector == "phone") {
        slider.value = this.value;
        jQuery("#" + reemplaza_aqui + "_value_phone").val(
          this.value + tipo_de_selector
        ).trigger("change");
        if (!hover) {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              "{ " +
              propiedad +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector ) +
              " !important}}</style>"
          );
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              "{ " +
              propiedad2 +
              ":" +
              app_trans_format( this.value +
              tipo_de_selector ) +
              " !important}}</style>"
          );
        } else {
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              ":hover { " +
              propiedad +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
          jQuery(objetivo).append(
            '<style type="text/css">@media screen and (max-width: 480px){' +
              objetivo +
              ":hover { " +
              propiedad2 +
              ":" +
              this.value +
              tipo_de_selector +
              " !important}}</style>"
          );
        }
        //Agregar modificador CSS para responsive
        //Agregar modificador CSS para responsive
      }
    };

    jQuery("#" + reemplaza_aqui + "_responsive_compu").click(function() {
      var clicks = jQuery(this).data('clicks');
      if (!clicks) {
        jQuery(
          "#" +
            reemplaza_aqui +
            "_responsive_ipad, #" +
            reemplaza_aqui +
            "_responsive_phone"
        ).css({ display: "block" });
      }
      else {
        jQuery(
          "#" +
            reemplaza_aqui +
            "_responsive_ipad, #" +
            reemplaza_aqui +
            "_responsive_phone"
        ).css({ display: "none" });
      }
      jQuery(this).data("clicks", !clicks);
    });

    

    var responsive_selector = "compu";
    jQuery("#" + reemplaza_aqui + "_responsive_compu").click(function () {
      output.value = purge_letters(
        jQuery("#" + reemplaza_aqui + "_value_compu").val()
      );
      jQuery(la_unidad_era).click();
      slider.value = purge_letters(
        jQuery("#" + reemplaza_aqui + "_value_compu").val()
      );
      responsive_selector = "compu";
      jQuery("#" + reemplaza_aqui + "_responsive_compu").addClass(
        "barra_slider_con_numero_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_ipad").removeClass(
        "barra_slider_con_numero_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_phone").removeClass(
        "barra_slider_con_numero_responsiveactive"
      );
    });
    jQuery("#" + reemplaza_aqui + "_responsive_ipad").click(function () {
      output.value = purge_letters(
        jQuery("#" + reemplaza_aqui + "_value_ipad").val()
      );
      jQuery(la_unidad_era).click();
      slider.value = purge_letters(
        jQuery("#" + reemplaza_aqui + "_value_ipad").val()
      );
      responsive_selector = "ipad";
      jQuery("#" + reemplaza_aqui + "_responsive_compu").removeClass(
        "barra_slider_con_numero_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_ipad").addClass(
        "barra_slider_con_numero_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_phone").removeClass(
        "barra_slider_con_numero_responsiveactive"
      );
    });

    jQuery("#" + reemplaza_aqui + "_responsive_phone").click(function () {
      output.value = purge_letters(
        jQuery("#" + reemplaza_aqui + "_value_phone").val()
      );
      jQuery(la_unidad_era).click();
      slider.value = purge_letters(
        jQuery("#" + reemplaza_aqui + "_value_phone").val()
      );
      responsive_selector = "phone";
      jQuery("#" + reemplaza_aqui + "_responsive_compu").removeClass(
        "barra_slider_con_numero_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_ipad").removeClass(
        "barra_slider_con_numero_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_phone").addClass(
        "barra_slider_con_numero_responsiveactive"
      );
    });

    var la_unidad_era;
    function purge_letters(element) {
      if (element.includes("px")) {
        element = element.replace("px", "");
        la_unidad_era = "#" + reemplaza_aqui + "_selector_px_px";
        return element;
      }
      if (element.includes("%")) {
        element = element.replace("%", "");
        la_unidad_era = "#" + reemplaza_aqui + "_selector_px_porciento";
        return element;
      }
      if (element.includes("em")) {
        element = element.replace("em", "");
        la_unidad_era = "#" + reemplaza_aqui + "_selector_px_em";
        return element;
      }
    }

    if (new_flipbox[reemplaza_aqui + "_value_ipad"] != "") {
      if (!hover) {
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 767px){' +
            objetivo +
            "{ " +
            propiedad +
            ":" +
            app_trans_format(new_flipbox[reemplaza_aqui + "_value_ipad"]) +
            " !important}}</style>"
        );
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 767px){' +
            objetivo +
            "{ " +
            propiedad2 +
            ":" +
            app_trans_format(new_flipbox[reemplaza_aqui + "_value_ipad"]) +
            " !important}}</style>"
        );
      } else {
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 767px){' +
            objetivo +
            ":hover { " +
            propiedad +
            ":" +
            new_flipbox[reemplaza_aqui + "_value_ipad"] +
            " !important}}</style>"
        );
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 767px){' +
            objetivo +
            ":hover { " +
            propiedad2 +
            ":" +
            new_flipbox[reemplaza_aqui + "_value_ipad"] +
            " !important}}</style>"
        );
      }
    }
    if (new_flipbox[reemplaza_aqui + "_value_phone"] != "") {
      if (!hover) {
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 480px){' +
            objetivo +
            "{ " +
            propiedad +
            ":" +
            app_trans_format(new_flipbox[reemplaza_aqui + "_value_phone"]) +
            " !important}}</style>"
        );
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 480px){' +
            objetivo +
            "{ " +
            propiedad2 +
            ":" +
            app_trans_format(new_flipbox[reemplaza_aqui + "_value_phone"]) +
            " !important}}</style>"
        );
      } else {
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 480px){' +
            objetivo +
            ":hover { " +
            propiedad +
            ":" +
            new_flipbox[reemplaza_aqui + "_value_phone"] +
            " !important}}</style>"
        );
        jQuery(objetivo).append(
          '<style type="text/css">@media screen and (max-width: 480px){' +
            objetivo +
            ":hover { " +
            propiedad2 +
            ":" +
            new_flipbox[reemplaza_aqui + "_value_phone"] +
            " !important}}</style>"
        );
      }
    }

    if (new_flipbox[reemplaza_aqui + "_value_compu"].includes("px")) {
      jQuery("#" + reemplaza_aqui + "_myRange_number").val(
        new_flipbox[reemplaza_aqui + "_value_compu"].replace("px", "")
      ).trigger("change");
      jQuery("#" + reemplaza_aqui + "_myRange").val(
        new_flipbox[reemplaza_aqui + "_value_compu"].replace("px", "")
      ).trigger("change");
    }
    if (new_flipbox[reemplaza_aqui + "_value_compu"].includes("%")) {
      jQuery("#" + reemplaza_aqui + "_myRange_number").val(
        new_flipbox[reemplaza_aqui + "_value_compu"].replace("%", "")
      ).trigger("change");
      jQuery("#" + reemplaza_aqui + "_myRange").val(
        new_flipbox[reemplaza_aqui + "_value_compu"].replace("%", "")
      ).trigger("change");
    }
    if (new_flipbox[reemplaza_aqui + "_value_compu"].includes("em")) {
      jQuery("#" + reemplaza_aqui + "_myRange_number").val(
        new_flipbox[reemplaza_aqui + "_value_compu"].replace("em", "")
      ).trigger("change");
      jQuery("#" + reemplaza_aqui + "_myRange").val(
        new_flipbox[reemplaza_aqui + "_value_compu"].replace("em", "")
      ).trigger("change");
    }
  }

  /////////////////////////////////////////////////////////////Font Awesome////////////////////////////////////////////////////////////////
  dropdown_icons_selector("icons_nuevo");

  dropdown_icons_selector("icons_edit");

  function dropdown_icons_selector(reemplaza_aqui) {
    jQuery("#" + reemplaza_aqui + "_dropdown_btn_icons").click(function () {
      document
        .getElementById(reemplaza_aqui + "_myDropdown_icons")
        .classList.toggle("show_icons");
      document
        .getElementById(reemplaza_aqui + "_dropdown_btn_icons")
        .classList.toggle("active_dropdown_btn_icons");
      document
        .getElementById(reemplaza_aqui + "_front_heading_droptext_icons")
        .classList.toggle("active_droptext_icons");
    });

    var abajo = true;
    jQuery("#dropdown_btn").click(function () {
      if (abajo == false) {
        jQuery("#" + reemplaza_aqui + "_arrow_icons").removeClass(
          "dashicons-arrow-up"
        );
        jQuery("#" + reemplaza_aqui + "_arrow_icons").addClass(
          "dashicons-arrow-down"
        );
        abajo = true;
      } else {
        jQuery("#" + reemplaza_aqui + "_arrow_icons").removeClass(
          "dashicons-arrow-down"
        );
        jQuery("#" + reemplaza_aqui + "_arrow_icons").addClass(
          "dashicons-arrow-up"
        );
        abajo = false;
      }
    });

    jQuery("#" + reemplaza_aqui + "_myInput_icons").keyup(function () {
      var input, filter, ul, li, a, i;
      input = document.getElementById(reemplaza_aqui + "_myInput_icons");
      filter = input.value.toUpperCase();
      div = document.getElementById(reemplaza_aqui + "_dropdown_list_icons");
      a = div.getElementsByTagName("i");
      for (cont = 0; cont < a.length; cont++) {
        // txtValue = a[cont].textContent || a[cont].innerText;
        txtValue =
          a[cont].getAttribute("data-keywords") +
          " " +
          a[cont].getAttribute("class");
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[cont].style.display = "";
        } else {
          a[cont].style.display = "none";
        }
      }
    });

    jQuery("#" + reemplaza_aqui + "_dropdown_list_icons i").click(function (e) {
      jQuery("#" + reemplaza_aqui + "_front_heading_droptext_icons").val(
        e.target.className
      );
      jQuery("#" + reemplaza_aqui + "_myDropdown_icons").removeClass(
        "show_icons"
      );
      jQuery(
        "#" + reemplaza_aqui + "_front_heading_droptext_icons"
      ).removeClass("active_droptext_icons");
      jQuery("#" + reemplaza_aqui + "_dropdown_btn_icons").removeClass(
        "active_dropdown_btn_icons"
      );
    });
  }

  //////////////////////////////////////////////////////Front Icon////////////////////////////////////////////////////////
  ////////////////////Size//////////////////////////////////////
  barra_slider_con_numero(
    "front_icon_size",
    ".front_info i",
    "font-size",
    500,
    1000,
    20,
    500,
    0,
    0,
    0,
    0
  );

  ////////////////////Width//////////////////////////////////////
  barra_slider_con_numero(
    "front_icon_width",
    ".icon_div_container",
    "width",
    500,
    1000,
    20,
    500,
    0,
    0,
    0,
    0
  );

  ////////////////////Height//////////////////////////////////////
  barra_slider_con_numero(
    "front_icon_height",
    ".icon_div_container",
    "height",
    500,
    1000,
    20,
    500,
    0,
    0,
    0,
    0
  );

  ///////////////////Color//////////////////////////////////////
  color_picker_using_html("front_icon", ".front_info i", "color");

  ///////////////////Color//////////////////////////////////////
  color_picker_using_html(
    "front_icon_background",
    ".icon_div_container",
    "background-color"
  );

  ///////////////////Icon Margin////////////////////////////////////
  input_four_elemnents(
    "front_icon_margin",
    ".icon_div_container",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    false,
    true,
    true,
    false
  );

  ///////////////////Icon Padding////////////////////////////////////
  input_four_elemnents(
    "front_icon_padding",
    ".icon_div_container i",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "padding-left"
  );

  ///////////////////Icon Border////////////////////////////////////

  var modalactivo = false;
  jQuery("#front_icon_border_button").click(function (e) {
    e.preventDefault();
    if (modalactivo) {
      jQuery("#front_icon_border_modal_front_typo").css({ display: "none" });
      modalactivo = false;
    } else {
      jQuery("#front_icon_border_modal_front_typo").css({ display: "block" });
      jQuery("#front_icon_border_modal_front_typo").css({ top: "99%" });
      modalactivo = true;
    }
  });

  jQuery(".close").click(function () {
    jQuery("#front_icon_border_modal_front_typo").css({ display: "none" });
    modalactivo = false;
  });

  /// Display None Icon element if icon Input is empty/////
  for (var cont = 0; cont < containers.length; cont++) {
    if (containers[cont]["front_heading_droptext_icons"] == "") {
      jQuery("#" + containers[cont]["container_index"] + "icon_index").css({
        display: "none",
      });
    } else {
      jQuery("#" + containers[cont]["container_index"] + "icon_index").css({
        display: "",
      });
    }
  }

  entire_border_section("front_icon", ".icon_div_container", false);

  function input_four_elemnents(
    reemplaza_aqui,
    objetivo,
    propiedad_top,
    propiedad_right,
    propiedad_bottom,
    propiedad_left,
    disable_top,
    disable_right,
    disable_bottom,
    disable_left,
    hover
  ) {
    disable_bottom = disable_bottom || false;
    disable_left = disable_left || false;
    disable_right = disable_right || false;
    disable_top = disable_top || false;

    if (disable_top == true)
      jQuery("#general_settings_" + reemplaza_aqui + "_top").prop(
        "disabled",
        true
      );
    if (disable_right == true)
      jQuery("#general_settings_" + reemplaza_aqui + "_right").prop(
        "disabled",
        true
      );
    if (disable_bottom == true)
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").prop(
        "disabled",
        true
      );
    if (disable_left == true)
      jQuery("#general_settings_" + reemplaza_aqui + "_left").prop(
        "disabled",
        true
      );

    hover = hover || false;

    var my_style = "";

    if (hover) all_objt_styles[objetivo] = [];

    var tipo_de_selector = "px";
    jQuery("#" + reemplaza_aqui + "_selector_px_px").click(function () {
      jQuery("#" + reemplaza_aqui + "_selector_px_px").css({ color: "red" });
      jQuery("#" + reemplaza_aqui + "_selector_px_porciento").css({
        color: "#444",
      });
      jQuery("#" + reemplaza_aqui + "_selector_px_em").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_type_of_selector").val("px");
      tipo_de_selector = "px";
    });
    jQuery("#" + reemplaza_aqui + "_selector_px_porciento").click(function () {
      jQuery("#" + reemplaza_aqui + "_selector_px_px").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_selector_px_porciento").css({
        color: "red",
      });
      jQuery("#" + reemplaza_aqui + "_selector_px_em").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_type_of_selector").val("%");
      tipo_de_selector = "%";
    });
    jQuery("#" + reemplaza_aqui + "_selector_px_em").click(function () {
      jQuery("#" + reemplaza_aqui + "_selector_px_px").css({ color: "#444" });
      jQuery("#" + reemplaza_aqui + "_selector_px_porciento").css({
        color: "#444",
      });
      jQuery("#" + reemplaza_aqui + "_selector_px_em").css({ color: "red" });
      jQuery("#" + reemplaza_aqui + "_type_of_selector").val("em");
      tipo_de_selector = "em";
    });

    switch (new_flipbox[reemplaza_aqui + "_type_of_selector"]) {
      case "px":
        jQuery("#" + reemplaza_aqui + "_selector_px_px").click();
        break;
      case "%":
        jQuery("#" + reemplaza_aqui + "_selector_px_porciento").click();
        break;
      case "em":
        jQuery("#" + reemplaza_aqui + "_selector_px_em").click();
        break;
      default:
        jQuery("#" + reemplaza_aqui + "_selector_px_px").click();
    }
    var aplicar_a_todos = true;
    //reemplaza_aqui Input
    jQuery("#general_settings_" + reemplaza_aqui + "_top").on(
      "input",
      function () {
        if (aplicar_a_todos) {
          aplicar_eaqual(this.value);
        } else {
          switch (responsive_selector) {
            case "compu":
              if (!hover)
                jQuery(objetivo).css(
                  propiedad_top,
                  this.value + tipo_de_selector
                );
              else {
                my_style =
                  propiedad_top + " : " + this.value + tipo_de_selector;
                all_objt_styles[objetivo][propiedad_top] = my_style;
                actualizar_hover();
              }

              jQuery("#general_settings_" + reemplaza_aqui + "_top_compu").val(
                this.value + tipo_de_selector
              );

              break;
            case "ipad":
              jQuery("#general_settings_" + reemplaza_aqui + "_top_ipad").val(
                this.value + tipo_de_selector
              );
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    " { " +
                    propiedad_top +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_top +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
            case "phone":
              jQuery("#general_settings_" + reemplaza_aqui + "_top_phone").val(
                this.value + tipo_de_selector
              );
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    " { " +
                    propiedad_top +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_top +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
          }
        }
      }
    );

    if (!hover)
      jQuery(objetivo).css(
        propiedad_top,
        new_flipbox["general_settings_" + reemplaza_aqui + "_top_compu"]
      );
    else {
      my_style =
        propiedad_top +
        " : " +
        new_flipbox["general_settings_" + reemplaza_aqui + "_top_compu"];
      all_objt_styles[objetivo][propiedad_top] = my_style;
      actualizar_hover();
    }

    ////
    jQuery("#general_settings_" + reemplaza_aqui + "_right").on(
      "input",
      function () {
        if (aplicar_a_todos) {
          aplicar_eaqual(this.value);
        } else {
          switch (responsive_selector) {
            case "compu":
              if (!hover)
                jQuery(objetivo).css(
                  propiedad_right,
                  this.value + tipo_de_selector
                );
              else {
                my_style =
                  propiedad_right + " : " + this.value + tipo_de_selector;
                all_objt_styles[objetivo][propiedad_right] = my_style;
                actualizar_hover();
              }
              jQuery(
                "#general_settings_" + reemplaza_aqui + "_right_compu"
              ).val(this.value + tipo_de_selector);
              break;
            case "ipad":
              jQuery("#general_settings_" + reemplaza_aqui + "_right_ipad").val(
                this.value + tipo_de_selector
              );
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    " { " +
                    propiedad_right +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_right +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
            case "phone":
              jQuery(
                "#general_settings_" + reemplaza_aqui + "_right_phone"
              ).val(this.value + tipo_de_selector);
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    " { " +
                    propiedad_right +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_right +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
          }
        }
      }
    );
    if (!hover)
      jQuery(objetivo).css(
        propiedad_right,
        new_flipbox["general_settings_" + reemplaza_aqui + "_right_compu"]
      );
    else {
      my_style =
        propiedad_right +
        " : " +
        new_flipbox["general_settings_" + reemplaza_aqui + "_right_compu"];
      all_objt_styles[objetivo][propiedad_right] = my_style;
      actualizar_hover();
    }
    ////
    jQuery("#general_settings_" + reemplaza_aqui + "_bottom").on(
      "input",
      function () {
        if (aplicar_a_todos) {
          aplicar_eaqual(this.value);
        } else {
          switch (responsive_selector) {
            case "compu":
              if (!hover)
                jQuery(objetivo).css(
                  propiedad_bottom,
                  this.value + tipo_de_selector
                );
              else {
                my_style =
                  propiedad_bottom + " : " + this.value + tipo_de_selector;
                all_objt_styles[objetivo][propiedad_bottom] = my_style;
                actualizar_hover();
              }
              jQuery(
                "#general_settings_" + reemplaza_aqui + "_bottom_compu"
              ).val(this.value + tipo_de_selector);
              break;
            case "ipad":
              jQuery(
                "#general_settings_" + reemplaza_aqui + "_bottom_ipad"
              ).val(this.value + tipo_de_selector);
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    " { " +
                    propiedad_bottom +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_bottom +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
            case "phone":
              jQuery(
                "#general_settings_" + reemplaza_aqui + "_bottom_phone"
              ).val(this.value + tipo_de_selector);
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    " { " +
                    propiedad_bottom +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_bottom +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
          }
        }
      }
    );
    if (!hover)
      jQuery(objetivo).css(
        propiedad_bottom,
        new_flipbox["general_settings_" + reemplaza_aqui + "_bottom_compu"]
      );
    else {
      my_style =
        propiedad_bottom +
        " : " +
        new_flipbox["general_settings_" + reemplaza_aqui + "_bottom_compu"];
      all_objt_styles[objetivo][propiedad_bottom] = my_style;
      actualizar_hover();
    }
    ////
    jQuery("#general_settings_" + reemplaza_aqui + "_left").on(
      "input",
      function () {
        if (aplicar_a_todos) {
          aplicar_eaqual(this.value);
        } else {
          switch (responsive_selector) {
            case "compu":
              if (!hover)
                jQuery(objetivo).css(
                  propiedad_left,
                  this.value + tipo_de_selector
                );
              else {
                my_style =
                  propiedad_left + " : " + this.value + tipo_de_selector;
                all_objt_styles[objetivo][propiedad_left] = my_style;
                actualizar_hover();
              }
              jQuery("#general_settings_" + reemplaza_aqui + "_left_compu").val(
                this.value + tipo_de_selector
              );
              break;
            case "ipad":
              jQuery("#general_settings_" + reemplaza_aqui + "_left_ipad").val(
                this.value + tipo_de_selector
              );
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    " { " +
                    propiedad_left +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 767px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_left +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
            case "phone":
              jQuery("#general_settings_" + reemplaza_aqui + "_left_phone").val(
                this.value + tipo_de_selector
              );
              if (!hover)
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    " { " +
                    propiedad_left +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              else
                jQuery(objetivo).append(
                  '<style type="text/css">@media screen and (max-width: 480px){ ' +
                    objetivo +
                    ":hover { " +
                    propiedad_left +
                    ":" +
                    this.value +
                    tipo_de_selector +
                    " !important}}</style>"
                );
              break;
          }
        }
      }
    );
    if (!hover)
      jQuery(objetivo).css(
        propiedad_left,
        new_flipbox["general_settings_" + reemplaza_aqui + "_left_compu"]
      );
    else {
      my_style =
        propiedad_left +
        " : " +
        new_flipbox["general_settings_" + reemplaza_aqui + "_left_compu"];
      all_objt_styles[objetivo][propiedad_left] = my_style;
      actualizar_hover();
    }

    jQuery("#" + reemplaza_aqui + "_responsive_compu").click(function() {
      var clicks = jQuery(this).data('clicks');
        if (!clicks) {
          jQuery(
            "#" +
              reemplaza_aqui +
              "_responsive_ipad, #" +
              reemplaza_aqui +
              "_responsive_phone"
          ).css({ display: "block" });
        } 
        else {
          jQuery(
            "#" +
              reemplaza_aqui +
              "_responsive_ipad, #" +
              reemplaza_aqui +
              "_responsive_phone"
          ).css({ display: "none" });
        }
        jQuery(this).data("clicks", !clicks);
    });


    var responsive_selector = "compu";
    jQuery("#" + reemplaza_aqui + "_responsive_compu").click(function () {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_top_compu").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_right_compu").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_bottom_compu").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_left_compu").val()
        )
      );

      jQuery(la_unidad_era).click();

      responsive_selector = "compu";
      jQuery("#" + reemplaza_aqui + "_responsive_compu").addClass(
        "_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_ipad").removeClass(
        "_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_phone").removeClass(
        "_responsiveactive"
      );
    });

    jQuery("#" + reemplaza_aqui + "_responsive_ipad").click(function () {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_top_ipad").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_right_ipad").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_bottom_ipad").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_left_ipad").val()
        )
      );

      jQuery(la_unidad_era).click();

      responsive_selector = "ipad";
      jQuery("#" + reemplaza_aqui + "_responsive_compu").removeClass(
        "_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_ipad").addClass(
        "_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_phone").removeClass(
        "_responsiveactive"
      );
    });

    jQuery("#" + reemplaza_aqui + "_responsive_phone").click(function () {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_top_phone").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_right_phone").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_bottom_phone").val()
        )
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(
        purge_letters(
          jQuery("#general_settings_" + reemplaza_aqui + "_left_phone").val()
        )
      );

      jQuery(la_unidad_era).click();

      responsive_selector = "phone";
      jQuery("#" + reemplaza_aqui + "_responsive_compu").removeClass(
        "_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_ipad").removeClass(
        "_responsiveactive"
      );
      jQuery("#" + reemplaza_aqui + "_responsive_phone").addClass(
        "_responsiveactive"
      );
    });

    var la_unidad_era;
    function purge_letters(element) {
      if (element.includes("px")) {
        element = element.replace("px", "");
        la_unidad_era = "#" + reemplaza_aqui + "_selector_px_px";
        return element;
      }
      if (element.includes("%")) {
        element = element.replace("%", "");
        la_unidad_era = "#" + reemplaza_aqui + "_selector_px_porciento";
        return element;
      }
      if (element.includes("em")) {
        element = element.replace("em", "");
        la_unidad_era = "#" + reemplaza_aqui + "_selector_px_em";
        return element;
      }
      if (element == "") return 0;
    }

    function aplicar_eaqual(valor) {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(valor);
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(valor);
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(valor);
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(valor);

      switch (responsive_selector) {
        case "compu":
          if (!hover)
            jQuery(objetivo).css(propiedad_top, valor + tipo_de_selector);
          else {
            my_style = propiedad_top + " : " + valor + tipo_de_selector;
            all_objt_styles[objetivo][propiedad_top] = my_style;
            actualizar_hover();
          }
          jQuery("#general_settings_" + reemplaza_aqui + "_top_compu").val(
            valor + tipo_de_selector
          );
          break;
        case "ipad":
          jQuery("#general_settings_" + reemplaza_aqui + "_top_ipad").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                " { " +
                propiedad_top +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                ":hover { " +
                propiedad_top +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
        case "phone":
          jQuery("#general_settings_" + reemplaza_aqui + "_top_phone").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                " { " +
                propiedad_top +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                ":hover { " +
                propiedad_top +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
      }

      switch (responsive_selector) {
        case "compu":
          if (!hover)
            jQuery(objetivo).css(propiedad_right, valor + tipo_de_selector);
          else {
            my_style = propiedad_right + " : " + valor + tipo_de_selector;
            all_objt_styles[objetivo][propiedad_right] = my_style;
            actualizar_hover();
          }
          jQuery("#general_settings_" + reemplaza_aqui + "_right_compu").val(
            valor + tipo_de_selector
          );
          break;
        case "ipad":
          jQuery("#general_settings_" + reemplaza_aqui + "_right_ipad").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                " { " +
                propiedad_right +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                ":hover { " +
                propiedad_right +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
        case "phone":
          jQuery("#general_settings_" + reemplaza_aqui + "_right_phone").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                " { " +
                propiedad_right +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                ":hover { " +
                propiedad_right +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
      }

      switch (responsive_selector) {
        case "compu":
          if (!hover)
            jQuery(objetivo).css(propiedad_bottom, valor + tipo_de_selector);
          else {
            my_style = propiedad_bottom + " : " + valor + tipo_de_selector;
            all_objt_styles[objetivo][propiedad_bottom] = my_style;
            actualizar_hover();
          }
          jQuery("#general_settings_" + reemplaza_aqui + "_bottom_compu").val(
            valor + tipo_de_selector
          );
          break;
        case "ipad":
          jQuery("#general_settings_" + reemplaza_aqui + "_bottom_ipad").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                " { " +
                propiedad_bottom +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                ":hover { " +
                propiedad_bottom +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
        case "phone":
          jQuery("#general_settings_" + reemplaza_aqui + "_bottom_phone").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                " { " +
                propiedad_bottom +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                ":hover { " +
                propiedad_bottom +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
      }

      switch (responsive_selector) {
        case "compu":
          if (!hover)
            jQuery(objetivo).css(propiedad_left, valor + tipo_de_selector);
          else {
            my_style = propiedad_left + " : " + valor + tipo_de_selector;
            all_objt_styles[objetivo][propiedad_left] = my_style;
            actualizar_hover();
          }
          jQuery("#general_settings_" + reemplaza_aqui + "_left_compu").val(
            valor + tipo_de_selector
          );
          break;
        case "ipad":
          jQuery("#general_settings_" + reemplaza_aqui + "_left_ipad").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                " { " +
                propiedad_left +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 767px){ ' +
                objetivo +
                ":hover { " +
                propiedad_left +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
        case "phone":
          jQuery("#general_settings_" + reemplaza_aqui + "_left_phone").val(
            valor + tipo_de_selector
          );
          if (!hover)
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                " { " +
                propiedad_left +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          else
            jQuery(objetivo).append(
              '<style type="text/css">@media screen and (max-width: 480px){ ' +
                objetivo +
                ":hover { " +
                propiedad_left +
                ":" +
                valor +
                tipo_de_selector +
                " !important}}</style>"
            );
          break;
      }
    }
    if (!hover) {
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          " { " +
          propiedad_top +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_top_ipad"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          " { " +
          propiedad_right +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_right_ipad"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          " { " +
          propiedad_bottom +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_bottom_ipad"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          " { " +
          propiedad_left +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_left_ipad"] +
          " !important}}</style>"
      );

      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          " { " +
          propiedad_top +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_top_phone"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          " { " +
          propiedad_right +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_right_phone"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          " { " +
          propiedad_bottom +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_bottom_phone"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          " { " +
          propiedad_left +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_left_phone"] +
          " !important}}</style>"
      );
    } else {
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          ":hover { " +
          propiedad_top +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_top_ipad"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          ":hover { " +
          propiedad_right +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_right_ipad"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          ":hover { " +
          propiedad_bottom +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_bottom_ipad"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 767px){ ' +
          objetivo +
          ":hover { " +
          propiedad_left +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_left_ipad"] +
          " !important}}</style>"
      );

      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          ":hover { " +
          propiedad_top +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_top_phone"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          ":hover { " +
          propiedad_right +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_right_phone"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          ":hover { " +
          propiedad_bottom +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_bottom_phone"] +
          " !important}}</style>"
      );
      jQuery(objetivo).append(
        '<style type="text/css">@media screen and (max-width: 480px){ ' +
          objetivo +
          ":hover { " +
          propiedad_left +
          ":" +
          new_flipbox["general_settings_" + reemplaza_aqui + "_left_phone"] +
          " !important}}</style>"
      );
    }

    if (
      new_flipbox["general_settings_" + reemplaza_aqui + "_top_compu"].includes(
        "px"
      )
    ) {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_top_compu"
        ].replace("px", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_right_compu"
        ].replace("px", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_bottom_compu"
        ].replace("px", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_left_compu"
        ].replace("px", "")
      );
    }
    if (
      new_flipbox["general_settings_" + reemplaza_aqui + "_top_compu"] == ""
    ) {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(0);
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(0);
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(0);
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(0);
    }
    if (
      new_flipbox["general_settings_" + reemplaza_aqui + "_top_compu"].includes(
        "%"
      )
    ) {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_top_compu"
        ].replace("%", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_right_compu"
        ].replace("%", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_bottom_compu"
        ].replace("%", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_left_compu"
        ].replace("%", "")
      );
    }
    if (
      new_flipbox["general_settings_" + reemplaza_aqui + "_top_compu"].includes(
        "em"
      )
    ) {
      jQuery("#general_settings_" + reemplaza_aqui + "_top").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_top_compu"
        ].replace("em", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_right").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_right_compu"
        ].replace("em", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_bottom").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_bottom_compu"
        ].replace("em", "")
      );
      jQuery("#general_settings_" + reemplaza_aqui + "_left").val(
        new_flipbox[
          "general_settings_" + reemplaza_aqui + "_left_compu"
        ].replace("em", "")
      );
    }

    jQuery("#general_settings_" + reemplaza_aqui + "_button").click(function() {
      var clicks = jQuery(this).data('clicks');
      if (!clicks) {
        jQuery("#general_settings_" + reemplaza_aqui + "_button").css({
          "background-color": "#fdfdfd",
        });
        jQuery("#" + reemplaza_aqui + "_dahsicon_link_icon").css({
          display: "none",
        });
        jQuery("#" + reemplaza_aqui + "_dahsicon_brokenlink_icon").css({
          display: "block",
        });
        aplicar_a_todos = false;
      } 
      else {
        jQuery("#general_settings_" + reemplaza_aqui + "_button").css({
          "background-color": "#838383",
        });
        jQuery("#" + reemplaza_aqui + "_dahsicon_brokenlink_icon").css({
          display: "none",
        });
        jQuery("#" + reemplaza_aqui + "_dahsicon_link_icon").css({
          display: "block",
        });
        aplicar_a_todos = true;
      }
      jQuery(this).data("clicks", !clicks);
    });
  }

  // Front//
  absolute_section("front_description");
  absolute_section("front_border");
  absolute_section("front_heading");
  absolute_section("front_margin");
  absolute_section("front_image");
  absolute_section("front_icon");
  absolute_section("front_overlay_image");
  absolute_section("back_overlay_image");

  absolute_section("front_box_shadow");
  absolute_section("front_animation");

  absolute_section("back_description");
  absolute_section("back_heading");
  absolute_section("back_border");
  absolute_section("back_margin");
  absolute_section("back_background");
  absolute_section("back_box_shadow");

  absolute_section("back_button_text");
  absolute_section("back_button_icon");
  absolute_section("back_button_margin");
  absolute_section("back_button_border");
  absolute_section("back_button_box_shadow");

  var ultimo_index;

  function absolute_section(reemplaza_aqui) {
    var shadow_x;
    var shadow_y;
    var offset_x;
    var offset_y;
    var left_position;
    var top_position;
    var click_pressed = false;
    jQuery("#" + reemplaza_aqui + "_absolute_selector").on(
      "mousedown",
      function (e) {
        click_pressed = true;
        left_position = jQuery("#" + reemplaza_aqui + "_section").position()
          .left;
        top_position = jQuery("#" + reemplaza_aqui + "_section").position().top;
        jQuery("#" + reemplaza_aqui + "_section").addClass(
          "front_description_section_absolte_properties"
        );
        jQuery("#" + reemplaza_aqui + "_section").css({ top: top_position });
        jQuery("#" + reemplaza_aqui + "_section").css({ left: left_position });

        first_pageX = e.pageX;
        jQuery("#" + reemplaza_aqui + "_section_shadow").css({
          display: "block",
        });
        jQuery("#" + reemplaza_aqui + "_section_shadow").css({
          height: jQuery("#" + reemplaza_aqui + "_section").height() + "px",
        });
        if (ultimo_index != undefined)
          jQuery(ultimo_index).css({ "z-index": "" });
        jQuery("#" + reemplaza_aqui + "_section").css({ "z-index": 10 });
      }
    );

    jQuery("#" + reemplaza_aqui + "_absolute_selector").on(
      "mouseup",
      function () {
        click_pressed = false;
        ultimo_index = jQuery("#" + reemplaza_aqui + "_section");
      }
    );

    var activar_zona = false;
    jQuery(window).mousemove(function (e) {
      if (click_pressed) {
        jQuery("#" + reemplaza_aqui + "_section").offset({
          left: e.pageX - jQuery("#" + reemplaza_aqui + "_section").width() / 2,
        });
        jQuery("#" + reemplaza_aqui + "_section").offset({ top: e.pageY - 15 });

        offset_x = jQuery("#" + reemplaza_aqui + "_section").offset().left;
        shadow_x = jQuery("#" + reemplaza_aqui + "_section_shadow").offset()
          .left;

        offset_y = jQuery("#" + reemplaza_aqui + "_section").offset().top;
        shadow_y = jQuery("#" + reemplaza_aqui + "_section_shadow").offset()
          .top;

        if (
          offset_x >= shadow_x + 20 ||
          offset_x <= shadow_x - 20 ||
          offset_y >= shadow_y + 20 ||
          offset_y <= shadow_y - 20
        )
          activar_zona = true;

        if (
          offset_x >= shadow_x - 10 &&
          offset_x <= shadow_x + 10 &&
          offset_y >= shadow_y - 10 &&
          offset_y <= shadow_y + 10
        ) {
          if (activar_zona) {
            click_pressed = false;
            jQuery(jQuery("#" + reemplaza_aqui + "_section_shadow")).css({
              display: "none",
            });
            jQuery("#" + reemplaza_aqui + "_section").removeClass(
              "front_description_section_absolte_properties"
            );
            offset_x = 0;
            activar_zona = false;
          }
        }
      }
    });
  }

  jQuery("#back_image_background_size_selector").on("input", function () {
    var valor = this.value;
    if (valor == "Fit") valor = "100% 100%";
    jQuery(".back_preview_image").css({ "background-size": valor });
  });

  var valor = new_flipbox["back_image_background_size_selector"];
  if (valor == "Fit") valor = "100% 100%";
  jQuery(".back_preview_image").css({ "background-size": valor });

  /////////

  jQuery("#back_image_background_position_selector").on("input", function () {
    var valor = this.value;
    if (valor == "Fit") valor = "100% 100%";
    jQuery(".back_preview_image").css({ "background-position": this.value });
  });

  jQuery(".back_preview_image").css({
    "background-position":
      new_flipbox["back_image_background_position_selector"],
  });

  ///////////////////////////////////////////////////

  jQuery("#front_image_background_size_selector").on("input", function () {
    var valor = this.value;
    if (valor == "Fit") valor = "100% 100%";
    jQuery(".front_preview_image").css({ "background-size": valor });
  });

  var valor = new_flipbox["front_image_background_size_selector"];
  if (valor == "Fit") valor = "100% 100%";
  jQuery(".front_preview_image").css({ "background-size": valor });

  /////////

  jQuery("#front_image_background_position_selector").on("input", function () {
    var valor = this.value;
    if (valor == "Fit") valor = "100% 100%";
    jQuery(".front_preview_image").css({ "background-position": this.value });
  });

  jQuery(".front_preview_image").css({
    "background-position":
      new_flipbox["front_image_background_position_selector"],
  });

  function entire_icon_section(reemplaza_aqui, objetivo) {
    /////////////////////////////////////////////Entire Icon Section//////////////////////////////////////

    ///////////////////Icon Border///////////////////////

    var modalactivo = false;
    jQuery("#" + reemplaza_aqui + "_border_button").click(function (e) {
      e.preventDefault();
      if (modalactivo) {
        jQuery("#" + reemplaza_aqui + "_border_modal_front_typo").css({
          display: "none",
        });
        modalactivo = false;
      } else {
        jQuery("#" + reemplaza_aqui + "_border_modal_front_typo").css({
          display: "block",
        });
        jQuery("#" + reemplaza_aqui + "_border_modal_front_typo").css({
          top: "99%",
        });
        modalactivo = true;
      }
    });

    jQuery(".close").click(function () {
      jQuery("#" + reemplaza_aqui + "_border_modal_front_typo").css({
        display: "none",
      });
      modalactivo = false;
    });

    ////////////Size////////////////
    barra_slider_con_numero(
      reemplaza_aqui + "_size",
      objetivo + " i",
      "font-size",
      500,
      1000,
      10,
      100,
      0,
      0,
      0,
      0
    );

    ////////////Width///////////////
    barra_slider_con_numero(
      reemplaza_aqui + "_width",
      objetivo,
      "width",
      500,
      1000,
      10,
      100,
      0,
      0,
      0,
      0
    );

    ////////////Height///////////////
    barra_slider_con_numero(
      reemplaza_aqui + "_height",
      objetivo,
      "height",
      500,
      1000,
      10,
      100,
      0,
      0,
      0,
      0
    );

    ///////////Color////////////////
    color_picker_using_html(
      reemplaza_aqui + "_color",
      objetivo + " i",
      "color"
    );

    ///////////Background Color////////////////
    color_picker_using_html(
      reemplaza_aqui + "_background_color",
      objetivo,
      "background-color"
    );

    ///////////Margin////////////
    input_four_elemnents(
      reemplaza_aqui + "_margin",
      objetivo,
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      false,
      true,
      true,
      false
    );

    //////////Padding///////////
    input_four_elemnents(
      reemplaza_aqui + "_padding",
      objetivo + " i",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      false,
      false,
      false,
      false
    );

    ///////////Border Section////////////
    entire_border_section(reemplaza_aqui, objetivo, false);
  }

  entire_border_section("back_button_border", ".back_section_button", false);

  input_four_elemnents(
    "back_button_position",
    ".back_section_button",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "margin-left",
    false,
    true,
    true,
    false
  );

  barra_slider_con_numero(
    "back_button_width",
    ".back_section_button",
    "width",
    1000,
    10000,
    50,
    500,
    0,
    0,
    0,
    0
  );

  barra_slider_con_numero(
    "back_button_height",
    ".back_section_button",
    "padding-top",
    200,
    5000,
    50,
    500,
    0,
    0,
    0,
    0,
    "padding-bottom"
  );

  color_picker_using_html(
    "back_button_color",
    ".back_section_button",
    "background-color"
  );

  // var box_shadow_color = '';
  // var box_shadow_blur = '0';
  // var box_shadow_horizontal = '0';
  // var box_shadow_vertical = '0';

  function box_shadow_section(reemplaza_aqui, objetivo) {
    var box_shadow_color = new_flipbox[reemplaza_aqui + "_color_input_hex"];
    var box_shadow_blur = new_flipbox[reemplaza_aqui + "_blur_myRange_number"];
    var box_shadow_horizontal =
      new_flipbox[reemplaza_aqui + "_horizontal_myRange_number"];
    var box_shadow_vertical =
      new_flipbox[reemplaza_aqui + "_vertical_myRange_number"];

    function color_picker_using_html_box_shadow(
      reemplaza_aqui,
      objetivo,
      propiedad,
      hover
    ) {
      hover = hover || false;

      var my_style = "";

      if (hover) all_objt_styles[objetivo] = [];

      jQuery("#" + reemplaza_aqui + "_color_shower").click(function () {
        jQuery("#" + reemplaza_aqui + "_color_input").click();
      });

      var color = jQuery("#" + reemplaza_aqui + "_color_input_hex").val();

      if (color == "") {
        jQuery("#" + reemplaza_aqui + "_color_shower").addClass(
          "empty_background"
        );
      } else {
        jQuery("#" + reemplaza_aqui + "_color_shower").removeClass(
          "empty_background"
        );
        jQuery("#" + reemplaza_aqui + "_color_shower").css({
          "background-color": color,
        });
      }
      color_modificador(color);

      jQuery("#" + reemplaza_aqui + "_color_input").on("input", function () {
        jQuery("#" + reemplaza_aqui + "_color_shower").removeClass(
          "empty_background"
        );
        jQuery("#" + reemplaza_aqui + "_color_input_hex").val(this.value);
        jQuery("#" + reemplaza_aqui + "_color_shower").css({
          "background-color": this.value,
        });
        color_modificador(this.value);
      });

      jQuery("#" + reemplaza_aqui + "_color_input_hex").on(
        "input",
        function () {
          if (this.value == "") {
            jQuery("#" + reemplaza_aqui + "_color_shower").addClass(
              "empty_background"
            );
            jQuery("#" + reemplaza_aqui + "_color_input").val("");
          } else {
            jQuery("#" + reemplaza_aqui + "_color_shower").removeClass(
              "empty_background"
            );
            jQuery("#" + reemplaza_aqui + "_color_shower").css({
              "background-color": this.value,
            });
            jQuery("#" + reemplaza_aqui + "_color_input").val(this.value);
          }
          color_modificador(this.value);
        }
      );

      function color_modificador(valor) {
        //modificador css
        if (valor != "") {
          box_shadow_color = valor;
          jQuery(objetivo).css({
            "box-shadow":
              box_shadow_color +
              " " +
              box_shadow_horizontal +
              "px " +
              box_shadow_vertical +
              "px " +
              box_shadow_blur +
              "px ",
          });
        } else {
          jQuery(objetivo).css({ "box-shadow": "" });
        }
      }
    }

    if (
      box_shadow_blur != "0" &&
      box_shadow_horizontal != "0" &&
      box_shadow_vertical != "0"
    ) {
      jQuery(objetivo).css({
        "box-shadow":
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px ",
      });
    } else {
      jQuery(objetivo).css({ "box-shadow": "" });
    }

    //////////Color////////////////////////
    color_picker_using_html_box_shadow(reemplaza_aqui, objetivo, "box-shadow");

    //////////Blur/////////////////////////
    jQuery("#" + reemplaza_aqui + "_blur_myRange").on("input", function () {
      jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val(
        jQuery("#" + reemplaza_aqui + "_blur_myRange").val()
      );
      box_shadow_blur = jQuery("#" + reemplaza_aqui + "_blur_myRange").val();
      jQuery(objetivo).css({
        "box-shadow":
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px ",
      });
    });

    jQuery("#" + reemplaza_aqui + "_blur_myRange_number").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_blur_myRange").val(
          jQuery("#" + reemplaza_aqui + "_blur_myRange_number").val()
        );
        box_shadow_blur = jQuery(
          "#" + reemplaza_aqui + "_blur_myRange_number"
        ).val();
        jQuery(objetivo).css({
          "box-shadow":
            box_shadow_color +
            " " +
            box_shadow_horizontal +
            "px " +
            box_shadow_vertical +
            "px " +
            box_shadow_blur +
            "px ",
        });
      }
    );

    ////////////Horizontal////////////////
    jQuery("#" + reemplaza_aqui + "_horizontal_myRange").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val(
          jQuery("#" + reemplaza_aqui + "_horizontal_myRange").val()
        );
        box_shadow_horizontal = jQuery(
          "#" + reemplaza_aqui + "_horizontal_myRange"
        ).val();
        jQuery(objetivo).css({
          "box-shadow":
            box_shadow_color +
            " " +
            box_shadow_horizontal +
            "px " +
            box_shadow_vertical +
            "px " +
            box_shadow_blur +
            "px ",
        });
      }
    );

    jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_horizontal_myRange").val(
          jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").val()
        );
        box_shadow_horizontal = jQuery(
          "#" + reemplaza_aqui + "_horizontal_myRange_number"
        ).val();
        jQuery(objetivo).css({
          "box-shadow":
            box_shadow_color +
            " " +
            box_shadow_horizontal +
            "px " +
            box_shadow_vertical +
            "px " +
            box_shadow_blur +
            "px ",
        });
      }
    );

    ////////////Vertical////////////////
    jQuery("#" + reemplaza_aqui + "_vertical_myRange").on("input", function () {
      jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val(
        jQuery("#" + reemplaza_aqui + "_vertical_myRange").val()
      );
      box_shadow_vertical = jQuery(
        "#" + reemplaza_aqui + "_vertical_myRange"
      ).val();
      jQuery(objetivo).css({
        "box-shadow":
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px ",
      });
    });

    jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").on(
      "input",
      function () {
        jQuery("#" + reemplaza_aqui + "_vertical_myRange").val(
          jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").val()
        );
        box_shadow_vertical = jQuery(
          "#" + reemplaza_aqui + "_vertical_myRange_number"
        ).val();
        jQuery(objetivo).css({
          "box-shadow":
            box_shadow_color +
            " " +
            box_shadow_horizontal +
            "px " +
            box_shadow_vertical +
            "px " +
            box_shadow_blur +
            "px ",
        });
      }
    );
  }

  box_shadow_section("back_button_box_shadow", ".back_section_button");

  box_shadow_section("front_box_shadow", ".front_preview_image");

  box_shadow_section("back_box_shadow", ".back_preview_image");

  jQuery(".hover_selector_normal").click(function () {
    jQuery(".hover_selector_normal").addClass("hover_selector_selected");
    jQuery(".hover_selector_hover").removeClass("hover_selector_selected");
    jQuery(".display_hover").css({ display: "none" });
    jQuery(".display_normal").css({ display: "block" });
  });

  jQuery(".hover_selector_hover").click(function () {
    jQuery(".hover_selector_hover").addClass("hover_selector_selected");
    jQuery(".hover_selector_normal").removeClass("hover_selector_selected");
    jQuery(".display_normal").css({ display: "none" });
    jQuery(".display_hover").css({ display: "block" });
  });

  append_transformacion(
    "back_button_hover_transfor",
    ".back_section_button",
    ".back_section_button"
  );

  // jQuery('.back_section_button').css({'transition' : 'transform 0.2s ease, background-color 0.3s ease, color 0.4s ease, box-shadow 0.3s ease, opacity 2s ease'});
  // jQuery('.back_section_button_text').css({'transition' : 'color 0.4s ease'});

  var static_transitions =
    ", background-color 0.5s ease, color 0.5s ease, box-shadow 0.5s ease";

  function append_transformacion(reemplaza_aqui, objetivo, objetivo_trigger) {
    var hover_styles = "";

    var objetivo = jQuery(objetivo);

    function determinar_propiedad(input) {
      switch (input) {
        case "Grow":
          {
            hover_styles = "transform: translate(-50%, -50%) scale(1.05); ";
            jQuery("#back_button_transform_style_hover").val(
              "transform: translate(-50%, -50%) scale(1.05);"
            );
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Shrink":
          {
            hover_styles = "transform: translate(-50%, -50%) scale(0.95); ";
            jQuery("#back_button_transform_style_hover").val(
              "transform: translate(-50%, -50%) scale(0.95);"
            );
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Pulse":
          {
            hover_styles = "animation: pulse 1s infinite; ";
            jQuery("#back_button_transform_style_hover").val(
              "animation: pulse 1s infinite; "
            );
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Push":
          {
            hover_styles = "animation: push 0.5s ; ";
            jQuery("#back_button_transform_style_hover").val("hover_styles");
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Pop":
          {
            hover_styles = "animation: pop 0.5s ; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "BounceIn":
          {
            jQuery(objetivo).css({ animation: "BounceIn_Out 0.2s" });
            hover_styles = "animation: BounceIn 0.5s forwards !important; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val(
              "animation: BounceIn_Out 0.2s ;"
            );
          }
          break;
        case "BounceOut":
          {
            jQuery(objetivo).css({ animation: "BounceOut_Out 0.2s" });
            hover_styles = "animation: BounceOut 0.5s forwards !important; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val(
              "animation: BounceOut_Out 0.2s ;"
            );
          }
          break;
        case "Rotate":
          {
            // jQuery(objetivo).css({'transition' : 'transform 0.2s ease'});
            hover_styles = "transform:  translate(-50%, -50%) rotate(4deg) ; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Rotate and Grow":
          {
            // jQuery(objetivo).css({'transition' : 'transform 0.2s ease'});
            hover_styles =
              "transform:  translate(-50%, -50%) rotate(4deg) scale(1.06); ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Float":
          {
            // jQuery(objetivo).css({'transition' : 'transform 0.2s ease'});
            hover_styles =
              "transform: translate(-0%, -20%)  translate(-50%, -50%) ; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Sink":
          {
            // jQuery(objetivo).css({'transition' : 'transform .2s'});
            hover_styles =
              "transform: translate(-0%, +20%)  translate(-50%, -50%) ; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Bob":
          {
            jQuery(objetivo).css({ animation: "Bob_Out 0.2s" });
            hover_styles =
              "animation: Bob 0.5s ease-in-out forwards, Bob2 0.5s 0.5s infinite !important; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val(
              "animation: Bob_Out 0.2s ;"
            );
          }
          break;
        case "Hank":
          {
            jQuery(objetivo).css({ animation: "Hank_Out 0.2s" });
            hover_styles =
              "animation: Hank 0.5s ease-in-out forwards, Hank2 0.5s 0.5s infinite !important; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val(
              "animation: Hank_Out 0.2s ;"
            );
          }
          break;
        case "Skew":
          {
            // jQuery(objetivo).css({'transition' : 'transform .2s'});
            hover_styles = "transform: translate(-50%, -50%) skewX(-10deg); ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Wobble Vertical":
          {
            hover_styles = "animation: Wooble_Vertical 0.9s ease-in-out; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Wobble Horizontal":
          {
            hover_styles = "animation: Wooble_Horizontal 0.9s ease-in-out; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Wobble Skew":
          {
            hover_styles = "animation: Wooble_Skew 0.9s ease-in-out; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Buzz":
          {
            hover_styles = "animation: buzz 0.2s infinite; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        case "Buzz Out":
          {
            hover_styles = "animation: buzz_out 0.5s ; ";
            jQuery("#back_button_transform_style_hover").val(hover_styles);
            jQuery("#back_button_transform_style").val("");
          }
          break;
        default:
        // code block
      }
    }

    jQuery("#" + reemplaza_aqui + "_selector").on("input", function () {
      if (this.value != "none") {
        determinar_propiedad(this.value);
        apply(false);
        apply(true);
      } else apply(false);
    });

    if (new_flipbox[reemplaza_aqui + "_selector"] != "none") {
      determinar_propiedad(new_flipbox[reemplaza_aqui + "_selector"]);
      apply(false);
      apply(true);
    } else apply(false);

    function apply(bool) {
      if (bool) {
        for (var i = 0; i < objetivo.length; i++) {
          jQuery(
            "<style type='text/css'> ." +
              reemplaza_aqui +
              "_transform_properties{ " +
              hover_styles +
              "} </style>"
          ).appendTo(objetivo[i]);
        }
      } else {
        if (
          jQuery(objetivo)
            .children()
            .last()[0]
            .innerText.includes(reemplaza_aqui + "_transform_properties")
        ) {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).children().last().remove();
          }
        } else {
          //Nada
        }
      }

      jQuery(objetivo_trigger).hover(
        function () {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).addClass(
              reemplaza_aqui + "_transform_properties"
            );
          }
        },
        function () {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).removeClass(
              reemplaza_aqui + "_transform_properties"
            );
          }
        }
      );
    }
  }

  function aplicar_box_shadow_hover_styles(
    reemplaza_aqui,
    objetivo,
    objetivo_trigger
  ) {
    var hover_styles = "";

    objetivo = jQuery(objetivo);

    box_shadow_color =
      new_flipbox["back_button_box_shadow_hover_color_input_hex"];
    box_shadow_blur =
      new_flipbox["back_button_box_shadow_hover_blur_myRange_number"];
    box_shadow_horizontal =
      new_flipbox["back_button_box_shadow_hover_horizontal_myRange_number"];
    box_shadow_vertical =
      new_flipbox["back_button_box_shadow_hover_vertical_myRange_number"];

    if (
      box_shadow_blur != "0" &&
      box_shadow_horizontal != "0" &&
      box_shadow_vertical != "0"
    ) {
      if (
        box_shadow_blur != "" &&
        box_shadow_horizontal != "" &&
        box_shadow_vertical != ""
      ) {
        hover_styles =
          "box-shadow" +
          " : " +
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px !important";
        apply(false);
        apply(true);
      }
    } else {
      hover_styles = "box-shadow" + " : " + "";
      apply(false);
      // apply(true);
    }

    jQuery("#" + reemplaza_aqui + "_color_input").on("input", function () {
      box_shadow_color = this.value;
      hover_styles =
        "box-shadow" +
        " : " +
        box_shadow_color +
        " " +
        box_shadow_horizontal +
        "px " +
        box_shadow_vertical +
        "px " +
        box_shadow_blur +
        "px !important";
      apply(false);
      apply(true);
    });

    jQuery("#" + reemplaza_aqui + "_color_input_hex").on("input", function () {
      box_shadow_color = this.value;
      hover_styles =
        "box-shadow" +
        " : " +
        box_shadow_color +
        " " +
        box_shadow_horizontal +
        "px " +
        box_shadow_vertical +
        "px " +
        box_shadow_blur +
        "px !important";
      apply(false);
      apply(true);
    });

    ///Blur
    jQuery("#" + reemplaza_aqui + "_blur_myRange").on("input", function () {
      box_shadow_blur = this.value;
      hover_styles =
        "box-shadow" +
        " : " +
        box_shadow_color +
        " " +
        box_shadow_horizontal +
        "px " +
        box_shadow_vertical +
        "px " +
        box_shadow_blur +
        "px !important";
      apply(false);
      apply(true);
    });

    jQuery("#" + reemplaza_aqui + "_blur_myRange_number").on(
      "input",
      function () {
        box_shadow_blur = this.value;
        hover_styles =
          "box-shadow" +
          " : " +
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px !important";
        apply(false);
        apply(true);
      }
    );

    ///Horizontal
    jQuery("#" + reemplaza_aqui + "_horizontal_myRange").on(
      "input",
      function () {
        box_shadow_horizontal = this.value;
        hover_styles =
          "box-shadow" +
          " : " +
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px !important";
        apply(false);
        apply(true);
      }
    );

    jQuery("#" + reemplaza_aqui + "_horizontal_myRange_number").on(
      "input",
      function () {
        box_shadow_horizontal = this.value;
        hover_styles =
          "box-shadow" +
          " : " +
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px !important";
        apply(false);
        apply(true);
      }
    );

    ///Vertical
    jQuery("#" + reemplaza_aqui + "_vertical_myRange").on("input", function () {
      box_shadow_vertical = this.value;
      hover_styles =
        "box-shadow" +
        " : " +
        box_shadow_color +
        " " +
        box_shadow_horizontal +
        "px " +
        box_shadow_vertical +
        "px " +
        box_shadow_blur +
        "px !important";
      apply(false);
      apply(true);
    });

    jQuery("#" + reemplaza_aqui + "_vertical_myRange_number").on(
      "input",
      function () {
        box_shadow_vertical = this.value;
        hover_styles =
          "box-shadow" +
          " : " +
          box_shadow_color +
          " " +
          box_shadow_horizontal +
          "px " +
          box_shadow_vertical +
          "px " +
          box_shadow_blur +
          "px !important";
        apply(false);
        apply(true);
      }
    );

    function apply(bool) {
      if (bool) {
        for (var i = 0; i < objetivo.length; i++) {
          jQuery(
            "<style type='text/css'> ." +
              reemplaza_aqui +
              "_box_shadow_properties{ " +
              hover_styles +
              "} </style>"
          ).appendTo(objetivo[i]);
        }
      } else {
        for (var i = 0; i < objetivo.length; i++) {
          if (
            jQuery(objetivo[i])
              .children()
              .last()[0]
              .innerText.includes(reemplaza_aqui + "_box_shadow_properties")
          ) {
            jQuery(objetivo[i]).children().last().remove();
          } else {
            //Nada
          }
        }
      }

      jQuery(objetivo_trigger).hover(
        function () {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).addClass(
              reemplaza_aqui + "_box_shadow_properties"
            );
          }
        },
        function () {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).removeClass(
              reemplaza_aqui + "_box_shadow_properties"
            );
          }
        }
      );
    }
  }

  function aplicar_color_hover_styles(
    reemplaza_aqui,
    objetivo,
    propiedad,
    objetivo_trigger
  ) {
    objetivo = jQuery(objetivo);
    var actual_transitions = "";
    var new_transition = "";

    if (new_flipbox[reemplaza_aqui + "_color_input_hex"] != "") {
      var hover_styles =
        propiedad +
        " : " +
        new_flipbox[reemplaza_aqui + "_color_input_hex"] +
        " !important";
      apply(false);
      apply(true);
    } else apply(false);

    jQuery("#" + reemplaza_aqui + "_color_input").on("input", function () {
      hover_styles = propiedad + ": " + this.value + " !important;";

      apply(false);
      apply(true);
    });

    jQuery("#" + reemplaza_aqui + "_color_input_hex").on("input", function () {
      hover_styles = propiedad + " : " + this.value + " !important";
      apply(false);
      apply(true);
    });

    function apply(bool) {
      if (bool) {
        for (var i = 0; i < objetivo.length; i++) {
          jQuery(
            "<style type='text/css'> ." +
              reemplaza_aqui +
              "_color_hover_properties{ " +
              hover_styles +
              "} </style>"
          ).appendTo(objetivo[i]);
        }
      } else {
        for (var i = 0; i < objetivo.length; i++) {
          if (
            jQuery(objetivo[i])
              .children()
              .last()[0]
              .innerText.includes(reemplaza_aqui + "_color_hover_properties")
          ) {
            jQuery(objetivo[i]).children().last().remove();
          } else {
          }
        }
      }

      jQuery(objetivo_trigger).hover(
        function () {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).addClass(
              reemplaza_aqui + "_color_hover_properties"
            );
          }
        },
        function () {
          for (var i = 0; i < objetivo.length; i++) {
            jQuery(objetivo[i]).removeClass(
              reemplaza_aqui + "_color_hover_properties"
            );
          }
        }
      );
    }
  }
  var elements = document.getElementsByClassName("back_section_button");

  function actualizar_hover() {
    var hover_styles = "";

    for (var objetivo in all_objt_styles) {
      for (var propiedades in all_objt_styles[objetivo]) {
        hover_styles =
          hover_styles +
          all_objt_styles[objetivo][propiedades] +
          " !important;";
      }
      aplicar_cambios(hover_styles, objetivo);
      hover_styles = "";
    }

    function aplicar_cambios(hover_styles, objetivo) {
      jQuery(
        "<style type='text/css'> .redbold{ " + hover_styles + "} </style>"
      ).appendTo("body");
      jQuery(objetivo).hover(
        function () {
          jQuery(objetivo).addClass("redbold");
        },
        function () {
          jQuery(objetivo).removeClass("redbold");
        }
      );
    }
  }

  /////////////////////////Back Button Hover Section///////////////////////////////

  color_picker_using_html("back_button_color_hover", "none", "color", false);
  aplicar_color_hover_styles(
    "back_button_color_hover",
    ".back_section_button_text",
    "color",
    ".back_section_button"
  );

  color_picker_using_html(
    "back_button_background_color_hover",
    "none",
    "background-color",
    false
  );
  aplicar_color_hover_styles(
    "back_button_background_color_hover",
    ".back_section_button",
    "background-color",
    ".back_section_button"
  );

  box_shadow_section("back_button_box_shadow_hover", "none");
  aplicar_box_shadow_hover_styles(
    "back_button_box_shadow_hover",
    ".back_section_button",
    ".back_section_button"
  );

  ////////////////////////////////Front Image///////////////////////////////////////////

  barra_slider_con_numero(
    "front_image_width",
    ".front_preview_image",
    "width",
    1000,
    10000,
    100,
    1000,
    0,
    0,
    0,
    0,
    "",
    false
  );

  barra_slider_con_numero(
    "front_image_height",
    ".front_preview_image",
    "height",
    1000,
    10000,
    100,
    1000,
    0,
    0,
    0,
    0,
    "",
    false
  );

  /////////////////////////// FRONT IMAGE OVERLAY /////////////////////////////

  barra_slider_con_numero('front_image_overlay_left', '.front_image_overlay', 'left', 500, 5000, 50, 500, -500, -5000, -50, -500, 'left', false);

  barra_slider_con_numero('front_image_overlay_top', '.front_image_overlay', 'top', 500, 5000, 50, 500, -500, -5000, -50, -500, 'top', false);

  barra_slider_con_numero('front_image_overlay_width', '.front_image_overlay', 'width', 1000, 5000, 50, 500, 0, 0, 0, 0, 'width', false);

   /////////////////////////// BACK IMAGE OVERLAY /////////////////////////////

   barra_slider_con_numero('back_image_overlay_left', '.back_image_overlay', 'left', 500, 5000, 50, 500, -500, -5000, -50, -500, 'left', false);

   barra_slider_con_numero('back_image_overlay_top', '.back_image_overlay', 'top', 500, 5000, 50, 500, -500, -5000, -50, -500, 'top', false);
 
   barra_slider_con_numero('back_image_overlay_width', '.back_image_overlay', 'width', 1000, 5000, 50, 500, 0, 0, 0, 0, 'width', false);

  ///////////////////////////////////////FRONT ANIMATION////////////////////////////////////////////////////////////////

  ////////////Animation Duration////////////////
  animation_duration = new_flipbox["front_animation_duration"];
  jQuery("#front_animation_duration_myRange").on("input", function () {
    jQuery("#front_animation_duration_myRange_number").val(
      jQuery("#front_animation_duration_myRange").val()
    );
    animation_duration = this.value;
  });



  animation_time_func(new_flipbox["front_animation_time_function_selector"]);

  jQuery("#front_animation_time_function_selector").on("input", function () {
    animation_time_func(this.value);
  });

  function animation_time_func(valor) {
    switch (valor) {
      case "bounce":
        animation_time_function = "cubic-bezier(.56,.64,.69,1.28)";
        break;
      case "smooth-bounce":
        animation_time_function = "cubic-bezier(.25,.1,.34,1.17)";
        break;
      case "fast-bounce":
        animation_time_function = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        break;
      case "deep-bounce":
        animation_time_function = "cubic-bezier(.2,.85,.4,1.275)";
        break;
      case "slow-to-fast":
        animation_time_function = "cubic-bezier(0.785, 0.135, 0.15, 0.86)";
        break;

      default:
        animation_time_function = valor;
        break;
    }
    selecionar_animacion(jQuery("#front_animation_selector").val());
  }

  jQuery("#front_animation_duration_myRange_number").on("input", function () {
    jQuery("#front_animation_duration_myRange").val(
      jQuery("#front_animation_duration_myRange_number").val()
    );
    animation_duration = this.value;
    selecionar_animacion(jQuery("#front_animation_selector").val());
  });

  jQuery("#front_animation_duration_myRange").on("mouseup", function () {
    selecionar_animacion(jQuery("#front_animation_selector").val());
  });

  jQuery("#front_layer_deep_myRange").on("input", function () {
    jQuery("#front_layer_deep_myRange_number").val(
      jQuery("#front_layer_deep_myRange").val()
    );
    
    selecionar_animacion(jQuery("#front_animation_selector").val());
  });

  jQuery("#front_layer_deep_myRange_number").on("input", function () {
    jQuery("#front_layer_deep_myRange").val(
      jQuery("#front_layer_deep_myRange_number").val()
    );
    selecionar_animacion(jQuery("#front_animation_selector").val());
  });


  jQuery("#front_animation_selector").on("input", function () {
    selecionar_animacion(this.value);
  });

  

  jQuery("#test_001").click(function () {
    var output = jQuery(".container");

    jQuery("#output_two").val(output.html());
  });

  ////////////////////////////////////Background Auto Size Section///////////////////////////////////

  function aplicar_background_auto_size() {
    if (jQuery("#background_auto_size").prop("checked")) {
      //
      jQuery(".background_size_section").css({ display: "none" });
      jQuery(".back_preview_image").css({
        width: jQuery(".front_preview_image").css("width"),
      });
      jQuery(".back_preview_image").css({
        height: jQuery(".front_preview_image").css("height"),
      });

      jQuery("#back_overlay_width_value_compu").val(
        jQuery("#front_image_width_value_compu").val()
      );
      jQuery("#back_overlay_width_value_ipad").val(
        jQuery("#front_image_width_value_ipad").val()
      );
      jQuery("#back_overlay_width_value_phone").val(
        jQuery("#front_image_width_value_phone").val()
      );

      jQuery("#back_overlay_height_value_compu").val(
        jQuery("#front_image_height_value_compu").val()
      );
      jQuery("#back_overlay_height_value_ipad").val(
        jQuery("#front_image_height_value_ipad").val()
      );
      jQuery("#back_overlay_height_value_phone").val(
        jQuery("#front_image_height_value_phone").val()
      );
    } else {
      //
      jQuery(".background_size_section").css({ display: "block" });
      jQuery(".back_preview_image").css({
        width: jQuery("#back_overlay_width_myRange_number").val(),
      });
      jQuery(".back_preview_image").css({
        height: jQuery("#back_overlay_height_myRange_number").val(),
      });
    }
  }

  jQuery("#background_auto_size").prop(
    "checked",
    new_flipbox["background_auto_size"]
  );

  jQuery("#background_auto_size").on("input", function () {
    aplicar_background_auto_size();
  });

  jQuery("#background_auto_size").prop(
    "checked",
    new_flipbox["background_auto_size"]
  );

  aplicar_background_auto_size();

  jQuery("#front_image_width_myRange_number, #front_image_width_myRange").on(
    "input",
    function () {
      if (jQuery("#background_auto_size").prop("checked")) {
        jQuery(".back_preview_image").css({
          width: jQuery("#front_image_width_value_compu").val(),
        });
        jQuery("#back_overlay_width_value_compu").val(
          jQuery("#front_image_width_value_compu").val()
        );
        jQuery("#back_overlay_width_value_ipad").val(
          jQuery("#front_image_width_value_ipad").val()
        );
        jQuery("#back_overlay_width_value_phone").val(
          jQuery("#front_image_width_value_phone").val()
        );
      }
    }
  );

  jQuery("#front_image_height_myRange_number, #front_image_height_myRange").on(
    "input",
    function () {
      if (jQuery("#background_auto_size").prop("checked")) {
        jQuery(".back_preview_image").css({
          height: jQuery("#front_image_height_value_compu").val(),
        });
        jQuery("#back_overlay_height_value_compu").val(
          jQuery("#front_image_height_value_compu").val()
        );
        jQuery("#back_overlay_height_value_ipad").val(
          jQuery("#front_image_height_value_ipad").val()
        );
        jQuery("#back_overlay_height_value_phone").val(
          jQuery("#front_image_height_value_phone").val()
        );
      }
    }
  );


  jQuery("#wn_flipbox_pro_header").insertAfter("#screen-meta");
  jQuery('#wpbody').css({'display' : 'block'});




  //////mover automaticamente el container inner hacia atras por cada entrada del front layer deep ////////////////
    jQuery('#front_layer_deep_myRange_number, #front_layer_deep_myRange').on('input', function(){ 
      jQuery('.container_inner').css({'transform':'translateZ(-' + jQuery('#' + 'front_layer_deep_myRange_number').val() + 'px )'})
    })

    
  ///////////////////////////// Opciones de Flip 3D //////////////////////////////////
  jQuery("#front_animation_selector").click(function(){
    show_hide_3d_options(this.value);    
  });
  show_hide_3d_options(jQuery("#front_animation_selector").val());

  function show_hide_3d_options(value) {
    var animation_3d_options = jQuery('#animation_3d_options');
    if(value == '3D FlipX' || value == '3D FlipY') {
      animation_3d_options.css({'display' : 'block'});
    }
    else {
      animation_3d_options.css({'display' : 'none'});
    }    
  }

  jQuery("#front_layer_visible").prop(
    "checked",
    new_flipbox["front_layer_visible"]
  );

  jQuery("#back_layer_visible").prop(
    "checked",
    new_flipbox["back_layer_visible"]
  );

  jQuery("#front_layer_visible").click(function() {
    selecionar_animacion(jQuery("#front_animation_selector").val());
  })

  jQuery("#back_layer_visible").click(function() {
    selecionar_animacion(jQuery("#front_animation_selector").val());
  })














  selecionar_animacion(new_flipbox["front_animation_selector"]);

  //////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
  //////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
  //////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
  //////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
});
//////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
//////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
//////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////
//////////////////////////////////////////////////Final del Documento/////////////////////////////////////////////////////

function selecionar_animacion(valor) {
  switch (valor) {
    case "none":
      {
        none();
      }
      break;
    case "FadeIn":
      {
        none();
        fadeIn();
      }
      break;
    case "Flip X":
      {
        none();
        flipX();
      }
      break;
    case "Flip Y":
      {
        none();
        flipY();
      }
      break;
    case "3D FlipX":
      {
        none();
        flipX3D();
      }
      break;
    case "3D FlipY":
      {
        none();
        flipY3D();
      }
      break;
    default: {
      //Nada
    }
  }
}

function none() {
  var container = document.getElementsByClassName("container");
  for (var i = 0; i < container.length; i++) {
    var container_inner = container[i].children[0];
    var front_preview_image = container[i].children[0].children[0];
    var overlay = container[i].children[0].children[1];
    var front_info = container[i].children[0].children[0].children[0];
    var back_info =
      container[i].children[0].children[1].children[0].children[0];

    ///fadeIn
    overlay.style.transition = "";
    front_preview_image.style.transition = "";
    overlay.style.opacity = "0";
    front_preview_image.style.opacity = "1";
    clear_appended_elements(overlay, "fadeIn");
    clear_appended_elements(front_preview_image, "fadeIn");

    //flipY
    container_inner.style.transition = "";
    container_inner.style.transformStyle = "";
    front_preview_image.style.backfaceVisibility = "hidden";
    overlay.style.opacity = "0";
    overlay.style.backfaceVisibility = "hidden";
    overlay.style.transform = "";
    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';
    clear_appended_elements(container_inner, "flipX");
    clear_appended_elements(container_inner, "flipY");


    // flipY3D
    container_inner.style.transform = "";
    front_info.style.transform = "";
    back_info.style.transform = "";
    clear_appended_elements(container_inner, "flipY3D");
    clear_appended_elements(container_inner, "flipX3D");
  }
}

function flipY() {
  var container = document.getElementsByClassName("container");
  for (var i = 0; i < container.length; i++) {
    var container_inner = container[i].children[0];
    var front_preview_image = container[i].children[0].children[0];
    var overlay = container[i].children[0].children[1];
    var front_info = container[i].children[0].children[0].children[0];
    var back_info =
      container[i].children[0].children[1].children[0].children[0];

    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';

    ///flipY
    jQuery("#" + container[i].id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";
    front_preview_image.style.backfaceVisibility = "hidden";
    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    overlay.style.transform = "rotateY(180deg)";
    append_elements(
      container_inner,
      " transform: rotateY(180deg) ",
      container[i],
      "flipY"
    );
  }
}

function fadeIn() {
  var container = document.getElementsByClassName("container");
  for (var i = 0; i < container.length; i++) {
    var container_inner = container[i].children[0];
    var front_preview_image = container[i].children[0].children[0];
    var overlay = container[i].children[0].children[1];
    var front_info = container[i].children[0].children[0].children[0];
    var back_info =
      container[i].children[0].children[1].children[0].children[0];

    overlay.style.transition =
      "opacity " + animation_duration + "s " + animation_time_function;
    front_preview_image.style.transition =
      "opacity " + animation_duration + "s " + animation_time_function;
    overlay.style.opacity = "0";
    front_preview_image.style.opacity = "1";

    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';

    append_elements(overlay, " opacity: 1 !important ", container[i], "fadeIn");
    append_elements(
      front_preview_image,
      " opacity: 0 !important ",
      container[i],
      "fadeIn"
    );
  }
}

function flipX() {
  var container = document.getElementsByClassName("container");
  for (var i = 0; i < container.length; i++) {
    var container_inner = container[i].children[0];
    var front_preview_image = container[i].children[0].children[0];
    var overlay = container[i].children[0].children[1];
    var front_info = container[i].children[0].children[0].children[0];
    var back_info =
      container[i].children[0].children[1].children[0].children[0];

    front_info.style.backfaceVisibility = 'hidden';
    back_info.style.backfaceVisibility = 'hidden';

    ///flipX
    jQuery("#" + container[i].id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";

    front_preview_image.style.backfaceVisibility = "hidden";
    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    overlay.style.transform = "rotateX(180deg)";
    append_elements(
      container_inner,
      " transform: rotateX(180deg) ",
      container[i],
      "flipX"
    );
  }
}

function clear_appended_elements(objetivo, funcion) {
  if (
    jQuery(objetivo)
      .children()
      .last()[0]
      .innerText.includes(".modificador_hover_" + funcion + "_" + objetivo.id)
  ) {
    jQuery(objetivo).children().last().remove();
  }
}

function append_elements(objetivo, valor, ovjetivo_trigger, funcion) {
  clear_appended_elements(objetivo, funcion);

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

function flipX3D() {
  var container = document.getElementsByClassName("container");
  for (var i = 0; i < container.length; i++) {

    var container_inner = container[i].children[0];
    var front_preview_image = container[i].children[0].children[0];
    var overlay = container[i].children[0].children[1];
    var front_info = container[i].children[0].children[0].children[0];
    var back_info =
      container[i].children[0].children[1].children[0].children[0];
    var front_layer_visible;
    var back_layer_visible;
    var front_layer_deep = jQuery('#' + 'front_layer_deep_myRange_number').val() + 'px';


    
    if (jQuery("#front_layer_visible").prop("checked")) front_layer_visible = 'visible'; else front_layer_visible = 'hidden';    
    if (jQuery("#back_layer_visible").prop("checked")) back_layer_visible = 'visible'; else back_layer_visible = 'hidden';      
    front_info.style.backfaceVisibility = front_layer_visible;
    back_info.style.backfaceVisibility = back_layer_visible;

    
    
    container_inner.style['transform'] = "translateZ(-" + front_layer_deep + ")";

    jQuery("#" + container[i].id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";
    front_preview_image.style.backfaceVisibility = "hidden";
    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    overlay.style.transform = "rotateX(180deg)";
    front_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";
    back_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";
    append_elements(
      container_inner,
      "transform: translateZ(-" + front_layer_deep + ") rotateX(180deg) !important",
      container[i],
      "flipX3D"
    );
  }
}

function flipY3D() {
  var container = document.getElementsByClassName("container");
  for (var i = 0; i < container.length; i++) {
    var container_inner = container[i].children[0];
    var front_preview_image = container[i].children[0].children[0];
    var overlay = container[i].children[0].children[1];
    var front_info = container[i].children[0].children[0].children[0];
    var back_info =
      container[i].children[0].children[1].children[0].children[0];
    var front_layer_visible;
    var back_layer_visible;
    var front_layer_deep = jQuery('#' + 'front_layer_deep_myRange_number').val() + 'px';

    ///flipY3D
    // container_inner.style.transform = "translateZ(-100px)";

   
    if (jQuery("#front_layer_visible").prop("checked")) front_layer_visible = 'visible'; else front_layer_visible = 'hidden';
    
    if (jQuery("#back_layer_visible").prop("checked")) back_layer_visible = 'visible'; else back_layer_visible = 'hidden';      
    front_info.style.backfaceVisibility = front_layer_visible;
    back_info.style.backfaceVisibility = back_layer_visible;

    

    

    container_inner.style['transform'] = "translateZ(-" + front_layer_deep + ")";
    jQuery("#" + container[i].id).css({ perspective: "1000px" });
    container_inner.style.transition =
      "transform " + animation_duration + "s " + animation_time_function;
    container_inner.style.transformStyle = "preserve-3d";
    front_preview_image.style.backfaceVisibility = "hidden";
    overlay.style.opacity = 1;
    overlay.style.backfaceVisibility = "hidden";
    overlay.style.transform = "rotateY(180deg)";
    front_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";
    back_info.style.transform = "translateZ(" + front_layer_deep + ") translateY(-50%)";

    append_elements(
      container_inner,
      "transform: translateZ(-" + front_layer_deep + ") rotateY(180deg) !important",
      container[i],
      "flipY3D"
    );
  }
}
