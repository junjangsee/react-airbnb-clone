# 에어비앤비 클론 프론트

에어비앤비(Airbnb)의 모바일 버전을 클론합니다.

## 설치 및 실행

```text
$ git clone https://github.com/junjangsee/react-airbnb-clone.git
$ cd client
$ npm i
$ npm run start
```

## 프로젝트 구조

```text
.
+-- .github (깃헙 관련 파일)
|   +-- PULL_REQUEST_TEMPLATE.md
+-- public
|   +-- index.html
+-- src
|   +-- components (페이지를 구성하는 컴포넌트 구성)
|   |   +-- folders (컴포넌트)
|   |   |   +-- *.jsx
|   |   +-- *.jsx
|   +-- containers (페이지 내 데이터를 처리하는 컨테이너 컴포넌트 구성)
|   |   +-- *.jsx
|   +-- images (페이지에서 사용되는 이미지들)
|   +-- pages (라우팅 단위 페이지 구성)
|   |   +-- *.jsx
|   +-- shared (프로젝트 종속이 아니라 공통으로 사용되는 파일 구성)
|   |   +-- __mocks__ (프로젝트에 사용되는 임시 데이터들 모음)
|   |   |   +-- *.jsx
|   +-- App.jsx
|   +-- index.css
|   +-- index.js
.
```
