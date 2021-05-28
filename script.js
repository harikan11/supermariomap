function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 34.668503800152614, lng: 135.42820206816506 },
        zoom: 18,
        mapId: '3906f4f1c60d03b2',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false,

    });


    const markers = [


        [
            "Yoshi\'s House",
            34.66927148499675,
            135.43194643200604,
            "yoshi_house.svg",
            38,
            31,


        ]
    ];

    for (let i = 0; i < marker.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])

            },
            animation: google.maps.Animation.DROP
        });

        const infowindow = new google.maps.Infowindow({
            content: currMarker[0],
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });
    }


}
