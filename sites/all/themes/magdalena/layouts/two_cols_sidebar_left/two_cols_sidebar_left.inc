<?php

/**
 * @file
 * Implementation for the two column basic left sidebar layout
 */
 
// Plugin definition
$plugin = array(
  'title' => 'Magdalena: Header, 2-col Main (left sidebar), Footer',
  'category' => 'Magdalena',
  'icon' => 'two_cols_sidebar_left.png',
  'theme' => 'two-cols-sidebar-left',
  'css' => 'two_cols_sidebar_left.css',
  'regions' => array(
    'top' => 'Top',
    'main' => 'Main Content',
    'sidebar' => 'Sidebar Left',
    'bottom' => 'Bottom',
  ),
);

