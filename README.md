# 2023年　後期「JavaScript基礎」授業課題

##　授業内コード

1. 10月5日（木）はじめの一歩
2. 10月5日（木）GitHub リポジトリ作成
3. 10月12日（木）documentオブジェクトとDOM
4. 10月19日 (木) documentオブジェクトとDOM
5. 10月26日　(木)　documentオブジェクトとDOM
6. 11月02日　(木)　イベント
7. 11月09日 (木) if文
8. 11月16日　(木)
9. 11月30日　関数
10. 12月07日　関数式、引数、戻り値、

## 12月07日
- 関数式
```js
const 関数名 = function(値){
    処理
}
```
- 引数


## 11月30日
- 関数
```js
```
## 11月16日
-
## 11月09日
- if文
```js
const num = Math.round(Math.random() * 100);
        console.log("現在の値：" + num);
        const rem = num % 2;
        //偶数を表示するif文
        if (rem == 0) {
            console.log(num + "は偶数です。");
        } else {
            console.log(num + "は奇数です。");
        }


        if文による条件分岐*/
        const num = 10;
        //条件分岐 ※行コメント
        if (num >= 100) {
            document.body.insertAdjacentHTML("beforeEnd", "<p>numは100以上</p>");
        } else if (num === 0) {
            document.body.insertAdjacentHTML("beforeEnd", "<p>numは0です</p>");
        } else {
            document.body.insertAdjacentHTML("beforeEnd", "<p>numは100未満</p>");
        }


         const widthsize = window.innerWidth; //現在のブラウザの横幅
        console.log(widthsize);
        //以下から記述していきます。
        document.body.addEventListener("click", function (event) {
            //クリックしたx軸の数値が取れる
            console.log(event.clientX);
            if (event.clientX < widthsize / 2) {
                console.log("左");
                const creatElement = document.querySelector(".leftZone");
                console.log(creatElement);
                const lilast = document.createElement("li");
                lilast.textContent = "左"
                creatElement.appendChild(lilast);

            } else {
                console.log("右")
                const createElement = document.querySelector(".rightZone");
                const lilast = document.createElement("li");
                lilast.textContent = "右";
                createElement.appendChild(lilast);

            }
        });
```
## 11月02日
-　
``` js
//javascript内に持ってくる
        const h1_element = document.querySelector("h1");
        console.dir(h1_element);

        //hasAttribute
        //classという属性を持っているかどうか確かめる
        const has_result = h1_element.hasAttribute("class");
        console.log(has_result);

        //getAttribute
        //classの値を判定
        const get_result = h1_element.getAttribute("class");
        console.log(get_result);//classの値

        //className
        //classの中の名前を変えることが出来る
        h1_element.className = "sitename";

        //classList.add classを加えるとき
        h1_element.classList.add("w-full");

        //elem.classList.remove("class値"); //クラスの削除をします。
        h1_element.classList.remove("sitename");

        //elem.classList.toggle("class値"); //クラスが存在する場合は削除します。なければ追加します。
        const body_element = document.body;
        body_element.addEventListener("click", function () {
            body_element.classList.toggle("red");
        });

        //elem.classList.contains("class値"); //クラスをの有無をチェックし、true/falseを返します。
        const contains_result = h1_element.classList.contains("sitename");
        console.log(contains_result);


        const text = document.querySelector("p span")
        const redBtn = document.querySelector(".redder");
        redBtn.addEventListener("click", function () {
            text.classList.toggle("redText");
            //redBtn.textContent = "もとに戻す"
            /*if(text.classList.contains("redText")){
                redBtn.innerText = "もとに戻す"
            }
            else{
                redBtn.innerText = "赤くなる"
            }
            */
            redBtn.innerText = "もとに戻す"
        })

        const bigBtn = document.querySelector(".bigger");
        bigBtn.addEventListener("click", function () {
            text.classList.toggle("bigText");

            bigBtn.innerText = "もとに戻す"
        })



 ```


## 10月26日
- querySelectorAll
- getElementById
- getElementsByTagName(), getElementsByClassName()
- innerHTML
- イベント

