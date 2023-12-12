# React-for-beginners
- [ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-for-beginners/lectures/3260) --> 노마드코더 리액트 입문 동영상 강의
- [cdn](https://ko.legacy.reactjs.org/docs/cdn-links.html) 사용
  - react, reactdom을 import하는 script tag에서
production은 배포 모드, development는 개발 모드를 의미
(개발모드는 버그로 이어질 수 있는 요소들을 미리 경고하는 검증 코드가 포함되어 있음)
  - 참고: https://ui.toast.com/weekly-pick/ko_20191212
```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
