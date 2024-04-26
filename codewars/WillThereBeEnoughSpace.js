function enough(cap, on, wait) {
    const result =  cap - on - wait;
    if(result >= 0) {
        return 0;
    } else {
        return (result * -1)
    }
}

enough(100, 60, 50) //10

//     cap — количество человек, которое может вместить автобус, не считая водителя.
//     on - количество людей в автобусе без учета водителя.
//     wait— это количество людей, ожидающих посадки в автобус, не считая водителя.

//Если места достаточно, верните 0, а если нет, верните количество пассажиров, которых он не сможет взять.