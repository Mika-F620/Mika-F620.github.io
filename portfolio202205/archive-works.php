<?php get_header(); ?>
<main>
        <div class="others_mv section_mb">
            <div class="mv_catch">   
                <h1>Works</h1>
                <p>制作実績一覧</p>
            </div>
        </div>

        <div class="wrapper">
           <ul id="tab" class="works_category">
               <li>Webサイト</li>
               <li>LP</li>
           </ul>
           
           <div class="contents">
				   <?php
                      $args = array(
                        'post_type' => 'works',
						'category_name' => 'website',
						'nopaging'  => true,
					  ); 
                   ?>
			   
				   <?php $my_query = new WP_Query($args); ?>
                   <?php while($my_query->have_posts()) : $my_query->the_post(); ?>
            <div class="works_line_card">
				<a href="<?php echo the_field('url'); ?>">
					<?php if(get_field('img')): ?>
                       <img src="<?php the_field('img'); ?>" alt="<?php echo the_field('title'); ?>">
					<?php endif; ?>
                    <p class="works_line_kinds"><?php echo the_field('kinds');  ?></p>
                    <p class="works_line_title"><?php echo the_field('title'); ?></p>
				</a>
				   </div>
				   <?php endwhile; ?>
<?php wp_reset_postdata(); ?>  
           </div>

           <div class="contents">
            
				   <?php
                      $args = array(
                        'post_type' => 'works',
						'category_name' => 'lp',
						'nopaging'  => true,
                      );
                   ?>
				   <?php $my_query = new WP_Query($args); ?>
                   <?php while($my_query->have_posts()) : $my_query->the_post(); ?>
            <div class="works_line_card">
				<a href="<?php echo the_field('url'); ?>">
					<?php if(get_field('img')): ?>
                       <img src="<?php the_field('img'); ?>" alt="<?php echo the_field('title'); ?>">
					<?php endif; ?>
                <p class="works_line_kinds"><?php echo the_field('kinds');  ?></p>
                <p class="works_line_title"><?php echo the_field('title'); ?></p>
				</a>
            </div>
<?php endwhile; ?>
<?php wp_reset_postdata(); ?>
				 
        </div>

        </div>
        </main>
<?php get_footer();  ?>