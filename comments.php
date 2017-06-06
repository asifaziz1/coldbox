<?php if ( post_password_required() ) { return; } ?>
<?php if ( have_comments() == false && comments_open() == false ) { return; } ?>

<section id="comments" class="content-box">

  <?php if ( have_comments() ): ?>

    <h4 class="comment-head"><?php comments_number( __( 'No Responses', 'coldbox' ), __( '1 Response', 'coldbox' ), __( '% Responses', 'coldbox' ) ); ?></h4>

    <?php $commentcount = get_comments( array( 'status' => 'approve', 'post_id'=> get_the_ID(), 'type'=> 'comment', 'count' => true, ) );
    $pingcount = get_comments( array( 'status' => 'approve', 'post_id'=> get_the_ID(), 'type'=> 'pings', 'count' => true, ) );  ?>

    <ul class="comment-tabmenu">
      <li class="tabitem active"><a class="noscroll" href="#comment-list">Comments<span class="count"><?php echo $commentcount ?></span></a></li>
      <li class="tabitem"><a class="noscroll" href="#ping-list">Pingbacks<span class="count"><?php echo $pingcount ?></span></a></li>
    </ul>

    <?php if ( !empty( $comments_by_type['comment'] ) ): ?>
      <ol id="comment-list">
        <?php wp_list_comments( array( 'type' => 'comment', 'avatar_size' => 42 ) ); ?>
      </ol>
    <?php endif; ?>

    <?php if ( !empty( $comments_by_type['pings'] ) ): ?>
      <ol id="ping-list">
        <?php wp_list_comments( array( 'type' => 'pings', 'avatar_size' => 50, 'short_ping' => true ) ); ?>
      </ol>
    <?php endif; ?>

    <?php if ( get_comment_pages_count() > 1 ): ?>
      <div class="comment-pages">
        <?php paginate_comments_links( array('prev_text' => '&laquo;', 'next_text' => '&raquo;') ); ?>
      </div><!--/.comment-pages-->
    <?php endif; ?>

  <?php endif;?>

  <?php if ( comments_open() ) { comment_form(); } ?>

</section>
