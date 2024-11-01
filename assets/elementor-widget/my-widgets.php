<?php

class Wn_Elementor_Widgets {

	protected static $instance = null;

	public static function get_instance() {
		if ( ! isset( static::$instance ) ) {
			static::$instance = new static;
		}

		return static::$instance;
	}

	protected function __construct() {

		require_once('wn-flipbox-pro-widget.php');
		add_action( 'elementor/widgets/widgets_registered', [ $this, 'register_widgets' ] );
		add_action('elementor/editor/before_enqueue_scripts', function() {			
			wp_enqueue_style( 'wn_flipbox_pro_elementor', WIRENOMADS_FLIPBOX_URL . 'css/wn-flipbox-elementor.css' );			
		});
		
	}


	public function register_widgets() {
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new \Elementor\Wn_Flipbox_Pro_Elementor_Widget() );
	}

}

add_action( 'init', 'my_elementor_init' );
function my_elementor_init() {
	Wn_Elementor_Widgets::get_instance();	
}
