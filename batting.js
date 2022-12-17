n1 = "1"; n2 = "1"; n3 = "1"; n4 = "1"; n5 = "1"; n6 = "1"; n7 = "1"; n8 = "1"; n9 = "1"; n10 = "1";
function add1() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n1 = "2.4";
  plusUl.innerHTML = "<li>브렌트포드 승 2.35->삭제</li>";
  plusUl.addEventListener("click", deleteList1);
  document.getElementById('a').appendChild(plusUl);
}
function add2() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n1 = "3.2";
  plusUl.innerHTML = "<li>브렌트포드 무 3.15->삭제</li>";
  plusUl.addEventListener("click", deleteList1);
  document.getElementById('a').appendChild(plusUl);
} function add3() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n1 = "1.7";
  plusUl.innerHTML = "<li>브렌트포드 패 1.70->삭제</li>";
  plusUl.addEventListener("click", deleteList1);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled1() {
  var target1 = document.getElementById('btn3');
  var target2 = document.getElementById('btn4');
  var target3 = document.getElementById('btn5');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList1(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n1 = "1";
  var target1 = document.getElementById('btn3');
  var target2 = document.getElementById('btn4');
  var target3 = document.getElementById('btn5');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add4() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n2 = "2.5";
  plusUl.innerHTML = "<li>사우샘프턴 승 2.50->삭제</li>";
  plusUl.addEventListener("click", deleteList2);
  document.getElementById('a').appendChild(plusUl);
}
function add5() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n2 = "3";
  plusUl.innerHTML = "<li>사우샘프턴 무 2.95->삭제</li>";
  plusUl.addEventListener("click", deleteList2);
  document.getElementById('a').appendChild(plusUl);
} function add6() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n2 = "2.1";
  plusUl.innerHTML = "<li>사우샘프턴 패 2.10->삭제</li>";
  plusUl.addEventListener("click", deleteList2);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled2() {
  var target1 = document.getElementById('btn6');
  var target2 = document.getElementById('btn7');
  var target3 = document.getElementById('btn8');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList2(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n2 = "1";
  var target1 = document.getElementById('btn6');
  var target2 = document.getElementById('btn7');
  var target3 = document.getElementById('btn8');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add7() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button')
  n3 = "2.4";
  plusUl.innerHTML = "<li>레스터시티 승 2.40->삭제</li>";
  plusUl.addEventListener("click", deleteList3);
  document.getElementById('a').appendChild(plusUl);
}
function add8() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n3 = "3.1";
  plusUl.innerHTML = "<li>레스터시티 무 3.10->삭제</li>";
  plusUl.addEventListener("click", deleteList3);
  document.getElementById('a').appendChild(plusUl);
} function add9() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n3 = "1.9";
  plusUl.innerHTML = "<li>레스터시티 패 1.90->삭제</li>";
  plusUl.addEventListener("click", deleteList3);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled3() {
  var target1 = document.getElementById('btn9');
  var target2 = document.getElementById('btn10');
  var target3 = document.getElementById('btn11');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList3(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n3 = "1";
  var target1 = document.getElementById('btn9');
  var target2 = document.getElementById('btn10');
  var target3 = document.getElementById('btn11');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add10() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n4 = "2.2";
  plusUl.innerHTML = "<li>크리스털 팰리스 승 2.15->삭제</li>";
  plusUl.addEventListener("click", deleteList4);
  document.getElementById('a').appendChild(plusUl);
}
function add11() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n4 = "2.8";
  plusUl.innerHTML = "<li>크리스털 팰리스 무 2.80->삭제</li>";
  plusUl.addEventListener("click", deleteList4);
  document.getElementById('a').appendChild(plusUl);
} function add12() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n4 = "2.3";
  plusUl.innerHTML = "<li>크리스털 팰리스 패 2.30->삭제</li>";
  plusUl.addEventListener("click", deleteList4);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled4() {
  var target1 = document.getElementById('btn12');
  var target2 = document.getElementById('btn13');
  var target3 = document.getElementById('btn14');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList4(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n4 = "1";
  var target1 = document.getElementById('btn12');
  var target2 = document.getElementById('btn13');
  var target3 = document.getElementById('btn14');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add13() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n5 = "1.9";
  plusUl.innerHTML = "<li>에버턴 승 1.90->삭제</li>";
  plusUl.addEventListener("click", deleteList5);
  document.getElementById('a').appendChild(plusUl);
}
function add14() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n5 = "2.9";
  plusUl.innerHTML = "<li>에버턴 무 2.90->삭제</li>";
  plusUl.addEventListener("click", deleteList5);
  document.getElementById('a').appendChild(plusUl);
} function add15() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n5 = "2.5";
  plusUl.innerHTML = "<li>에버턴 패 2.50->삭제</li>";
  plusUl.addEventListener("click", deleteList5);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled5() {
  var target1 = document.getElementById('btn15');
  var target2 = document.getElementById('btn16');
  var target3 = document.getElementById('btn17');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList5(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n5 = "1";
  var target1 = document.getElementById('btn15');
  var target2 = document.getElementById('btn16');
  var target3 = document.getElementById('btn17');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add16() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n6 = "4.5";
  plusUl.innerHTML = "<li>애스턴 빌라 승 4.50->삭제</li>";
  plusUl.addEventListener("click", deleteList6);
  document.getElementById('a').appendChild(plusUl);
}
function add17() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n6 = "3.4";
  plusUl.innerHTML = "<li>애스턴 빌라 무 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList6);
  document.getElementById('a').appendChild(plusUl);
} function add18() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n6 = "1.4";
  plusUl.innerHTML = "<li>애스턴 빌라 패 1.40->삭제</li>";
  plusUl.addEventListener("click", deleteList6);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled6() {
  var target1 = document.getElementById('btn18');
  var target2 = document.getElementById('btn19');
  var target3 = document.getElementById('btn20');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList6(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n6 = "1";
  var target1 = document.getElementById('btn18');
  var target2 = document.getElementById('btn19');
  var target3 = document.getElementById('btn20');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add19() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n7 = "1.8";
  plusUl.innerHTML = "<li>아스널 승 1.80->삭제</li>";
  plusUl.addEventListener("click", deleteList7);
  document.getElementById('a').appendChild(plusUl);
}
function add20() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n7 = "3.4";
  plusUl.innerHTML = "<li>아스널 무 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList7);
  document.getElementById('a').appendChild(plusUl);
} function add21() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n7 = "3.7";
  plusUl.innerHTML = "<li>아스널 패 3.70->삭제</li>";
  plusUl.addEventListener("click", deleteList7);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled7() {
  var target1 = document.getElementById('btn21');
  var target2 = document.getElementById('btn22');
  var target3 = document.getElementById('btn23');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList7(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n7 = "1";
  var target1 = document.getElementById('btn21');
  var target2 = document.getElementById('btn22');
  var target3 = document.getElementById('btn23');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add22() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n8 = "1.4";
  plusUl.innerHTML = "<li>첼시 승 1.40->삭제</li>";
  plusUl.addEventListener("click", deleteList8);
  document.getElementById('a').appendChild(plusUl);
}
function add23() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n8 = "3.5";
  plusUl.innerHTML = "<li>첼시 무 3.50->삭제</li>";
  plusUl.addEventListener("click", deleteList8);
  document.getElementById('a').appendChild(plusUl);
} function add24() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n8 = "4.2";
  plusUl.innerHTML = "<li>첼시 패 4.15->삭제</li>";
  plusUl.addEventListener("click", deleteList8);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled8() {
  var target1 = document.getElementById('btn24');
  var target2 = document.getElementById('btn25');
  var target3 = document.getElementById('btn26');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList8(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n8 = "1";
  var target1 = document.getElementById('btn24');
  var target2 = document.getElementById('btn25');
  var target3 = document.getElementById('btn26');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add25() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n9 = "1.6";
  plusUl.innerHTML = "<li>맨체스터 유나이티드 승 1.60->삭제</li>";
  plusUl.addEventListener("click", deleteList9);
  document.getElementById('a').appendChild(plusUl);
}
function add26() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n9 = "3.4";
  plusUl.innerHTML = "<li>맨체스터 유나이티드 무 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList9);
  document.getElementById('a').appendChild(plusUl);
} function add27() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n9 = "4.1";
  plusUl.innerHTML = "<li>맨체스터 유나이티드 패 4.10->삭제</li>";
  plusUl.addEventListener("click", deleteList9);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled9() {
  var target1 = document.getElementById('btn27');
  var target2 = document.getElementById('btn28');
  var target3 = document.getElementById('btn29');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList9(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n9 = "1";
  var target1 = document.getElementById('btn27');
  var target2 = document.getElementById('btn28');
  var target3 = document.getElementById('btn29');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add28() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n10 = "6.1";
  plusUl.innerHTML = "<li>리즈 유나이티드 승 6.10->삭제</li>";
  plusUl.addEventListener("click", deleteList10);
  document.getElementById('a').appendChild(plusUl);
}
function add29() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n10 = "5.1";
  plusUl.innerHTML = "<li>리즈 유나이티드 무 5.10->삭제</li>";
  plusUl.addEventListener("click", deleteList10);
  document.getElementById('a').appendChild(plusUl);
} function add30() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  n10 = "1.3";
  plusUl.innerHTML = "<li>리즈 유나이티드 패 1.30->삭제</li>";
  plusUl.addEventListener("click", deleteList10);
  document.getElementById('a').appendChild(plusUl);
}
function btnDisabled10() {
  var target1 = document.getElementById('btn30');
  var target2 = document.getElementById('btn31');
  var target3 = document.getElementById('btn32');
  target1.disabled = true; target2.disabled = true; target3.disabled = true;
}
function deleteList10(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n10 = "1";
  var target1 = document.getElementById('btn30');
  var target2 = document.getElementById('btn31');
  var target3 = document.getElementById('btn32');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function ratehap() {
  var totalrate = n1 * n2 * n3 * n4 * n5 * n6 * n7 * n8 * n9 * n10;
  var totalrate2 = Math.round(totalrate * 10) / 10;
  document.getElementById("totalrate").value = totalrate2;
}
function getmoney() {
  var investmoney = document.getElementById("invest").value;
  var totalrate = n1 * n2 * n3 * n4 * n5 * n6 * n7 * n8 * n9 * n10;
  var totalrate2 = Math.round(totalrate * 10) / 10;
  document.getElementById("daebak").value = investmoney * totalrate2;
}
