


let gun =29
let ay = 2


if ((( gun > 22 && gun <= 31 ) && ay == 12) || (gun < 21 && ay == 1))
{
    console.log("OĞLAK");
}

else if ((( gun > 20 && gun <= 31 ) && ay == 1) || (gun < 19 && ay == 2))
{
    console.log("KOVA");
}

else if ((( gun > 18 && gun <= 29 ) && ay == 2) || (gun < 21 && ay == 3))
{
    console.log("BALIK");
}

else if ((( gun > 20 && gun <= 31 ) && ay == 3) || (gun < 21 && ay == 4))
{
    console.log("KOÇ");
}

else if ((( gun > 20 && gun <= 30 ) && ay == 4) || (gun < 21 && ay == 5))
{
    console.log("BOĞA");
}

else if ((( gun > 20 && gun <= 31 ) && ay == 5) || (gun < 22 && ay == 6))
{
    console.log("İKİZLER");
}

else if ((( gun > 21 && gun <= 30 ) && ay == 6) || (gun < 23 && ay == 7))
{
    console.log("YENGEÇ");
}

else if ((( gun > 22 && gun <= 31 ) && ay == 7) || (gun < 23 && ay == 8))
{
    console.log("ASLAN");
}

else if ((( gun > 22 && gun <= 31 ) && ay == 8) || (gun < 23 && ay == 9))
{
    console.log("BAŞAK");
}

else if ((( gun > 22 && gun <= 30 ) && ay == 9) || (gun < 24 && ay == 10))
{
    console.log("TERAZİ");
}

else if ((( gun > 23 && gun <= 31 ) && ay == 10) || (gun < 23 && ay == 11))
{
    console.log("AKREP");
}

else if ((( gun > 22 && gun <= 30 ) && ay == 11) || (gun < 22 && ay == 12))
{
    console.log("YAY");
}

else
{
    console.log("Geçersiz işlem");
}