'use strict'; //厳格モード
var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

class scence{
    constructor(value, title, text, choice, ans, next) {
        this.value = value;     //シーンの値
        this.title = title;     //タイトル
        this.text = text;       //質問文
        this.choice = choice;   //選択肢
        this.ans = ans;         //回答文
        this.next = next;       //次のシーン名
    }
}

var scence0 = new scence(
    this.value = 0,
    this.title = '【プロローグ】',
    this.text = [
        "ここは産技高専...",
        "様々な謳い文句で興味をひかせ、純粋無垢な中学生を集める恐ろしい学校...",
        "そんな学校にまた一人、無知な生徒が青春を犠牲にやってきた。",
        "彼の名は『高専太郎』。ここから、彼の５年にもわたる高専生活が始まる..."
    ],
    this.choice = [],
    this.ans = [],
    this.next = 1
);

var scence1 = new scence(
    this.value = 1,
    this.title = '【一年目前半】',
    this.text = [
        "今日はオリエンテーション...",
        "入学後初めてのイベントだ!",
        "僕は…"
    ],
    this.choice = [
        "友達を作って遊びまくろう!",
        "せっかくだし、いろいろ学ぼう。",
        "あんま目立たないようにしよう",
        "隠れてゲームでもしてよう。"
    ],
    this.ans = [
        "よし!友達を作って遊びまくろう!",
        "よし。せっかくだし、いろいろ学ぼう。",
        "よし。あんま目立たないようにしよう",
        "よし。隠れてゲームでもしてよう。"
    ],
    this.next = 2
);

var scence2 = new scence(
    this.value = 2,
    this.title = '【一年目後半】',
    this.text = [
        "二年生以降のクラス決めだ!",
        "この選択で進路が変わってくるぞ...",
        "僕は…"
    ],
    this.choice = [
        "情報通信工学コース",
        "ロボット工学コース",
        "航空宇宙工学コース",
        "医療福祉工学コース"
    ],
    this.ans = [
        "情報通信工学コースに決めた!",
        "ロボット工学コースに決めた!",
        "航空宇宙工学コースに決めた!",
        "医療福祉工学コースに決めた!"
    ],
    this.next = 3
);

var scence3 = new scence(
    this.value = 3,
    this.title = '【二年目前半】',
    this.text = [
        "まずい、レポートの期限が迫ってくる!",
        "僕は…"
    ],
    this.choice = [
        "真面目にやろう。",
        "頭が良い奴に見せてもらおう!",
        "ちょっとバイトが忙しくて...",
        "そんなことより、ゲームだ!"
    ],
    this.ans = [
        "レポートは真面目にやらなきゃな。",
        "まあ、頭が良い奴に見せてもらえばいっか!",
        "バイトが忙しくて中途半端な出来になってしまった...!",
        "レポートやばいのにゲームやめられないんだけどｗｗｗ!"
    ],
    this.next = 4
);

var scence4 = new scence(
    this.value = 4,
    this.title = '【二年目後半】',
    this.text = [
        "そろそろ期末試験だ!",
        "僕は…"
    ],
    this.choice = [
        "しっかりと勉強する。",
        "過去問をちょっと解けばいいかな。",
        "勉強は当日の朝やればいいかな。",
        "そんなことより、ゲームだ!"
    ],
    this.ans = [
        "テストでまあまあな成績だった!",
        "あ!これ過去問でやったところだ!",
        "当日の朝だけにしては、意外といい点だった...!",
        "テストやばいのにゲームやめられないんだけどｗｗｗ!"
    ],
    this.next = 5
);

var scence5 = new scence(
    this.value = 5,
    this.title = '【三年目前半】',
    this.text = [
        "体育祭の季節だ!",
        "僕は…"
    ],
    this.choice = [
        "まじめに頑張るぜ!",
        "普通に参加するか。",
        "ドッジだけ参加。",
        "めんど。サボる。"
    ],
    this.ans = [
        "全力で運動をするっていいな!",
        "それなりに楽しめた。",
        "ドッジでずっとコートの隅に立ってた。",
        "学校さぼってゲーム最高ｗｗｗ"
    ],
    this.next = 6
);

