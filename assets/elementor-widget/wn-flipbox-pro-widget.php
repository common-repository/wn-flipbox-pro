<?php


namespace Elementor;

global $wn_flipboxes_to_show;
$wn_flipboxes_to_show = [];


$wn_flipbox_general_options = get_option('WN_Image_Hover');
$wn_flipbox_flipboxes = $wn_flipbox_general_options['flipboxes'];

?>

<?php

class Wn_Flipbox_Pro_Elementor_Widget extends Widget_Base
{

	public function get_name()
	{
		return 'wn-flipbox-pro-widget';
	}

	public function get_title()
	{
		return 'WN Flipbox';
	}

	public function get_icon()
	{
		return 'wn_flipbox_pro_elementor_icon_svg';
	}

	public function get_categories()
	{
		return ['basic'];
	}

	protected function _register_controls($options = [])
	{

		$wn_flipbox_general_options = get_option('WN_Image_Hover');
		$wn_flipbox_flipboxes = $wn_flipbox_general_options['flipboxes'];

		$flipboxes_string = $wn_flipbox_flipboxes;

		foreach ($wn_flipbox_flipboxes as $wn_flipbox) {
			$options[$wn_flipbox['shortcode']] = '[wn-flipbox id="' . $wn_flipbox['shortcode'] . '"]';
		}

		$this->start_controls_section(
			'section_title',
			[
				'label' => __('WN Flipbox Pro', 'wn_flipbox_pro'),
			]
		);

		$this->add_control(
			'border_style',
			[
				'label' => __('Select Flipbox', 'wn_flipbox_pro'),
				'type' => \Elementor\Controls_Manager::SELECT,
				'default' => 'solid',
				'options' => $options,
			]
		);

		$this->end_controls_section();
	}

	protected function render()
	{
		$settings = $this->get_settings_for_display();
		$url = $settings['link']['url'];
		$shortcode = $settings['border_style'];
		include WIRENOMADS_FLIPBOX_DIR . '/templates/output.php';
	}
	protected function _content_template()
	{
	}
}


?>



