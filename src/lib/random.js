function randomButton(postData) {
    const min = 0;
    const max = postData.length;

    const randomNumber = Math.floor(Math.random() * (max - min) + min)

    window.location.href = postData[randomNumber].data.link
}