var scence6 = new scence(
    this.value = 6,
    this.title = '【三年目後半】',
    this.text = [
        "そろそろ高専祭だ!",
        "僕は…"
    ],
    this.choice = [
        "高専祭実行委員で頑張る!",
        "部活で出し物をやろう!",
        "いろいろ見て回る。",
        "出席つけて即帰宅"
    ],
    this.ans = [
        "満足のいく高専祭を運営できた!",
        "たくさんお客さんが来て大繁盛!",
        "いろんな企画があって意外と楽しめた!",
        "ゲームたのしいぃｗｗｗ"
    ],
    this.next = 7
);

var scence7 = new scence(
    this.value = 7,
    this.title = '【四年目前半】',
    this.text = [
        "所属するゼミの選択だ。",
        "僕は…"
    ],
    this.choice = [
        "バリバリやる気ある研究室!",
        "興味がある分野の研究室!",
        "余ってる研究室",
        "楽な研究室"
    ],
    this.ans = [
        "ゼミも頑張るぜー!",
        "いろいろやってみたいなあ。",
        "そんなんじゃダメだよ君ィ!",
        "楽って最高ｗ"
    ],
    this.next = 8
);

var scence8 = new scence(
    this.value = 8,
    this.title = '【四年目後半】',
    this.text = [
        "インターンの案内が来た。",
        "僕は…"
    ],
    this.choice = [
        "企業に行って勉強!参加!",
        "単位が欲しい!参加!",
        "進学希望。不参加。",
        "めんどい。不参加。"
    ],
    this.ans = [
        "得るものがたくさんあったインターンだった!",
        "単位助かるぅ!!",
        "進学に向けて勉強頑張ろう。",
        "ゲームたのしいぃｗｗｗ!"
    ],
    this.next = 9
);

var scence9 = new scence(
    this.value = 9,
    this.title = '【五年目前半】',
    this.text = [
        "進路を決める時期が来た!",
        "僕は…"
    ],
    this.choice = [
        "やりたい研究がある!進学!",
        "まあ、専攻科かな…",
        "金!就職!",
        "プロゲーマーになるわw"
    ],
    this.ans = [
        "大学編入のために、勉強頑張らないと!",
        "まあ、とりあえず専攻科でいいか。",
        "給料よくて、楽で、休み多いとこがいいなぁ。",
        "俺ならいける!!俺は自分を信じるぜ!"
    ],
    this.next = 10
);

var scence10 = new scence(
    this.value = 10,
    this.title = '【五年目後半】',
    this.text = [
        "卒論の締切が近づいてきた…",
        "僕は…"
    ],
    this.choice = [
        "一日ずつコツコツやろう。",
        "先輩の論文見てコピペ!",
        "前日にやりゃ余裕っしょ!",
        "そんなことより、ゲームだゲーム!"
    ],
    this.ans = [
        "余裕をもって終わらせられた!",
        "訂正されまくったけど、何とか終わった!",
        "間に合ったけどギリギリ過ぎて寝不足だ…",
        "卒論やばいのにゲームがたのしいぃｗｗｗ!"
    ],
    this.next = 11
);

var scence11 = new scence(
    this.value = 11,
    this.title = '【卒業式】',
    this.text = [
        "ついに卒業の日がやってきた…",
        "僕は…"
    ],
    this.choice = [],
    this.ans = [],
);

var scence12 = new scence(
    this.value = 12,
    this.title = '【卒業式】',
    this.text = [
        "無事に卒業することができた!",
        "やったね!"
    ],
    this.choice = [],
    this.ans = [],
    next = 14,
);

var scence13 = new scence(
    this.value = 13,
    this.title = '【卒業式】',
    this.text = [
        "留年してしまった...",
        "もう一年頑張ろう!"
    ],
    this.choice = [],
    this.ans = [],
    next = 14,
);

