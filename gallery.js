const images = [
    '00.130121.jpeg',
    '01.100221.jpg',
    '03.100321.jpg',
    '04.290421.jpg',
    '11SimonB270521.jpg',
    '12.240621.jpg',
    '13.220721.jpg',
    '14.190821.jpg',
    '15.160921.jpg',
    '16.Ross141021.jpg',
    '17.Ecka111121.jpg',
    '18.Jackson060122.jpg',
    '19.Li030222.jpg',
    '21.Luciano030322.jpg',
    '22.310322.jpg',
    '23.ALFREDO280422.jpg',
    '24.RORY260522.jpg',
    '25.ASH210722.jpg',
    '26.180822.jpg',
    '27.150922.jpg',
    '28.SCR131022.jpg',
    '29.101122.jpg',
    '30.020223.jpg',
    '31.YOSHINO020323.jpg',
    '32.XCRSWX300323.jpg',
    '33.rA050123.jpg',
    '34.270423.jpg',
    '35.250523.jpg',
    '36.220623.jpg',
    '37.140923.jpg',
    '38.SCR121023.jpg',
    '39.KAYLA091123.jpg',
    '41.ISA071223.jpg',
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
        galleryItem.src = imageUrl;
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