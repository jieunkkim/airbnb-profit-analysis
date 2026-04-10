# 로컬 개발 환경 설정 가이드

## 개요
index.html을 브라우저에서 직접 열면 JavaScript 파일(rules.js) 로드가 실패합니다.
반드시 **HTTP 서버**를 통해 실행해야 합니다.

---

## 방법 1: npm run dev (권장) ⭐

### 1단계: Node.js 설치 확인
터미널을 열고 다음 명령어를 입력합니다:
```bash
node --version
npm --version
```

**결과 예시:**
```
v18.17.0
9.6.7
```

> ❌ 명령어를 찾을 수 없다면 [Node.js 설치](https://nodejs.org/) 후 터미널을 다시 열어주세요.

---

### 2단계: 의존성 설치
프로젝트 폴더에서 다음 명령어를 실행합니다:
```bash
npm install
```

**예상 결과:**
```
added 100+ packages in 30s
```

> 처음 실행 시만 필요합니다. 이후에는 생략해도 됩니다.

---

### 3단계: 개발 서버 실행
다음 명령어로 서버를 시작합니다:
```bash
npm run dev
```

**예상 결과:**
```
Starting up http-server, serving ./
Hit CTRL-C to stop the server
http://127.0.0.1:3000
```

---

### 4단계: 브라우저에서 접속
브라우저 주소창에 다음을 입력합니다:
```
http://localhost:3000
```

또는 터미널의 링크를 클릭합니다.

---

### 5단계: 서버 중지
개발을 완료하면 터미널에서 `Ctrl + C`를 누릅니다:
```
^C
Terminated
```

---

## 방법 2: Python http.server

### 사전 요구사항
Python이 설치되어 있어야 합니다.
```bash
python --version
```

---

### 1단계: 서버 실행
프로젝트 폴더에서 다음 명령어를 실행합니다:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**예상 결과:**
```
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
```

---

### 2단계: 브라우저에서 접속
브라우저 주소창에 입력합니다:
```
http://localhost:8000
```

---

### 3단계: 서버 중지
터미널에서 `Ctrl + C`를 누릅니다.

---

## 방법 3: VS Code Live Server 확장

### 1단계: 확장 설치
1. VS Code 열기
2. 왼쪽 사이드바의 확장 아이콘 클릭
3. "Live Server" 검색
4. Ritwick Dey의 **Live Server** 설치

---

### 2단계: 서버 실행
1. index.html 파일을 엽니다
2. 파일을 우클릭 → "Open with Live Server" 클릭

또는 오른쪽 하단의 "Go Live" 버튼을 클릭합니다.

---

### 3단계: 브라우저에서 자동 접속
자동으로 `http://localhost:5500` 이 열립니다.

---

## 자주하는 실수

### ❌ 실수 1: 파일을 직접 더블클릭해서 열기
```
file:///Users/jieun/workspace/airbnb-profit-analysis/index.html
```
→ 이렇게 하면 JavaScript 로드 실패

### ✅ 올바른 방법: 서버 통해 접속
```
http://localhost:3000
```

---

## 문제 해결

### 포트가 이미 사용 중일 때

**Python:**
```bash
python -m http.server 9000  # 다른 포트 번호 사용
```

**npm:**
```bash
npm run dev -- --port 9000
```

---

### "npm: command not found" 오류
→ [Node.js 설치](https://nodejs.org/)

---

### "Python: command not found" 오류
→ [Python 설치](https://www.python.org/)

---

## 요약

| 방법 | 명령어 | 주소 | 추천도 |
|------|--------|------|--------|
| npm | `npm run dev` | http://localhost:3000 | ⭐⭐⭐ |
| Python | `python -m http.server 8000` | http://localhost:8000 | ⭐⭐ |
| VS Code | 확장 설치 후 "Go Live" | http://localhost:5500 | ⭐⭐ |