var scence14 = new scence(
    this.value = 14,
    this.title = '【エピローグ】',
    this.text = ["高専を卒業した『高専太郎』は..."],
    this.choice = [],
    this.ans = [
        "大学を主席で卒業!高専きっての天才になった!",
        "大学でできた友人と持ち前のコミュ力で、企業し社長になった!",
        "5年かけて鍛えたゲーム力で、プロゲーマーとなった!",
        "無事にいい会社について、普通の人生を送った。",
        "高専に染まりすぎて、陰キャになってしまった...",
        "ニートになってしまった!"
    ],
    next = 0,
);

//変数
var place = scence0; //現在のシーン
var title0 = "【初期】"; //表示するイベントを格納
var text0  = "初期"; //表示するテキストを格納
var textIndex = 0; //現在のテキスト
var inputok = false; //入力受付
var point = 0; //クリック座標を格納
var gokaku = 0; //卒業判定フラグ

//パラメータ
var gakuryoku = 0;
var youkya = 0;
var game = 0; 

//背景の描写関係
var bgImage = new function(){
    this.x = 0;
    this.y = 0;

    this.loadImage = function(){
        this.image = new Image();
        switch(place.value){
            case 0: this.image.src = "back5.png"; break;
            case 1: 
            case 2: this.image.src = "back0.png"; break;
            case 3: 
            case 4: this.image.src = "back1.png"; break;
            case 5: 
            case 6: this.image.src = "back2.png"; break;
            case 7: 
            case 8: this.image.src = "back3.png"; break;
            case 9: 
            case 10:this.image.src = "back4.png"; break;
            case 11:
            case 12:
            case 13:
            case 14:this.image.src = "back5.png"; break;
        }
        this.image.onload = loader;
    }

    this.render = function(){
        ctx.drawImage(this.image, this.x, this.y);
    }
}

//人物の描写関係
var personImage = new function(){
    this.y = 13;

    this.loadImage = function(){
        this.image = new Image();
        switch(place.value){
            case 0: this.image.src = "chara0.png"; break;
            case 1: this.image.src = "chara1.png"; break;
            case 2: this.image.src = "chara2.png"; break;
            case 3: this.image.src = "chara3.png"; break;
            case 4: this.image.src = "chara4.png"; break;
            case 5: this.image.src = "chara1.png"; break;
            case 6: this.image.src = "chara2.png"; break;
            case 7: this.image.src = "chara3.png"; break;
            case 8: this.image.src = "chara4.png"; break;
            case 9: this.image.src = "chara1.png"; break;
            case 10:this.image.src = "chara2.png"; break;
            case 11:this.image.src = "chara0.png"; break;
            case 12:this.image.src = "chara6.png"; break;
            case 13:this.image.src = "chara5.png"; break;
            case 14:this.image.src = "chara0.png"; break;
        }
        this.image.onload = loader;
    }

    this.render = function(){
        this.x = (canvas.width - this.image.width)/2;
        ctx.drawImage(this.image, this.x, this.y);
    }
}

//テキストボックスの描写関係
var messagebox = new function(){
    this.x = 0;
    this.y = canvas.height/2;

    this.loadImage = function(){
        this.image = new Image();
        this.image.src = "box0.png";
        this.image.onload = loader;
    }

    this.render = function(){
        this.width = canvas.width;
        this.height = canvas.height/6;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        for(var i=0; i<4; i++){
            ctx.drawImage(this.image, this.width/8, this.y+this.height+5*(i+1)+50*i, this.width*0.75, 50);
        }
    }
}

