<li>OpenJDK 20 <img src="https://img.shields.io/badge/java-007396?style=flat-square&amp;logo=java&amp;logoColor=white"></li>
<li>Spring Boot <img src="https://img.shields.io/badge/Spring-6DB33F?style=flat-square&amp;logo=Spring&amp;logoColor=white" /></li>
<li>Maria DB <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&amp;logo=mariaDB&amp;logoColor=white"></li>
<li>Node.js <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&amp;logo=Node.js&amp;logoColor=white"></li>
<li>Vue.js 2 <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&amp;logo=Vue.js&amp;logoColor=white"></li>
<li>Bootstrap <img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&amp;logo=bootstrap&amp;logoColor=white"></li>
<li>Sass <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&amp;logo=Sass&amp;logoColor=white" /></li>
<li>Kubenetes <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&amp;logo=Docker&amp;logoColor=white"></li>


## Description
스프링부트 기반의 Base Framework 
 - 참조: https://doozi0316.tistory.com/entry/Vuejs-Spring-Boot-MySQL-MyBatis-%EB%A7%9B%EC%A7%91-%EC%A7%80%EB%8F%84-%EB%A7%8C%EB%93%A4%EA%B8%B01-Spring-Boot-Vuejs-%EC%84%A4%EC%B9%98-%EB%B0%8F-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0
 - https://www.youtube.com/watch?v=sqH0u8wN4Rs (한시간만에 끝내는 Vue.js 입문)
 - 

1) springboot initializer : jdk 20, gradle, jar

2) vue.js 설치 : 
 - Vue CLI 3를 활용한 설치 (npm install -g @vue/cli, vue --version) 
 - frontend 폴더에 vue2 환경으로 설치 (vue create frontend, cd frontend) 
 - 실행 (npm run serve)

3) spring boot와 vue.js 연동
- 실 배포환경에선 연동을 통해 Vue.js의 빌드 결과물의 목적지를 Spring boot의 resources/static으로 맞추고, 실 서버는 Spring Boot 서버 하나만 두게 할 것
- spring boot의 서버포트 변경 :  application.properties의 server.port = 8081 
- vue.config.js의 proxy 설정 및 build target 설정

4) vue router 설치:
 - npm install vue-router --save

5) bootstrap vue 설치:
 - npm install vue bootstrap bootstrap-vue (OK!!)


6) CSS lib 설치
 * SCSS 설치
 - npm install --save-dev node-sass sass-loader
 
 * vue-resizable 설치
 - npm install vue-resizable@2.0.5