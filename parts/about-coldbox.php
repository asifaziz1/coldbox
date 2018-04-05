<?php
/**
 * The template for the Welcome page of the theme.
 *
 * @since 1.5.0
 * @package Coldbox
 */

/**
 * Adds a theme page called About Coldbox
 *
 * @since 1.5.0
 */
function cd_add_welcome_page() {
	add_theme_page(
		__( 'About Coldbox', 'coldbox' ),
		__( 'About Coldbox', 'coldbox' ),
		'edit_theme_options',
		'welcome.php',
		'cd_welcome_page_content'
	);
}
add_action( 'admin_menu', 'cd_add_welcome_page' );


/**
 * Loads a custom stylesheet for the welcome page.
 *
 * @since 1.5.0
 * @param string $hook Current location.
 */
function cd_enqueue_welcome_page_style( $hook ) {
	if ( 'appearance_page_welcome' !== $hook ) {
		return;
	}
	wp_enqueue_style( 'cd-welcome-page-style', get_theme_file_uri( 'assets/css/page-style.css' ) );
}
add_action( 'admin_enqueue_scripts', 'cd_enqueue_welcome_page_style' );

/**
 * Defines the content of the welcome page.
 *
 * @since 1.5.0
 */
function cd_welcome_page_content() {
	?>
	<header class="cdAdmin__header">
		<h1 class="cdAdmin__themeName"><?php echo esc_html( /* translators: %s: Theme version */ sprintf( esc_html__( 'Welcome to Coldbox %s', 'coldbox' ), CD_VER ) ); ?></h1>
		<div class="cdAdmin__screenshot">
			<img src="<?php echo esc_url( get_theme_file_uri( 'screenshot.jpg' ) ); ?>" width="1200" height="900" alt="<?php esc_html_e( 'Theme screenshot', 'coldbox' ); ?>">
		</div>
	</header>

	<div class="cdAdmin__section">
		<h2 class="cdAdmin__h2"><?php esc_html_e( 'Getting Started', 'coldbox' ); ?></h2>
		<p><?php esc_html_e( 'Thanks so much for using the Coldbox theme! Here are some quick tips to help you getting started with the theme.', 'coldbox' ); ?></p>
		<p>
			<?php
				echo wp_kses_data( sprintf(
					/* translators: %1$s: Opening strong tag, %2$s Closing strong tag, %3$s: Opening a tag, %4$s Closing a tag */
					__( '%1$sIf you have just switched from other theme%2$s, we recommend you to regenerate all of your thumbnails with the %3$sRegenerate Thumbnails%4$s plugin. It will create consistent sizes of your thumbnails, with the appropriate size for this theme.', 'coldbox' ),
					'<strong>',
					'</strong>',
					'<a href="' . esc_url( home_url() . '/wp-admin/plugin-install.php?s=regenerate+thumbnails&tab=search&type=term' ) . '">',
					'</a>'
				) );
			?>
		</p>
		<p>
			<?php
				echo wp_kses_data( sprintf(
					/* translators: %1$s: Opening strong tag, %2$s Closing strong tag */
					__( '%1$sIf you just started your WordPress life with this theme%2$s, then there\'s no need to regenerate thumbnails. The theme will automatically create the appropriate size of your thumbnail every time you set a new thumbnail image.', 'coldbox' ),
					'<strong>',
					'</strong>'
				) );
			?>
		</p>

		<p>
			<?php
				echo wp_kses_data( sprintf(
					/* translators: %1$s: Opening a tag of customizer link, %2$s Closing a tag, %3$s: Opening strong tag, %4$s Closing strong tag */
					__( 'Once you have regenerated the thumbnails, go ahead to the %1$sTheme Customizer%2$s to customize the theme as you like. Sections whose name started with "%3$sColdbox:%4$s" are the settings we have added for you to customize. Don\'t forget, there\'s also a section called Colors so you can customize some colors used in the theme.', 'coldbox' ),
					'<a href="' . esc_url( admin_url( 'customize.php' ) ) . '">',
					'</a>',
					'<strong>',
					'</strong>'
				) );
			?>
		</p>
	</div>

	<div class="cdAdmin__section">
		<h2 class="cdAdmin__h2"><?php esc_html_e( 'The Add-on Plugin', 'coldbox' ); ?></h2>
			<?php esc_html_e( 'We are also developing the Addon plugin called Coldbox Addon, which is created and designed just for the Coldbox theme. We highly recommend you to always use the plugin to make the most of the theme. The latest version of the plugin has the following features: ', 'coldbox' ); ?>
		</p>
		<ul>
			<li><?php esc_html_e( 'Automatic AMP pages generation', 'coldbox' ); ?></li>
			<li><?php esc_html_e( 'Share buttons', 'coldbox' ); ?></li>
			<li><?php esc_html_e( 'Google Analytics integration', 'coldbox' ); ?></li>
			<li><?php esc_html_e( 'Automatic Open Graph Tag output', 'coldbox' ); ?></li>
		</ul>

		<?php
		if ( is_plugin_active( 'coldbox-addon/coldbox-addon.php' ) ) {
			?>
			<p><strong><?php esc_html_e( 'Great, you have already installed and activated the addon plugin! To customize some settings related to the addon plugin, go to the Theme Customizer.', 'coldbox' ); ?></strong></p>
			<?php
		} else {
			?>
			<p><?php esc_html_e( 'Unfortunately, you have not installed or activated the addon plugin yet. Click the link below to proceed installing the plugin!', 'coldbox' ); ?></p>
			<a href="<?php echo esc_url( admin_url( 'themes.php?page=tgmpa-install-plugins' ) ); ?>" class="cdAdmin__button">
				<?php esc_html_e( 'Install Now', 'coldbox' ); ?>
			</a>
			<?php
		}
		?>
	</div>

	<div class="cdAdmin__section">
		<h2 class="cdAdmin__h2"><?php esc_html_e( 'Upgrade Notice', 'coldbox' ); ?></h2>
		<h3 class="cdAdmin__h3"><?php esc_html_e( 'v1.5.0', 'coldbox' ); ?></h3>
		<p><?php esc_html_e( 'In the version 1.5.0, we have added a new customizer option to adjust your logo width, and its default value has been set to 230px. If you are previously using the logo that the width is bigger than 230px, then your logo is now become smaller. To customize the width, Go to the Theme Customizer, and proceed to "Coldbox: Header Settings" > "Custom Logo Width".', 'coldbox' ); ?></p>
	</div>

	<div class="cdAdmin__section">
		<h2 class="cdAdmin__h2"><?php esc_html_e( 'Changelog', 'coldbox' ); ?></h2>
	</div>
	<?php
	// phpcs:disable.
	ob_start();
	include_once get_theme_file_path( 'CHANGELOG.md' );
	$changelog = ob_get_contents();
	ob_end_clean();

	require_once get_theme_file_path( 'parts/Parsedown.php' );
	$parsedown = new Parsedown();
	echo wp_kses_post( $parsedown->text( $changelog ) );

	// phpcs:enable.
}

