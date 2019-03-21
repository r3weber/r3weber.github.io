

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Swiper demo</title>
  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="css\swiper.min.css">

  <!-- Demo styles -->
  <style>
    html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      text-align: center;
      line-height: 14px;
      font-size: 12px;
      background: #fff;
      opacity: 0.7;
      margin: 0px 6px !important;
      transition: width 0.2s, height 0.2s, opacity 0.2s;
    }

    .swiper-pagination-bullet:hover {
      opacity: 0.9;
    }
    .swiper-pagination-bullet-active {
      opacity: 1;
    }
      text-align: center;
      font-size: 18px;
      background: #fff;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-position: center !important;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  </style>
</head>
<body>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="background-image: url('img/PondH2EmbankmentPictures1.jpg')"></div>
      <div class="swiper-slide" style="background-image: url('img/Pond H2 Embankment Pictures 2.jpg')"></div>
      <div class="swiper-slide" style="background-image: url('img/Pond H2 Embankment Pictures 3.jpg')"></div>
      <div class="swiper-slide" style="background-image: url('img/Pond H2 Embankment Pictures 4.jpg')"></div>
      <div class="swiper-slide" style="background-image: url('img/Pond H2 Embankment Pictures 5.jpg')"></div>

    </div>
    <div class="swiper-pagination"></div>
  </div>

  <!-- Swiper JS -->
  <script src="js\swiper.min.js"></script>

  <!-- Initialize Swiper -->
  <script>
     var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '</span>';
        },
      },
    });
  </script>
</body>
</html>
