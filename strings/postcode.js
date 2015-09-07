'option explicit';
var postCode = "SR6 8BT";
if (postCode.match(/^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {1,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR 0AA)$/  === true))
{
    console.log ("Your postcode is valid");
} else {
    console.log ("Your postcode is invalid");
};
