<!doctype html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap" rel="stylesheet">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

    <title>Cek Cuaca Realtime</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
        <div class="row mt-5">
            <div class="col">
                <h1 style="color: #F9F9F9;">Cek Cuaca Realtime</h1>
            </div>
        </div> 

        <div class="row mt-2">
            <div class="col-md-8">
                <div class="input-group mb-3">
                    <input type="text" class="form-control input-keyword" placeholder="Masukkan Nama Daerah" aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-primary" type="button" id="button-addon2">Cari</button>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-md-4 result" style = "display:none">
        <h5 ><span class="temp" id="temp1"></span> <span class="temp" id="temp2"></span><span><img id="imgs" src="" class="img-fluid" ></span></h5>
        <h2 id="location" style="margin-bottom: 10px;" ></h2>
        <h5> Kelembapan : <span id="hum"></span></h5>
        <h5>kecepatan Angin : <span id="winds"></span></h5>
        <h5 style="margin-bottom: 10px;">Indeks UV: <span id="uvi"></span></h5>
        <h4 style="color: #012443;">koordinat Daerah: <span id="locations"></span></h4>
    </div>

    <div class="container mt-md-4 result2" style = "display:none">
        
    </div>

    <div class="footer">
        <h6>By Pasha Abdul Khalid</h6>
        <h6>Powered by WeatherAPI.com API</h3>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    <script src="script.js"></script>
  </body>
</html>