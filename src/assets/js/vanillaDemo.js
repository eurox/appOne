function vanillaDemo() {
  (function () {
    let $simCreateAutosButton = window.document.getElementById('sim_create_autos_button');
    let $brandDataInput = window.document.getElementById('brands_data');
    let $carForm = window.document.getElementById('car_form');
    let $carsDataInputs = window.document.getElementById('cars_data_inputs');
    let $carNumberInput = window.document.getElementById('cars_number');
    if($carNumberInput !== null) {
      $carNumberInput.addEventListener('change', function (event) {
        event.preventDefault();
        if (this.value === '0') {
          $carsDataInputs.style.display = 'none';
        } else {
          const $carsNumber = parseInt(this.value);
          if ($carsNumber > 0) {
            $carsDataInputs.innerHTML = '<span>For each car, enter in input, the following attributes separated by comma: make, model, year, color and mileage</span>';
            let $i = 1;
            let $placerHolderMessage;
            for ($i; $i <= $carsNumber; $i++) {
              if ($i === 1) {
                $placerHolderMessage = 'by ex. Toyota, Corolla, 2018, Blue, 20000';
              } else {
                $placerHolderMessage = 'Enter car ' + $i + ' attributes...';
              }
              $carsDataInputs.innerHTML += '<div class="md-form"><input type="text" id="brands_data" class="form-control"><label for="brands_data">' + $placerHolderMessage + '</label></div>';
            }
            $carsDataInputs.innerHTML += '<button id="sim_create_autos_button" class="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect">Simulate create cars</button>';
            $carsDataInputs.style.display = 'block';
          }
        }
      });
    }
    $carForm.addEventListener('submit', function (event) {
      event.preventDefault();
    });
    //
    // $simCreateAutosButton.addEventListener('click', function (event) {
    //   event.preventDefault();
    //   const $brandsAutoArray = $brandDataInput.value.split(",");
    //   $brandsAutoArray.forEach(function ($value, $key) {
    //     console.log($value.trim());
    //   })
    // });
    //
    // function auto($brand, $series, $year, $color, $mileage) {
    //   this.brand = $brand;
    //   this.series = $series;
    //   this.year = $year;
    //   this.color = $color;
    //   this.mileage = $mileage;
    // }
    })();
}
