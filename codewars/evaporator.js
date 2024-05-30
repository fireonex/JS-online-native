function evaporator(content, evap_per_day, threshold){
    let i = 0;
    let thresholdVolume = content * (threshold / 100);
    evap_per_day = evap_per_day / 100;

    while (content > thresholdVolume) {
        content = content * (1 - evap_per_day);
        i++;
    }
    return i;
}

evaporator(10, 10, 5)  //29
//evaporator(10,10,10)   //22

//

//Мы знаем содержимое испарителя (объем в мл), процент
//пены или газа, теряемый каждый день (evap_per_day)
//и порог (порог) в процентах, за которым испаритель
//уже бесполезен. Все числа строго положительные.
//
//Программа сообщает n-й день (в виде целого числа), в который испаритель выйдет из строя.