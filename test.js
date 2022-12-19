var matchlist = [
    { name: "브렌트포드 vs 토트넘", league: 'premier', homewinrate: 27, awaywinrate: 60, winbat: 2.35, drawbat: 3.15, losebat: 1.70 },
    { name: "사우샘프턴 vs 브라이턴", league: 'premier', homewinrate: 20, awaywinrate: 43, winbat: 2.50, drawbat: 2.95, losebat: 2.10 },
    { name: "레스터시티 vs 뉴캐슬", league: 'premier', homewinrate: 33, awaywinrate: 53, winbat: 2.40, drawbat: 3.10, losebat: 1.90 },
    { name: "크리스털 팰리스 vs 풀럼", league: 'premier', homewinrate: 36, awaywinrate: 33, winbat: 2.15, drawbat: 2.80, losebat: 2.30 },
    { name: "에버턴 vs 울버햄튼", league: 'premier', homewinrate: 20, awaywinrate: 13, winbat: 1.90, drawbat: 1.90, losebat: 2.50 },
    { name: "애스턴 빌라 vs 리버풀", league: 'premier', homewinrate: 33, awaywinrate: 43, winbat: 4.50, drawbat: 3.35, losebat: 1.40 },
    { name: "아스널 vs 웨스트햄", league: 'premier', homewinrate: 86, awaywinrate: 27, winbat: 1.80, drawbat: 3.35, losebat: 3.70 },
    { name: "첼시 vs 본머스", league: 'premier', homewinrate: 43, awaywinrate: 27, winbat: 1.40, drawbat: 3.50, losebat: 4.15 },
    { name: "맨체스터 유나이티드 vs 노팅엄 포레스트", league: 'premier', homewinrate: 57, awaywinrate: 20, winbat: 1.60, drawbat: 3.35, losebat: 4.10 },
    { name: "리즈 유나이티드 vs 맨체스터 시티", league: 'premier', homewinrate: 29, awaywinrate: 71, winbat: 6.10, drawbat: 5.10, losebat: 1.30 },
    
    { name: "지로나 vs 라요 바예카노", league: 'laliga', homewinrate: 29, awaywinrate:43, winbat: 2.30, drawbat: 3.00, losebat: 2.85 }, 
    { name: "레알 베티스 vs 아틀레틱 빌바오", league: 'laliga', homewinrate:50, awaywinrate:50, winbat: 2.80, drawbat: 3.15, losebat: 2.65 },
    { name: "아틀레티코 마드리드 vs 엘체", league: 'laliga', homewinrate: 50, awaywinrate:0, winbat: 1.50, drawbat: 4.80, losebat:6.00 },
    { name: "헤타페 vs 마요르카", league: 'laliga', homewinrate: 21, awaywinrate: 36, winbat: 3.15, drawbat: 2.70, losebat: 2.80 },
    { name: "셀타 비고 vs 세비야", league: 'laliga', homewinrate: 21, awaywinrate: 14, winbat: 3.10, drawbat: 2.80, losebat: 3.35 },
    { name: "카디스 vs 알메리아", league: 'laliga', homewinrate: 14, awaywinrate: 36, winbat: 3.30, drawbat: 3.00, losebat: 2.90 },
    { name: "레알 바야돌리드 vs 레알 마드리드", league: 'laliga', homewinrate: 36, awaywinrate: 79, winbat: 5.15, drawbat: 4.10, losebat: 1.30 },
    { name: "바르셀로나 vs 에스파뇰", league: 'laliga', homewinrate: 86, awaywinrate: 14, winbat: 1.25, drawbat: 6.00, losebat: 7.10 },
    { name: "레알 소시에다드 vs 오사수나", league: 'laliga', homewinrate: 57, awaywinrate: 50, winbat: 2.30, drawbat: 3.30, losebat: 3.15 },
    { name: "비야레알 vs 발렌시아", league: 'laliga', homewinrate: 43, awaywinrate: 36, winbat: 3.15, drawbat: 3.30, losebat: 3.40 },
]

