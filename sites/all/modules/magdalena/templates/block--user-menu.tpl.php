<ul class="user-menu-top">
	<li class="user-welcome"><?php print t('Bienvenido, !user', array('!user' => $user_name)); ?></li>
	<li class="user-profile"><?php print l(t('Mi perfil'), 'user') ?></li>
	<li class="user-history"><?php print l(t('Mi historial'), 'user/' . $user->uid . '/orders'); ?></li>
	<li class="user-logout"><?php print l(t('Cerrar sesión'), 'user/logout') ?></li>
</ul>