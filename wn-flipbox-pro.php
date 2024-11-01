<?php

/**
 * @package WN Flipbox Pro
 */
/*
Plugin Name: WN Flipbox Pro
Plugin URI: https://wirenomads.com
Description: Create eye catching and professional flipboxes effects to positively impact the user experience of your website, increase the time on page and the CTR.
Author: Yaidier Perez
Version: 2.1
Author URI: 
License: GPLv2 or later
*/
/*
Copyright (C) 2020  Yaidier Perez

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/
if (!defined('ABSPATH')) {
    exit;
}

// ... Your plugin's main file logic ...
define('WIRENOMADS_FLIPBOX_DIR', __DIR__);
define('WIRENOMADS_FLIPBOX_URL', plugin_dir_url(__FILE__));
define('WIRENOMADS_FLIPBOX_VERSION', '2.1');


function load_elementor_widget()
{
    require_once WIRENOMADS_FLIPBOX_DIR . '/assets/elementor-widget/my-widgets.php';
}

class WirenomadsFlipbox
{
    public  $my_plugin_name;
    function __construct()
    {
        $this->my_plugin_name = plugin_basename(__FILE__);
    }

    function register()
    {
        add_action('elementor/init', 'load_elementor_widget');
        // add_action('init', array($this, 'version_check'));
        add_action('admin_menu', array($this, 'add_admin_pages'));
        add_filter("plugin_action_links_{$this->my_plugin_name}", array($this, 'settings_link'));
        add_action('admin_enqueue_scripts', array($this, 'load_wp_media_files'));
        add_action('admin_enqueue_scripts', array($this, 'load_my_styles'));
        add_action('init', array($this, 'zz_shortcode_resource'));
        add_action('wp_ajax_myprefix_get_image', 'myprefix_get_image');
        add_shortcode('wn-flipbox', array($this, 'includeme_call'));
    }

    function update_version($general_options)
    {


    }

    function version_check()
    {

        
    }

    function includeme_call($atts = array(), $content = null)
    {

        if (!is_admin()) {
            if (!function_exists('elementor_load_plugin_textdomain')) {
                wp_enqueue_script('jquery');
                wp_enqueue_script(
                    "wn_flipbox_pro_outputJs",
                    array('jquery'),
                    '2.1',
                    false
                );
            }
            $shortcode = $atts['id'];
            $file = strip_tags(plugin_dir_path(__FILE__) . 'templates/output.php');
            ob_start();
            include $file;
            $buffer = ob_get_clean();
            $options = get_option('includeme', array());
            if (isset($options['shortcode'])) {
                $buffer = do_shortcode($buffer);
            }
            return $buffer;
        }
    }

    // Ajax action to refresh the user image
    function myprefix_get_image()
    {

        if (isset($_GET['id'])) {
            $image = wp_get_attachment_image(
                filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT),
                'medium',
                false,
                array(
                    'id' => 'myprefix-preview-image',
                )
            );
            $data = array(
                'image' => $image,
            );
            wp_send_json_success($data);
        } else {
            wp_send_json_error();
        }
    }

    function load_my_styles($hook)
    {

        if ($hook == 'toplevel_page_wn_image_hover' || $hook == 'admin_page_main_page' || $hook == 'wn-flipbox_page_wn_flipbox_settings' || $hook == 'wn-flipbox-pro_page_wn_flipbox_settings') {
            wp_enqueue_style('dashicons');
            wp_enqueue_style('wn_flipbox_pro_css_styles', plugins_url('/css/mycss.css', __FILE__), array(), '2.1');
        }
    }

    function load_wp_media_files($hook)
    {
        // Enqueue WordPress media scripts
        wp_enqueue_media();
        // Enqueue custom script that will interact with wp.media
        wp_enqueue_script(
            'wn_flipbox_pro_myprefix_script',
            plugins_url('/js/main.js', __FILE__),
            array('jquery'),
            '2.1'
        );

        if ($hook == 'admin_page_main_page') {
            wp_enqueue_script(
                'wn_flipbox_pro_myprefix_script2',
                plugins_url('/js/admin_section.js', __FILE__),
                array('jquery'),
                '2.1'
            );
        } else {
            if ($hook == 'wn-flipbox_page_templates_selector' || $hook == 'wn-flipbox-pro_page_templates_selector') {
                wp_enqueue_script(
                    'wn_flipbox_pro_myprefix_script4',
                    plugins_url('/js/templates_selector.js', __FILE__),
                    array('jquery'),
                    '2.1'
                );
            }
        }
    }

    // First register resources with init
    function zz_shortcode_resource()
    {
        wp_register_script(
            'wn_flipbox_pro_outputJs',
            plugins_url('/js/templates_selector.js', __FILE__),
            array('jquery'),
            "2.1",
            false
        );
    }

    public function settings_link($links)
    {
        $settings_link = '<a href="admin.php?page=wn_image_hover"> Settings</a>';
        array_push($links, $settings_link);
        return $links;
    }

    public function add_admin_pages()
    {
        add_menu_page(
            'WN Flip Box',
            'WN Flipbox Pro',
            'manage_options',
            'wn_image_hover',
            array($this, 'admin_index'),
            WIRENOMADS_FLIPBOX_URL . 'images/wn-flipbox-icon.svg',
            110
        );
        add_submenu_page(
            null,
            'mainpage',
            "Main Page",
            'manage_options',
            'main_page',
            array($this, 'submenu_index')
        );
        add_submenu_page(
            'wn_image_hover',
            'Create New',
            "Create New",
            'manage_options',
            'templates_selector',
            array($this, 'submenu_templates_selector')
        );
        add_submenu_page(
            'wn_image_hover',
            'Settings',
            "Settings",
            'manage_options',
            'wn_flipbox_settings',
            array($this, 'submenu_settings')
        );
        add_submenu_page(
            null,
            'wn_save_handler',
            "Save Handler",
            'manage_options',
            'wn_save_handler',
            array($this, 'submenu_save_handler')
        );
    }

    public function admin_index()
    {
        include_once plugin_dir_path(__FILE__) . '/templates/main.php';
    }

    public function submenu_index()
    {
        include_once plugin_dir_path(__FILE__) . '/templates/wn_ih_admin.php';
        // include_once plugin_dir_path(__FILE__) . '/templates/templates_selector.php';
    }

    public function submenu_templates_selector()
    {
        // include_once plugin_dir_path(__FILE__) . '/templates/wn_ih_admin.php';
        include_once plugin_dir_path(__FILE__) . '/templates/templates_selector.php';
    }

    public function submenu_settings()
    {
        // include_once plugin_dir_path(__FILE__) . '/templates/wn_ih_admin.php';
        include_once plugin_dir_path(__FILE__) . '/templates/settings.php';
    }

    public function submenu_save_handler()
    {
        // include_once plugin_dir_path(__FILE__) . '/templates/wn_ih_admin.php';
        include_once plugin_dir_path(__FILE__) . '/templates/db_handler.php';
    }

    function activate()
    {
        

    }

    function deactivate()
    {
    }

    function uninstall()
    {
        delete_option('WN_Image_Hover');
    }
}

if (class_exists('WirenomadsFlipbox')) {
    $wirenomadsFlipbox = new WirenomadsFlipbox();
    $wirenomadsFlipbox->register();
}

//activation
register_activation_hook(__FILE__, array($wirenomadsFlipbox, 'activate'));
//deactivation
register_deactivation_hook(__FILE__, array($wirenomadsFlipbox, 'deactivate'));
//uninstall
// register_unisntall_hook( __FILE__, array($wirenomadsFlipbox, 'uninstall'));
