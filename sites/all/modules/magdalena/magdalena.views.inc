<?php

/**
 * @file
 * Views hooks implemented for the Eclip module.
 */

function magdalena_views_data() {
  /*
   * Category data table definitions.
   */
  $data['magdalena_holidays']['table']['group'] = t('Magdalena');
  $data['magdalena_holidays']['table']['base'] = array(
    'field' => 'hid',
    'title' => t('Holidays'),
    'help' 	=> t('List of holidays used in commerce shipping.'),
  );
  // category data id
  $data['magdalena_holidays']['hid'] = array(
    'title' => t('Holiday ID'),
    'help' => t('The holiday data ID.'),
    'field' => array(
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'title' => t('Holiday data ID'),
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),
  );
  
  // day
  $data['magdalena_holidays']['day'] = array(
    'title' => t('Day'),
    'help' => t('The day asociated with the holiday.'),
    'field' => array(
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'title' => t('Holiday day'),
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),  
  );

  // month
  $data['magdalena_holidays']['month'] = array(
    'title' => t('Month'),
    'help' => t('The month asociated with the holiday.'),
    'field' => array(
      'handler' => 'views_handler_field_numeric',
      'click sortable' => TRUE,
    ),
    'filter' => array(
      'title' => t('Holiday day'),
      'handler' => 'views_handler_filter_numeric',
    ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_numeric',
    ),  
  );

  // month
  $data['magdalena_holidays']['title'] = array(
    'title' => t('Title'),
    'help' => t('The title of the holiday.'),
    'field' => array(
      'handler' => 'views_handler_field',
      'click sortable' => TRUE,
      'link_to_node default' => TRUE,
     ),
    'sort' => array(
      'handler' => 'views_handler_sort',
    ),
    // Information for accepting a title as a filter
    'filter' => array(
      'handler' => 'views_handler_filter_string',
    ),
    'argument' => array(
      'handler' => 'views_handler_argument_string',
    ), 
  );    
 
  return $data;
}
