function initMap(){
    var options = {
      zoom:5,
      center:{lat: -41.268034, lng: 174.774876}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var geocoder = new google.maps.Geocoder();

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      // Add marker
      addMarker(event.latLng);

      geocoder.geocode({
        location: event.latLng,
      }, (results, status) => {
        if (status == 'OK') {
          if (results && results.length) {
            var filtered_array = results.filter(results => results.types.includes("locality"));
            var addressResult = filtered_array.length ? filtered_array[0] : results[0];

            if (addressResult.address_components) {
              addressResult.address_components.forEach((component) => {
                if (component.types.includes('locality')) {
                  var city = component.long_name

                  console.log(city)

                  localStorage.setItem('city', component.long_name)
                }
              })
            }
          }
        }
      })
    });


    function addMarker(coords){
      var marker = new google.maps.Marker({
        position: coords,
        map: map, 
      });
    }

  }