//テキスト描写関係
var myText = new function(){

    this.renderTitle = function(){
        ctx.fillStyle = "#000000";
        ctx.font = "18px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(place.title, 10, messagebox.y+30);
    }

    this.renderChoice = function(){
        ctx.fillStyle = "#000000";
        ctx.font = "18px sans-serif";
        ctx.textAlign = "left";

        for(var i=0; i<4; i++){
            ctx.fillText(place.choice[i], 80, 450+(i+1)*54);
        }
    }

    this.renderEND = function(){
        ctx.fillStyle = "#000000";
        ctx.font = "18px sans-serif";
        ctx.textAlign = "left";
            ctx.fillText("END", 440, 445);
    }

    this.render = function(){
        ctx.fillStyle = "#000000";
        ctx.font = "17px sans-serif";
        ctx.textAlign = "left";

        
        var s = "";
        var sentenceArray = text0.split("");

        var kaigyouHeight = 400;


        for (var i = 0; i < sentenceArray.length; i++){
            s += sentenceArray[i];
            var textwidth = ctx.measureText(s).width + 50;
        
            if(messagebox.width < textwidth){
                ctx.fillText(s, 15, kaigyouHeight);
                kaigyouHeight += 20;
                s = "";
            }
        }
        ctx.fillText(s, 15, kaigyouHeight);
    }
}



var Loader = function (expectedCnt, callback) {
    var cnt = 0;
    return function (){
        cnt++;
        if(cnt == expectedCnt){
            callback();
        }
    }
}


var loader = Loader(3, function(){
    console.log(place.name)
    bgImage.render();
    personImage.render();
    messagebox.render();
    myText.renderTitle();
    myText.render(text0 = place.text[textIndex]);
    textIndex++;
});


function setup(){
    bgImage.loadImage();
    personImage.loadImage();
    messagebox.loadImage();
}


function reset(){
    place = scence0;
    title0 = "【初期】";
    text0  = "初期";
    textIndex = 0;
    inputok = false;
    point = 0;
    gokaku = 0;

    gakuryoku = 0;
    youkya = 0;
    game = 0;
    setup();
}


function update(){
    
    if (textIndex > place.text.length-1){
        if(place.value == 0){
            textIndex = 0;
            place = scence1;
            setup();
        }
        else if(place.value == 11){
            if (gakuryoku >= 60){
                gokaku = 1;
                place = scence12;
            }
            else {
                gokaku = 2;
                place = scence13;  
            }
            textIndex = 0;
            setup();
        }
        else if(place.value == 12 ||place.value == 13){
            textIndex = 0;
            place = scence14;
            setup();
        }
        else if(place.value == 14){
            bgImage.render();
            personImage.render();
            messagebox.render();
            myText.renderTitle();
            if(gakuryoku == 100)
                myText.render(text0 = place.ans[0]);
            else if(youkya == 100)
                myText.render(text0 = place.ans[1]);
            else if(game == 100)
                myText.render(text0 = place.ans[2]);
            else if(gakuryoku != 100 && youkya != 100 && game != 100 && gokaku == 1)
                myText.render(text0 = place.ans[3]);
            else if(gakuryoku != 100 && youkya != 100 && game != 100 && gokaku == 2)
                myText.render(text0 = place.ans[4]);
            else if(gakuryoku <= 50 && youkya <= 50 && game <= 50)
                myText.render(text0 = place.ans[4]);
            myText.renderEND();
        }
        else if(place.value > 0 && place.value < 11){
            if(!inputok){
                myText.renderChoice();
                inputok = true;
            }
        }
    }
    else{
        bgImage.render();
        personImage.render();
        messagebox.render();
        myText.renderTitle(); 
        myText.render(text0 = place.text[textIndex]);
        textIndex++;
    }
}


canvas.addEventListener("click",function(event){
    if (!inputok){
        update();
    }
    else{
        //マウスの座標をキャンバス内の座標と合わせる
        const rect = canvas.getBoundingClientRect();
        point = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
        choice_click();
        console.log(gakuryoku);
        console.log(youkya);
        console.log(game);

    }
});


