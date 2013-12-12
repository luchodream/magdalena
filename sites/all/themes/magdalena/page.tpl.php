<?php
?>
  <?php print render($page['header']); ?>

  <div id="wrapper">
    <div id="container" class="clearfix">

      <div id="header" class="clearfix">
        <div id="header-left">
        <?php if ($logo && $site_title): ?>
          <div id="branding">
            <a href="<?php print $front_page ?>">
              <img src="<?php print $logo ?>" alt="<?php print $site_name_and_slogan ?>" title="<?php print $site_name_and_slogan ?>" id="logo" />
            </a>
          </div>
        <?php endif; ?>
        </div>
        <div id="header-right">
          <?php if ($page['header_right']): ?>
            <div id="header-right-inner">
              <?php print render($page['header_right']); ?>
            </div>
          <?php endif; ?>
        </div>        
      </div> <!-- /#header -->

      <div id="content">
        <?php if ($page['sidebar_first']): ?>
        <div id="sidebar-first" class="sidebar">
          <?php print render($page['sidebar_first']); ?>
        </div>
        <?php endif; ?>

        <div id="center">          
          <?php if ($page['navbar']): ?>
            <div id="navbar"><?php print render($page['navbar']); ?></div>
          <?php endif; ?>
          <a id="main-content"></a>
          <?php if ($tabs): ?><div id="tabs-wrapper" class="clearfix"><?php endif; ?>
          <?php print render($title_prefix); ?>
          <?php if ($title): ?>
            <h1<?php print $tabs ? ' class="with-tabs"' : '' ?>><?php print $title ?></h1>
          <?php endif; ?>
          <?php print render($title_suffix); ?>
          <?php if ($tabs): ?><?php print render($tabs); ?></div><?php endif; ?>
          <?php print render($tabs2); ?>
          <?php print $messages; ?>
          <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
          <div class="clearfix">
            <?php print render($page['content']); ?>
          </div>
        </div><!-- /#center -->
        <?php print $feed_icons ?>
      </div> <!-- /#content -->

      <?php if ($page['footer_firstcolumn'] || $page['footer_secondcolumn'] || $page['footer_thirdcolumn'] || $page['footer_fourthcolumn']): ?>
      <div id="footer" class="clearfix">
        <div id="footer-firstcolumn">
          <?php print render($page['footer_firstcolumn']); ?>
        </div> <!-- /#footer-firstcolumn -->
        <div id="footer-secondcolumn">
          <?php print render($page['footer_secondcolumn']); ?>
        </div> <!-- /#footer-secondcolumn -->
        <div id="footer-thirdcolumn">
          <?php print render($page['footer_thirdcolumn']); ?>
        </div> <!-- /#footer-thirdcolumn -->
        <div id="footer-fourthcolumn">
          <?php print render($page['footer_fourthcolumn']); ?>
        </div> <!-- /#footer-fourthcolumn -->
      </div> <!-- /#footer -->
      <?php endif; ?>

      <?php if ($page['sidebar_second']): ?>
      <div id="page-bottom" class="clearfix">
        <?php print render($page['page_bottom']); ?>
      </div> <!-- /#footer -->
      <?php endif; ?>

    </div> <!-- /#container -->
  </div> <!-- /#wrapper -->
