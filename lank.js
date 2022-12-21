// 리그별 순위,팀,경기수,승무패 횟수, 득실,승점 설정
var lanklist = [
    {lank:1, team: "아스널", league: 'premier', matchnum: 14, win: 12, draw: 1, lose: 1, score:33, conceded:11, points:37},
    {lank:2, team: "맨시티", league: 'premier', matchnum: 14, win: 10, draw: 2, lose: 2, score:40, conceded:14, points:32},
    {lank:3, team: "뉴캐슬", league: 'premier', matchnum: 15, win: 8, draw: 6, lose: 1, score:29, conceded:11, points:30},
    {lank:4, team: "토트넘", league: 'premier', matchnum: 15, win: 9, draw: 2, lose: 4, score:31, conceded:21, points:29},
    {lank:5, team: "맨유", league: 'premier', matchnum: 14, win: 8, draw: 2, lose: 4, score:20, conceded:20, points:26},
    {lank:6, team: "리버풀", league: 'premier', matchnum: 14, win: 6, draw: 4, lose: 4, score:28, conceded:17, points:22},
    {lank:7, team: "브라이턴", league: 'premier', matchnum: 14, win: 6, draw: 3, lose:5, score:23, conceded:19, points:21},
    {lank:8, team: "첼시", league: 'premier', matchnum: 14, win: 6, draw: 3, lose: 5, score:17, conceded:17, points:21},
    {lank:9, team: "풀럼", league: 'premier', matchnum: 15, win: 5, draw: 4, lose: 6, score:24, conceded:26, points:19},
    {lank:10, team: "브렌트퍼드", league: 'premier', matchnum: 15, win: 4, draw: 7, lose: 4, score:23, conceded:25, points:19},
    {lank:11, team: "크리스탈 팰리스", league: 'premier', matchnum: 14, win: 5, draw: 4, lose: 5, score:15, conceded:18, points:19},
    {lank:12, team: "애스턴 빌라", league: 'premier', matchnum: 15, win: 5, draw: 3, lose: 7, score:16, conceded:22, points:18},
    {lank:13, team: "레스터 시티", league: 'premier', matchnum: 15, win: 5, draw: 2, lose: 8, score:25, conceded:25, points:17},
    {lank:14, team: "본머스", league: 'premier', matchnum: 15, win: 4, draw: 4, lose: 7, score:18, conceded:32, points:16},
    {lank:15, team: "리즈 유나이티드", league: 'premier', matchnum: 14, win: 4, draw: 3, lose: 7, score:22, conceded:26, points:15},
    {lank:16, team: "웨스트햄", league: 'premier', matchnum: 15, win: 4, draw: 2, lose: 9, score:12, conceded:17, points:14},
    {lank:17, team: "에버턴", league: 'premier', matchnum: 15, win: 3, draw: 5, lose: 7, score:11, conceded:17, points:14},
    {lank:18, team: "노팅엄 포레스트", league: 'premier', matchnum: 15, win: 3, draw: 4, lose: 8, score:11, conceded:30, points:13},
    {lank:19, team: "사우샘프턴", league: 'premier', matchnum: 15, win: 3, draw: 3, lose: 9, score:13, conceded:27, points:12},
    {lank:20, team: "울버햄튼", league: 'premier', matchnum: 15, win: 2, draw: 4, lose: 9, score:8, conceded:24, points:10},
    
    {lank:1, team: "바르셀로나", league: 'laliga', matchnum: 14, win: 12, draw: 1, lose: 1, score:33, conceded:5, points:37},
    {lank:2, team: "레알 마드리드", league: 'laliga', matchnum: 14, win: 11, draw: 2, lose: 1, score:33, conceded:14, points:35},
    {lank:3, team: "레알 소시에다드", league: 'laliga', matchnum: 14, win: 8, draw: 2, lose: 4, score:19, conceded:17, points:26},
    {lank:4, team: "아틀레틱 빌바오", league: 'laliga', matchnum: 14, win: 7, draw: 3, lose: 4, score:24, conceded:14, points:24},
    {lank:5, team: "아틀레티코 마드리드", league: 'laliga', matchnum: 14, win: 7, draw: 3, lose: 4, score:21, conceded:14, points:24},
    {lank:6, team: "레알 베티스", league: 'laliga', matchnum: 14, win: 7, draw: 3, lose: 4, score:17, conceded:12, points:24},
    {lank:7, team: "오사수나", league: 'laliga', matchnum: 14, win: 7, draw: 2, lose: 5, score:16, conceded:14, points:23},
    {lank:8, team: "라요 바예카노", league: 'laliga', matchnum: 14, win: 6, draw: 4, lose: 4, score:20, conceded:16, points:22},
    {lank:9, team: "비야레알", league: 'laliga', matchnum: 14, win: 6, draw: 3, lose: 5, score:15, conceded:10, points:21},
    {lank:10, team: "발렌시아", league: 'laliga', matchnum: 14, win: 5, draw: 4, lose: 5, score:22, conceded:15, points:19},
    {lank:11, team: "마요르카", league: 'laliga', matchnum: 14, win: 5, draw: 4, lose: 5, score:13, conceded:13, points:19},
    {lank:12, team: "레알 바야돌리드", league: 'laliga', matchnum: 14, win: 5, draw: 2, lose: 7, score:13, conceded:21, points:17},
    {lank:13, team: "지로나", league: 'laliga', matchnum: 14, win: 4, draw: 4, lose: 6, score:20, conceded:22, points:16},
    {lank:14, team: "알메리아", league: 'laliga', matchnum: 14, win: 5, draw: 1, lose: 8, score:16, conceded:22, points:16},
    {lank:15, team: "헤타페", league: 'laliga', matchnum: 14, win: 3, draw: 5, lose: 6, score:12, conceded:20, points:14},
    {lank:16, team: "에스파뇰", league: 'laliga', matchnum: 14, win: 2, draw: 6, lose: 6, score:16, conceded:22, points:12},
    {lank:17, team: "셀타비고", league: 'laliga', matchnum: 14, win: 3, draw: 3, lose: 8, score:14, conceded:26, points:12},
    {lank:18, team: "세비야", league: 'laliga', matchnum: 14, win: 2, draw: 5, lose: 7, score:13, conceded:22, points:11},
    {lank:19, team: "카디스", league: 'laliga', matchnum: 14, win: 2, draw: 5, lose: 10, score:9, conceded:26, points:11},
    {lank:20, team: "엘체", league: 'laliga', matchnum: 14, win: 0, draw: 4, lose: 10, score:10, conceded:31, points:4},

    {lank:1, team: "바이에른 뮌헨", league: 'bundes', matchnum: 15, win: 10, draw: 4, lose: 1, score:49, conceded:13, points:34},
    {lank:2, team: "프라이부르크", league: 'bundes', matchnum: 15, win: 9, draw: 3, lose: 3, score:25, conceded:17, points:30},
    {lank:3, team: "라이프치히", league: 'bundes', matchnum: 15, win: 8, draw: 4, lose: 3, score:30, conceded:21, points:28},
    {lank:4, team: "프랑크푸르트", league: 'bundes', matchnum: 15, win: 8, draw: 3, lose: 4, score:32, conceded:24, points:27},
    {lank:5, team: "우니온 베를린", league: 'bundes', matchnum: 15, win: 8, draw: 3, lose: 4, score:20, conceded:20, points:27},
    {lank:6, team: "도르트문트", league: 'bundes', matchnum: 15, win: 8, draw: 1, lose: 6, score:25, conceded:21, points:25},
    {lank:7, team: "볼프스부르크", league: 'bundes', matchnum: 15, win: 6, draw: 5, lose: 4, score:24, conceded:20, points:23},
    {lank:8, team: "묀헨 글라드바흐", league: 'bundes', matchnum: 15, win: 6, draw: 4, lose: 5, score:28, conceded:24, points:22},
    {lank:9, team: "베르더 브레멘", league: 'bundes', matchnum: 15, win: 6, draw: 3, lose: 6, score:25, conceded:27, points:21},
    {lank:10, team: "마인츠05", league: 'bundes', matchnum: 15, win: 5, draw: 4, lose: 6, score:19, conceded:24, points:19},
    {lank:11, team: "호펜하임", league: 'bundes', matchnum: 15, win: 5, draw: 3, lose: 7, score:22, conceded:22, points:18},
    {lank:12, team: "레버쿠젠", league: 'bundes', matchnum: 15, win: 5, draw: 3, lose: 7, score:25, conceded:26, points:18},
    {lank:13, team: "쾰른", league: 'bundes', matchnum: 15, win: 4, draw: 5, lose: 6, score:21, conceded:29, points:17},
    {lank:14, team: "아우크스부르크", league: 'bundes', matchnum: 15, win: 4, draw: 3, lose: 8, score:18, conceded:26, points:15},
    {lank:15, team: "헤르타베를린", league: 'bundes', matchnum: 15, win: 3, draw: 5, lose: 7, score:19, conceded:22, points:14},
    {lank:16, team: "슈투트가르트", league: 'bundes', matchnum: 15, win: 3, draw: 5, lose: 7, score:18, conceded:27, points:14},
    {lank:17, team: "보훔", league: 'bundes', matchnum: 15, win: 4, draw: 1, lose: 10, score:14, conceded:36, points:13},
    {lank:18, team: "샬케", league: 'bundes', matchnum: 15, win: 2, draw: 3, lose: 10, score:13, conceded:32, points:9},
]

