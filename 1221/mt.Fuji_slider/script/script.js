//初期化
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img");//グローバル変数
console.log(images[images.length - 1]);//4番目の画像
//div="slide" の中の最後の画像[iagges.length-1]を最初の画像[0]の前
//insrtBeforeはappdendChildの逆、前に入れる
slide.insertBefore(images[images.length - 1], images[0]);
console.log(images);

//button left

const leftBtn = document.querySelector(".leftBtn");

const leftSlider = function () {
    //ローカル変数　このブロックしか有効
    const slideImages = document.querySelectorAll(".slide img");
    console.log(slideImages);//クリックを押した時点でのhtml
    //左側の余分な画像を、最後に移動
    slide.appendChild(slideImages[0]);
    //入っているstyle属性を削除
    slideImages[1].removeAttribute("style");

};

//console.log(images);
leftBtn.addEventListener("click", leftSlider);

//button
const rightBtn = document.querySelector(".rightBtn");
const rightSlider = function () {
    const slideImages = document.querySelectorAll(".slide img");
    slideImages[1].removeAttribute("style");
    slideImages[0].style.marginLeft = "0";
    slide.insertBefore(slideImages[slideImages.length - 1], slideImages[0]);
};
rightBtn.addEventListener("click", rightSlider);
window.setInterval(leftSlider, 3000);//ミリ秒（２秒）

const widthsize = window.innerWidth; //現在のブラウザの横幅
console.log(widthsize);
//以下から記述していきます。
document.body.addEventListener("click", function (event) {
    //クリックしたx軸の数値が取れる
    console.log(event.clientX);
    if (event.clientX < widthsize / 2) {
        leftSlider();

    } else {
        rightSlider();

    }
});