function choice_click(){
    if (point.x >= 62 && point.x <= 436 && point.y >= 471 && point.y <= 520) {
        bgImage.render();
        personImage.render();
        messagebox.render();
        myText.renderTitle();
        myText.render(text0 = place.ans[0]);
        textIndex = 0;
        
        switch(place.value){
            case 1: place = scence2;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 20;
                    game += 5;
                    break;
            case 2: place = scence3;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya -= 20;
                    gakuryoku += 5;
                    break;
            case 3: place = scence4;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 20;
                    game -= 10;
                    youkya -= 5;
                    break;
            case 4: place = scence5;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 20;
                    game -= 10;
                    youkya -= 5;
                    break;
            case 5: place = scence6;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 20;
                    break;
            case 6: place = scence7;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 10;
                    break;
            case 7: place = scence8;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 10;
                    game -= 10;
                    break;
            case 8: place = scence9;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 10;
                    gakuryoku += 10;
                    break;
            case 9: place = scence10;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game -= 20;
                    gakuryoku += 10;
                    youkya += 10;
                    break;
            case 10: place = scence11;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    gakuryoku += 20;
                    break;
        }
        inputok = false;
    }
    else if (point.x >= 62 && point.x <= 436 && point.y >= 528 && point.y <= 574) {
        bgImage.render();
        personImage.render();
        messagebox.render();
        myText.renderTitle();
        myText.render(text0 = place.ans[1]);
        textIndex = 0;
        
        switch(place.value){
            case 1: place = scence2;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 10;
                    break;
            case 2: place = scence3;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 5;
                    gakuryoku -= 10;
                    break;
            case 3: place = scence4;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 15;
                    game += 5;
                    break;
            case 4: place = scence5;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 10;
                    break;
            case 5: place = scence6;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 10;
                    break;
            case 6: place = scence7;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 20;
                    break;
            case 7: place = scence8;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 10;
                    break;
            case 8: place = scence9;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 5;
                    youkya += 5;
                    gakuryoku += 5;
                    break;
            case 9: place = scence10;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 5;
                    break;
            case 10: place = scence11;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    gakuryoku += 15;
                    break;
        }
        inputok = false;
    }
    else if (point.x >= 62 && point.x <= 436 && point.y >= 581 && point.y <= 629) {
        bgImage.render();
        personImage.render();
        messagebox.render();
        myText.renderTitle();
        myText.render(text0 = place.ans[2]);
        textIndex = 0;
        
        switch(place.value){
            case 1: place = scence2;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 5;
                    youkya -= 20;
                    break;
            case 2: place = scence3;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 10;
                    youkya += 20;
                    break;
            case 3: place = scence4;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 5;
                    gakuryoku += 5;
                    break;
            case 4: place = scence5;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 10;
                    game += 5;
                    break;
            case 5: place = scence6;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 5;
                    youkya -= 20;
                    break;
            case 6: place = scence7;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 5;
                    youkya += 5;
                    break;
            case 7: place = scence8;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya -= 10;
                    break;
            case 8: place = scence9;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku += 10;
                    break;
            case 9: place = scence10;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    break;
            case 10: place = scence11;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    gakuryoku += 10;
                    break;
        }
        inputok = false;
    }
    else if (point.x >= 62 && point.x <= 436 && point.y >= 637 && point.y <= 684) {
        bgImage.render();
        personImage.render();
        messagebox.render();
        myText.renderTitle();
        myText.render(text0 = place.ans[3]);
        textIndex = 0;
        
        switch(place.value){
            case 1: place = scence2;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    break;
            case 2: place = scence3;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    youkya += 10;
                    gakuryoku += 5;
                    break;
            case 3: place = scence4;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    break;
            case 4: place = scence5;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    break;
            case 5: place = scence6;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    youkya -= 10;
                    break;
            case 6: place = scence7;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    youkya -= 20;
                    break;
            case 7: place = scence8;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    gakuryoku -= 5;
                    break;
            case 8: place = scence9;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 10;
                    break;
            case 9: place = scence10;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 20;
                    gakuryoku -= 10;
                    break;
            case 10: place = scence11;
                    bgImage.loadImage();
                    personImage.loadImage();
                    messagebox.loadImage();
                    game += 20;
                    gakuryoku += 5;
                    break;
        }
        inputok = false;
    }
}


function loop(){
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


loop()
setup();