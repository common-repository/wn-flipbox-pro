jQuery(document).ready(function ($) {
  jQuery(".delelte_image_button").click(function (e) {
    var selected_id =
      e.currentTarget.parentElement.parentElement.children[0].id;
    jQuery("#" + selected_id).attr("src", default_image);
    console.log(selected_id);
    jQuery("#" + selected_id.replace("_preview", "")).val("");
  });

  ///////////////GENERAL SETTINGS////////////////////

  //Interaccionar con el Modal (Popup Window)
  jQuery("#button_edit").click(function (e) {
    e.preventDefault();
    jQuery("#myModal").css({ display: "block" });
  });

  //Interaccionar con el Modal (Popup Window)
  jQuery(".close").click(function () {
    jQuery("#myModal").css({ display: "none" });
  });

  //Interaccionar con el Modal (Popup Window)
  jQuery(window).click(function (event) {
    if (event.target.className == "modal")
      jQuery("#myModal").css({ display: "none" });
  });

  //Interaccionar con el links_options_button
  var bool1 = false;
  jQuery("#links_options_button").click(function (e) {
    e.preventDefault();
    if (bool1 == false) {
      jQuery(".link_new_window").css({ display: "block" });
      bool1 = true;
    } else {
      jQuery(".link_new_window").css({ display: "none" });
      bool1 = false;
    }
  });

  //Interaccionar con el links_options_button
  var bool2 = false;
  jQuery("#links_options_button_empty").click(function (e) {
    e.preventDefault();
    if (bool2 == false) {
      jQuery("#link_new_window_empty").css({ display: "block" });
      bool2 = true;
    } else {
      jQuery("#link_new_window_empty").css({ display: "none" });
      bool2 = false;
    }
  });

  jQuery(".button_delete").click(function (e) {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      jQuery("#container_index_submit").val(e.target.id);
      jQuery("#delete_submit_button").click();
    }
  });

  jQuery(".button_edit").click(function (e) {
    e.preventDefault();

    jQuery("#myModal").css({ display: "block" });
    var numero = e.target.id;
    numero = numero.replace("button_edit_", "");

    jQuery("#container_to_edit").val(numero);

    jQuery("#image_title").val(containers[numero]["image_title"]);

    jQuery("#image_description").val(containers[numero]["image_description"]);
    jQuery("#icons_edit_front_heading_droptext_icons").val(
      containers[numero]["front_heading_droptext_icons"]
    );

    if (containers[numero]["myprefix_image_id"] != "") {
      jQuery("#myprefix_image_id_preview").attr(
        "src",
        containers[numero]["myprefix_image_id"]
      );
      jQuery("#myprefix_image_id").val(containers[numero]["myprefix_image_id"]);
    }

    if (containers[numero]["myprefix_image_id_overlay"] != "") {
      jQuery("#front_image_overlay_image_picker_id_preview").attr(
        "src",
        containers[numero]["myprefix_image_id_overlay"]
      );
      jQuery("#front_image_overlay_image_picker_id").val(containers[numero]["myprefix_image_id_overlay"]);
    }

    if (containers[numero]["back_myprefix_image_id"] != "") {
      jQuery("#back_myprefix_image_id_preview").attr(
        "src",
        containers[numero]["back_myprefix_image_id"]
      );
      jQuery("#back_myprefix_image_id").val(
        containers[numero]["back_myprefix_image_id"]
      );
    }

    if (containers[numero]["back_myprefix_image_id_overlay"] != "") {
      jQuery("#back_image_overlay_image_picker_id_preview").attr(
        "src",
        containers[numero]["back_myprefix_image_id_overlay"]
      );
      jQuery("#back_image_overlay_image_picker_id").val(containers[numero]["back_myprefix_image_id_overlay"]);
    }

    jQuery("#image_back_title").val(containers[numero]["image_back_title"]);
    jQuery("#image_back_description").val(
      containers[numero]["image_back_description"]
    );
    jQuery("#back_button_title").val(containers[numero]["back_button_title"]);

    jQuery("#image_link").val(containers[numero]["image_link"]);

    var button_edit_bool1;
    if (containers[numero]["open_new_window_selector"] == "_blank")
      button_edit_bool1 = true;
    else button_edit_bool1 = false;
    jQuery("#open_new_window_selector").prop("checked", button_edit_bool1);

    if (containers[numero]["nofollow_selector"] == "nofollow")
      button_edit_bool1 = true;
    else button_edit_bool1 = false;
    jQuery("#nofollow_selector").prop("checked", button_edit_bool1);

    if (containers[numero]["noreferrer_selector"] == "no-referrer")
      button_edit_bool1 = true;
    else button_edit_bool1 = false;
    jQuery("#noreferrer_selector").prop("checked", button_edit_bool1);
  });

  jQuery("#add_new_image_hover").click(function () {
    jQuery("#add_new_image_hover_form").submit();
  });

  jQuery("#over").click(function (e) {
    e.preventDefault();
    jQuery("#myModal_empty").css({ display: "block" });
  });

  //Interaccionar con el Modal (Popup Window)
  jQuery("#close_empty").click(function () {
    jQuery("#myModal_empty").css({ display: "none" });
  });

  //Interaccionar con el Modal (Popup Window)
  jQuery(window).click(function (event) {
    if (event.target.className == "modal")
      jQuery("#myModal_empty").css({ display: "none" });
  });

  jQuery("#shortcode").click(function () {
    this.select();
  });



  function image_picker(reemplaza_aqui) {

    jQuery(
      "#" + reemplaza_aqui + "image_picker_media_manager, #" + reemplaza_aqui + "_image_picker_id_preview"
    ).click(function (e) {
      e.preventDefault();
      var selected_id = e.target.id;
      var image_frame;
      if (image_frame) {
        image_frame.open();
      }
      // Define image_frame as wp.media object
      image_frame = wp.media({
        title: "Select Media",
        multiple: false,
        library: {
          type: "image",
        },
      });

      image_frame.on("select", function () {
        var datos_imagen = image_frame.state().get("selection").first().toJSON();  

        jQuery("#" + reemplaza_aqui + '_image_picker_id').val(datos_imagen["url"]);
        jQuery("#" + reemplaza_aqui + '_image_picker_id_preview').attr("src", datos_imagen["url"]);
        
      });  
      image_frame.open();
    });
  };

  image_picker('front_image_overlay');
  image_picker('back_image_overlay');
  image_picker('front_image_overlay_empty');
  image_picker('back_image_overlay_empty');





  jQuery(
    "#myprefix_media_manager, #myprefix_image_id_preview, #back_myprefix_media_manager, #back_myprefix_image_id_preview"
  ).click(function (e) {
    e.preventDefault();
    var selected_id = e.target.id;
    var image_frame;
    if (image_frame) {
      image_frame.open();
    }
    // Define image_frame as wp.media object
    image_frame = wp.media({
      title: "Select Media",
      multiple: false,
      library: {
        type: "image",
      },
    });

    image_frame.on("select", function () {
      var datos_imagen = image_frame.state().get("selection").first().toJSON();

      if (
        selected_id == "myprefix_media_manager" ||
        selected_id == "myprefix_image_id_preview"
      ) {
        jQuery("input#myprefix_image_id").val(datos_imagen["url"]);
        jQuery("#myprefix_image_id_preview").attr("src", datos_imagen["url"]);
      } else {
        jQuery("input#back_myprefix_image_id").val(datos_imagen["url"]);
        jQuery("#back_myprefix_image_id_preview").attr(
          "src",
          datos_imagen["url"]
        );
      }
    });

    image_frame.open();
  });

  jQuery(
    "#myprefix_media_manager_empty, #back_myprefix_media_manager_empty, #myprefix_image_id_preview_empty, #back_myprefix_image_id_preview_empty "
  ).click(function (e) {
    e.preventDefault();
    var selected_id = e.target.id;
    var image_frame;
    if (image_frame) {
      image_frame.open();
    }
    // Define image_frame as wp.media object
    image_frame = wp.media({
      title: "Select Media",
      multiple: false,
      library: {
        type: "image",
      },
    });

    image_frame.on("select", function () {
      var datos_imagen = image_frame.state().get("selection").first().toJSON();

      if (
        selected_id == "myprefix_media_manager_empty" ||
        selected_id == "myprefix_image_id_preview_empty"
      ) {
        jQuery("#myprefix_image_id_empty").val(datos_imagen["url"]);
        jQuery("#myprefix_image_id_preview_empty").attr(
          "src",
          datos_imagen["url"]
        );
      } else {
        jQuery("#back_myprefix_image_id_empty").val(datos_imagen["url"]);
        jQuery("#back_myprefix_image_id_preview_empty").attr(
          "src",
          datos_imagen["url"]
        );
      }
    });

    image_frame.open();
  });
});
