-- DDL
-- Data Definiton Language: 데이터베이스/테이블 정의

-- [데이터베이스 관련 명령어]
-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;


-- [테이블 관련 명령어]
-- 1. 테이블 생성
/*
CREATE TABLE 테이블명 (
    필드1 값형식,
    필드2 값형식
)
*/
-- 제약조건
-- NOT NULL: NULL 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키!
-- DEFAULT: 기본 값
-- UNIQUE: 중복 허용 x
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100) NOT NULL DEFAULT '기본 주소'
);

-- 2. 테이블 목록 확인
SHOW tables;

-- 3. 테이블 구조 확인
DESC user;

-- 4. 테이블 삭제
-- DROP: 다 삭제 (구조 자체를 삭제)
-- TRUNCATE: 초기화 (모든 행 삭제)
DROP TABLE user;
TRUNCATE TABLE user;

-- 5. 테이블 수정 (구조 수정)
-- 5-1. 컬럼 추가 (ADD)
ALTER TABLE user ADD new_column VARCHAR(10);

-- 5-2. 컬럼 수정 (MODIFY)
ALTER TABLE user MODIFY new_column INT;

-- 5-3. 컬럼 삭제 (DROP)
ALTER TABLE user DROP new_column;


-- ===========================================================
-- DML
-- Data Manipulation Language: 데이터 조작어
-- 내부 데이터를 관리하기 위한 언어
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
SHOW databases;

USE kdt;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

SHOW tables;

DESC user;

-- [CREATE - INSERT]
-- 데이터 추가
-- 참고) AUTO_INCREMENT 컬럼의 값은 굳이 넣지 않으면 알아서 증가
-- NULL이라고 넣으면 알아서 숫자가 지정되기도 함
-- 주의) AUTO_INCREMENT 컬럼은 반드시 PK(기본키, primary key)여야 함
INSERT INTO user (name, age, address) VALUES('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES('이한이', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES('이지은', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES('박수진', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES('권희수', 36, '서울특별시 영등포구');



-- [READ - SELECT]
-- 데이터 읽기(조회)
-- *: all
-- id, name, age, address 순으로 현재 되어있음
SELECT * FROM user; -- 해당 테이블의 '전체 컬럼(데이터)'를 조회
SELECT name FROM user; -- 이름 컬럼만 조회
SELECT age, name FROM user; -- 나이, 이름 컬럼 조회
SELECT id, address FROM user; -- id, 주소 컬럼 조회

-- date_format(dateof_birth, '%Y-%m-%d') as dateof_birth
-- 날짜형식 고정시키는 쿼리문
-- DATE_FORMAT(속성명, '%Y-%m-%d') as 속성명
-- '%Y-%m-%d' => 2022-12-28 로 출력
-- '%Y-%M-%D' => 2022-DEC-28th로 출력

-- 집계함수 : COUNT(개수), SUM(총합), AVG(평균), GROUP BY(묶음)

-- 쿼리문 조건을 충족하는 DATA가 몇개인지 출력하는 방법
-- COUNT(USER_ID) AS USERS
-- SELECT와 FROM 사이에 COUNT(속성명) AS 출력하고싶은 속성별명을 써준다

-- GROUP BY를 사용할 때는 두가지를 기억해야 합니다.
-- 특정 컬럼을 그룹화 하는 GROUP BY 
-- 특정 컬럼을 그룹화한 결과에 조건을 거는 HAVING
-- 헷갈리지말자! => WHERE는 그룹화 하기 전, HAVING은 그룹화 후
-- 사용법
-- SELECT 컬럼 FROM 테이블 [WHERE 조건식]
-- GROUP BY 그룹화할 컬럼 [HAVING 조건식] ORDER BY 컬럼1 [, 컬럼2, 컬럼3 ...];

-- DISTINCT: 중복된 것 제외 시키는 쿼리문
-- ex) SELECT DISTINCT 컬럼 FROM 테이블;

-- ROUND(숫자,반올림할 자릿수) - 숫자를 반올림할 자릿수 +1 자릿수에서 반올림
-- 예시
SELECT ROUND(3456.1234567) FROM DUAL; -- 3456
 
SELECT ROUND(3456.1234567 ,1) FROM DUAL; -- 3456.1
 
SELECT ROUND(3456.1234567 ,4) FROM DUAL; -- 3456.1235
 
SELECT ROUND(3456.1234567 ,-1) FROM DUAL; -- 3460
 
SELECT ROUND(3456.1234567 ,-2) FROM DUAL; -- 3500