function showlist() {
    const table = document.getElementById('tablebody');
    table.innerHTML = "";
    // 리그 종류 선택
    const leagueLength = document.getElementsByName("league").length;
    let league;
    for (var i = 0; i < leagueLength; i++) {
        if (document.getElementsByName("league")[i].checked == true) {
            league = document.getElementsByName("league")[i].value;
        }
    }
    if (league == null) {
        alert('리그 종류 선택해주세요.');
    }

    //홈 팀 승률 구하기
    const homewinrateLength = document.getElementsByName("homewinrate").length;
    let homewinrate;
    for (var i = 0; i < homewinrateLength; i++) {
        if (document.getElementsByName("homewinrate")[i].checked == true) {
            homewinrate = document.getElementsByName("homewinrate")[i].value;
        }
    }
    // 원정 팀 승률 구하기
    const awaywinrateLength = document.getElementsByName("awaywinrate").length;
    let awaywinrate;
    for (var i = 0; i < awaywinrateLength; i++) {
        if (document.getElementsByName("awaywinrate")[i].checked == true) {
            awaywinrate = document.getElementsByName("awaywinrate")[i].value;
        }
    }
    // 승,무,패 배당률 구하기
    const batrateLength = document.getElementsByName("batrate").length;
    let winbat, drawbat, losebat;
    for (var i = 0; i < batrateLength; i++) {
        if (document.getElementsByName("batrate")[i].checked == true) {
            winbat = document.getElementsByName("batrate")[i].value;
            drawbat = document.getElementsByName("batrate")[i].value;
            losebat = document.getElementsByName("batrate")[i].value;
        }
    }

    const result = [];

    for (let i of matchlist) {
        if(i.league == league){
            if (i.homewinrate<=33 && i.awaywinrate<=33) {
                if(homewinrate == 0 && awaywinrate == 0){
                result.push(i);
            }}
            else if(i.homewinrate <= 33 && i.awaywinrate>= 34 && i.awaywinrate <= 66){    
                 if(homewinrate == 0 && awaywinrate == 34){
                 result.push(i);
            }} 
            else if(i.homewinrate <= 33 && i.awaywinrate>=67){    
                 if(homewinrate == 0 && awaywinrate == 67){
                 result.push(i);
            }}      
            else if(i.homewinrate <= 66 && i.homewinrate >= 34 && i.awaywinrate<=33){    
                 if(homewinrate == 34 && awaywinrate == 0){
                result.push(i);
            }}
            else if(i.homewinrate <= 66 && i.homewinrate >= 34 && i.awaywinrate>=33 && i.awaywinrate<=66){    
                if(homewinrate == 34 && awaywinrate == 34){
               result.push(i);
            }}
            else if(i.homewinrate <= 66 && i.homewinrate >= 34 && i.awaywinrate>=67){    
                if(homewinrate == 34 && awaywinrate == 67){
               result.push(i);
            }}
            else if(i.homewinrate >= 67 && i.awaywinrate<=33){    
                if(homewinrate == 67 && awaywinrate == 0){
               result.push(i);
            }}
            else if(i.homewinrate >= 67 && i.awaywinrate>=34 && i.awaywinrate<=66){    
                if(homewinrate == 67 && awaywinrate == 67){
               result.push(i);
            }}
                
    }
}
    
    for (let i of matchlist) {
        if (i.league == league) {
            if (winbat == 0 && i.winbat <= 1.60) {
                result.push(i);
            } else if (winbat == 1.61 && 1.61 <= i.winbat && i.winbat <= 2.79) {
                result.push(i);
            } else if (winbat == 2.80 && i.winbat >= 2.80) {
                result.push(i);
            } else if (drawbat == 0 && i.drawbat <= 1.60) {
                result.push(i);
            } else if (drawbat == 1.61 && 1.61 <= i.drawbat && i.drawbat <= 2.79) {
                result.push(i);
            } else if (drawbat == 2.80 && i.drawbat >= 2.80) {
                result.push(i);
            } else if (losebat == 0 && i.losebat <= 1.60) {
                result.push(i);
            } else if (losebat == 1.61 && 1.61 <= i.losebat && i.losebat <= 2.79) {
                result.push(i);
            } else if (losebat == 2.80 && i.losebat >= 2.80) {
                result.push(i);
            }
        }
    }
    let result1 = [...new Set(result)];
    for (let i of result1) {
        var row =
            `<tr> 
                  <td>${i.name}</td> 
                  <td>${i.league}</td> 
                  <td>${i.homewinrate}</td> 
                  <td>${i.awaywinrate}</td>
                  <td>${i.winbat}</td>
                  <td>${i.drawbat}</td>
                  <td>${i.losebat}</td> 
              </tr>`
        table.innerHTML += row
    }


}
function showlist1() {
    const table = document.getElementById('tablebody');
    table.innerHTML = "";
    // 리그 종류 선택
    const leagueLength = document.getElementsByName("league1").length;
    let league;
    for (var i = 0; i < leagueLength; i++) {
        if (document.getElementsByName("league1")[i].checked == true) {
            league = document.getElementsByName("league1")[i].value;
        }
    }
    if (league == null) {
        alert('리그 종류 선택해주세요.');
    }

    //홈 팀 승률 구하기
    const homewinrateLength = document.getElementsByName("homewinrate1").length;
    let homewinrate;
    for (var i = 0; i < homewinrateLength; i++) {
        if (document.getElementsByName("homewinrate1")[i].checked == true) {
            homewinrate = document.getElementsByName("homewinrate1")[i].value;
        }
    }
    // 원정 팀 승률 구하기
    const awaywinrateLength = document.getElementsByName("awaywinrate1").length;
    let awaywinrate;
    for (var i = 0; i < awaywinrateLength; i++) {
        if (document.getElementsByName("awaywinrate1")[i].checked == true) {
            awaywinrate = document.getElementsByName("awaywinrate1")[i].value;
        }
    }
    // 승,무,패 배당률 구하기
    const batrateLength = document.getElementsByName("batrate1").length;
    let winbat, drawbat, losebat;
    for (var i = 0; i < batrateLength; i++) {
        if (document.getElementsByName("batrate1")[i].checked == true) {
            winbat = document.getElementsByName("batrate1")[i].value;
            drawbat = document.getElementsByName("batrate1")[i].value;
            losebat = document.getElementsByName("batrate1")[i].value;
        }
    }

    const result2 = [];

    for (let i of matchlist) {
        if (i.league == league) {
            if (homewinrate == 0 && i.homewinrate <= 33) {
                result2.push(i);
            } else if (homewinrate == 34 && i.homewinrate <= 66 && i.homewinrate >= 34) {
                result2.push(i);
            } else if (homewinrate == 67 && i.homewinrate >= 67 && i.homewinrate <= 100) {
                result2.push(i);
            }
        }
    }
    for (let i of matchlist) {
        if (i.league == league) {
            if (awaywinrate == 0 && i.awaywinrate <= 33) {
                result2.push(i);
            } else if (awaywinrate == 34 && i.awaywinrate <= 66 && i.awaywinrate >= 34) {
                result2.push(i);
            } else if (awaywinrate == 67 && i.awaywinrate >= 67 && i.awaywinrate <= 100) {
                result2.push(i);
            }
        }
    }
    for (let i of matchlist) {
        if (i.league == league) {
            if (winbat == 0 && i.winbat <= 1.60) {
                result2.push(i);
            } else if (winbat == 1.61 && 1.61 <= i.winbat && i.winbat <= 2.79) {
                result2.push(i);
            } else if (winbat == 2.80 && i.winbat >= 2.80) {
                result2.push(i);
            } else if (drawbat == 0 && i.drawbat <= 1.60) {
                result2.push(i);
            } else if (drawbat == 1.61 && 1.61 <= i.drawbat && i.drawbat <= 2.79) {
                result2.push(i);
            } else if (drawbat == 2.80 && i.drawbat >= 2.80) {
                result2.push(i);
            } else if (losebat == 0 && i.losebat <= 1.60) {
                result2.push(i);
            } else if (losebat == 1.61 && 1.61 <= i.losebat && i.losebat <= 2.79) {
                result2.push(i);
            } else if (losebat == 2.80 && i.losebat >= 2.80) {
                result2.push(i);
            }
        }
    }
    let result3 = [...new Set(result2)];
    for (let i of result3) {
        var row =
            `<tr> 
                  <td>${i.name}</td> 
                  <td>${i.league}</td> 
                  <td>${i.homewinrate}</td> 
                  <td>${i.awaywinrate}</td>
                  <td>${i.winbat}</td>
                  <td>${i.drawbat}</td>
                  <td>${i.losebat}</td> 
              </tr>`
        table.innerHTML += row
    }


}

  //function radiobtnDisabled1()  {
   // var target1 = document.getElementById('away1');
    //var target2 = document.getElementById('away2');
    //var target3 = document.getElementById('away3');
    //target1.disabled = true; target2.disabled = true; target3.disabled = true;
 // }

