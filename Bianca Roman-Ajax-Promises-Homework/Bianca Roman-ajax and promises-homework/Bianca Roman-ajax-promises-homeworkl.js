function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json(); 
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        return Promise.reject(error);
      });
  }

  function displayError() {
    const resultFrame = document.getElementById('resultFrame');
    resultFrame.innerHTML = '<p>Please enter a valid ID!</p>';
    resultFrame.style.display = 'block';
  }

  function getCharacter() {
    const characterId = document.getElementById('characterId').value;
    if (!characterId.trim()) {
      displayError();
    } else {
      const url = `https://rickandmortyapi.com/api/character/${characterId}`;
      fetchData(url)
        .then(data => {
          displayCharacters([data]);
        })
        .catch(error => {
          console.error('Error fetching character data:', error);
          displayError();
        });
    }
  }

  function getLocation() {
    const locationId = document.getElementById('locationId').value;
    if (!locationId.trim()) {
      displayError();
    } else {
      const url = `https://rickandmortyapi.com/api/location/${locationId}`;
      fetchData(url)
        .then(data => {
          displayLocations([data]);
        })
        .catch(error => {
          console.error('Error fetching location data:', error);
          displayError();
        });
    }
  }

  function getEpisode() {
    const episodeId = document.getElementById('episodeId').value;
    if (!episodeId.trim()) {
      displayError();
    } else {
      const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;
      fetchData(url)
        .then(data => {
          displayEpisodes([data]);
        })
        .catch(error => {
          console.error('Error fetching episode data:', error);
          displayError();
        });
    }
  }

  function getAllCharacters() {
    const url = 'https://rickandmortyapi.com/api/character/';
    fetchData(url)
      .then(data => {
        displayCharacters(data.results);
      })
      .catch(error => {
        console.error('Error fetching all characters:', error);
        displayError();
      });
  }

  function getAllLocations() {
    const url = 'https://rickandmortyapi.com/api/location/';
    fetchData(url)
      .then(data => {
        displayLocations(data.results);
      })
      .catch(error => {
        console.error('Error fetching all locations:', error);
        displayError();
      });
  }

  function getAllEpisodes() {
    const url = 'https://rickandmortyapi.com/api/episode/';
    fetchData(url)
      .then(data => {
        displayEpisodes(data.results);
      })
      .catch(error => {
        console.error('Error fetching all episodes:', error);
        displayError();
      });
  }

  function displayCharacters(characters) {
    const resultFrame = document.getElementById('resultFrame');
    resultFrame.style.display = 'block';
    resultFrame.innerHTML = '<h2>Character Details:</h2><ul>' + formatCharacterList(characters) + '</ul>';
  }

  function displayLocations(locations) {
    const resultFrame = document.getElementById('resultFrame');
    resultFrame.style.display = 'block';
    resultFrame.innerHTML = '<h2>Location Details:</h2><ul>' + formatLocationList(locations) + '</ul>';
  }

  function displayEpisodes(episodes) {
    const resultFrame = document.getElementById('resultFrame');
    resultFrame.style.display = 'block';
    resultFrame.innerHTML = '<h2>Episode Details:</h2><ul>' + formatEpisodeList(episodes) + '</ul>';
  }

  function formatCharacterList(characters) {
    let formattedList = '';
    characters.forEach(character => {
      const { name, status, species, gender } = character;
      formattedList += `
        <li>
          <span>Name:</span> ${name}<br>
          <span>Status:</span> ${status}<br>
          <span>Species:</span> ${species}<br>
          <span>Gender:</span> ${gender}<br>
        </li>
        <hr>
      `;
    });
    return formattedList;
  }

  function formatLocationList(locations) {
    let formattedList = '';
    locations.forEach(location => {
      const { name, type, dimension } = location;
      formattedList += `
        <li>
          <span>Name:</span> ${name}<br>
          <span>Type:</span> ${type}<br>
          <span>Dimension:</span> ${dimension}<br>
        </li>
        <hr>
      `;
    });
    return formattedList;
  }

  function formatEpisodeList(episodes) {
    let formattedList = '';
    episodes.forEach(episode => {
      const { name, air_date, episode: episodeCode } = episode;
      formattedList += `
        <li>
          <span>Name:</span> ${name}<br>
          <span>Air Date:</span> ${air_date}<br>
          <span>Episode:</span> ${episodeCode}<br>
        </li>
        <hr>
      `;
    });
    return formattedList;
  }