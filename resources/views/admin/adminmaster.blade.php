
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">
        
        <top-menu></top-menu>
        
        <side-bar></side-bar>

        <div class="content-wrapper">
            <section class="content">
                <admin-main></admin-main>
            </section>
        </div>

        <footer-content></footer-content>

    </div>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
