const images = [
    'imgGlazier/img01.130121.jpeg',
    'imgGlazier/img02.100221.jpeg',
    'imgGlazier/img03.100321.jpeg',
    'imgGlazier/img04.290421.jpeg',
    'imgGlazier/img05SimonB270521.jpeg',
    'imgGlazier/img07.190821.jpeg',
    'imgGlazier/img08.220721.jpeg',
    'imgGlazier/img09.160921.jpeg',
    'imgGlazier/img10.Ross141021.jpeg',
    'imgGlazier/img11.Ecka111121.jpeg',
    'imgGlazier/img12.Jackson060122.jpeg',
    'imgGlazier/img13.Li030222.jpeg',
    'imgGlazier/img14.Luciano030322.jpeg',
    'imgGlazier/img15.310322.jpeg',
    'imgGlazier/img16.ALFREDO280422.jpeg',
    'imgGlazier/img17.RORY260522.jpeg',
    'imgGlazier/img18.ASH210722.jpeg',
    'imgGlazier/img19.180822.jpeg',
    'imgGlazier/img20.SCR131022.jpeg',
    'imgGlazier/img21.150922.jpeg',
    'imgGlazier/img22.101122.jpeg',
    'imgGlazier/img23.rA050123.jpeg',
    'imgGlazier/img24.020223.jpeg',
    'imgGlazier/img25.YOSHINO020323.jpeg',
    'imgGlazier/img26.XCRSWX300323.jpeg',
    'imgGlazier/img27.270423.jpeg',
    'imgGlazier/img28.250523.jpeg',
    'imgGlazier/img29.220623.jpeg',
    'imgGlazier/img30.140923.jpeg',
    'imgGlazier/img31.SCR121023.jpeg',
    'imgGlazier/img32.KAYLA091123.jpeg',
    'imgGlazier/img33.ISA071223.jpeg',
    
];

const mixcloudTracks = [
    'https://www.mixcloud.com/RTM_FM/glazier130121/',
    'https://www.mixcloud.com/RTM_FM/glazier-100221/',
    'https://www.mixcloud.com/RTM_FM/glazier-100321/',
    'https://www.mixcloud.com/RTM_FM/glazier-290421/',
    'https://www.mixcloud.com/RTM_FM/glazier-with-simon-benjamin-270521/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-240621/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-220721/',
    'https://www.mixcloud.com/RTM_FM/glazier-190821-rerun-cafe-otos-birthday-mix-apr2020/',
    'https://www.mixcloud.com/RTM_FM/glazier-voidstepping-and-ju-canon-160921/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-141021/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-with-ecka-mordecai-111121/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-jackson-060122/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-li-song-030222/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-with-luciano-maggiore-030322/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-310322/',
    'https://www.mixcloud.com/RTM_FM/glazier-alfredo92-280422/',
    'https://www.mixcloud.com/RTM_FM/glazier-malvern-brume-and-ju-canon-260522/',
    'https://www.mixcloud.com/RTM_FM/glazier-ash-reid-and-ju-canon-210722/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-180822/',
    'https://www.mixcloud.com/RTM_FM/glazier-150922/',
    'https://www.mixcloud.com/RTM_FM/glazier-rebroadcast-ju-canon-in-seydisfjordur-iceland-131022/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-101122/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-ra-tack-050123/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-020223/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-and-yoshino-shigihara-from-yama-warashi-020323/',
    'https://www.mixcloud.com/RTM_FM/glazier-crystabel-riley-and-seymour-wright-from-xcrswx-300323/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-270423/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-250523/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-220623/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-canon-140923/',
    'https://www.mixcloud.com/RTM_FM/glazier-ju-takes-over-seydisfjordur-community-radio-iceland-121023/',
    'https://www.mixcloud.com/RTM_FM/glazier-kayla-ephros-and-ju-canon-at-seydisfjordur-community-radio-091123/',
    'https://www.mixcloud.com/RTM_FM/glazier-ísa-and-ju-canon-071223/',
];

// Function to create image gallery
function createGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    
    images.forEach((imageUrl, index) => {
        const galleryItem = document.createElement('img');
        galleryItem.src = 'imgGlazier/' + imageUrl;
        galleryItem.alt = `Image ${index + 1}`;
        galleryItem.classList.add('gallery-item');
        
        // Attach click event to each image to change the audio source
        galleryItem.addEventListener('click', () => {
            document.getElementById('audio-player').src = mixcloudTracks[index];
        });
        
        galleryContainer.appendChild(galleryItem);
    });
}

// Call the function to create the gallery
createGallery();