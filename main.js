'use strict';
const game0Divided = document.getElementById('game-area0');
const game1Divided = document.getElementById('game-area1');
let talk = '初期';  //表示するイベントを格納
let place = 0;     //現在の場所を記録
let flag = [0, 0, 0, 0, 0, 0, 0];      //初回のみのイベントのフラグをまとめる
let inputok = true; //入力受付中
let me = 0;
let count = 0;//文字表示のカウント
console.log(flag);
let clearflag = false;

let mychara = {
  x: 160,
  y: 100
}

//画像読み込み
const canvas = {
  0: document.getElementById("canvas1"),
  1: document.getElementById("canvas2"),
  2: document.getElementById("canvas0")//入力用
};
let flip = 0;
canvas[1 - flip].style.visibility = 'hidden';
canvas[flip].style.visibility = 'visible';
canvas[2].style.visibility = 'visible';
flip = 1 - flip;
let ctx = canvas[flip].getContext('2d');
const ctx0 = canvas[2].getContext('2d');
const srcs = [//画像一覧
    ['box0.png', 100, 460],
    ['box0.png', 100, 520],
    ['box0.png', 100, 580],
    ['box0.png', 100, 640],
    ['message.png', 50, 350],
    ['chara0.png', 100, 0],
    ['chara1.png', 100, 0],
    ['chara2.png', 100, 0],
    ['chara3.png', 100, 0],
    ['chara4.png', 100, 0],
    ['chara5.png', 100, 0],
    ['chara6.png', 100, 0],
  ];
  const srcs2 = [//背景画像一覧
    ['back0.png', 50, 100],
    ['back1.png', 50, 100],
    ['back2.png', 50, 100],
    ['back3.png', 50, 100],
    ['back4.png', 50, 100],
    ['back4.png', 50, 100]
  ];
let images = [];
for (let i in srcs) {
  images[i] = new Image();
  images[i].src = srcs[i][0];
}
let loadedCount = 1;
for (let i in images) {
  images[i].addEventListener('load', function () {
    if (loadedCount == images.length) {
      for (let j in images) {
      //  ctx.drawImage(images[j], srcs[j][1], srcs[j][2]);
      }
    }
    loadedCount++;
  }, false);
}
let backimages = [];
for (let i in srcs2) {
  backimages[i] = new Image();
  backimages[i].src = srcs2[i][0];
}
let loadedCount2 = 1;
for (let i in backimages) {
  backimages[i].addEventListener('load', function () {
    if (loadedCount2 == backimages.length) {
      for (let j in backimages) {
        ctx.drawImage(backimages[j], srcs2[j][1], srcs2[j][2]);
        window.requestAnimationFrame(step);
      }
    }
    loadedCount2++;
  }, false);
}
//画像読み込み

//画面の描写
let oldbi = 400;
let nowbi = 0;
let oldplace = 0;
function step() {
  window.requestAnimationFrame(step);
  canvas[1 - flip].style.visibility = 'hidden';
  canvas[flip].style.visibility = 'visible';
  flip = 1 - flip;
  ctx = canvas[flip].getContext('2d');
  ctx.clearRect(0, 0, 500, 700);
  ctx.drawImage(backimages[oldplace], oldbi, -5);//場面背景古い
  ctx.drawImage(backimages[place], nowbi, -5);//場面背景新しい
  for (let j = 0; j < 5; j++) {
    ctx.drawImage(images[j], srcs[j][1], srcs[j][2]);
  }
 
  //文字の表示
  ctx.font = "14px sans-serif";
  switch(talk.scence) {
    case 0:
      ctx.fillText('【プロローグ】', 50, 368);
      ctx.drawImage(images[5], srcs[6][1], srcs[6][2]);
      break;
    case 1:
      ctx.fillText('【一年目前半】', 50, 368);
      ctx.drawImage(images[6], srcs[6][1], srcs[6][2]);
      break;
    case 2:
      ctx.fillText('【一年目後半】', 50, 368);
      ctx.drawImage(images[7], srcs[6][1], srcs[6][2]);
      break;
    case 3:
      ctx.fillText('【二年目前半】', 50, 368);
      ctx.drawImage(images[7], srcs[6][1], srcs[6][2]);
      break;
    case 4:
      ctx.fillText('【二年目後半】', 50, 368);
      ctx.drawImage(images[8], srcs[6][1], srcs[6][2]);
      break;
    case 5:
      ctx.fillText('【二年目後半】', 50, 368);
      ctx.drawImage(images[8], srcs[6][1], srcs[6][2]);
      break;
    case 6:
      ctx.fillText('【五年目後半】', 50, 368);
      ctx.drawImage(images[9], srcs[6][1], srcs[6][2]);
      break;
    case 7:
      ctx.fillText('【五年目後半】', 50, 368);
      ctx.drawImage(images[10], srcs[6][1], srcs[6][2]);
      break;
    case 8:
      ctx.fillText('【おしまい】', 50, 368);
      ctx.drawImage(images[11], srcs[6][1], srcs[6][2]);
      break;
  }
  for (let lines = (String(text)).split("\n"), i = 0, l = lines.length; l > i; i++) {
    ctx.font = "18px sans-serif";
    let line = lines[i];
    let addY = 18;
    addY += 18 * 1.26 * i;
    ctx.fillText(line, 55, 370 + addY);
  }
  //選択肢の表示
  if (talk instanceof Menu) {
    ctx.font = "20px sans-serif";
    ctx.fillText(talk.choice0, 110, 495);
    ctx.fillText(talk.choice1, 110, 555);
    ctx.fillText(talk.choice2, 110, 615);
    ctx.fillText(talk.choice3, 110, 675);
  }
}
//画面の描写

