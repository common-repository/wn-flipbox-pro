<?php

/**
 * @package WN Flipbox Pro
 */
/*
*/



?>

<style>
    .wn_flipbox_pro_header {
        display: block;
        width: calc(100% + 20px);
        background-color: red;
        /* For browsers that do not support gradients */
        background-image: linear-gradient(to right, #171717, #005D62);
        margin-left: -20px;
        box-shadow: 0px 1px 3px #686868;
        min-height: 57px;
        height: 57px;
    }

    .wn_flipbox_pro_logo_container {
        display: block;
        float: left;
        margin: 10px;
        margin-right: 60px;
    }

    .wn_flipbox_pro_logo {
        display: block;
        width: 300px;
        margin-top: 6px;
        margin-left: 10px;

    }

    .wn_flipbox_pro_menu_button {
        display: block;
        text-align: center;
        background-color: none;
        width: 120px;
        float: left;
        transition: 0.3s;
        height: 57px;
        max-height: 57px;
        padding: 0px;
        text-align: center;
        line-height: 57px;
    }



    .wn_flipbox_pro_menu_button:hover {
        background-color: white;
        cursor: pointer;
    }

    .wn_flipbox_pro_menu_button:hover label {
        color: #404040;
    }

    .wn_flipbox_pro_menu_button label {
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        color: #ffffff;
        transition: 0.3s;

    }

    .wn_flipbox_pro_upgrade_button {
        display: block;
        text-align: center;
        width: 130px;
        float: right;
        transition: 0.3s;
        height: 57px;
        max-height: 57px;
        margin-right: 5%;
        background-color: #ff542e;
    }

    .wn_flipbox_pro_upgrade_button label {
        font-weight: 600;
    }

    .wn_flipbox_pro_upgrade_button:hover {
        background: #f73f17;
    }

    .wn_flipbox_pro_upgrade_button:hover label {
        color: white;
    }

    .wn_flipbox_pro_active {
        background-color: #00000021;
    }

    @media screen and (max-width: 750px) {
        .wn_flipbox_pro_logo_container {
            width: 100%;
        }

        .wn_flipbox_pro_header {
            height: 114px;
        }

        .wn_flipbox_pro_upgrade_button {
            float: left !important;
            background-color: none !important;
            background: none !important;
        }

        .wn_flipbox_pro_upgrade_button label {
            font-weight: 700;
            color: #ff542e;
        }
    }

    @media screen and (max-width: 1100px) {
        .wn_flipbox_pro_upgrade_button {
            margin: 0px !important;
            width: 130px !important;
        }

        .wn_flipbox_pro_menu_button {
            width: 100px;
        }

        .wn_flipbox_pro_logo_container {
            margin-right: 5px !important;
        }
    }

    .wn_flipbox_pro_pro {
        background-color: #048e34;
    }

    .wn_flipbox_pro_pro:hover {
        cursor: default;
        background-color: #048e34;
    }

    .wn_flipbox_pro_pro label:hover {
        cursor: default;
    }


    .final {
        clear: both;
    }
</style>





<div id='wn_flipbox_pro_header' class="wn_flipbox_pro_header">

    <div class="wn_flipbox_pro_logo_container">
        <img class="wn_flipbox_pro_logo" src="<?php echo WIRENOMADS_FLIPBOX_URL . 'images/flipbox_wirenomads.png'; ?>">
    </div>

    <a href="<?php echo admin_url('admin.php?page=wn_image_hover'); ?>">
        <div class="wn_flipbox_pro_menu_button <?php if (get_admin_page_title() == 'wn-image-hover-effects') echo 'wn_flipbox_pro_active'; ?>">
            <label>Flipbox</label>
        </div>
    </a>

    <a href="<?php echo admin_url('admin.php?page=templates_selector'); ?>">
        <div class="wn_flipbox_pro_menu_button <?php if (get_admin_page_title() == 'wn_flipbox_templates_selector') echo 'wn_flipbox_pro_active'; ?>">
            <label>Create New</label>
        </div>
    </a>

    <a href="<?php echo admin_url('admin.php?page=wn_flipbox_settings'); ?>">
        <div class="wn_flipbox_pro_menu_button <?php if (get_admin_page_title() == 'wn_flipbox_settings') echo 'wn_flipbox_pro_active'; ?>">
            <label>Setting</label>
        </div>
    </a>

    <a href="https://wirenomads.com/flipbox-image-for-wordpress/">
        <div class="wn_flipbox_pro_menu_button wn_flipbox_pro_upgrade_button <?php if ($pro) echo esc_attr('wn_flipbox_pro_pro'); ?>">
            <label><?php if ($pro) echo esc_attr('ACTIVATED');
                    else echo esc_attr('UPGRADE'); ?></label>
        </div>
    </a>

</div>

<div class="final"></div>