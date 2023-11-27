<?php
$unitsData = [
    'Ciśnienie' => ['pascal', 'bar'],
    'Czas' => ['sekunda', 'minuta', 'godzina'],
    'Długość' => ['metr', 'kilometr', 'mila'],
    'Energia' => ['dżul', 'kaloria'],
    'Masa' => ['kilogram', 'gram', 'funt'],
    'Objętość' => ['metry_sześcienne', 'litr', 'galon'],
    'Powierzchnia' => ['metr_kwadratowy', 'kilometr_kwadratowy', 'mila_kwadratowa'],
    'Prędkość' => ['metry_na_sekundę', 'kilometry_na_godzinę'],
    'Siła' => ['newton', 'funt_siły'],
    'Temperatura' => ['stopnie_celsjusza', 'stopnie_fahrenheita', 'kelwin'],
];
function convertUnits($quantity, $fromUnit, $toUnit)
{
    $conversionFactors = [
        'pascal' => 1,
        'bar' => 1e-5,
        'sekunda' => 1,
        'minuta' => 1 / 60,
        'godzina' => 1 / 3600,
        'metr' => 1,
        'kilometr' => 0.001,
        'mila' => 1 / 1609.34,
        'dżul' => 1,
        'kaloria' => 1 / 4.184,
        'kilogram' => 1,
        'gram' => 1000,
        'funt' => 1 / 0.453592,
        'metry_sześcienne' => 1,
        'litr' => 1000,
        'galon' => 0.00378541,
        'metr_kwadratowy' => 1,
        'kilometr_kwadratowy' => 1e-6,
        'mila_kwadratowa' => 1 / 2.58999e+6,
        'metry_na_sekundę' => 1,
        'kilometry_na_godzinę' => 3.6,
        'newton' => 1,
        'funt_siły' => 1 / 4.44822,
        'stopnie_celsjusza' => 1,
        'stopnie_fahrenheita' => 5 / 9,
        'kelwin' => 1 - 273.15,
    ];
    if (!isset($conversionFactors[$fromUnit]) || !isset($conversionFactors[$toUnit])) {
        return null;
    }
    $baseValue = $quantity / $conversionFactors[$fromUnit];
    $result = $baseValue * $conversionFactors[$toUnit];
    return $result;
}
?>