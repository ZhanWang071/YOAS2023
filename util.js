// 获取弹窗
var modal = document.getElementById("myModal");

// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var cover = document.getElementById("cover");

// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];

// 当点击 (x), 关闭弹窗
span.onclick = function () {
  modal.style.display = "none";
  i1.style.display = "none";
  i2.style.display = "none";
};

// var title = document.getElementById("title");
// title.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = "assets/title.png";
//   // captionText.innerHTML = this.alt;
// };

// var place = document.getElementById("place");
// place.onclick = function () {
//   modal.style.display = "block";
//   modalImg.src = "assets/place.png";
//   // captionText.innerHTML = this.alt;
// };

function titleOnClick() {
  // imgPlane();
  modal.style.display = "block";
  modalImg.src = "assets/title.png";
}

function coverOnClick() {
  // imgPlane();
  cover.style.display = "none";
  document.getElementById("no-cover").style.display = "block";
}

function placeOnClick() {
  // imgPlane();
  modal.style.display = "block";
  modalImg.src = "assets/place.png";
}

function sympInfoOnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/sympInfo.png";
}

function topicOnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/topics.png";
}

function submissionOnClick() {
  modal.style.display = "block";
  var i = 1;
  modalImg.src = "assets/submission1.png";
  var i1 = document.getElementById("i1");
  var i2 = document.getElementById("i2");
  i1.style.display = "block";
  i2.style.display = "block";
  i1.onclick = function () {
    i -= 1;
    if (i == 0) i = 4;
    modalImg.src = "assets/submission" + String(i) + ".png";
  };
  i2.onclick = function () {
    i += 1;
    if (i == 5) i = 1;
    modalImg.src = "assets/submission" + String(i) + ".png";
  };
}

function sessionOnClick() {
  modal.style.display = "block";
  var i = 1;
  modalImg.src = "assets/session1.png";
  var i1 = document.getElementById("i1");
  var i2 = document.getElementById("i2");
  i1.style.display = "block";
  i2.style.display = "block";
  i1.onclick = function () {
    i -= 1;
    if (i == 0) i = 3;
    modalImg.src = "assets/session" + String(i) + ".png";
  };
  i2.onclick = function () {
    i += 1;
    if (i == 4) i = 1;
    modalImg.src = "assets/session" + String(i) + ".png";
  };
}

function headingOnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/heading.png";
}

function comOnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee.png";
}

function com1OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee1.png";
}

function com2OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee2.png";
}

function com3OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee3.png";
}
function com4OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee4.png";
}
function com5OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee5.png";
}
function com6OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee6.png";
}
function com7OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee7.png";
}
function com8OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee8.png";
}
function com9OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee9.png";
}
function com10OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/committee10.png";
}

function paper1OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/paper1.png";
}
function paper2OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/paper2.png";
}
function paper3OnClick() {
  modal.style.display = "block";
  modalImg.src = "assets/paper3.png";
}

function imgOnClick(img) {
  modal.style.display = "block";
  modalImg.src = img;
}

function gigasOnClick() {
  modal.style.display = "block";
  var i = 1;
  modalImg.src = "assets/gigas-1.png";
  var i1 = document.getElementById("i1");
  var i2 = document.getElementById("i2");
  i1.style.display = "block";
  i2.style.display = "block";
  i1.onclick = function () {
    i -= 1;
    if (i == 0) i = 2;
    modalImg.src = "assets/gigas-" + String(i) + ".png";
  };
  i2.onclick = function () {
    i += 1;
    if (i == 3) i = 1;
    modalImg.src = "assets/gigas-" + String(i) + ".png";
  };
}

function euryOnClick() {
  modal.style.display = "block";
  var i = 1;
  modalImg.src = "assets/eury-1.png";
  var i1 = document.getElementById("i1");
  var i2 = document.getElementById("i2");
  i1.style.display = "block";
  i2.style.display = "block";
  i1.onclick = function () {
    i -= 1;
    if (i == 0) i = 8;
    modalImg.src = "assets/eury-" + String(i) + ".png";
  };
  i2.onclick = function () {
    i += 1;
    if (i == 9) i = 1;
    modalImg.src = "assets/eury-" + String(i) + ".png";
  };
}