//クリック
let point = 0;
canvas[2].addEventListener('click', e => {
  if (inputok) {
    //マウスの座標をカンバス内の座標と合わせる
    const rect = canvas[2].getBoundingClientRect();
    point = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
    if (talk instanceof Menu) {
      inputok = false;
      menudo();
    } else {
      inputok = false;
      if (talk.next0) {
        talk = talk.next0;
      } else {
        talk = lo[place];
      }
      count = 0;//メッセージウィンドウをリセット
      disp();//メッセージ表示
    }
  } else {
    count = 100;
  }
})
//クリック

//テキストのみ
class Text {
  constructor(scence, value, next0) {
    this.scence = scence;
    this.value = value;
    this.next0 = next0;
  }
}


//メニュー
class Menu extends Text {
  constructor(scene, value) {
    super(scene, value);
    if(scene == 1){
      this.choice0 = '友達を作って遊びまくろう！';
      this.choice1 = 'せっかくだし、いろいろ学ぼう。';
      this.choice2 = 'あんま目立たないようにしよう';
      this.choice3 = '隠れてゲームでもしてよう。';
    }
    if(scene == 2){
      this.choice0 = '情報通信工学コース';
      this.choice1 = 'ロボット工学コース';
      this.choice2 = '航空宇宙工学コース';
      this.choice3 = '医療福祉工学コース';
    }
    if(scene == 3){
      this.choice0 = '真面目にやろう。';
      this.choice1 = '頭が良い奴に見せてもらおう！';
      this.choice2 = 'ちょっとバイトで忙しくて...';
      this.choice3 = 'そんなことより、ゲームだ！';
    }
    if(scene == 4){
      this.choice0 = 'しっかりと勉強する。';
      this.choice1 = '過去問をやればいいかな。';
      this.choice2 = '当日の朝やればいいかな。';
      this.choice3 = 'そんなことより、ゲームだ！';
    }
    if(scene == 5){
      this.choice0 = 'しっかりと勉強する。';
      this.choice1 = '過去問をやればいいかな。';
      this.choice2 = '当日の朝やればいいかな。';
      this.choice3 = 'そんなことより、ゲームだ！';
    }
  }
}
let rightgo = 0;
let leftgo = 0;
function menudo() {
  if (point.x >= 105 && point.x <= 395 && point.y >= 460 && point.y <= 510) {
    if (place == 6) {
      inputok = true;
    } else {
      oldplace = place;
      place = place + 1;
      oldbi = 0;
      nowbi = 400;
      ju();
      rightgo = setInterval(right, 1000 / 30);
    }
  } else if (point.x >= 105 && point.x <= 395 && point.y >= 520 && point.y <= 570) {
    if (place == 6) {
      inputok = true;
    } else {
      oldplace = place;
      place = place + 1;
      oldbi = 0;
      nowbi = 400;
      ju();
      rightgo = setInterval(right, 1000 / 30);
    }
  } else if (point.x >= 105 && point.x <= 395 && point.y >= 580 && point.y <= 630) {
    if (place == 6) {
      inputok = true;
    } else {
      oldplace = place;
      place = place + 1;
      oldbi = 0;
      nowbi = 400;
      ju();
      rightgo = setInterval(right, 1000 / 30);
    }
  } else if (point.x >= 105 && point.x <= 395 && point.y >= 640 && point.y <= 690) {
    if (place == 6) {
      inputok = true;
    } else {
      oldplace = place;
      place = place + 1;
      oldbi = 0;
      nowbi = 400;
      ju();
      rightgo = setInterval(right, 1000 / 30);
    }
  } else { inputok = true; }
}
function right() {
  oldbi = oldbi - 8;
  nowbi = nowbi - 8;
  if (nowbi == 0) {
    clearInterval(rightgo);
    clearInterval(jumping);
    if (flag[place] == 0) {
      flag[place] = 1;
      talk = fi[place];
      count = 0;
    } else {
      talk = me[place];
    }
    disp();
  }
}


