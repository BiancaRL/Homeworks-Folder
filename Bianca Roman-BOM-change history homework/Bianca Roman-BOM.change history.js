function updateContent() {
  
    history.pushState({}, '', window.location.pathname + '#new-url');

    document.getElementById('content').innerText = 'Discover Exciting Updates!';

    document.getElementById('image').style.display = 'block';

    console.log('URL changed to /new-url and content updated to "Discover Exciting Updates!".');

    setTimeout(function() {
  
      history.pushState({}, '', window.location.pathname + '#another-url');
      document.getElementById('content').innerText = 'Welcome to the New Page!';
      document.getElementById('image').style.display = 'none';
      console.log('URL has changed to #another-url and content updated to "Welcome to the New Page!".');
    }, 2000);
  }