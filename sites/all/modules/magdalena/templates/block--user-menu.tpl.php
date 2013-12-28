<ul class="user-menu-top">
	<li><?php print t('Bienvenido, !user', array('!user' => $user->name)); ?></li>
	<li><?php print l(t('Mi perfil'), 'user') ?></li>
	<li><?php print l(t('Mi historial'), 'user') ?></li>
	<li><?php print l(t('Cerrar sesión'), 'user/logout') ?></li>
</ul>