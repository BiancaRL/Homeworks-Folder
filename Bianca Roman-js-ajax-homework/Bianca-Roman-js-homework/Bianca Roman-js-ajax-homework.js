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
      });
  }
  
  function getCharacters(characterId = '') {
    const baseURL = 'https://rickandmortyapi.com/api/character/';
    const url = characterId ? `${baseURL}${characterId}` : baseURL;
    return fetchData(url);
  }
  
  function getLocations(locationId = '') {
    const baseURL = 'https://rickandmortyapi.com/api/location/';
    const url = locationId ? `${baseURL}${locationId}` : baseURL;
    return fetchData(url);
  }
  
  function getEpisodes(episodeId = '') {
    const baseURL = 'https://rickandmortyapi.com/api/episode/';
    const url = episodeId ? `${baseURL}${episodeId}` : baseURL;
    return fetchData(url);
  }
  
  getCharacters()
    .then(allCharacters => {
      console.log('All Characters:', allCharacters);
    });
  
  getCharacters(1)
    .then(character1 => {
      console.log('Character 1:', character1);
    });
  
  getCharacters(2)
    .then(character2 => {
      console.log('Character 2:', character2);
    });
  
  getCharacters(3)
    .then(character3 => {
      console.log('Character 3:', character3);
    });
  
  getLocations()
    .then(allLocations => {
      console.log('All Locations:', allLocations);
    });
  
  getLocations(1)
    .then(location1 => {
      console.log('Location 1:', location1);
    });
  
  getLocations(2)
    .then(location2 => {
      console.log('Location 2:', location2);
    });
  
  getLocations(3)
    .then(location3 => {
      console.log('Location 3:', location3);
    });
  
  getEpisodes()
    .then(allEpisodes => {
      console.log('All Episodes:', allEpisodes);
    });

  getEpisodes(1)
    .then(episode1 => {
      console.log('Episode 1:', episode1);
    });
  
  getEpisodes(2)
    .then(episode2 => {
      console.log('Episode 2:', episode2);
    });
  
  getEpisodes(3)
    .then(episode3 => {
      console.log('Episode 3:', episode3);
    });