-- TRUNCATE(숫자,버릴 자릿수) - 숫자를 버릴 자릿수 아래로 버림
-- ※ 반드시 버릴 자릿수를 명시해 주어야 함 
-- 예시
SELECT TRUNCATE(3456.1234567 ,1) FROM DUAL; -- 3456.1
 
SELECT TRUNCATE(3456.1234567 ,4) FROM DUAL; -- 3456.1234
 
SELECT TRUNCATE(3456.1234567 ,-1) FROM DUAL; -- 3450
 
SELECT TRUNCATE(3456.1234567 ,-2) FROM DUAL; -- 3400 


-- WHERE절: 특정 조건을 만족하는 행(record, tuple) 선택
SELECT * FROM user WHERE age >= 25; -- 나이가 25 이상인사람 조회
SELECT * FROM user WHERE id = 7; -- 아이디가 7인사람
SELECT name FROM user WHERE id = 7; -- 아이디가 7인사람의 이름만 조회
SELECT id, age FROM user WHERE name = '이지은'; -- 이름이 '이지은'인 사람의 id, age 조회


-- ORDER BY절: 데이터 정렬
-- ASC: 오름차순 (기본값)
-- DESC: 내림차순
SELECT * FROM user ORDER BY age DESC; -- age 컬럼 내림차순
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; -- id가 6초과인 사람 중 age컬럼 오름차순
SELECT * FROM user ORDER BY name ASC; -- name 컬럼 오름차순 정렬 (가나다 순)


-- LIKE: 패턴조회
-- %: 0개 이상의 문자
-- _: 1개의 단일 문자
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소인 데이터
SELECT * FROM user WHERE name LIKE '__희'; -- 이름의 마지막 글자가 '희'인 데이터
-- 질문) 구문에서 이름이 4글자이거나 2글자인 사람은 제외되는 건가요? 네!
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 있는 데이터
SELECT * FROM user WHERE address LIKE '%광역%'; -- 주소에 '광역'이 포함된 데이터
SELECT * FROM user WHERE name LIKE '__희' ORDER BY age DESC;
-- 이름의 마지막 글자가 '희'인 사람들 중 나이 기준으로 내림차순 정렬


-- LIMIT: 데이터 개수 제한
SELECT * FROM user LIMIT 3;
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;


-- BETWEEN a AND b: 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30;


-- IN (list): 리스트 있는 것 중에 일치하면 참
SELECT * FROM user WHERE age IN (20, 21, 22, 23);


-- IS NULL
-- IS NOT NULL
INSERT INTO user (name, age) VALUES ('서현승', 28);
SELECT * FROM user;

SELECT * FROM user WHERE address IS NULL;
SELECT * FROM user WHERE address IS NOT NULL;


--  논리연산자: AND, OR, NOT
SELECT * FROM user WHERE address IS NOT NULL AND age < 25;
SELECT * FROM user WHERE address IS NOT NULL OR age < 25;
SELECT * FROM user WHERE name LIKE '이%' AND age = 23; -- 이씨이자 23세인 사람



-- [UPDATE - UPDATE]
-- 데이터 갱신(수정)
-- 참고) Error Code: 1175.
-- 테이블 데이터를 update/delete하려고 할때 key 컬럼을 이용해서 수정/삭제 하는것이 바람직하다(다른 컬럼은 겹칠 수 있으니까)
UPDATE user SET address = '서울특별시 강북구' WHERE name = '이한이'; -- 바람직하지 않은 방법
UPDATE user SET address = '서울특별시 강북구' WHERE id = 1; -- 권장되는 방법
UPDATE user SET address = '제주특별자치도 제주시', name = '이지현' WHERE id = 2;

-- 주의)) update에서 where절 미사용시, 모든 행의 데이터가 변경됨
-- update에서는 where절이 항상 따라다님



-- [DELETE - DELETE]
-- 데이터 삭제
-- 주의)) delete에서 where절 미사용시, 모든 행의 데이터가 삭제됨
-- delete에서는 where절이 항상 따라다님
DELETE FROM user WHERE id = 11;
DELETE FROM user WHERE id > 8;

-- ==========================================================================
-- DCL
-- Data Control Language: 데이터 제어어
-- 데이터베이스에 접근해 읽거나 쓰는 것을 제한할 수 있는 권한 부여/박탈

-- GRANT: 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 "권한부여"
-- REVOKE: 특정 데이터베이스 사용자에게 특정 작업에 대한 수행 "권한박탈"