function showlank() {
    const table = document.getElementById('tablebody2');
    table.innerHTML = "";
    // 리그 종류 선택
    const leagueLength = document.getElementsByName("league").length;
    let league;
    for (var i = 0; i < leagueLength; i++) {
        // 위에서 설정한 값의 value가져오기
        if (document.getElementsByName("league")[i].checked == true) {
            league = document.getElementsByName("league")[i].value;
            lank = document.getElementsByName("league")[i].value;
            team = document.getElementsByName("league")[i].value;
            matchnum = document.getElementsByName("league")[i].value;
            win = document.getElementsByName("league")[i].value;
            draw = document.getElementsByName("league")[i].value;
            lose = document.getElementsByName("league")[i].value;
            score = document.getElementsByName("league")[i].value;
            conceded = document.getElementsByName("league")[i].value;
            points = document.getElementsByName("league")[i].value;
        }
    }
    if (league == null) {
        alert('리그 종류 선택해주세요.');
    }

    const result = [];

    for (let i of lanklist){
        if(i.league == league){
                result.push(i);
        }
    }

    // table에 value값 출력
    for (let i of result) {
        var row =
            `<tr>
                  <td>${i.lank}</td> 
                  <td>${i.team}</td> 
                  <td>${i.league}</td> 
                  <td>${i.matchnum}</td> 
                  <td>${i.win}</td>
                  <td>${i.draw}</td>
                  <td>${i.lose}</td>
                  <td>${i.score}</td> 
                  <td>${i.conceded}</td>
                  <td>${i.points}</td>
              </tr>`
        table.innerHTML += row
    }


}