<?php

/**
 * @file
 * Implementation for the two column basic left sidebar layout
 */
 
// Plugin definition
$plugin = array(
  'title' => 'Magdalena: Header, 2-col Main (tiny sidebar), Footer',
  'category' => 'Magdalena',
  'icon' => 'two_cols_tiny_sidebar_right.png',
  'theme' => 'two-cols_tiny-sidebar-right',
  'css' => 'two_cols_tiny_sidebar_right.css',
  'regions' => array(
    'top' => 'Top',
    'main' => 'Main Content',
    'sidebar' => 'Sidebar right',
    'bottom' => 'Bottom',
  ),
);