//フラグ処理あり
class Last extends Text {
  constructor(scence, value, next0, itemid) {
    super(scence, value, next0);
    this.itemid = itemid;
  }
}
function lastdo() {
  itemflag[talk.itemid] = 1;
  talk = talk.next0;
  count = 0;
  disp();
}


//s1
const menu0 = new Menu(1, '僕は…');
const op5 = new Text(1, '入学後初めてのイベントだ！', menu0);
const op4 = new Text(1, '今日はオリエンテーション...', op5);
const op3 = new Text(0, '彼の名は『高専太郎』。\nここから、彼の５年にもわたる\n高専生活が始まる...', op4);
const op2 = new Text(0, 'そんな学校にまた一人、\n無知な生徒が青春を犠牲にやってきた。', op3);
const op1 = new Text(0, '様々な謳い文句で興味をひかせ、\n純粋無垢な中学生を集める恐ろしい学校...', op2);
const op0 = new Text(0, 'ここは産技高専', op1);

//s2
const menu1 = new Menu(2, '僕は…');
const fi102 = new Text(2, 'この選択で進路が変わってくるぞ...', menu1);
const fi101 = new Text(2, '二年生以降のクラス決めだ！', fi102);

//s3
const menu2 = new Menu(3, '僕は…');
const fi201 = new Text(3, 'まずい、\nレポートの期限が迫ってくる！', menu2);

//s4
const menu3 = new Menu(4, '僕は…');

const fi308 = new Text(4, 'もうすぐ期末テストだ', menu3);
const fi307 = new Text(4, 'text', fi308);
const fi306 = new Text(4, 'text', fi307);
const fi305 = new Text(4, 'レポートやばいのに\nゲームやめられないんだけどｗｗｗ', fi306);
const fi304 = new Text(4, 'バイトが忙しくて\n中途半端な出来になってしまった...', fi305);
const fi303 = new Text(4, 'まあ、頭が良い奴に見せてもらえばいっか！', fi304);
const fi302 = new Text(4, 'レポートは真面目にやらなきゃな。', fi303);
const fi301 = new Text(4, 'レポートの提出期限になったよ！', fi302);
//s5
const menu4 = new Menu(5, '僕は…');

const fi406 = new Text(5, 'text', menu4);
const fi405 = new Text(5, 'text', fi406);
const fi404 = new Text(5, '意外といい点だった...', fi405);
const fi403 = new Text(5, '過去問で対策ばっちり！\nいい成績が取れた。', fi404);
const fi402 = new Text(5, 'テストでまあまあな成績だった！', fi403);
const fi401 = new Text(5, '試験が終わったよ', fi402);

//s6
const menu5 = new Menu(5, '');
const fi508 = new Text(8, 'END');
const fi507 = new Text(7, '卒業できませんでした！\n残念！', fi508);
const fi506 = new Text(6, '卒業できました！\nやったね！', fi508);
const fi505 = new Text(5, '...', fi506);
const fi504 = new Text(5, '...', fi505);
const fi503 = new Text(5, '卒業...', fi504);
const fi502 = new Text(5, '僕は...', fi503);
const fi501 = new Text(5, 'ついに5年生の期末もおえて...', fi502);

//s7
const menu6 = new Menu(0, 'text');

const fi = [op0, fi101, fi201, fi301, fi401, fi501]//初移動イベント
me = [menu0, menu1, menu2, menu3, menu4, menu5, menu6]//各待機


let jumpi = 0;
function jump() {
  jumpi = 1 - jumpi;
  srcs[srcs.length - 1][2] = 90 - 2 * jumpi;
}
let jumping = 0;
function ju() {
  jumping = setInterval(jump, 100);
}

//一文字ずつ表示する仕組み
let text = '';
function disp() {
  let i = talk.value.substring(0, count);
  text = i;
  count++;
  let rep = setTimeout("disp()", 70);
  if (count > talk.value.length) {
    clearInterval(rep);
    inputok = true;
  }
}

if (flag[place] == 0) {
  flag[place] = 1;
  talk = fi[place];
  count = 0;
} else {
  talk = me[place];
}
disp();
