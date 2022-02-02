<?php
/**
 * The template for front page
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; 

get_header();

get_template_part( 'template-parts/content', 'cover' );

?>

	<main id="primary" class="site-main">

		<div class="wrap">

			<?php
			while ( have_posts() ) :
				the_post();
                get_template_part( 'template-parts/content', 'boxes' );
				get_template_part( 'template-parts/content', 'page' );

				printf( esc_html__( 'Translate me!', 'underscore'));

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</div>

	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
