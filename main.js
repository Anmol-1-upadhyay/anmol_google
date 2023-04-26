const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q="+input+"&rlz=1C1RXQR_enIN1028IN1028&oq="+input+"&aqs=chrome.0.69i59j46i433i512j0i433i512j46i433i512j0i433i512j0i512j46i433i512j0i433i512j0i512l2.3564j0j7&sourceid=chrome&ie=UTF-8"
}
