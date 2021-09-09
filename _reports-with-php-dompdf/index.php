<?php

use Dompdf\Dompdf;

require_once './dompdf/autoload.inc.php';

// CRIANDO INSTANCIA
$dompdf = new Dompdf();

$dompdf->loadHtml('<h1>Relatorio PDF</h1>');


//RENDERIZAR COM HTML
$dompdf->render();

$dompdf->stream("RELATORIO_PDF", array("Attachment" => false)); 