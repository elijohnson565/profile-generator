function pageBuilder(data){
    return `
    
<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/assets/style/style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <body class="bg-info d-flex flex-column min-vh-100">

        <header class="center">
            <h1 class="my-team">My Team</h1>
        </header>

        <section id="profile">

          <div class="row">
              <div class="col-sm p-3 m-3">
                <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${data.name}</h5>
                      <p class="card-text">${data.role}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${data.id}</li>
                      <li class="list-group-item">${data.email}<a href="mailto:"</a></li>
                      <li class="list-group-item">${data.github}</li>
                      <li class="list-group-item">${data.officeNumber}</li>
                      <li class="list-group-item">${data.school}</li>
                    </ul>
                </div>
              </div>

               
        </section>

        <footer class="mt-auto center bg-dark"><h1>&copy; 2022</h1></footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        <script src="./page.js" async defer></script>
    </body>
</html>
    
    `
}