### イベント
```js
 //1 ボタンの取得
    const dancingBtn = document.querySelector(".dancing");
    const stopBtn = document.querySelector(".stop");
    const changeBtn = document.querySelector(".change");
    //console.log(dancingBtn);

    //2　画像の取得
    const dancer = document.querySelector(".imgArea img");
    //console.log(dancer);

    //3　イベント設定
    dancingBtn.addEventListener("click", function () {
      dancer.setAttribute("class", "dance");
    });
    //dancingBtnにクリックしたら、画像が回るようにするためにクラスをdanceに変える。

    //4　イベント設定
    stopBtn.addEventListener("click", function () {
      dancer.removeAttribute("class");
    });


    //5　イベント設定
    changeBtn.addEventListener("click", function () {
      dancer.setAttribute("src", "images/ballet_woman.png");
    });
```
###　指定された CSS セレクターに一致する文書中の要素のリストを示す
```js
const nations_list = document.querySelectorAll("ul li");
//もしくは、document.querySelectorAll("#toparis li");などでも可
console.log(nations_list);
```
### id プロパティ（id 属性）が指定された文字列に一致する要素を表す Element オブジェクトを返す
```js
const id_element = document.getElementById("toparis");
console.log(id_element);
```
### 指定されたタグ名を持つ要素や指定されたクラス名をすべて持つすべての子要素の動的オブジェクト HTMLCollection を返す
```js
const tag_element = document.getElementsByTagName("li");
console.log(tag_element);
const class_element = document.getElementsByClassName("pool_b");
console.log(class_element);
```
### 要素のすべての子孫を削除して、htmlString の文字列で与えられた HTML を解釈して構築されたノードに置き換える
```js

  const sweetpotatos = document.querySelector(".imo");

  //innerHTMLプロパティで、中身を確認
  console.log(sweetpotatos.innerHTML);

  //innerHTMLに文字列でHTMLのタグを代入する。
  sweetpotatos.innerHTML = "<li>べにはるか</li>";
  //このままだと全部入れ替わる　
  //複合代入演算子+=を使う
　sweetpotatos.innerHTML += "<li>べにはるか</li>";

```
###
### 文字の色を変える
```js
//Javascriptの中に必要な要素を全部取得
        //文字の色を変えてみましょう。
        //ボタンを取得する
        const redBtn = document.querySelector(".red");
        const blueBtn = document.querySelector(".blue");
        const yellowBtn = document.querySelector(".yellow");


        //文字を取得する
        const text = document.querySelector(".text");
        const textSpan = document.querySelector(".text span");

        //ボタンにclickイベントを設定する
        redBtn.addEventListener("click", function () {
            console.dir(text);
            text.style.color = "red";
            textSpan.innerText = "赤"

        })
        yellowBtn.addEventListener("click", function () {
            console.log(text);
            text.style.color = "yellow";
            textSpan.innerText = "黃";
        })
        blueBtn.addEventListener("click", function () {
            console.log(text);
            text.style.color = "blue";
            textSpan.innerText = "青";
        })
        // function (){}関数を使わずに処理することが出来る
```
### イベントリスナで登録
```js
<p><span>JavaScript</span>（ジャバスクリプト）とは、プログラミング言語のひとつである。</p>
    <button class="redder">赤くなる</button>
    <button class="bigger">大きくなる</button>

    <script>
        const text = document.querySelector("p span")
        const redBtn = document.querySelector(".redder");
        redBtn.addEventListener("click", function () {
            text.setAttribute("class", "redText")
        })

        const bigBtn = document.querySelector(".bigger");
        bigBtn.addEventListener("click", function () {
            text.setAttribute("class", "bigText");
        })
```

## 10月1９日
- documentオブジェクトとDOM
- for文

### 要素の取得、新しい要素を作る、オブジェクトに要素を入れる
```js
//dlの要素を取り入れる
const element = document.querySelector("dl");
console.log(element);
//ddを作る
const lilast = document.createElement("dd");
console.log(lilast);
//追加する内容を入れる
lilast.textContent = "3分待って出来上がり";
console.log(lilast);
//追加する
element.appendChild(lilast);
 ```
### 配列の宣言・代入、取得、長さ
 ```js
 //　宣言、代入
 const animals;
 animals= ["dog","cat","bird"];
 //取得
 console.log(animals[1]);
 //長さ
 console.log(animals.length);
 ```

 ### for文を使って要素を追加
 ```js
 //ulの中に果物一覧をliで入れたい
//配列fruitsを宣言・代入
const fruits = ["りんご", "もも", "バナナ"];
//ulをjavascript空間に入れる
const element = document.querySelector("#fruitslist");
console.log(element);
//fruitsの要素数分だけfor文で回す
for (let i = 0; i < fruits.length; i++) {
    //liを創出する
     const lilast = document.createElement("li");
    //liに値を代入
    console.log(fruits[i]);
    lilast.textContent = fruits[i];
    //elementの中の最後に追加
    element.appendChild(lilast);
    }
 ```




## 10月12日

- リテラルと演算子
- documentオブジェクトとDOM

### 文字列の計算

``` js
//文字列の連結
console.log("ABC" + "DEF");//文字列　+ 文字列
console.log("円周率は" + 3.14 + "です。");//文字列 + 数値
console.log("計算結果：" + 123 + 456);//文字列 + 数値の計算
console.log(123 + 456 + "となりました。");//数値の計算 + 文字列
console.log("計算結果：" + (123 + 456));//文字列 + (数値の計算)
console.log("2" - 1);//文字列 - 数値
console.log("2" * 3);//文字列 - 数値
console.log("2" / 4);//文字列 - 数値
```

### 変数の宣言と代入

```js
let a; //変数の宣言
a = 10; //値の代入(数値型)
console.log(a);

a = "Hello";//値の再代入（文字列型）
console.log(a);
```

### 複合演算子

```js
let n = 5;
n = n + 2;
console.log(n);

let n2 = 5;
n2 += 2; //複合演算子　n2 = n2 +と同じ。
coonsole.log(n2)

インクリメント
let n3 = 5;
n3++;//インクリメント１足す
console.log(n3); //6
```
文字にも適応される

### documentオブジェクトとDOM

```js
//メロンを加える
        //ul要素を取り入れる
        const element = document.querySelector("ul");
        console.log(element);

        //selectorってCSSのセレクターなので、
        const element2 = document.querySelector("#fruitslist");
        console.log(element2);

        //classもいける？
        const element3 = document.querySelector(".listbox__list");
        console.log(element3);

        //新しい要素を作る
        const lilast = document.createElement("li");
        console.dir(lilast);  //logからdirに変更　オブジェクトの中身が現れる
        lilast.textContent = "メロン";
        console.log(lilast);
```


## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!doctype html>
<html lang=ja>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>演習</title>
</head>
<body>
</script>
</body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。