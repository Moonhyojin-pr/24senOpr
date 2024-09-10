# 자바스크립트 기반 웹개발 기초 과정
```
- git clone git@github.com:kakadais/MyMeteorBlogForJSClassBasic.git
- git branch [Number] # 브랜치 생성: Number, 줄번호(앞에서부터 1, 10, 20...)+자리번호(왼쪽에서부터 1,2,3...)
- git branch # 브랜치로 이동 되었는지 확인
- git push --set-upstream origin [your-branch-name] # 현재 브랜치 업로드, your-branch-name (위 정한 Number)

# main 브랜치의 내용을 자신의 브랜치로 가져가는 방법
git checkout main #main 브랜치로 우선 이동.
git pull #서버의 업데이트 된 main의 내용이 내 컴퓨터로 내려옴.
git checkout [myBranchNumber] #다시 자기 브랜치로 이동한다.
git merge main #main 브랜치에 받아온 내용을 현재 내 브랜치로 가져와서 병합한다.

```

# 본인 브랜치 커밋/푸쉬 방법
```
git add .
git commit -m '여기에 로그 메시지 작성.'
git push
```


# 새 삶을 살기
```
git commit
git push
git checkout main
git pull
git branch [number-숫자]
git checkout [number-숫자]
```

-----------------------------------


# 아이디어 메모장

-익명 게시판

    *titlePost(home 게시판)이슈
    -home게시판에 post 버튼 그 자리에 input박스 넣기 OK(0810)
    -글자수 제한 0/100 -> 코드에러(0810) 
    -input 박스에 글 저장 후 빈칸으로 되돌리기-> 코드에러(0810)

    *post 게시판 이슈
    -save >edit, remove (post게시판만 이용했을 경우) OK
    -파일첨부 버튼 / json 에 이미지 파일 저장하기
    -save했을 경우, 이미지 detail에 나올 것 (tip: main.html articl 경로 지정해야 글이 나왔음)

    *contact 메뉴 >>memorial
     -id, pw  > 옳은 id,pw를 넣으면 gif 나오기


    *서버 연결해서 외부에서 접속가능하도록 하기


------------------------------
8.31~
웹디자인 변경
★template body.html 설정 가능한지 알아오기★ 

★main - message body 사용 문제>해결(0910)
(main>contact.html // 현main(message)>message.html로 변경하고싶음)

about 화면 들어가면 다른 메뉴버튼 눌러도 이동안됨
    
-------------------------------
09001~0902
-변경 웹디 적용0901
-css 합침 0902
-------------------------------
0903
-reset.css 추가 
 ★이슈: main 파일에만 reset.css 적용됨
-post 링크 삭제
 ★이슈:리퍼지토리 (private>public 적용안됨) >>해결(0909)
-main bar 고정하고 싶음(예시header main)
★contact 메뉴바 css 안먹음
★슬라이드 버튼 에러