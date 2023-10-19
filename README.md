# 2023年　後期「JavaScript基礎」授業課題

##　授業内コード

1. 10月5日（木）はじめの一歩
2. 10月5日（木）GitHub リポジトリ作成
3. 10月12日（木）documentオブジェクトとDOM
4. 10月19日 (木) documentオブジェクトとDOM

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