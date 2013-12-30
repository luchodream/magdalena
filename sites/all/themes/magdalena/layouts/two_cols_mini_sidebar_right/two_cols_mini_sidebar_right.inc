<?php

/**
 * @file
 * Implementation for the two column basic left sidebar layout
 */
 
// Plugin definition
$plugin = array(
  'title' => 'Magdalena: Header, 2-col Main (mini sidebar), Footer',
  'category' => 'Magdalena',
  'icon' => 'two_cols_mini_sidebar_right.png',
  'theme' => 'two-cols_mini-sidebar-right',
  'css' => 'two_cols_mini_sidebar_right.css',
  'regions' => array(
    'top' => 'Top',
    'main' => 'Main Content',
    'sidebar' => 'Sidebar right',
    'bottom' => 'Bottom',
  ),
);

