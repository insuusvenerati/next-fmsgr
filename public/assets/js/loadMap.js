fetch('https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js')
.then((response) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZWxrY2l0eWhhemFyZCIsImEiOiJja2gxeXdmd2IwNGJnMnBwZnQ5MXEzNzFrIn0.3wgDB5OJjQLOZkrrWt1J9g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-85.6865, 43.014107], // starting position [lng, lat]
        zoom: 13 // starting zoom
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([-85.6865, 43.014107])
        .addTo(map);

    map.on('load', function () {
        map.resize();
    });
})

