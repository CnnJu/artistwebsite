  // JavaScript code to dynamically create images with Mixcloud links
  const imageContainer = document.getElementById('imageContainer');

  // Array containing image paths and corresponding Mixcloud links
  const images = [
    { path: 'img01.130121.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier130121/' },
    { path: 'img02.100221.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-100221/' },
    { path: 'img03.100321.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-100321/' },
    { path: 'img04.290421.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-290421/' },
    { path: 'img05SimonB270521.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-with-simon-benjamin-270521/' },
    { path: 'img06.240621.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-240621/' },
    { path: 'img08.220721.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-220721/' },
    { path: 'img07.190821.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-190821-rerun-cafe-otos-birthday-mix-apr2020/' },
    { path: 'img09.160921.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-voidstepping-and-ju-canon-160921/' },
    { path: 'img10.Ross141021.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-141021/' },
    { path: 'img11.Ecka111121.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-with-ecka-mordecai-111121/' },
    { path: 'img12.Jackson060122.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-jackson-060122/' },
    { path: 'img13.Li030222.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-li-song-030222/' },
    { path: 'img14.Luciano030322.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-with-luciano-maggiore-030322/' },
    { path: 'img15.310322.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-310322/' },
    { path: 'img16.ALFREDO280422.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-alfredo92-280422/' },
    { path: 'img17.RORY260522.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-malvern-brume-and-ju-canon-260522/' },
    { path: 'img18.ASH210722.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ash-reid-and-ju-canon-210722/' },
    { path: 'img19.180822.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-180822/' },
    { path: 'img21.150922.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-150922/' },
    { path: 'img20.SCR131022.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-rebroadcast-ju-canon-in-seydisfjordur-iceland-131022/' },
    { path: 'img22.101122.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-101122/' },
    { path: 'img23.rA050123.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-ra-tack-050123/' },
    { path: 'img24.020223.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-020223/' },
    { path: 'img25.YOSHINO020323.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-yoshino-shigihara-from-yama-warashi-020323/' },
    { path: 'img26.XCRSWX300323.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-crystabel-riley-and-seymour-wright-from-xcrswx-300323/' },
    { path: 'img27.270423.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-270423/' },
    { path: 'img28.250523.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-250523/' },
    { path: 'img29.220623.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-220623/' },
    { path: 'img30.140923.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-140923/' },
    { path: 'img31.SCR121023.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ju-takes-over-seydisfjordur-community-radio-iceland-121023/' },
    { path: 'img32.KAYLA091123.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-kayla-ephros-and-ju-canon-at-seydisfjordur-community-radio-091123/' },
    { path: 'img33.ISA071223.jpg', mixcloudLink: 'https://www.mixcloud.com/RTM_FM/glazier-ísa-and-ju-canon-071223/' },
    // Add more images with corresponding Mixcloud links as needed
  ];

  // Loop through the images array and create image elements with links
  images.forEach(image => {
    const anchor = document.createElement('a');
    anchor.href = image.mixcloudLink;
    anchor.target = '_blank';

    const img = document.createElement('img');
    img.src = image.path;
    img.alt = 'Image';

    anchor.appendChild(img);
    imageContainer.appendChild(anchor);
  });