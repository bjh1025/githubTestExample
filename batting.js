n1 = "1"; n2 = "1"; n3 = "1"; n4 = "1"; n5 = "1"; n6 = "1"; n7 = "1"; n8 = "1"; n9 = "1"; n10 = "1";
n11 = "1"; n12 = "1"; n13 = "1"; n14 = "1"; n15 = "1"; n16 = "1"; n17 = "1"; n18 = "1"; n19 = "1"; n20 = "1";
function add1() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn3');
  var target2 = document.getElementById('btn4');
  var target3 = document.getElementById('btn5');
  n1 = "2.4";
  plusUl.innerHTML = "<li>브렌트포드 승 2.35->삭제</li>";
  plusUl.addEventListener("click", deleteList1);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add2() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn3');
  var target2 = document.getElementById('btn4');
  var target3 = document.getElementById('btn5');
  n1 = "3.2";
  plusUl.innerHTML = "<li>브렌트포드 무 3.15->삭제</li>";
  plusUl.addEventListener("click", deleteList1);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add3() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn3');
  var target2 = document.getElementById('btn4');
  var target3 = document.getElementById('btn5');
  n1 = "1.7";
  plusUl.innerHTML = "<li>브렌트포드 패 1.70->삭제</li>";
  plusUl.addEventListener("click", deleteList1);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn6');
  var target2 = document.getElementById('btn7');
  var target3 = document.getElementById('btn8');
  n2 = "2.5";
  plusUl.innerHTML = "<li>사우샘프턴 승 2.50->삭제</li>";
  plusUl.addEventListener("click", deleteList2);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add5() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn6');
  var target2 = document.getElementById('btn7');
  var target3 = document.getElementById('btn8');
  n2 = "3";
  plusUl.innerHTML = "<li>사우샘프턴 무 2.95->삭제</li>";
  plusUl.addEventListener("click", deleteList2);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }
  else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add6() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn6');
  var target2 = document.getElementById('btn7');
  var target3 = document.getElementById('btn8');
  n2 = "2.1";
  plusUl.innerHTML = "<li>사우샘프턴 패 2.10->삭제</li>";
  plusUl.addEventListener("click", deleteList2);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn9');
  var target2 = document.getElementById('btn10');
  var target3 = document.getElementById('btn11');
  n3 = "2.4";
  plusUl.innerHTML = "<li>레스터시티 승 2.40->삭제</li>";
  plusUl.addEventListener("click", deleteList3);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add8() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn9');
  var target2 = document.getElementById('btn10');
  var target3 = document.getElementById('btn11');
  n3 = "3.1";
  plusUl.innerHTML = "<li>레스터시티 무 3.10->삭제</li>";
  plusUl.addEventListener("click", deleteList3);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add9() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn9');
  var target2 = document.getElementById('btn10');
  var target3 = document.getElementById('btn11');
  n3 = "1.9";
  plusUl.innerHTML = "<li>레스터시티 패 1.90->삭제</li>";
  plusUl.addEventListener("click", deleteList3);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn12');
  var target2 = document.getElementById('btn13');
  var target3 = document.getElementById('btn14');
  n4 = "2.2";
  plusUl.innerHTML = "<li>크리스털 팰리스 승 2.15->삭제</li>";
  plusUl.addEventListener("click", deleteList4);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add11() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn12');
  var target2 = document.getElementById('btn13');
  var target3 = document.getElementById('btn14');
  n4 = "2.8";
  plusUl.innerHTML = "<li>크리스털 팰리스 무 2.80->삭제</li>";
  plusUl.addEventListener("click", deleteList4);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add12() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn12');
  var target2 = document.getElementById('btn13');
  var target3 = document.getElementById('btn14');
  n4 = "2.3";
  plusUl.innerHTML = "<li>크리스털 팰리스 패 2.30->삭제</li>";
  plusUl.addEventListener("click", deleteList4);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn15');
  var target2 = document.getElementById('btn16');
  var target3 = document.getElementById('btn17');
  n5 = "1.9";
  plusUl.innerHTML = "<li>에버턴 승 1.90->삭제</li>";
  plusUl.addEventListener("click", deleteList5);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add14() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn15');
  var target2 = document.getElementById('btn16');
  var target3 = document.getElementById('btn17');
  n5 = "2.9";
  plusUl.innerHTML = "<li>에버턴 무 2.90->삭제</li>";
  plusUl.addEventListener("click", deleteList5);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add15() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn15');
  var target2 = document.getElementById('btn16');
  var target3 = document.getElementById('btn17');
  n5 = "2.5";
  plusUl.innerHTML = "<li>에버턴 패 2.50->삭제</li>";
  plusUl.addEventListener("click", deleteList5);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn18');
  var target2 = document.getElementById('btn19');
  var target3 = document.getElementById('btn20');
  n6 = "4.5";
  plusUl.innerHTML = "<li>애스턴 빌라 승 4.50->삭제</li>";
  plusUl.addEventListener("click", deleteList6);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add17() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn18');
  var target2 = document.getElementById('btn19');
  var target3 = document.getElementById('btn20');
  n6 = "3.4";
  plusUl.innerHTML = "<li>애스턴 빌라 무 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList6);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add18() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn18');
  var target2 = document.getElementById('btn19');
  var target3 = document.getElementById('btn20');
  n6 = "1.4";
  plusUl.innerHTML = "<li>애스턴 빌라 패 1.40->삭제</li>";
  plusUl.addEventListener("click", deleteList6);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn21');
  var target2 = document.getElementById('btn22');
  var target3 = document.getElementById('btn23');
  n7 = "1.8";
  plusUl.innerHTML = "<li>아스널 승 1.80->삭제</li>";
  plusUl.addEventListener("click", deleteList7);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add20() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn21');
  var target2 = document.getElementById('btn22');
  var target3 = document.getElementById('btn23');
  n7 = "3.4";
  plusUl.innerHTML = "<li>아스널 무 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList7);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add21() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn21');
  var target2 = document.getElementById('btn22');
  var target3 = document.getElementById('btn23');
  n7 = "3.7";
  plusUl.innerHTML = "<li>아스널 패 3.70->삭제</li>";
  plusUl.addEventListener("click", deleteList7);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn24');
  var target2 = document.getElementById('btn25');
  var target3 = document.getElementById('btn26');
  n8 = "1.4";
  plusUl.innerHTML = "<li>첼시 승 1.40->삭제</li>";
  plusUl.addEventListener("click", deleteList8);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add23() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn24');
  var target2 = document.getElementById('btn25');
  var target3 = document.getElementById('btn26');
  n8 = "3.5";
  plusUl.innerHTML = "<li>첼시 무 3.50->삭제</li>";
  plusUl.addEventListener("click", deleteList8);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add24() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn24');
  var target2 = document.getElementById('btn25');
  var target3 = document.getElementById('btn26');
  n8 = "4.2";
  plusUl.innerHTML = "<li>첼시 패 4.15->삭제</li>";
  plusUl.addEventListener("click", deleteList8);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn27');
  var target2 = document.getElementById('btn28');
  var target3 = document.getElementById('btn29');
  n9 = "1.6";
  plusUl.innerHTML = "<li>맨체스터 유나이티드 승 1.60->삭제</li>";
  plusUl.addEventListener("click", deleteList9);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add26() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn27');
  var target2 = document.getElementById('btn28');
  var target3 = document.getElementById('btn29');
  n9 = "3.4";
  plusUl.innerHTML = "<li>맨체스터 유나이티드 무 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList9);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add27() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn27');
  var target2 = document.getElementById('btn28');
  var target3 = document.getElementById('btn29');
  n9 = "4.1";
  plusUl.innerHTML = "<li>맨체스터 유나이티드 패 4.10->삭제</li>";
  plusUl.addEventListener("click", deleteList9);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  } else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn30');
  var target2 = document.getElementById('btn31');
  var target3 = document.getElementById('btn32');
  n10 = "6.1";
  plusUl.innerHTML = "<li>리즈 유나이티드 승 6.10->삭제</li>";
  plusUl.addEventListener("click", deleteList10);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add29() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn30');
  var target2 = document.getElementById('btn31');
  var target3 = document.getElementById('btn32');
  n10 = "5.1";
  plusUl.innerHTML = "<li>리즈 유나이티드 무 5.10->삭제</li>";
  plusUl.addEventListener("click", deleteList10);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add30() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn30');
  var target2 = document.getElementById('btn31');
  var target3 = document.getElementById('btn32');
  n10 = "1.3";
  plusUl.innerHTML = "<li>리즈 유나이티드 패 1.30->삭제</li>";
  plusUl.addEventListener("click", deleteList10);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
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
function add31() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn33');
  var target2 = document.getElementById('btn34');
  var target3 = document.getElementById('btn35');
  n11 = "2.3";
  plusUl.innerHTML = "<li>지로나 승 2.30->삭제</li>";
  plusUl.addEventListener("click", deleteList11);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add32() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn33');
  var target2 = document.getElementById('btn34');
  var target3 = document.getElementById('btn35');
  n11 = "3.0";
  plusUl.innerHTML = "<li>지로나 무 3.00->삭제</li>";
  plusUl.addEventListener("click", deleteList11);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add33() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn33');
  var target2 = document.getElementById('btn34');
  var target3 = document.getElementById('btn35');
  n11 = "2.9";
  plusUl.innerHTML = "<li>지로나 패 2.85->삭제</li>";
  plusUl.addEventListener("click", deleteList11);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList11(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n11 = "1";
  var target1 = document.getElementById('btn33');
  var target2 = document.getElementById('btn34');
  var target3 = document.getElementById('btn35');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add34() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn36');
  var target2 = document.getElementById('btn37');
  var target3 = document.getElementById('btn38');
  n12 = "2.8";
  plusUl.innerHTML = "<li>레알 베티스 승 2.80->삭제</li>";
  plusUl.addEventListener("click", deleteList12);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add35() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn36');
  var target2 = document.getElementById('btn37');
  var target3 = document.getElementById('btn38');
  n12 = "3.2";
  plusUl.innerHTML = "<li>레알 베티스 무 3.15->삭제</li>";
  plusUl.addEventListener("click", deleteList12);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add36() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn36');
  var target2 = document.getElementById('btn37');
  var target3 = document.getElementById('btn38');
  n12 = "2.7";
  plusUl.innerHTML = "<li>레알 베티스 패 2.65->삭제</li>";
  plusUl.addEventListener("click", deleteList12);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList12(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n12 = "1";
  var target1 = document.getElementById('btn36');
  var target2 = document.getElementById('btn37');
  var target3 = document.getElementById('btn38');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add37() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn39');
  var target2 = document.getElementById('btn40');
  var target3 = document.getElementById('btn41');
  n13 = "1.5";
  plusUl.innerHTML = "<li>아틀레티코 마드리드 승 1.50->삭제</li>";
  plusUl.addEventListener("click", deleteList13);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add38() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn39');
  var target2 = document.getElementById('btn40');
  var target3 = document.getElementById('btn41');
  n13 = "4.8";
  plusUl.innerHTML = "<li>아틀레티코 마드리드 무 4.80->삭제</li>";
  plusUl.addEventListener("click", deleteList13);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add39() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn39');
  var target2 = document.getElementById('btn40');
  var target3 = document.getElementById('btn41');
  n13 = "6.0";
  plusUl.innerHTML = "<li>아틀레티코 마드리드 패 6.00->삭제</li>";
  plusUl.addEventListener("click", deleteList13);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList13(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n13 = "1";
  var target1 = document.getElementById('btn39');
  var target2 = document.getElementById('btn40');
  var target3 = document.getElementById('btn41');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add40() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn42');
  var target2 = document.getElementById('btn43');
  var target3 = document.getElementById('btn44');
  n14 = "3.2";
  plusUl.innerHTML = "<li>헤타페 승 3.15->삭제</li>";
  plusUl.addEventListener("click", deleteList14);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add41() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn42');
  var target2 = document.getElementById('btn43');
  var target3 = document.getElementById('btn44');
  n14 = "2.7";
  plusUl.innerHTML = "<li>헤타페 무 2.70->삭제</li>";
  plusUl.addEventListener("click", deleteList14);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add42() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn42');
  var target2 = document.getElementById('btn43');
  var target3 = document.getElementById('btn44');
  n14 = "2.8";
  plusUl.innerHTML = "<li>헤타페 패 2.80->삭제</li>";
  plusUl.addEventListener("click", deleteList14);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList14(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n14 = "1";
  var target1 = document.getElementById('btn42');
  var target2 = document.getElementById('btn43');
  var target3 = document.getElementById('btn44');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add43() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn45');
  var target2 = document.getElementById('btn46');
  var target3 = document.getElementById('btn47');
  n15 = "3.1";
  plusUl.innerHTML = "<li>셀타비고 승 3.10->삭제</li>";
  plusUl.addEventListener("click", deleteList15);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add44() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn45');
  var target2 = document.getElementById('btn46');
  var target3 = document.getElementById('btn47');
  n15 = "2.8";
  plusUl.innerHTML = "<li>셀타비고 무 2.80->삭제</li>";
  plusUl.addEventListener("click", deleteList15);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add45() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn45');
  var target2 = document.getElementById('btn46');
  var target3 = document.getElementById('btn47');
  n15 = "3.4";
  plusUl.innerHTML = "<li>셀타비고 패 3.35->삭제</li>";
  plusUl.addEventListener("click", deleteList15);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList15(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n15 = "1";
  var target1 = document.getElementById('btn45');
  var target2 = document.getElementById('btn46');
  var target3 = document.getElementById('btn47');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add46() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn48');
  var target2 = document.getElementById('btn49');
  var target3 = document.getElementById('btn50');
  n16 = "3.3";
  plusUl.innerHTML = "<li>카디스 승 3.30->삭제</li>";
  plusUl.addEventListener("click", deleteList16);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add47() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn48');
  var target2 = document.getElementById('btn49');
  var target3 = document.getElementById('btn50');
  n16 = "3.0";
  plusUl.innerHTML = "<li>카디스 무 3.00->삭제</li>";
  plusUl.addEventListener("click", deleteList16);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add48() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn48');
  var target2 = document.getElementById('btn49');
  var target3 = document.getElementById('btn50');
  n16 = "2.9";
  plusUl.innerHTML = "<li>브카디스 패 2.90->삭제</li>";
  plusUl.addEventListener("click", deleteList16);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList16(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n16 = "1";
  var target1 = document.getElementById('btn48');
  var target2 = document.getElementById('btn49');
  var target3 = document.getElementById('btn50');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add49() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn51');
  var target2 = document.getElementById('btn52');
  var target3 = document.getElementById('btn53');
  n17 = "5.2";
  plusUl.innerHTML = "<li>레알 바야돌리드 승 5.15->삭제</li>";
  plusUl.addEventListener("click", deleteList17);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add50() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn51');
  var target2 = document.getElementById('btn52');
  var target3 = document.getElementById('btn53');
  n17 = "4.1";
  plusUl.innerHTML = "<li>레알 바야돌리드 무 4.10->삭제</li>";
  plusUl.addEventListener("click", deleteList17);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add51() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn51');
  var target2 = document.getElementById('btn52');
  var target3 = document.getElementById('btn53');
  n17 = "1.3";
  plusUl.innerHTML = "<li>레알 바야돌리드 패 1.30->삭제</li>";
  plusUl.addEventListener("click", deleteList17);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList17(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n17 = "1";
  var target1 = document.getElementById('btn51');
  var target2 = document.getElementById('btn52');
  var target3 = document.getElementById('btn53');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add52() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn54');
  var target2 = document.getElementById('btn55');
  var target3 = document.getElementById('btn56');
  n18 = "1.3";
  plusUl.innerHTML = "<li>바르셀로나 승 1.25->삭제</li>";
  plusUl.addEventListener("click", deleteList18);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add53() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn54');
  var target2 = document.getElementById('btn55');
  var target3 = document.getElementById('btn56');
  n18 = "6.0";
  plusUl.innerHTML = "<li>바르셀로나 무 6.00->삭제</li>";
  plusUl.addEventListener("click", deleteList18);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add54() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn54');
  var target2 = document.getElementById('btn55');
  var target3 = document.getElementById('btn56');
  n18 = "7.1";
  plusUl.innerHTML = "<li>바르셀로나 패 7.10->삭제</li>";
  plusUl.addEventListener("click", deleteList18);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}

function deleteList18(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n18 = "1";
  var target1 = document.getElementById('btn54');
  var target2 = document.getElementById('btn55');
  var target3 = document.getElementById('btn56');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add55() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn57');
  var target2 = document.getElementById('btn58');
  var target3 = document.getElementById('btn59');
  n19 = "2.3";
  plusUl.innerHTML = "<li>레알 소시에다드 승 2.30->삭제</li>";
  plusUl.addEventListener("click", deleteList19);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add56() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn57');
  var target2 = document.getElementById('btn58');
  var target3 = document.getElementById('btn59');
  n19 = "3.3";
  plusUl.innerHTML = "<li>레알 소시에다드 무 3.30->삭제</li>";
  plusUl.addEventListener("click", deleteList19);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add57() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn57');
  var target2 = document.getElementById('btn58');
  var target3 = document.getElementById('btn59');
  n19 = "3.2";
  plusUl.innerHTML = "<li>레알 소시에다드 패 3.15->삭제</li>";
  plusUl.addEventListener("click", deleteList19);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList19(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n19 = "1";
  var target1 = document.getElementById('btn57');
  var target2 = document.getElementById('btn58');
  var target3 = document.getElementById('btn59');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}
function add58() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn60');
  var target2 = document.getElementById('btn61');
  var target3 = document.getElementById('btn62');
  n20 = "3.2";
  plusUl.innerHTML = "<li>비야레알 승 3.15->삭제</li>";
  plusUl.addEventListener("click", deleteList20);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function add59() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn60');
  var target2 = document.getElementById('btn61');
  var target3 = document.getElementById('btn62');
  n20 = "3.3";
  plusUl.innerHTML = "<li>비야레알 무 3.30->삭제</li>";
  plusUl.addEventListener("click", deleteList20);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
} function add60() {
  var plusUl = document.createElement('ul');
  var plusUl = document.createElement('button');
  var a = document.getElementById('a');
  var target1 = document.getElementById('btn60');
  var target2 = document.getElementById('btn61');
  var target3 = document.getElementById('btn62');
  n20 = "3.4";
  plusUl.innerHTML = "<li>비야레알 패 3.40->삭제</li>";
  plusUl.addEventListener("click", deleteList20);
  if (a.childElementCount < 11) {
    document.getElementById('a').appendChild(plusUl);
    target1.disabled = true; target2.disabled = true; target3.disabled = true;
  }else if (a.childElementCount > 10)
    alert('선택 최대개수는 10개입니다.');
}
function deleteList20(event) {
  var deleteElement = event.target.parentElement;
  deleteElement.remove();
  n20 = "1";
  var target1 = document.getElementById('btn60');
  var target2 = document.getElementById('btn61');
  var target3 = document.getElementById('btn62');
  target1.disabled = false; target2.disabled = false; target3.disabled = false;
}

function ratehap() {
  var totalrate = n1 * n2 * n3 * n4 * n5 * n6 * n7 * n8 * n9 * n10
  n11 * n12 * n13 * n14 * n15 * n16 * n17 * n18 * n19 * n20;
  var totalrate2 = Math.round(totalrate * 10) / 10;
  document.getElementById("totalrate").value = totalrate2;
}
function getmoney() {
  var investmoney = document.getElementById("invest").value;
  var totalrate = n1 * n2 * n3 * n4 * n5 * n6 * n7 * n8 * n9 * n10
  n11 * n12 * n13 * n14 * n15 * n16 * n17 * n18 * n19 * n20;
  var totalrate2 = Math.round(totalrate * 10) / 10;
  document.getElementById("daebak").value = investmoney * totalrate2;
}
