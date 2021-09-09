<?php

include_once "conexao.php";

$sql = "select * from pessoas";

$result = mysqli_query($con, $sql);

while ($dados = mysqli_fetch_assoc($result)) {
    $html .= "Id = " . $dados['idpessoas'] . " Nome = " . $dados['nome'] . "<br> <hr>";
}

use Dompdf\Dompdf;

require_once './dompdf/autoload.inc.php';

// // CRIANDO INSTANCIA
$dompdf = new Dompdf();

$dompdf->loadHtml('<h1>Relatorio PDF</h1>' . $html .'');


// //RENDERIZAR COM HTML
$dompdf->render();

$dompdf->stream("RELATORIO_PDF", array("Attachment" => false));
