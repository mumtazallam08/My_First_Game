function ludogame(){
    const number_dice = Math.floor(Math.random()*6+1);
    const images = 'images/dice'+number_dice+'.png';
    document.getElementById("image_changer").setAttribute('src',images);
}

