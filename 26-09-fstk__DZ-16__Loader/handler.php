<?php
if(isset($_FILES['my_file'])){
  $req = false;
	// Приведём полученную информацию в удобочитаемый вид
	ob_start();
	echo '<pre>Данные загруженного файла:<br>';	
	print_r($_FILES['my_file']);
	echo '</pre>';
	$req = ob_get_contents();
	ob_end_clean();
	echo json_encode($req); // вернем полученное в ответе
	exit;
}