const mp3s = [
    {
        id: "vie",
        title: "La vie",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt"
    },
    {
        id: "amour",
        title: "the swing2",
        link: "/podcast/mp3/first.mp3",
        descriptionLink: "/podcast/description/first.txt"
    }
];

async function getDescriptionContent(descriptionLink) {
    try {
        const response = await fetch(descriptionLink);
        const text = await response.text();
        return text;
    } catch (error) {
        console.error(`Error fetching description: ${error.message}`);
        return "Description not available";
    }
}

async function affichermp3s() {
    const container = document.getElementById('services-container');
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    // Get the ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    mp3s.forEach(mp3 => {
        if (mp3.id === id) {
            const mp3Element = document.createElement('div');
            mp3Element.classList.add('mp3');

            (async () => {
                const descriptionContent = await getDescriptionContent(mp3.descriptionLink);
                mp3Element.innerHTML = `

                <div class="audio-player">
                <div id="play-btn"></div>
                <div class="audio-wrapper" id="player-container" href="javascript:;">
                  <audio id="player" ontimeupdate="initProgressBar()">
                          <source src="${mp3.link}" type="audio/mp3">
                        </audio>
                </div>
                <div class="player-controls scrubber">
                  <p>${mp3.title} <small>by</small> ismail Helali</p>
                  <span id="seekObjContainer">
                          <progress id="seekObj" value="0" max="1"></progress>
                        </span>
                  <br>
                  <small style="float: left; position: relative; left: 15px;" class="start-time"></small>
                  <small style="float: right; position: relative; right: 20px;" class="end-time"></small>
                
                </div>
                <div class="album-image" style="background-image: url('https://cdn.pixabay.com/audio/2024/01/15/16-58-27-753_200x200.jpg')"></div>
                </div>
                
                <p>${descriptionContent}</p>
                
                `;
            })();

            container.appendChild(mp3Element);
        }
    });
}

affichermp3s();





