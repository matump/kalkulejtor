<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator Jednostek Fizycznych</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 style="text-align: center;">Kalkulator Jednostek Fizycznych</h1>

    <form method="post" action="" onsubmit="return calculateResult()">
        <label for="quantity">Wartość:</label>
        <input type="text" name="quantity" id="quantity" required>

        <label for="from_category">Z kategorii:</label>
        <select name="from_category" id="from_category" onchange="populateUnits('from_category', 'from_unit')" required>
            <option value="Ciśnienie">Ciśnienie</option>
            <option value="Czas">Czas</option>
            <option value="Długość">Długość</option>
            <option value="Energia">Energia</option>
            <option value="Masa">Masa</option>
            <option value="Objętość">Objętość</option>
            <option value="Powierzchnia">Powierzchnia</option>
            <option value="Prędkość">Prędkość</option>
            <option value="Siła">Siła</option>
            <option value="Temperatura">Temperatura</option>
        </select>

        <label for="from_unit">Z jednostki:</label>
        <select name="from_unit" id="from_unit" required></select>

        <label for="to_category">Na kategorię:</label>
        <select name="to_category" id="to_category" onchange="populateUnits('to_category', 'to_unit')" required>
            <option value="Ciśnienie">Ciśnienie</option>
            <option value="Czas">Czas</option>
            <option value="Długość">Długość</option>
            <option value="Energia">Energia</option>
            <option value="Masa">Masa</option>
            <option value="Objętość">Objętość</option>
            <option value="Powierzchnia">Powierzchnia</option>
            <option value="Prędkość">Prędkość</option>
            <option value="Siła">Siła</option>
            <option value="Temperatura">Temperatura</option>
        </select>

        <label for="to_unit">Na jednostkę:</label>
        <select name="to_unit" id="to_unit" required></select>

        <input type="submit" value="Przelicz">

        <div id="result-container">
            <label for="result">Wynik przeliczenia:</label>
            <input type="text" name="result" id="result" readonly>
        </div>

        <div id="error-message" class="error-message" style="display: none;">
            Nie można przeliczyć między wybranymi jednostkami. Wybierz jednostki z tej samej kategorii.
        </div>
    </form>
    <?php include('file.php'); ?>
    <script src="script.js"></script>
</body>
</html>
