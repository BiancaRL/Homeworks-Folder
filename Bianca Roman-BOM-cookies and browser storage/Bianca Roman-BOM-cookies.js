function setCookie(name, value) {
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    console.log("Cookie '" + name + "' set with value: " + value);
}

function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim().split('=');
        if (cookie[0] === name) {
            return decodeURIComponent(cookie[1]);
        }
    }
    return null;
}

function saveLanguage() {
    var selectedLanguage = document.querySelector('input[name="language"]:checked');
    if (selectedLanguage) {
        setCookie("selectedLanguage", selectedLanguage.value);
        localStorage.setItem("selectedLanguage", selectedLanguage.value);
        console.log("Language preference saved: " + selectedLanguage.value);
    } else {
        console.error("No language selected.");
    }
}

window.onload = function() {
    var storedLanguageCookie = getCookie("selectedLanguage");
    var storedLanguageLocalStorage = localStorage.getItem("selectedLanguage");
    
    if (storedLanguageCookie !== null) {
        var languageRadioButton = document.getElementById(storedLanguageCookie);
        if (languageRadioButton) {
            languageRadioButton.checked = true;
            console.log("Language pre-selected based on cookie: " + storedLanguageCookie);
        }
    } else if (storedLanguageLocalStorage !== null) {
        var languageRadioButton = document.getElementById(storedLanguageLocalStorage);
        if (languageRadioButton) {
            languageRadioButton.checked = true;
            console.log("Language pre-selected based on localStorage: " + storedLanguageLocalStorage);
        }
    }
};