var store = [{
        "title": "Vorstellung",
        "excerpt":"데이터 도서관     본 블로그는 더 행복한 세상을 설계하는 Data-Engineer라는 꿈을 향한 과정을 도와줄 도서관     ","categories": [],
        "tags": [],
        "url": "/vorstellung/",
        "teaser": null
      },{
        "title": "[Python] 전역변수 지역변수",
        "excerpt":"전역범수(Global Variable) 함수를 포함하여 스크립트 전체에서 접근할 수 있는 변수 전역 범위(Global Scope) - 전역 변수에 접근할 수 있는 범위 함수 안에서 전역변수 선언시 global 사용 지역변수(Local Variable) 변수를 만든 함수 안에서만 접근할 수 있는 변수 지역 범위(Local Scope) - 지역 변수에 접근할 수 있는 범위 함수의 지역 범위 바깥의...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/Global_Nonlocal/",
        "teaser": null
      },{
        "title": "[Python] Iter & Next",
        "excerpt":"Iterable 반복 가능한 것(string, list, tuple, dictionary, set, range 등) Iterator iter 함수를 통해 생성된 객체 flash = ['jay garrick', 'barry allen', 'wally west', 'bart allen'] superhero = iter(flash) print(next(superhero)) print(next(superhero)) print(next(superhero)) print(next(superhero)) # 위와 같음 # for person in flash: # print(person) jay garrick barry allen wally west bart...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/iter/",
        "teaser": null
      },{
        "title": "[SQL] SELECT & FROM & DISTINCT & COUNT & LIMIT",
        "excerpt":"SQL Übung SQL 문법 정리(1) SELECTing columns COUNT을 통해 행개수 산출 SELECT &amp; LIMIT 1) SELECTing single column Get the title column from the films table. SELECT name FROM people; 2) SELECTing multiple column Get the title and release year from the films table SELECT title, release_year FROM films; 2-2)...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_1_select/",
        "teaser": null
      },{
        "title": "[Python] Generator",
        "excerpt":"Generator list와 같은 iterable객체와 달리 대용량의 memory를 사용하지 않음 그러나 반대로 여러번 값을 가져올 수 없음 next함수를 통해 다음 generator의 값을 가져올 수 있음 함수 안의 yield를 통해 generator을 만들 수도 있음 lannister = ['cersei', 'jaime', 'tywin', 'tyrion', 'joffrey'] lengths = (len(person) for person in lannister) for value in lengths:...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/generator/",
        "teaser": null
      },{
        "title": "[SQL] WHERE & AND & OR & BETWEEN & IN & IS (NOT) NULL & LIKE",
        "excerpt":"SQL Übung SQL 문법 정리(2) WHERE을 통해 filter WHERE는 FROM 이후에 작성 WHERE 조건이 여러개일 경우 조건을(AND, OR) 모두 작성해줘야함 AND &amp; OR은 괄호로 묶어주는 것이 좋음 BETWEEN을 통해 범위 filter 가장 처음과 마지막은 포함 IN을 통해 (여러개의 OR) 간소화 IS NULL을 통해 NULL filter IS NOT NULL을 통해 NULL이...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_2_filter/",
        "teaser": null
      },{
        "title": "[SQL] AVG & SUM & MAX & MIN & AS",
        "excerpt":"SQL Übung SQL 문법 정리(3) AVG 평균 NULL은 제외하고 계산됨 SUM 합계 MAX 최대값 MIN 최소값 연산자 + - / * % AS를 통해 column의 이름 수정 SUM 1-1) Aggregate functions Get the total duration of all films. SELECT SUM(duration) FROM films; MIN 1-2) Aggregate functions Get the duration of...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_3_aggregate/",
        "teaser": null
      },{
        "title": "[SQL] ORDER BY & CAST & GROUP BY & HAVING & WITH ROLLUP",
        "excerpt":"SQL Übung SQL 문법 정리(4) ORDER BY를 통해 정렬 ORDER BY 는 FROM 이후에 작성 DEFAULT는 ASCENDING, DESC를 통해 DESCENDING 가능 CAST를 통해 자료형을 일시적으로 변환시킬 수 있음 signed - 모든 정수(양수, 0, 음수) decimal - 살수(소수점을 포함하는 숫자 포함) 문자형 기준으로 SORT시, 한 문자씩 그 문자 순서를 비교해 정렬...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_4_sorting_grouping/",
        "teaser": null
      },{
        "title": "[SQL] INNER JOIN & USING & CASE WHEN",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(1) INNER JOIN ON 을 통해 동시에 존재하는 데이터 join key값이 같은 경우 ON 대신 USING() 사용 가능 CASE WHEN &amp; THEN, WHEN &amp; THEN ELSE &amp; END를 통해 조건에 따른 column 만들 수 있음 INTO를 통해 query를 만들 수 있음 CREATE VIEW INTO를 통해...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_1_inner_join/",
        "teaser": null
      },{
        "title": "[SQL] LEFT JOIN & RIGHT JOIN & FULL JOIN & CROSS JOIN",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(2) LEFT JOIN ON 을 통해 왼쪽 테이블을 기준으로 오른쪽 테이블을 join RIGHT JOIN ON 을 통해 오른쪽 테이블을 기준으로 왼쪽 테이블을 join FULL JOIN ON 을 통해 왼쪽 전체와 오른쪽 전체 테이블을 join, MySQL에서는 불가능 key값이 같은 경우 ON 대신 USING() 사용 가능 CROSS...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_2_outer_join/",
        "teaser": null
      },{
        "title": "[Python] range & enumerate & map & numpy",
        "excerpt":"Writing Efficient Python Code RANGE ENUMERATE MAP NUMPY range 1) range Create a new list of odd numbers from 1 to 11 by unpacking a range object num_list = [*range(1,12,2)] print(num_list) [1, 3, 5, 7, 9, 11] enumerate 2) enumerate names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman'] # method 1...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/foundations_for_efficiencies/",
        "teaser": null
      },{
        "title": "[Python] Dplyr to Pandas",
        "excerpt":"dplyr to pandas # import data import seaborn as sns import pandas as pd import re iris_df = sns.load_dataset('iris') print(type(iris_df)) &lt;class 'pandas.core.frame.DataFrame'&gt; dplyr::mutate() # dplyr iris_df %&gt;% mutate(New_feature= Petal.Width*Petal.Length/2) # pandas iris_df[\"New_feature\"] = iris_df[\"petal_width\"] * iris_df[\"petal_length\"] / 2 dplyr::select() # dplyr iris_df %&gt;% select('sepal_length', 'sepal_width') # pandas iris_df[['sepal_length', 'sepal_width']] #...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/dplyr_to_pandas/",
        "teaser": null
      },{
        "title": "[Python] %timeit & %lprun & %mprun",
        "excerpt":"Writing Efficient Python Code PART2 %timeit을 통해 runtime을 examine할 수 있음 -r2를 통해 전체 run 횟수를, -n을 통해 한 run에서 몇 회 반복할지 설정 가능 %%timeit을 통해 multiple-line code의 runtime을 examine할 수 있음 ns = nanosecond 10^-9 µs(us) = microsecond 10^-6 ms = millisecond 10^-3 s = second 10^0 ipython에서만...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/timing_and_profiling_code/",
        "teaser": null
      },{
        "title": "[Python] Counter & combinations & set",
        "excerpt":"Writing Efficient Python Code PART3 Counter from module collections 종류별 개수를 반환 combinations from itertools 가능한 조합을 list로 반환 set from itertools set을 통해 distinct한 element만 산출 intersection을 통해 교집합 산출 difference을 통해 차집합 산출 symmetric_difference을 통해 합집합-교집합 산출 계산이 한 번만 필요한 것은 loop 전에 계산하기 map을 활용해 한...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/gaining_efficiencies/",
        "teaser": null
      },{
        "title": "[Python] iterrows & itertuples & pd.applys",
        "excerpt":"Writing Efficient Python Code PART4 iterrows를 통해 row별 iterration 가능 iterrows를 쓸 경우 index와 pandas Series로 구성되어 있는 tuple을 반환 itertuples를 통해 row별 iterration 가능 itertuples를 쓸 경우 namedtuple 형태를 반환 pd.applys을 통해 loop 대체 가능 0: row, 1: column 효율성: .values &gt; pd.applys &gt; itertuples &gt; iterrows # import...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/basic_pandas_optimizations/",
        "teaser": null
      },{
        "title": "[UNIX CLI] Command Line(1)",
        "excerpt":"UNIX COMMAND LINE UNIX CLI 정리(1) argument(인자)는 커맨드가 작동할 대상을 지정하기 위해 사용 option(옵션)은 커맨드가 구체적으로 어떤 방식으로 동작할지를 지시하기 위해 사용 옵션은 하이픈(-)이 붙음 옵션 중에는 옵션을 적고 한 칸 띄운 다음 옵션에 대한 인자(or value)를 적어야하는 것들이 존재 하이픈 뒤에는 여러 옵션을 연속적으로 사용 가능 값을 줘야 하는...","categories": ["CLI"],
        "tags": ["CLI","BACKEND","DATA-ENGINEERING"],
        "url": "/cli/CLI_1/",
        "teaser": null
      },{
        "title": "[UNIX CLI] VIM",
        "excerpt":"UNIX COMMAND LINE UNIX CLI 정리(2) - VIM VIM은 4가지 모드가 존재 Normal Mode : 커서 이동/ 텍스트 붙여놓기/ 텍스트 삭제/ 작업 취소 Insert Mode : 텍스트 입력 Visual Mode : 텍스트 블록 지정/ 텍스트 복사 Command Mode : 내용 저장/ vim 종료/ 특정 텍스트 검색 및 치환 Normal Mode...","categories": ["CLI"],
        "tags": ["CLI","BACKEND","DATA-ENGINEERING","VIM"],
        "url": "/cli/VIM/",
        "teaser": null
      },{
        "title": "[Django] 개발환경 구성하기",
        "excerpt":"DJANGO WEB DEVELOPMENT 1. 개발환경 구성하기 사전프로그램 설치 ### VSCODE 설치 # https://code.visualstudio.com/download # VSCODE에서 COMMAND + SHIFT + P 누른후 검색 창에 'shell' 입력 후 'Shell Command: Install 'code' command in PATH 클릭 ### Homebrew 설치 # https://brew.sh/index_ko 에서 Homebrew 설치하기 밑의 코드 복사한 다음에 터미널에 붙여놓기 후 Enter...","categories": ["DJANGO"],
        "tags": ["PYTHON","BACKEND","DJANGO"],
        "url": "/django/django1/",
        "teaser": null
      },{
        "title": "[Django] 구조 이해하기",
        "excerpt":"DJANGO WEB DEVELOPMENT 2. DJANGO 구조 이해하기 django 프로젝트 생성 # 가상환경 안에 들어간 후 (django-admin startproject [project_name]) django-admin startproject costaurant # 생성된 나의 프로젝트 폴더에 들어가기 cd costaurant # 해당 폴더에서 vscode 실행 code . # 서버 실행 python manage.py runserver django 프로젝트 구조 project root - 프로젝트 최상위의...","categories": ["DJANGO"],
        "tags": ["PYTHON","BACKEND","DJANGO"],
        "url": "/django/django2/",
        "teaser": null
      },{
        "title": "[Algorithm] 시간 복잡도",
        "excerpt":"ALGORITHM 시간 복잡도 - 알고리즘 평가 방법 List 시간 복잡도 인덱싱 - my_list[index] : O(1) 정렬 - my_list.sort() / sorted(my_list) : O(nlgn) 뒤집기 - my_list.reverse() : O(n) 탐색 - element in my_list : O(n) 끝에 요소 추가 - my_list.append(element) : O(1) 중간에 요소 추가 - my_list.insert(index, element) : O(n) 삭제...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/big_O_notation/",
        "teaser": null
      },{
        "title": "[Algorithm] 선형 탐색",
        "excerpt":"ALGORITHM 알고리즘 정리(1) 선형 배열 def linear_search(element, some_list): for i in range(len(some_list)): if element == some_list[i]: return i return None print(linear_search(2, [2, 3, 5, 7, 11])) print(linear_search(0, [2, 3, 5, 7, 11])) print(linear_search(5, [2, 3, 5, 7, 11])) print(linear_search(3, [2, 3, 5, 7, 11])) print(linear_search(11, [2, 3, 5, 7, 11]))...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm1_linear_search/",
        "teaser": null
      },{
        "title": "[Algorithm] 이진 탐색",
        "excerpt":"ALGORITHM 알고리즘 정리(2) 이진 배열 def binary_search(element, some_list): min_index = 0 max_index = len(some_list) - 1 while max_index &gt;= min_index: index = (min_index + max_index)//2 if some_list[index] == element: return index elif some_list[index] &gt; element: max_index = index - 1 else: min_index = index + 1 return None print(binary_search(2, [2,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm2_binary_search/",
        "teaser": null
      },{
        "title": "[Algorithm] 팩토리얼 - 재귀함수",
        "excerpt":" ALGORITHM     알고리즘 정리(3)   재귀함수(1)            핵심 : base case와 recursive case 찾기             팩토리얼 - 재귀함수   def factorial(n):     if n == 0:         return 1     return factorial(n-1) * n  print(factorial(5))   120    ","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm3_factorial/",
        "teaser": null
      },{
        "title": "[Algorithm] 피보나치 수열 - 재귀함수",
        "excerpt":" ALGORITHM     알고리즘 정리(4)   재귀함수(2)            핵심 : base case와 recursive case 찾기             피보나치 수열 - 재귀함수   def fib(n):     if n &lt; 3:         return 1     return fib(n-1) + fib(n-2)  for i in range(1, 11):     print(fib(i))     # 시간 복잡도 : O(2^n)   1 1 2 3 5 8 13 21 34 55    ","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm4_fibonacci/",
        "teaser": null
      },{
        "title": "[Algorithm] 자리수 합 - 재귀함수",
        "excerpt":" ALGORITHM     알고리즘 정리(5)   재귀함수(3)            핵심 : base case와 recursive case 찾기             자리수 합 - 재귀함수   def sum_digits(n):     if n &lt; 10:         return n     return n % 10 + sum_digits(n // 10)  print(sum_digits(22541)) print(sum_digits(92130)) print(sum_digits(12634)) print(sum_digits(704)) print(sum_digits(3755)) # 시간 복잡도 : O(d)   14 15 16 11 20    ","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm5_digit_sum/",
        "teaser": null
      },{
        "title": "[Algorithm] 리스트 뒤집기 - 재귀함수",
        "excerpt":"ALGORITHM 알고리즘 정리(6) 재귀함수(4) 핵심 : base case와 recursive case 찾기 리스트 뒤집기 - 재귀함수 def flip(some_list): if (len(some_list)) == 0 or len(some_list) == 1: return some_list return some_list[-1:] + flip(some_list[:-1]) some_list = [1, 2, 3, 4, 5, 6, 7, 8, 9] some_list = flip(some_list) print(some_list) # 시간 복잡도 :...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm6_flip_list/",
        "teaser": null
      },{
        "title": "[Algorithm] 이진 탐색 - 재귀함수",
        "excerpt":"ALGORITHM 알고리즘 정리(7) 재귀함수(5) 핵심 : base case와 recursive case 찾기 이진 탐색 - 재귀함수 def binary_search(element, some_list, start_index=0, end_index=None): if end_index == None: end_index = len(some_list) - 1 if start_index &gt; end_index: return None search_index = (start_index + end_index) // 2 if some_list[search_index] == element: return search_index if element...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm7_binary_search_recursive/",
        "teaser": null
      },{
        "title": "[Algorithm] 하노이의 탑 - 재귀함수",
        "excerpt":"ALGORITHM 알고리즘 정리(8) 재귀함수(6) 핵심 : base case와 recursive case 찾기 하노이의 탑 - 재귀함수 def move_disk(disk_num, start_peg, end_peg): print(\"%d번 원판을 %d번 기둥에서 %d번 기둥으로 이동\" % (disk_num, start_peg, end_peg)) def hanoi(num_disks, start_peg, end_peg): other_peg = 6 - start_peg - end_peg if num_disks == 0: return else: hanoi(num_disks-1, start_peg, other_peg)...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm8_hanoi/",
        "teaser": null
      },{
        "title": "[Django] Template & View",
        "excerpt":"DJANGO WEB DEVELOPMENT 3. TEMPLATE &amp; VIEW 정적 파일 목표: (foods 앱의) 정적 파일 # 'foods/static/foods' directory 안에 css &amp; fonts &amp; images directory를 각각 만들고 이에 맞는 각 파일 넣기 # 'foods/templates/foods' directory의 index.html 파일 맨 위에 '{% load static %}' 템플릿 테그 넣기 {% load static %} &lt;!DOCTYPE...","categories": ["DJANGO"],
        "tags": ["PYTHON","BACKEND","DJANGO"],
        "url": "/django/django3/",
        "teaser": null
      },{
        "title": "[Django] Model",
        "excerpt":"DJANGO WEB DEVELOPMENT 4. Model Model 사용할 데이터 고려하여 데이터 모델링 후, 이에 맞는 field 작성 # 'foods' directory의 models.py from django.db import models # Create your models here. class Menu(models.Model): name = models.CharField(max_length=50) description = models.CharField(max_length=100) price = models.IntegerField() img_path = models.CharField(max_length=255) def __str__(self): return self.name Django Model Field...","categories": ["DJANGO"],
        "tags": ["PYTHON","BACKEND","DJANGO"],
        "url": "/django/django4/",
        "teaser": null
      },{
        "title": "[Django] 배포",
        "excerpt":"DJANGO WEB DEVELOPMENT 5. 배포 배포 방법 IaaS(Infrastructure as a service) 서버 장비 + 운영체제만 제공, 그 외 필요한 프로그램은 개발자가 직접 설치 및 설정 학습할 것이 많지만, 최적의 환경 구성 가능 AWS EC2 등 PaaS(Platform as as service) 서버 장비 + 운영체제 + 실행환경 제공 학습할 것이 적어, 프로젝트에...","categories": ["DJANGO"],
        "tags": ["PYTHON","BACKEND","DJANGO"],
        "url": "/django/django5/",
        "teaser": null
      },{
        "title": "[Algorithm] 카드 조합 최대값 - 무차별 대입",
        "excerpt":"ALGORITHM 알고리즘 정리(9) Brute Force(1) 카드 조합 최대값 def max_product(left_cards, right_cards): max_product = left_cards[0] * right_cards[0] for left in left_cards: for right in right_cards: max_product = max(max_product, left * right) return max_product print(max_product([1, 6, 5], [4, 2, 3])) print(max_product([1, -9, 3, 4], [2, 8, 3, 1])) print(max_product([-1, -7, 3], [-4,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm9_max_card_combination/",
        "teaser": null
      },{
        "title": "[Algorithm] 좌표 간 가까운 거리 - 무차별 대입",
        "excerpt":"ALGORITHM 알고리즘 정리(10) Brute Force(2) 좌표 간 가까운 거리 from math import sqrt def distance(store1, store2): return sqrt((store1[0] - store2[0]) ** 2 + (store1[1] - store2[1]) ** 2) def closest_pair(coordinates): pair = [coordinates[0], coordinates[1]] for i in range(len(coordinates) - 1): for j in range(i + 1, len(coordinates)): store1, store2 =...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm10_closest_coordinate/",
        "teaser": null
      },{
        "title": "[Algorithm] 벽 사이 빗물 최대량 - 무차별 대입",
        "excerpt":"ALGORITHM 알고리즘 정리(11) Brute Force(3) 문제 건물과 건물 사이 쌓일 수 있는 빗물의 양을 구하는 함수를 구현하시오. 예를 들어, input 리스트로 [3, 0, 0, 2, 0, 4]가 주어진다면 1번째 건물은 3층, 4번째 건물은 2층, 6번째 건물은 4층이다. 빗물은 아래와 같이 총 10칸 만큼 쌓인다 0번 인덱스 - 0 (왼쪽 없음,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm11_btw_wall_trapped_rain/",
        "teaser": null
      },{
        "title": "[Algorithm] 첫 번째 숫자부터 마지막 숫자까지 합 - 분할정복",
        "excerpt":" ALGORITHM     알고리즘 정리(12)   Divide and Conquer(1)            핵심 divide/ conquer/ combine             1부터 n까지의 합   def consecutive_sum(start, end):     # 코드를 작성하세요     if start == end:         return start     else:         return consecutive_sum(start, (start+end)//2) + consecutive_sum((start+end)//2+1, end)  # 테스트 print(consecutive_sum(1, 10)) print(consecutive_sum(1, 100)) print(consecutive_sum(1, 253)) print(consecutive_sum(1, 388))   55 5050 32131 75466    ","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm12_sum_start_to_end/",
        "teaser": null
      },{
        "title": "[Algorithm] 합병 정렬 - 분할정복",
        "excerpt":"ALGORITHM 알고리즘 정리(13) Divide and Conquer(2) 핵심 divide/ conquer/ combine 합병 정렬의 경우 divide, conquer이 간단, combine이 복잡 합병 정렬 # combine def merge(list1, list2): i = 0 j = 0 merged_list = [] while i &lt; len(list1) and j &lt; len(list2): if list1[i] &gt; list2[j]: merged_list.append(list2[j]) j += 1...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm13_merge_sort/",
        "teaser": null
      },{
        "title": "[Algorithm] 퀵 정렬 - 분할정복",
        "excerpt":"ALGORITHM 알고리즘 정리(14) Divide and Conquer(3) 핵심 divide/ conquer/ combine 퀵 정렬 퀵 정렬의 경우 conquer, combine이 간단, divide가 복잡 Divide: partition 과정을 통해, pivot을 기준으로 리스트를 나눈다. Conquer: pivot 왼쪽 부분과 pivot 오른쪽 부분을 각각 quicksort 함수로 정렬한다. Combine: 따로 할 게 없다! # partition 함수 def swap_elements(my_list, index1,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm14_quick_sort/",
        "teaser": null
      },{
        "title": "[Algorithm] 피보나치 수열 - Dynamic Programming(Memoization)",
        "excerpt":"ALGORITHM 알고리즘 정리(15) Dynamic Programming이 필요한 경우 최적 부분 구조가 있음 중복되는 부분 문제들이 있음 Dyanmic Programming은 2가지 종류가 존재 Memoization 재귀를 사용 장점: 모든 경우를 다 계산할 필요 없음 단점: call stack이 계속 쌓임 Tabulation 반복을 사용 장점: call stack이 쌓이지 않음 단점: 모든 경우를 다 계산함 Memoization Fibonacci...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm15_memoization/",
        "teaser": null
      },{
        "title": "[Algorithm] 피보나치 수열 - Dynamic Programming(Tabulation)",
        "excerpt":"ALGORITHM 알고리즘 정리(16) Dynamic Programming이 필요한 경우 최적 부분 구조가 있음 중복되는 부분 문제들이 있음 Dyanmic Programming은 2가지 종류가 존재 Memoization 재귀를 사용 장점: 모든 경우를 다 계산할 필요 없음 단점: call stack이 계속 쌓임 Tabulation 반복을 사용 장점: call stack이 쌓이지 않음 단점: 모든 경우를 다 계산함 Tabulation Fibonacci...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm16_tabulation/",
        "teaser": null
      },{
        "title": "[Algorithm] 최대 수익 - Dynamic Programming(Memoization & Tabulation)",
        "excerpt":"ALGORITHM 알고리즘 정리(17) Dynamic Programming이 필요한 경우 최적 부분 구조가 있음 중복되는 부분 문제들이 있음 Dyanmic Programming은 2가지 종류가 존재 Memoization 재귀를 사용 장점: 모든 경우를 다 계산할 필요 없음 단점: call stack이 계속 쌓임 Tabulation 반복을 사용 장점: call stack이 쌓이지 않음 단점: 모든 경우를 다 계산함 문제 솔희는...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm17_secomdalcom_dynamic_programming/",
        "teaser": null
      },{
        "title": "[Algorithm] 최대 수익 - Greedy Alogirthm",
        "excerpt":"ALGORITHM 알고리즘 정리(18) Greedy Algorithm이 사용되면 최적인 경우 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것 탐욕적 선택 속성이 있음 - 당장 최적의 선택을 하는 것이 전체 문제를 해결하는 데 최선의 선택이여함 Greedy Algorithm 최소의 동전 개수로 거슬러주기 def min_coin_count(value,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm18_return_coin_greedy_algorithm/",
        "teaser": null
      },{
        "title": "[Algorithm] 최대 곱 구하기 - Greedy Alogirthm",
        "excerpt":"ALGORITHM 알고리즘 정리(19) Greedy Algorithm이 사용되면 최적인 경우 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것 탐욕적 선택 속성이 있음 - 당장 최적의 선택을 하는 것이 전체 문제를 해결하는 데 최선의 선택이여함 Greedy Algorithm 여러 명이 카드 게임을 하는 상황에서...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm19_max_card_combination_greedy_algorithm/",
        "teaser": null
      },{
        "title": "[Algorithm] 벌금 최소화하기 - Greedy Alogirthm",
        "excerpt":"ALGORITHM 알고리즘 정리(20) Greedy Algorithm이 사용되면 최적인 경우 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것 탐욕적 선택 속성이 있음 - 당장 최적의 선택을 하는 것이 전체 문제를 해결하는 데 최선의 선택이여함 Greedy Algorithm 스터디 약속시간에 늦으면 1분에 1달러씩 내야...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm20_minimize_late_penalty_greedy_algorithm/",
        "teaser": null
      },{
        "title": "[Algorithm] 수업을 최대로 많이 듣는 수강 신청 - Greedy Alogirthm",
        "excerpt":"ALGORITHM 알고리즘 정리(21) Greedy Algorithm이 사용되면 최적인 경우 최적 부분 구조가 있음 - 부분 문제들의 최적의 답을 이용해 기존 문제의 최적의 답을 구할 수 있다는 것 탐욕적 선택 속성이 있음 - 당장 최적의 선택을 하는 것이 전체 문제를 해결하는 데 최선의 선택이여함 Greedy Algorithm 리스트에 담겨있는 튜플들은 각각 하나의 수업을...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm21_maximum_class_greedy_algorithm/",
        "teaser": null
      },{
        "title": "[Algorithm] 최대 이익 구간 - Brute Force",
        "excerpt":"ALGORITHM 알고리즘 정리(22) Brute Force Brute Force 리스트에는 며칠 동안의 수익이 담겨 있습니다. 예를 들어서 [7, -3, 4, -8]이라면 첫 날에는 7달러를 벌었고, 둘째 날에는 3달러를 잃었고, 셋째 날에는 4달러를 벌었고, 마지막 날에는 8달러를 잃은 것입니다. profits를 파라미터로 받아, 최대 수익을 내는 구간의 수익을 리턴 sublist_max 함수를 구현하시오. def sublist_max(profits):...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm22_maximum_profits_brute_force/",
        "teaser": null
      },{
        "title": "[SQL] Programmers SQL 연습문제 (1)",
        "excerpt":"SQL Übung - Programmers SQL 문제 풀이를 통한 연습 문제 1 16/10/2021 SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID; 문제 2 16/10/2021 SELECT NAME, DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC; 문제 3 16/10/2021 SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick' ORDER BY ANIMAL_ID; 문제 4 16/10/2021 SELECT...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_practice_programmers(1)/",
        "teaser": null
      },{
        "title": "[Algorithm] 거듭제곱",
        "excerpt":"ALGORITHM 알고리즘 정리(23) Dyanmic Programming 문제 거듭제곱의 경우 for 문을 돌릴 경우 시간복잡도 O(n)이 나옴 시간복잡도가 O(lgn)이 되는 함수를 구현하시오. def power(x, y): if y == 0: return 1 subresult = power(x, y // 2) if y % 2 == 0: return subresult * subresult else: return x * subresult...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm23_powers/",
        "teaser": null
      },{
        "title": "[Docker] Docker 명령어 & 기본 설정",
        "excerpt":"Docker 기본 명령어 Docker 관련 기본 명령어 Docker bash-completion 설정 Docker 기본 명령어 # see version docker version # see info of docer docker info # create container w(docker container run -d(background) -p[host:container] [image_name] --name [container_name]) docker container run -d -p 80:80 nginx --name webserver # list of running containers...","categories": ["DOCKER"],
        "tags": ["CLI","BACKEND","DOCKER"],
        "url": "/docker/docker_udemy1/",
        "teaser": null
      },{
        "title": "[SQL] UNION & INTER & EXCEPT",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(3) UNION을 통해 두 데이터 간 합집함을 가져올 수 있음 중복되는 데이터는 한 개만 포함됨 UNION되는 데이터 세트의 열 개수가 같아야 함 UNION되는 데이터들의 열의 자료형이 같아야 함 UNION ALL을 통해 두 데이터 간 합집합 + 교집합을 가져올 수 있음 중복된 데이터는 2개가 존재 INTER을...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_3_set_theory_clauses/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (1)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 x만큼 간격이 있는 n개의 숫자 18/10/2021 def solution(x, n): return [x + x*i for i in range(n)] 행렬의 덧셈 18/10/2021 def solution(arr1, arr2): return [[sum(j) for j in zip(*i)] for i in zip(arr1, arr2)] 직사각형 별찍기 18/10/2021 a, b...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(1)/",
        "teaser": null
      },{
        "title": "[SQL] Subquery",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(4) Subquery - WHERE or HAVING/ SELECT/ FROM 안에 쿼리를 쓰는 것 ANY/SOME : 하나라도 조건을 만족하는 경우가 있으면 반환 ALL : 모든 조건을 만족하는 경우가 있으면 반환 Subquery는 독자적으로도 실행 가능한 비상관 코드와, 그렇지 않은 상관 코드로 구분할 수 있음 비상관 코드의 경우 각...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_4_subquery/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(1)",
        "excerpt":"Pandas Inspecting dataframe .info() .shape .describe sort .sort_values() select df[['column1', 'column2']] filter df[df[column] == 'condition'] mutate df[column] = df[column] + 1 # import data import seaborn as sns import pandas as pd iris = sns.load_dataset('iris') .info() &amp; .shape &amp; .describe() df.info df.shape df.describe # Print information about iris print(iris.info()) #...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/transforming_dataframes/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(2)",
        "excerpt":"Pandas Aggregating dataframe pandas Series인 상태로 계산하면 계산값이 int/float 형태로, pandas Dataframe 상태로 계산하면 dataframe으로 반환 .mean() - 평균 .median() - 중위값 .mode() - 최빈값 .max() - 최대값 .min() - 최소값 .var() - 분산 .std() - 표준편차 .sum() - 합 .quantile() - 분위수 .agg() - custom function 사용이 가능하게 함...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/aggregating_dataframe/",
        "teaser": null
      },{
        "title": "[Algorithm] 최소한의 약수터 방문 - Greedy Algorithm",
        "excerpt":"ALGORITHM 알고리즘 정리(24) Greedy Algorithm Greedy Algorithm 등산을 하는 상황에서, 등산가는 1km에 1L씩 물을 꼭 마셔야함 파라미터로 약수터의 위치 리스트(단위: Km)와 물통 용량(단위: L)을 줄 때, 최소한의 약수터를 들리는 함수를 구현하시오. 단, 탈수로 인해 정상에 도달하지 못하는 경우는 없으며, 약수터에 갈 때마다 최대 용량으로 물통을 채움 또한 마지막 정상의 약수터는...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm24_minimum_mineral_spring/",
        "teaser": null
      },{
        "title": "[Algorithm] 효율적으로 중복되는 숫자 찾기",
        "excerpt":"ALGORITHM 알고리즘 정리(25) 문제 (N + 1)의 크기인 리스트에, 1부터 N까지의 임의의 자연수가 요소로 할당되어 있어, 중복되는 숫자가 최소 1개가 존재 중복되는 어느 숫자 ‘하나’를 가장 효율적으로 찾아 리턴하는 함수를 구현하시오. def find_same_number(some_list): ele_dict = {} for ele in some_list: if ele in ele_dict: return ele ele_dict[ele] = True print(find_same_number([1,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm25_find_duplicated/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(3)",
        "excerpt":"Pandas Slicing and Indexing DataFrames pandas에는 index와 loc을 사용해 더 깔끔한 코드로 subsetting을 수 있음 그러나 data가 index로 활용된 측면에서 이는 tidy data는 아님(이 문제는 .reset_index를 통해 해결 가능) 개인적으로 dataframe 정렬 후 slicing을 통해 dataframe을 subsetting할 때 유용할 수 있을 것이라고 생각 .set_index() .reset_index() .loc() .sort_index() # import data...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/slicing_indexing_dataframe/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (2)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 정수 제곱근 판별 21/10/2021 from math import sqrt def solution(n): return int((sqrt(n)+1)**2) if sqrt(n) == int(sqrt(n)) else -1 # 다른 사람의 좋은 풀이 def solution(n): sqrt = n ** (1/2) if sqrt % 1 == 0: return (sqrt +...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(2)/",
        "teaser": null
      },{
        "title": "[SQL] Programmers SQL 연습문제 (2)",
        "excerpt":"SQL Übung - Programmers SQL 문제 풀이를 통한 연습 문제 11 22/10/2021 SELECT MIN(DATETIME) FROM ANIMAL_INS; 문제 12 22/10/2021 SELECT COUNT(*) FROM ANIMAL_INS; 문제 13 22/10/2021 SELECT COUNT(DISTINCT NAME) FROM ANIMAL_INS; 문제 14 22/10/2021 SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) AS count FROM ANIMAL_INS GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE ASC 문제 15...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_practice_programmers(2)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (3)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 서울에서 김서방 찾기 24/10/2021 def solution(seoul): for i in range(len(seoul)): if seoul[i] == \"Kim\": return \"김서방은 \"+ str(i)+\"에 있다\" # 다른 사람의 좋은 풀이 def solution(seoul): return \"김서방은 {}에 있다\".format(seoul.index(\"Kim\")) 문자열 다루기 기본 24/10/2021 if len(s) == 4 or...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(3)/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(4)",
        "excerpt":"Pandas Creating and Visualizing DataFrames .plot() kind=”bar”/ “line”/ “scatter” .hist() .legend() Missing data .isna() Read &amp; write dataframe pd.read_csv() .to_csv() # import data import seaborn as sns import pandas as pd import matplotlib.pyplot as plt iris = sns.load_dataset(\"iris\") .plot() kind=”bar” petal_len_by_species = iris.groupby(\"species\")[[\"petal_length\"]].mean() petal_len_by_species.plot(kind=\"bar\") plt.show() kind = “line” sp_wd_by_sp_len =...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/creating_and_visualizing_dataframes/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 1725. Number Of Rectangles That Can Form The Largest Square",
        "excerpt":" ALGORITHM Übung - LeetCode     알고리즘 문제 풀이를 통한 코딩 테스트 연습     문제     🔗 문제 링크   코드  class Solution(object):     def countGoodRectangles(self, rectangles):         rect_list = [min(rectangle) for rectangle in range(rectangles)]         maxLen = max(rect_list)          result = 0         return sum([i for i in rect_list if maxLen == i])    ","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_recursion1/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (4)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 부족한 금액 계산하기 30/10/2021 def solution(price, money, count): return max(sum([price*i for i in range(1,count+1)])-money,0) 나머지가 1이 되는 수 찾기 31/10/2021 def solution(n): for i in range(1,n): if n%i == 1: return i 최소직사각형 1/11/2021 def solution(sizes): max_size = max(sizes[0])...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(4)/",
        "teaser": null
      },{
        "title": "[UNIX CLI] Command Line(2)",
        "excerpt":"UNIX COMMAND LINE UNIX CLI 정리(2) cut을 통해 텍스트 형식 파일의 열을 선택해서 볼 수 있음 grep을 통해 텍스트 형식 파일에서 특정 문자 패턴만 filter해서 볼 수 있음 &gt;을 통해 명령어를 통해 산출된 결과를 저장(redirection)할 수 있음 |을 통해 | 왼쪽에 있는 명령어의 결과를 오른쪽에서 사용할 수 있음 wc을 통해...","categories": ["CLI"],
        "tags": ["CLI","BACKEND","DATA-ENGINEERING"],
        "url": "/cli/CLI_2/",
        "teaser": null
      },{
        "title": "[Algorithm] 최대 이익 구간 - Divide & Conquer",
        "excerpt":"ALGORITHM 알고리즘 정리(26) Divide &amp; Conquer 리스트에는 며칠 동안의 수익이 담겨 있습니다. 예를 들어서 [7, -3, 4, -8]이라면 첫 날에는 7달러를 벌었고, 둘째 날에는 3달러를 잃었고, 셋째 날에는 4달러를 벌었고, 마지막 날에는 8달러를 잃은 것입니다. profits를 파라미터로 받아, 최대 수익을 내는 구간의 수익을 리턴 sublist_max 함수를 구현하시오. 함수의 시간 복잡도는...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm26_maxium_profits_divide_conquer/",
        "teaser": null
      },{
        "title": "[Algorithm] 최대 이익 구간",
        "excerpt":"ALGORITHM 알고리즘 정리(27) Divide &amp; Conquer 리스트에는 며칠 동안의 수익이 담겨 있습니다. 예를 들어서 [7, -3, 4, -8]이라면 첫 날에는 7달러를 벌었고, 둘째 날에는 3달러를 잃었고, 셋째 날에는 4달러를 벌었고, 마지막 날에는 8달러를 잃은 것입니다. profits를 파라미터로 받아, 최대 수익을 내는 구간의 수익을 리턴 sublist_max 함수를 구현하시오. 함수의 시간 복잡도는...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm27_maximum_profits3/",
        "teaser": null
      },{
        "title": "[UNIX CLI] Command Line(3)",
        "excerpt":"UNIX COMMAND LINE UNIX CLI 정리(3) echo를 통해 variable의 name, value을 print할 수 있음 =를 통해 shell variable 생성 가능 for [variable] in [list] ; do [body] ; done를 통해 for loop 실행 echo variable의 value를 print할 시 $를 앞에 붙여줘야 함 대표적인 variable OSTYPE : User’s OS type HOME...","categories": ["CLI"],
        "tags": ["CLI","BACKEND","DATA-ENGINEERING"],
        "url": "/cli/CLI_3/",
        "teaser": null
      },{
        "title": "[UNIX CLI] Command Line(4)",
        "excerpt":"UNIX COMMAND LINE UNIX CLI 정리(4) bash : shell script 수행 $@ : bash를 통해 shell script를 실행할 때 변수를 받을 수 있게 함 for : for loop bash bash [shell_script_name]을 통해 shell script(shell 명령어만 폼한된 텍스트 파일)의 명령어를 실행 shell script는 주로 [file_name].sh로 저장 # command를 입력할 shell script를...","categories": ["CLI"],
        "tags": ["CLI","BACKEND","DATA-ENGINEERING"],
        "url": "/cli/CLI_4/",
        "teaser": null
      },{
        "title": "[MySQL] SQL 날짜 함수 정리",
        "excerpt":"SQL 날짜 함수 정리 YEAR : DATE형 자료형에서 연도만 추출 MONTH : DATE형 자료형에서 월만 추출 DAYOFMONTH : DATE형 자료형에서 일만 추출 DATEDIFF : DATE형 자료형들 간 날짜 차이 산출 CURDATE : 오늘 날짜 DATE_ADD : 날짜 더하기 DATE_SUB : 날짜 빼기 UNIX_TIMESTAMP : DATE 자료형을 Unix timestamp(1970년 1월 1일을...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/codeit_sql1/",
        "teaser": null
      },{
        "title": "[MySQL] SQL 산술 함수 정리",
        "excerpt":"SQL 산술 함수 정리 집계함수(ex. SUM, MAX, MIN, AVG 등)은 column에 대한 특징값을 반환 산술함수는 각 row에 대한 산술 연산에 대한 결과값을 반환 STD - 표준편차 ABS - 절대값 SQRT - 제곱근 CEIL - 올림 FLOOR - 내림 ROUND - 반올림 그 외 산술 함수 공식 문서 🔗 MYSQL 산술함수...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/codeit_sql2/",
        "teaser": null
      },{
        "title": "[Algorithm] 주식 최대 이익",
        "excerpt":"ALGORITHM 알고리즘 정리(28) 문제 리스트의 형태로 특정 기간에 주식의 가격이 주어집니다. 예. [1, 2, 3, 4, 5] (첫날:1, 둘째날:2, …) 딱 한 번만 해당 주식을 사고 팔았을 때 최대의 수익을 구하는 함수를 구현하시오. 주식은 한 번씩만 사고 팔 수 있으며, 산 당일에 팔 수 없습니다. 함수의 시간 복잡도는 O(n)여야 함...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm28_stock/",
        "teaser": null
      },{
        "title": "[Algorithm] 계단 올라가는 방법의 수(1)",
        "excerpt":"ALGORITHM 알고리즘 정리(29) 문제 계단을 1칸 혹은 2칸씩만 올라갈 수 있다. 총 n칸을 올라갈 때 올라갈 수 있는 방법의 수를 리턴하는 함수를 구현하시오 예를 들어 계단 4가지를 올라 갈때 가능한 방법은 아래와 같이 총 5가지이다. 1, 1, 1, 1 2, 1, 1 1, 2, 1 1, 1, 2 2, 2...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm29_ways_of_stairs/",
        "teaser": null
      },{
        "title": "[Algorithm] 계단 올라가는 방법의 수(2)",
        "excerpt":"ALGORITHM 알고리즘 정리(30) 문제 계단을 오를 수 있는 칸 수가 리스트로 주어진다. 총 n칸을 올라갈 때 올라갈 수 있는 방법의 수를 리턴하는 함수를 구현하시오 예를 들어 계단을 오를 수 있는 칸 수가 [1,2,4]이고 총 4칸을 올라 갈때 가능한 방법은 아래와 같이 총 6가지이다. 1, 1, 1, 1 2, 1, 1...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm30_ways_of_stairs2/",
        "teaser": null
      },{
        "title": "[MySQL] SQL COALESCE & IFNULL & CONCAT & IF",
        "excerpt":"SQL COALESCE &amp; IFNULL &amp; CONCAT &amp; IF COALESCE - NULL 값을 다른 값으로 대체해서 반환, 2개 이상의 조건 가능 IFNULL - NULL 값을 다른 값으로 대체해서 반환 CONCAT - concatenate IF - 조건문 COALESCE height column의 빈 값은 ‘N/A’으로, weight column의 빈 값은 ‘값 비어있음’으로 대체 후 반환하시오 SELECT...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/codeit_sql3/",
        "teaser": null
      },{
        "title": "[Algorithm] 효율적으로 중복되는 숫자 찾기(2)",
        "excerpt":"ALGORITHM 알고리즘 정리(31) 문제 (N + 1)의 크기인 리스트에, 1부터 N까지의 임의의 자연수가 요소로 할당되어 있어, 중복되는 숫자가 최소 1개가 존재 중복되는 어느 숫자 ‘하나’를 가장 효율적으로 찾아 리턴하는 함수를 구현하시오. 단, O(n) 이상의 공간을 사용할 수 없으며, input인 리스트도 변형할 수 없음 def find_same_number(some_list, start=1, end=None): if end ==...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm31_find_duplicated2/",
        "teaser": null
      },{
        "title": "[MySQL] SQL 문자열 함수 정리",
        "excerpt":"SQL 문자열 함수 정리 SUBSTRING - 문자열의 일부 추출 LENGTH - 문자열 길이 반환 UPPER - 문자열을 모두 대문자로 반환 LOWER - 문자열을 모두 소문자로 반환 LPAD - 문자열의 왼쪽에 특정 문자 붙인 뒤 반환 RPAD - 문자열의 오른쪽에 특정 문자 붙인 뒤 반환 TRIM - 문자열의 공백 제거한 뒤...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/codeit_sql4/",
        "teaser": null
      },{
        "title": "[Algorithm] 리스트 항목의 합 탐색",
        "excerpt":"ALGORITHM 알고리즘 정리(32) 문제 특정 숫자와, 숫자로 이루어진 리스트가 주어질 때, 리스트 안의 두 요소의 조합으로 특정 숫자가 되는지 확인하는 함수를 구현하시오. # 풀이1 def sum_in_list(search_sum, sorted_list): num_dict = {} for num in sorted_list: if search_sum-num in num_dict.keys(): return True else: num_dict[num] = True return False print(sum_in_list(15, [1, 2, 5,...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm32_combination_sum/",
        "teaser": null
      },{
        "title": "[Algorithm] 벽 사이 빗물 최대량(2)",
        "excerpt":"ALGORITHM 알고리즘 정리(33) 문제 건물과 건물 사이 쌓일 수 있는 빗물의 양을 구하는 함수를 구현하시오. 예를 들어, input 리스트로 [3, 0, 0, 2, 0, 4]가 주어진다면 1번째 건물은 3층, 4번째 건물은 2층, 6번째 건물은 4층이다. 빗물은 아래와 같이 총 10칸 만큼 쌓인다 0번 인덱스 - 0 (왼쪽 없음, 오른쪽 중...","categories": ["CODEIT"],
        "tags": ["ALGORITHM"],
        "url": "/codeit/algorithm11_btw_wall_trapped_rain(2)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (5)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 K번째수 7/11/2021 def solution(array, commands): return [sorted(array[c[0]-1:c[1]])[c[2]-1] for c in commands] 완주하지 못한 선수 7/11/2021 def solution(participant, completion): hash = {} # if participant in hash, get the number and add one to the value, if not 1 for...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(5)/",
        "teaser": null
      },{
        "title": "[MySQL] Hackerrank SQL 연습문제 (1)",
        "excerpt":"SQL Übung - Hackerrank SQL 문제 풀이를 통한 SQL 연습 Revising the Select Query I 10/11/2021 SELECT * FROM city WHERE countrycode=\"USA\" AND population &gt; 100000 Revising the Select Query II 10/11/2021 SELECT name FROM city WHERE population &gt; 120000 AND countrycode=\"USA\"; Select All 10/11/2021 SELECT * FROM city; Select...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/hackerrank(1)/",
        "teaser": null
      },{
        "title": "[MySQL] Hackerrank SQL 연습문제 (2)",
        "excerpt":"SQL Übung - Hackerrank SQL 문제 풀이를 통한 SQL 연습 Weather Observation Station 6 11/11/2021 SELECT DISTINCT(city) FROM station WHERE SUBSTRING(city, 1, 1) IN ('a', 'e', 'i', 'o', 'u'); Weather Observation Station 7 13/11/2021 SELECT DISTINCT(city) FROM station WHERE SUBSTRING(city, -1, 1) IN ('a', 'e', 'i', 'o', 'u'); Weather Observation...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/hackerrank(2)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (6)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 신규 아이디 추천 16/11/2021 import re def solution(new_id): new_id = new_id.lower() new_id = \"\".join(re.findall(\"[\\w\\_\\-\\.]\", new_id)) while \"..\" in new_id: new_id = new_id.replace(\"..\", \".\") if len(new_id) &gt; 0 and new_id[-1] == \".\": new_id = new_id[:-1] if len(new_id) &gt; 0 and...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(6)/",
        "teaser": null
      },{
        "title": "[MySQL] Hackerrank SQL 연습문제 (3)",
        "excerpt":"SQL Übung - Hackerrank SQL 문제 풀이를 통한 SQL 연습 Type of Triangle 16/11/2021 SELECT CASE WHEN A+B&gt;C AND A+C&gt;B AND B+C&gt;A THEN CASE WHEN A=B AND B=C AND A=C THEN \"Equilateral\" WHEN A=B OR B=C OR A=C THEN \"Isosceles\" ELSE \"Scalene\" END ELSE \"Not A Triangle\" END FROM triangles;...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/hackerrank(3)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (1)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 N개의 최소공배수 19/11/2021 def solution(arr): def gcd(x, y): while(x): x, y = y%x, x return y res = 1 for i in arr: res *= i // gcd(res, i) return res JadenCase 문자열 만들기 19/11/2021 def solution(s): return \"...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(7)/",
        "teaser": null
      },{
        "title": "[Docker] Docker MySql & Postgres",
        "excerpt":"MySQL &amp; Postgres in Docker # mysql container run using named volume docker run -p 3306:3306 --name mysql1 -e MYSQL_ROOT_PASSWORD=1234 -d -v mysql_data:/var/lib/mysql mysql:5.7.19 # postgresql container run using named volume docker run -p 5432:5432 --name postgres1 -e POSTGRES_PASSWORD=1234 -d -v psql_data:/var/lib/postgresql/data postgres DOCKER MYSQL sql dump # local directory에서...","categories": ["DOCKER"],
        "tags": ["SQL","POSTGRES","MYSQL","DOCKER"],
        "url": "/docker/docker2/",
        "teaser": null
      },{
        "title": "[Docker] Docker MongoDB",
        "excerpt":" Docker - MongoDB   # mongoDB container run using named volume docker run --name mongodb1 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=1234 -v mongo_data:/data/db -d -p 27017:27017 mongo:5.0.5    Docker MongoDB Shell   # MongoDB SHELL에 접속 docker container exec -it mongodb1 bash mongo -u \"root\" -p \"1234\"    ref     🔗 MongoDB Shell Command 공식문서  ","categories": ["DOCKER"],
        "tags": ["SQL","MONGODB"],
        "url": "/docker/docker4/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv2 (2)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 [3차] 파일명 정렬 29/11/2021 import re def solution(files): files = sorted(files, key=lambda x: (re.findall(r\"[a-zA-Z-.\\s]+\", x.lower())[0], int(re.findall(r\"[0-9]+\", x)[0])) ) return files [3차] 압축 30/11/2021 def solution(msg): wordDict = dict(zip(\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\", range(1,27))) number = 27 answer = [] while msg not in...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(8)/",
        "teaser": null
      },{
        "title": "[MySQL] DDL & DML",
        "excerpt":"MySQL Table CREATE TABLE - 테이블 만들기 INSERT INTO - 테이블에 데이터(행) 추가 ALTER - 테이블의 속성 수정 SET - 테이블 속성 설정 UPDATE &amp; SET - 테이블의 데이터 수정 DELETE - 테이블의 데이터 삭제 CREATE TABLE CREATE TABLE [table_name] (columns) # 방법1 CREATE TABLE userTbl( uNo INT AUTO_INCREMENT PRIMARY...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/encore_sql1/",
        "teaser": null
      },{
        "title": "[MySQL] VIEW",
        "excerpt":"MySQL Table CREATE VIEW - 가상의 테이블 만들기 CREATE VIEW CREATE VIEW [view_name] AS [table] 생성된 View에서는 일반 table처럼 작업(select, join, update, delete, insert 등)을 할 수 있음 View에서 insert를 한 경우 insert한 데이터는 원래 데이터가 있는 테이블에 추가됨 단, View는 View 생성 조건에 따라 데이터가 보여짐 만약 View 조건...","categories": ["SQL"],
        "tags": ["MYSQL"],
        "url": "/sql/encore_sql2/",
        "teaser": null
      },{
        "title": "[JAVA] MySQL JDBC 연결 [MAC]",
        "excerpt":"JAVA - MYSQL JDBC 연결 [MAC] JDBC 다운로드 Select Operating System: Platfrom Independent 클릭 Platform Independent (Architecture Independent), ZIP Archive 다운로드 🔗 다운로드 링크 # 아래의 경로로 mysql-connector-java-8.0.27.jar 파일 옮기기 # /Library/Java/JavaVirtualMachines/jdk1.8.0_202.jdk/Contents/Home/jre/lib/ext JAVA에 mysql-connector-java-[version].jar 추가 패키지별로 추가해야 함 # 1) 패키지 폴더 우클릭 - Build Path - Configure Build Path...","categories": ["JAVA"],
        "tags": ["JAVA","JDBC","MYSQL"],
        "url": "/java/java-jdbc/",
        "teaser": null
      },{
        "title": "[JAVA] MVC",
        "excerpt":"JAVA - MVC JAVA MVC 패턴 구현 계획 DB Connection Class (DB Connection) : Data 객체 (VO/DTO) CRUD 처리 객체 (DAO) Main Class //====== // MVC //====== // 1) DB Connection Class (DB Connection) : // 1) JDBC 드라이버 로드 // 2) Database Connection 연결 // 6 Database Connection 해제...","categories": ["JAVA"],
        "tags": ["JAVA","MVC","MYSQL"],
        "url": "/java/java-MVC/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Stack & Queue",
        "excerpt":"ALGORITHM 알고리즘 스터디(1) Stack &amp; Queue(Deque) Stack 책을 쌓은 것처럼 차곡차곡 쌓아 올린 형태의 자료구조로 LIFO(Last In First Out)라고도 함 시간 순서에 따라 자료가 쌓이기에 가장 마지막에 삽입된 자료가 가장 먼저 삭제되는 구조적인 특징을 가짐 대표적인 기능으로는 push(삽입), pop(삭제), peek(가장 마지막으로 추가된 자료 조회)가 존재 대표적으로 웹 브라우저에서 이전 페이지...","categories": ["STUDY_ALGORITHM"],
        "tags": ["ALGORITHM"],
        "url": "/study_algorithm/algorithm_study1/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 125. Valid Palindrome",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 import re class Solution: def palindrome(s: str) -&gt; bool: # extract alphabets and add all the elements as non-capital alphabets in a list str_list = list(map(lambda x: x.lower(), re.findall('[a-zA-Z0-9]', str))) for...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(1)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 344. Reverse String",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 class Solution: def reverseString(self, s: List[str]) -&gt; None: s.reverse() # 투 포인터를 이용한 방식의 풀이 class Solution: def reverseString(self, s: List[str]) -&gt; None: left,right = 0,len(s)-1 while left &lt; right: s[left],s[right]...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(2)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 937. Reorder Data in Log Files",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 class Solution: def reorderLogFiles(self, logs: List[str]) -&gt; List[str]: d_list,l_list = [],[] for log in logs: if log.split(\" \")[1].isalpha(): l_list.append(log) else: d_list.append(log) # l_list.sort(key=lambda x: (\" \".join(x.split()[1:]), x.split()[0])) # list를 기준으로 sort할...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(3)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 819. Most Common Word",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 from collections import Counter import re class Solution: def mostCommonWord(self, paragraph: str, banned: List[str]) -&gt; str: # [\\W] = [^\\w] = [^a-zA-Z_] paragraph_list = re.sub('[^a-zA-Z]', \" \", paragraph).lower().split() for c in...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(4)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 49. Group Anagrams",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 class Solution: def groupAnagrams(self, strs: List[str]) -&gt; List[List[str]]: word_dict = {} for str in strs: s = \"\".join(sorted(list(str))) if s in word_dict.keys(): word_dict[s].append(str) else: word_dict[s] = [str] return [v for v...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(5)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 1. Two Sum",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 풀이1 - Brute Force class Solution(object): def twoSum(self, nums, target): for i in range(len(nums)): for j in range(i+1,len(nums)): if nums[i] + nums[j] == target: return [i,j] # 풀이2 - Hash Map 이용 class...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(6)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 561. Array Partition I",
        "excerpt":" ALGORITHM Übung - LeetCode     알고리즘 문제 풀이를 통한 코딩 테스트 연습     문제     🔗 문제 링크   코드  class Solution:     def arrayPairSum(self, nums: List[int]) -&gt; int:         return sum(sorted(nums)[::2])    ","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(7)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 5. Longest Palindromic Substring",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 class Solution: def longestPalindrome(self, s: str) -&gt; str: def ispalindrome(s: str) -&gt; str: return s == s[::-1] for i in range(len(s)): for j in range(i+1): if ispalindrome(s[j:len(s)-i + j]): return s[j:len(s)-i...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(8)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 121. Best Time to Buy and Sell Stock",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 class Solution: def maxProfit(self, prices: List[int]) -&gt; int: min_price = prices[0] max_profit = 0 for i in range(1,len(prices)): max_profit = max(max_profit, prices[i]-min_price) min_price = min(min_price, prices[i]) if len(prices) &lt; 0 or...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(9)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] 완전탐색(Brute-Force) & 이분탐색",
        "excerpt":"ALGORITHM 알고리즘 스터디(2) 탐색 완전탐색(Brute-Force) 이분탐색(Binary Search) 깊이우선탐색(Depth First Search) 너비우선탐색(Breadth First Search) 문자열탐색 KMP(Knuth-Morris-Pratt) BM(Boyer-Moore) 완전탐색 가능한 모든 경우의 수를 탐색 효율성의 관점에서는 최악 구현방법 반복문 재귀함수 cf. 재귀함수는 동적 계획법/ 백트래킹/ 탐욕법에서도 사용됨 # card 안에 8의 순서를 찾는 함수 (반복문) def solution(card): for i in range(len(card)): if...","categories": ["STUDY_ALGORITHM"],
        "tags": ["ALGORITHM"],
        "url": "/study_algorithm/algorithm_study2/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 10816. 숫자 카드 2",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 import sys from collections import Counter def num_of_cards(cards,interest): c = Counter(cards) return [c[i] for i in interest] # if not in interest 0 if __name__ == \"__main__\": n = int(input()) cards = list(map(int,sys.stdin.readline().split())) m...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(1)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 234. Palindrome Linked List",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 # Definition for singly-linked list. # class ListNode: # def __init__(self, val=0, next=None): # self.val = val # self.next = next class Solution: def isPalindrome(self, head: Optional[ListNode]) -&gt; bool: linked_list =...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_algorithm_interview(10)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 2. Add Two Numbers",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 # 나의 풀이 # Definition for singly-linked list. # class ListNode: # def __init__(self, val=0, next=None): # self.val = val # self.next = next class Solution: def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -&gt; Optional[ListNode]:...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_top_100_liked(1)/",
        "teaser": null
      },{
        "title": "[Docker] Docker Image 복사",
        "excerpt":"Docker Image 복사 Docker 이미지 다른 컴퓨터로 복사하기 # 복사하고 싶은 docker image 정보 확인 docker images # 해당 docker image를 tar 파일로 변환 docker save -o [tar file name] [repository_name:tag_name] docker save -o mysql1.tar mysql1:lernen # [file_name].tar을 다른 컴퓨터로 옮기기 # image를 업로드하기 docker load -i &lt;path to image...","categories": ["DOCKER"],
        "tags": ["CLI","BACKEND","DOCKER"],
        "url": "/docker/docker1/",
        "teaser": null
      },{
        "title": "[ALGORITHM] 깊이우선탐색(Depth First Search) & 너비우선탐색(Breadth First Search)",
        "excerpt":"ALGORITHM 알고리즘 스터디(3) 탐색 완전탐색(Brute-Force) 이분탐색(Binary Search) 깊이우선탐색(Depth First Search) 너비우선탐색(Breadth First Search) 문자열탐색 KMP(Knuth-Morris-Pratt) BM(Boyer-Moore) 깊이우선탐색(Depth First Search) 하나의 경우의 수에 대하여 모든 경우의 수를 조사하면서 해를 찾는 과정 이때 스텍을 활용할 수 있음 # 미로찾기 while len(stack) &gt; 0: now = stack.pop() if now == dest: return True...","categories": ["STUDY_ALGORITHM"],
        "tags": ["ALGORITHM"],
        "url": "/study_algorithm/algorithm_study3/",
        "teaser": null
      },{
        "title": "[MySQL] Jupyter Notebook & Docker MySql 연동",
        "excerpt":"환경구성 install sqlalchemy, ipython-sql in Jupyter notebook import sys !conda install --yes --prefix {sys.prefix} sqlalchemy conda install -c conda-forge ipython-sql # load sql extension %load_ext sql 연결 connect DB %sql mysql://root:1234@0.0.0.0:3306/testDB SQL Table 생성 및 데이터 추가 create table insert data into table -- create table %%sql DROP TABLE IF...","categories": ["SQL"],
        "tags": ["MYSQL","DOCKER"],
        "url": "/sql/mysql_python1/",
        "teaser": null
      },{
        "title": "[Postgres] Jupyter Notebook & Docker Postgres 연동",
        "excerpt":"환경구성 install psycopg2 in Jupyter notebook import sys !conda install --yes --prefix {sys.prefix} psycopg2 # !conda install --yes --prefix {sys.prefix} requests 연결 connect DB import psycopg2 %load_ext sql %sql postgresql://carl020958:1234@0.0.0.0:5432/testDB 'Connected: carl020958@testDB' --- Table 생성 %%sql DROP TABLE IF EXISTS name_geschlecht; CREATE TABLE name_geschlecht( name varchar(32), geschlecht varchar(8) ) *...","categories": ["SQL"],
        "tags": ["POSTGRES","DOCKER"],
        "url": "/sql/postgres_python1/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow Installation on Docker",
        "excerpt":"Airflow on Docker Airflow-Docker Installation Docker Airflow CLI Airflow-Docker Installation # make folder and cd mkdir airflow-docker cd airflow-docker # docker-compose.yaml file download(check version) curl -LfO 'https://airflow.apache.org/docs/apache-airflow/2.1.4/docker-compose.yaml' # make folders for dags &amp; plugins &amp; logs mkdir ./dags ./plugins ./logs # On Linux &amp; Mac OS, the quick-start needs to...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW","DOCKER"],
        "url": "/airflow/airflow1/",
        "teaser": null
      },{
        "title": "[Docker] Docker Shell Inside Containers",
        "excerpt":"Getting a Shell Inside Containers # start new container interactively (docker container run -it) docker container run -it --name proxy nginx # run additional command in existing container (docker container exec -it) docker container exec -it proxy bash # ------ # Ubuntu # ------ # exec의 경우에는 additional command, start의...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy2/",
        "teaser": null
      },{
        "title": "[Docker] Docker Network1",
        "excerpt":"Docker Network1 Priate &amp; Pulbic Comms in Containers CLI Management of Virtual Networks Docker DNS(Domain Name System) &amp; How Containers Find Each Other Priate &amp; Pulbic Comms in Containers docker container run -p 80:80 --name webhost -d nginx # 어떤 host port에서 container port으로 forward되는지 확인 (docker container port [container_name(id)])...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy3/",
        "teaser": null
      },{
        "title": "[Docker] Docker Network2",
        "excerpt":"Docker Network2 Docker CLI Testing Docker DNS Round Robin Test Docker CLI Testing # centos7 # --rm option을 통해 해당 container 종료 시 자동 삭제 docker container run --rm -it centos:7 bash # root yum update curl curl --version # ubuntu14.04 docker container run --rm -it ubuntu:14.04 bash # root...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy4/",
        "teaser": null
      },{
        "title": "[Docker] Docker Image1",
        "excerpt":"Docker Image1 Docker Image &amp; Layers Docker Image Tagging &amp; Pushing to Docker Hub Docker Image &amp; Layers # show history of image layers (docker image history [image_name]) docker image history nginx:latest # returns JSON metadata about the image (docker image inspect [image_name]) docker image inspect nginx Docker Image Tagging...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy5/",
        "teaser": null
      },{
        "title": "[Docker] Docker Image2 - Building Images",
        "excerpt":"Docker Image2 - Building Images Dockerfile Build Dockerfile Build Example Dockerfile Build # Dockerfile이 있는 repository에서 진행 (docker image build -t [image_name] .) docker image build -t custom_nginx . # dockerfile에 적혀 있는 순서대로 build하며, 변경이 없는 부분은 cache를 이용하고 변경된 부분만 새롭게 build하므로 # 변경이 없는 부분을 위에, 변경이...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy6/",
        "teaser": null
      },{
        "title": "[Docker] Docker Prune",
        "excerpt":"Docker Cleaning Up prune command to clean up images, volumes, build cache, and containers Docker clean up # displays information regarding the amount of disk space used by the docker daemon docker system df # Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes docker system...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy7/",
        "teaser": null
      },{
        "title": "[Docker] Docker Persistent Data",
        "excerpt":"Docker Persistent Data containers are usually immutable(unchangeable) &amp; ephemeral(temporary) which means that containers should never change when containers are re-deployed then the problem arises for unique data like databases these unique data are called persistent data Data Volumes &amp; Bind Mounts is used to solve the problem Data Volumes -...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy8/",
        "teaser": null
      },{
        "title": "[Docker] Docker Compose",
        "excerpt":"Docker Compose Basic Docker compose commands Build a Compose File For a Multi-Container Service Compose for Run-Time Building and Multi-Container Development Basic Docker compose commands # pwd에 docker-compose.yml 존재, docker-compose 시작 (docker compose up) docker-compose up # docker compose 종료 (docker-compose down) docker-compose down Build a Compose File FOr a...","categories": ["DOCKER"],
        "tags": ["DOCKER"],
        "url": "/docker/docker_udemy9/",
        "teaser": null
      },{
        "title": "[Docker] Docker Jupyter Notebook & PySpark",
        "excerpt":"Docker - Jupyter Notebook &amp; PySpark  # run container docker container run --name jupyter_pyspark -p 10000:8888 -v $(pwd):/home/jovyan/work jupyter/pyspark-notebook:latest  # stop container docker container stop jupyter_pyspark  # restart container docker start -a jupyter_pyspark    ref     🔗 Docker Hub   🔗 Docker-Jupyter 공식 문서1   🔗 Docker-Jupyter 공식 문서2   🔗 참고 블로그  ","categories": ["DOCKER"],
        "tags": ["DOCKER","PYSPARK"],
        "url": "/docker/docker3/",
        "teaser": null
      },{
        "title": "[PySpark] DataFrame Basics",
        "excerpt":"PySpark DataFrame Basics PySpark Basic1 DataFrame Schema PySpark Basic2 PySpark Basic1 from pyspark.sql import SparkSession # start spark session by applying it spark = SparkSession.builder.appName(\"Basics\").getOrCreate() # read data df = spark.read.json(\"people.json\") # show dataframe df.show() +----+-------+ | age| name| +----+-------+ |null|Michael| | 30| Andy| | 19| Justin| +----+-------+ # show...","categories": ["SPARK"],
        "tags": ["PYTHON","PYSPARK","DOCKER"],
        "url": "/spark/pyspark1/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 1260. DFS와 BFS",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 import sys from collections import deque # dfs method def dfs(n): print(n, end=' ') # mark visited visited[n] = True for i in graph[n]: if not visited[i]: dfs(i) # bfs method def bfs(n): dq...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(2)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 2606. 바이러스",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 import sys # dfs method def dfs(n): for i in graph[n]: if not visited[i]: # mark visited visited[i] = True dfs(i) if __name__ == \"__main__\": n = int(sys.stdin.readline()) c = int(sys.stdin.readline()) # make graph...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(3)/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow Installation on Local(Mac)",
        "excerpt":"Airflow on Local(Mac) Airflow Installation Airflow Installation # make folder and cd mkdir airflow cd airflow # create python virtual environment &amp; activate python3 -m venv venv source venv/bin/activate # install python module used by airflow pip3 install wheel # install airflow AIRFLOW_HOME=$(pwd) AIRFLOW_VERSION=2.1.4 PYTHON_VERSION=\"$(python --version | cut -d \"...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow2/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow DB to Postgres(Docker)",
        "excerpt":"Airflow DB to Postgres(Docker) 🔗 Airflow Local에 설치 Postgres Container 설치 PostgreSQL DB 및 DB User 생성 airflow.cfg 수정1 pycopg2-binary 설치 airflow db 초기화 airflow.cfg 수정2 Postgres Container 설치 # container 생성 docker run -p 5432:5432 --name postgres1 -e POSTGRES_PASSWORD=1234 -d -v psql_data:/var/lib/postgresql/data postgres # postgres shell 접속 docker exec...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW","DOCKER"],
        "url": "/airflow/airflow3/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow Operator",
        "excerpt":" Airflow Operator     A task in data pipeline that defines one task            to know which task has a problem           1) Action Operator: Execute an action   2) Transfer Operator: Transfer data   3) Sensors: Wait for a condition to be met before executing the next task  ","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy1/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow Dag",
        "excerpt":"Airflow Dag Airflow Dag Create Airflow Dag File Add Connection in Airflow Webserver Test Airflow Task Create Airflow Dag File path - AIRFLOW_HOME/dag/user_processing.py # user_processing.py from airflow.models import DAG from airflow.providers.sqlite.operators.sqlite import SqliteOperator from datetime import datetime default_args = { \"start_date\": datetime(2022, 1, 7), } with DAG( 'user_processing', schedule_interval='@daily', default_args=default_args,...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy2/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Using API",
        "excerpt":"Using API Sensor Operator Add Connection in Airflow Webserver Test Airflow Task Sensor Operator path - AIRFLOW_HOME/dag/user_processing.py # user_processing.py ... from airflow.providers.http.sensors.http import HttpSensor with DAG( ... ) as dag: # Sensor Operator is_api_available = HttpSensor( task_id=\"is_api_available\", http_conn_id=\"user_api\", # the endpoint of the url endpoint=\"api/\" ) Add Connection in Airflow...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy3/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Extracting Users Using API",
        "excerpt":"Extracting Users Using API Action Operator Test Airflow Task Action Operator path - AIRFLOW_HOME/dag/user_processing.py # user_processing.py ... from airflow.providers.http.operators.http import SimpleHttpOperator import json with DAG( ... ) as dag: # Action Operator extracting_user = SimpleHttpOperator( task_id=\"extracting_user\", http_conn_id=\"user_api\", endpoint=\"api/\", # used GET cuz there's no need to send any data method=\"GET\",...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy4/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Processing Users Using Python Operator",
        "excerpt":"Processing Users Using Python Operator” Action Operator Action Operator path - AIRFLOW_HOME/dag/user_processing.py # user_processing.py ... from airflow.operators.python import PythonOperator from pandas import json_normalize import json # user process method def _processing_user(task_instance): # get data from extracting user users = task_instance.xcom_pull(task_ids=[\"extracting_user\"]) # check error if not len(users) or \"results\" not in...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy5/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Storing Users Using Bash Operator",
        "excerpt":"Storing Users Using Bash Operator Transfer(Bash) Operator Transfer(Bash) Operator path - AIRFLOW_HOME/dag/user_processing.py # user_processing.py ... from airflow.operators.bash import BashOperator with DAG( ... ) as dag: # Transfer Operator storing_user = BashOperator( task_id=\"storing_user\", bash_command='echo -e \".separator \",\"\\n.import /Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/tmp/processed_user.csv users\" | sqlite3 /Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/DE/airflow1/airflow.db' ) Test Airflow Task allows to test a specific...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy6/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Putting Order & Catch Up",
        "excerpt":"Putting Order &amp; Catch Up Putting Order Catch Up Putting Order &gt;&gt; - between dags to give order path - AIRFLOW_HOME/dag/user_processing.py # user_processing.py from airflow.models import DAG from airflow.providers.sqlite.operators.sqlite import SqliteOperator from airflow.providers.http.sensors.http import HttpSensor from airflow.providers.http.operators.http import SimpleHttpOperator from airflow.operators.python import PythonOperator from airflow.operators.bash import BashOperator from datetime import...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy7/",
        "teaser": null
      },{
        "title": "[Error] OSError: mysql_config not found",
        "excerpt":"OSError: mysql_config not found 상황 Python 가상환경에서 mysqlclient를 설치하고자 함 HomeBrew에서 mysql은 최신버전(8.x)으로 설치했음 .zshrc에 mysql 환경설정도 함 설치 과정에서 OSError: mysql_config not found 해결 mysql을 (5.7)으로 설치 Solution brew remove mysql brew install mysql@5.7 brew link --force mysql@5.7 echo 'export PATH=\"/usr/local/opt/mysql@5.7/bin:$PATH\"' &gt;&gt; ~/.zshrc Solution2 애초에 무거운 mysql 그 자체가...","categories": ["ERROR"],
        "tags": ["MYSQL","PYTHON"],
        "url": "/error/mysql_error1/",
        "teaser": null
      },{
        "title": "[Error] ERROR 1366 (HY000): Incorrect string value: \\xEC\\x9D\\xB4\\xEB\\xAF\\xB8",
        "excerpt":" ERROR 1366 (HY000): Incorrect string value: ‘\\xEC\\x9D\\xB4\\xEB\\xAF\\xB8     상황            MySQL에서 테이블에 INSERT 시 에러 발생       원인 - 한글로 된 데이터를 입력           해결            Table의 Charset 지정             Solution  ALTER TABLE member CONVERT TO CHARSET UTF8;    ref     🔗 참고  ","categories": ["ERROR"],
        "tags": ["MYSQL","PYTHON"],
        "url": "/error/mysql_error2/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow - MySQL Data Extract",
        "excerpt":"Airflow - MySQL Data Extract Required Package Installation Airflow - MySQL(local on Docker) Extract Airflow - MySQL(EC2) Extract Required Package Installation mysql은 homebrew를 통해 설치 및 .zshrc에 환결설정 등록 # venv 실행 후 pip3 install mysql-connector-python pip3 install mysqlclient pip3 install apache-airflow-providers-mysql # mysql provider 설치 확인 airflow providers list...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW","DOCKER"],
        "url": "/airflow/airflow4/",
        "teaser": null
      },{
        "title": "[Apache Airflow] Airflow Config",
        "excerpt":"Airflow Config 기본 Airflow Config Square Brackets to Combine Task 기본 Airflow Config Sqlite3는 동시에 multiple port를 허락하지 않음 따라서, task를 순차적으로 진행할 수 밖에 없음 Executor SequentialExecutor - Allows one task after another # venv에서 진행 # where airflow metadata is stored airflow config get-value core sql_alchemy_conn # what...","categories": ["AIRFLOW"],
        "tags": ["AIRFLOW"],
        "url": "/airflow/airflow_udemy8/",
        "teaser": null
      },{
        "title": "[NoSQL] MongoDB Shell",
        "excerpt":"MongoDB Shell MongoDB Shell Overall MongoDB Shell Find MongoDB Shell Update &amp; Remove &amp; Drop MongoDB Shell Aggregate MongoDB Shell Overall # 접속 mongosh -u \"root\" -p \"1234\" # show all DB show dbs; # db 생성 및 해당 db로 접속 (use [db_name]) use testDB; # 현재 접속해있는 db 삭제...","categories": ["NOSQL"],
        "tags": ["SQL","MONGODB"],
        "url": "/nosql/mongo1/",
        "teaser": null
      },{
        "title": "[Error] Postgres DB not showing in Dbeaver",
        "excerpt":" Postgres DB not showing     상황            Dbeaver에서 Postgres 연결 후 DB 만들고 refresh 했는데 DB가 보이지 않음       DB가 정상적으로 생성되긴 함           해결            아래와 같이 해결       1) Edit connection(우클릭)       2) Connection settings       3) panel 중에 2번쨰 PostgreSQL 클릭       4) Show all databases 클릭             ref     🔗 참고  ","categories": ["ERROR"],
        "tags": ["MYSQL","PYTHON"],
        "url": "/error/postgres_error1-copy/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 5692. 팩토리얼 진법",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 import sys # factorial method def factorial(n): return n * factorial(n-1) if n &gt; 1 else 1 if __name__ == \"__main__\": while 1: # get number num = sys.stdin.readline().rstrip() # if 0 break if...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(4)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] 진법변환 & 비트연산",
        "excerpt":"ALGORITHM 알고리즘 스터디(4) 진법변환 &amp; 비트연산 진법변환 진법 - 수를 셀 때 자릿수가 올라가는 단위를 기준으로 하는 셈법의 총칭하며, 사용하는 수자의 개수가 진법의 숫자를 의미 # 파이썬에서 진법 변환 함수 # 2진법 print(bin(10)) # 8진법 print(oct(10)) # 16진법 # 16진법 사용시 10=a, 11=b, 12=c, 13=d, 14=e, 15=f임 print(hex(162)) # 10진법으로...","categories": ["STUDY_ALGORITHM"],
        "tags": ["ALGORITHM"],
        "url": "/study_algorithm/algorithm_study4/",
        "teaser": null
      },{
        "title": "[Error] ParserError: Error tokenizing data. C error",
        "excerpt":" ParserError: Error tokenizing data. C error     상황            Pandas에서 df.read_csv(“filename.csv”)에서 에러 발생           해결            delimiter 명시             Solution  # df_book = pd.read_csv(\"books.csv\") df_book = pd.read_csv(\"books.csv\", sep =\"\\t\")    ref     🔗 참고1   🔗 참고2  ","categories": ["ERROR"],
        "tags": ["MYSQL","PYTHON"],
        "url": "/error/pandas_error1/",
        "teaser": null
      },{
        "title": "[Python] Reshaping Data with pandas(1)",
        "excerpt":"Pandas .transpose() - switch column &amp; row .pivot() - long to wide .pivot_table() - long to wide # import pkg &amp; dataset import numpy as np import pandas as pd df_fifa = pd.read_csv(\"players_20.csv\") .transpose() df1 = df_fifa.set_index(\"short_name\")[[\"height_cm\", \"weight_kg\"]] df1.head(3) height_cm weight_kg short_name L. Messi 170 72 Cristiano Ronaldo 187 83...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/introduction_to_data_reshaping/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 2745. 진법 변환",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 import sys import string if __name__ == \"__main__\": # get input n,b = sys.stdin.readline().split() # make dictionary matching alphabet:number d = dict(zip(string.ascii_uppercase, range(10, 36))) b = int(b) ans,j = 0,0 # add each digit_number...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(5)/",
        "teaser": null
      },{
        "title": "[Python] 10 minutes to Pandas",
        "excerpt":"10 Minutes Pandas Viewing Data Selection Missing Data Operation Merge Grouping Reshaping Time Series Categoricals Plotting Getting Data In / Out Gotchas Viewing Data # 필요한 패키지 불러오기 import numpy as np import pandas as pd import matplotlib.pyplot as plt # dataset school_list = [{'name': 'John', 'job': \"teacher\", 'age': 30},...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/10_minutes_pandas/",
        "teaser": null
      },{
        "title": "[Python] Reshaping Data with pandas(2)",
        "excerpt":"Pandas .melt() - wide to long pd.wide_to_long - wide to long function of pandas .str - handling string in pandas # import pkg &amp; dataset import numpy as np import pandas as pd df_book = pd.read_csv(\"books.csv\", sep =\",\", index_col=\"bookID\") df_book.head(1) title authors average_rating isbn isbn13 language_code num_pages ratings_count text_reviews_count publication_date...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/converting_between_wide_and_long_format/",
        "teaser": null
      },{
        "title": "[Python] Reshaping Data with pandas(3)",
        "excerpt":"Pandas pd.MultiIndex.from_arrays() - setting MultiIndex to a dataframe .stack() - rearrange innermost column index to become the innermost row index (즉, column들을 새로운 하나의 index로 처리) .unstack() - rearrange innermost row index to become the innermost column index innermost column or row index have the highest level .swaplevel() - exchange...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/stacking_and_unstacking_dataframes/",
        "teaser": null
      },{
        "title": "[Python] Reshaping Data with pandas(4)",
        "excerpt":"Pandas Using .stack with .mean() or .diff() .explode() - converts list contained column into separate rows pd.json_normalize() - converts json data into dataframe Convert nested data column # import pkg &amp; dataset import numpy as np import pandas as pd df = pd.read_csv(\"obesity.csv\") df_melted = df.melt(id_vars=\"country\") df_melted[[\"gender\", \"year\"]] = df_melted[\"variable\"].str.extract(\"([a-z]+)([0-9]+)\",...","categories": ["PYTHON"],
        "tags": ["PYTHON","PANDAS"],
        "url": "/python/advanced_reshaping/",
        "teaser": null
      },{
        "title": "[ALGORITHM] 해시",
        "excerpt":"ALGORITHM 알고리즘 스터디(5) 해시 해시 데이터를 다루는 기법 중 하나로 검색과 저장이 아주 유용한 구조 Key와 Value 쌍으로 데이터를 저장 Python에서는 dictionary 활용 Hash with Dictionary # 해시 구현 방법 hash = {} hash[1] = \"apple\" hash[\"banana\"] = 2 hash[(4,5)] = [1,2,3] hash[10] = {1:\"a\", 2:\"b\"} print(hash) # set, list,...","categories": ["STUDY_ALGORITHM"],
        "tags": ["ALGORITHM"],
        "url": "/study_algorithm/algorithm_study5/",
        "teaser": null
      },{
        "title": "[NoSQL] mongoexport & mongoimport",
        "excerpt":"MongoExport Installation Mongoexport Mongoimport Installation brew tap mongodb/brew brew install mongodb-database-tools Mongoexport # 방법1 mongoexport --uri=\"mongodb://root:1234@localhost:27017/testDB?authSource=admin&amp;retryWrites=true&amp;w=majority\" --collection=dept --out=dept_from_monogo.json # 방법2(추천) mongoexport --uri=\"mongodb://root:1234@localhost:27017/testDB\" --authenticationDatabase=admin --collection=dept --out=dept_from_monogo.json # 쿼리 넣어서 가져오기 mongoexport --uri=\"mongodb://root:1234@localhost:27017/testDB\" --authenticationDatabase=admin --collection=dept -q='{\"deptno\":{\"$gte\":30}}' --out=dept_from_monogo.json Mongoimport mongoimport --uri=\"mongodb://root:1234@localhost:27017/testDB\" --authenticationDatabase=admin -c=dept2 -d=testDB --file=emp_202201181218.json mongoimport –username joe –password secret1 mongodb://mongodb0.example.com:27017 –ssl ref...","categories": ["NOSQL"],
        "tags": ["SQL","MONGODB"],
        "url": "/nosql/mongo2/",
        "teaser": null
      },{
        "title": "[NoSQL] Introduction to MongoDB(1)",
        "excerpt":"MongoDB Mongoclient.my_database.my_collection - access database &amp; collection .count_documents() - count documents in collection .list_database_names() &amp; .list_collection_names() - list database/collection names .find_one() - retrieve a single document .keys() - return keys(field names) {[criteria]} - filter data Substructure - reach substructure using dot(.) import sys # install pymongo !conda install --yes --prefix...","categories": ["NOSQL"],
        "tags": ["SQL","MONGODB"],
        "url": "/nosql/fleibly_structure_data/",
        "teaser": null
      },{
        "title": "[NoSQL] Introduction to MongoDB(2)",
        "excerpt":"MongoDB .distinct() - get unique values $elemMatch - filter documents that matches all the specified query criteria $regex - filter documents matching regular expression # connect mongoDB from pymongo import MongoClient client = MongoClient( username=\"root\", password=\"1234\" ) db = client.nobel .distinct() # example of prize document db.prizes.find_one() {'_id': ObjectId('61e62ed9f373e66efa5b9694'), 'year':...","categories": ["NOSQL"],
        "tags": ["SQL","MONGODB"],
        "url": "/nosql/working_with_distinct_values_and_sets/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 15829. Hashing",
        "excerpt":" ALGORITHM Übung - 백준     알고리즘 문제 풀이를 통한 코딩 테스트 연습     문제     🔗 문제 링크   코드  import string  if __name__ == \"__main__\":     n = int(input())     s = input()     apb = string.ascii_lowercase      res = 0     print(sum([(apb.find(s[i])+1) * (31**i) for i in range(n)]) % 1234567891)   ","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(6)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 10829. 이진수 변환",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 def binary(n): # 2보다 작으면 재귀함수 종료 if n &lt; 2: return str(n) # 그렇지 않다면 n을 2로 나눈 수(나머지 없이)에 대해 재귀함수를 다시 호출 + n을 2로 나눴을 때 나머지를 더함 else: return...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(7)/",
        "teaser": null
      },{
        "title": "[NoSQL] Introduction to MongoDB(3)",
        "excerpt":"MongoDB Projection Sort Index # connect mongoDB from pymongo import MongoClient client = MongoClient( username=\"root\", password=\"1234\" ) db = client.nobel Projection # example of prize document db.prizes.find_one() {'_id': ObjectId('61e62ed9f373e66efa5b9694'), 'year': '2021', 'category': 'chemistry', 'laureates': [{'id': '1002', 'firstname': 'Benjamin', 'surname': 'List', 'motivation': '\"for the development of asymmetric organocatalysis\"', 'share': '2'}, {'id':...","categories": ["NOSQL"],
        "tags": ["SQL","MONGODB"],
        "url": "/nosql/get_only_what_you_need_fast/",
        "teaser": null
      },{
        "title": "[ALGORITHM] 재귀함수",
        "excerpt":"ALGORITHM 알고리즘 스터디(6) 재귀함수 재귀함수 메소드 혹은 함수의 내부에서 자기자신의 메소드 혹은 함수를 다시 호출하는 함수 # 각 변수를 조합하여 가능한 합을 출력 data = [3, 5, 8] def recur(index, value): if index == len(data): result.add(value) else: recur(index+1, value + data[index]) recur(index+1, value) result = set() recur(0,0) print(result) {0, 3,...","categories": ["STUDY_ALGORITHM"],
        "tags": ["ALGORITHM"],
        "url": "/study_algorithm/algorithm_study6/",
        "teaser": null
      },{
        "title": "[ALGORITHM] BOJ 10872. 팩토리얼",
        "excerpt":"ALGORITHM Übung - 백준 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 🔗 문제 링크 코드 def factorial(n): # 2보다 작으면 재귀함수 종료 if n &lt; 2: return 1 # 그렇지 않다면 n-1에 대해 재귀함수를 다시 호출 * n else: return factorial(n-1) * n if __name__ == \"__main__\": n =...","categories": ["BOJ"],
        "tags": ["ALGORITHM","BOJ"],
        "url": "/boj/boj(8)/",
        "teaser": null
      },{
        "title": "[Hadoop] Hadoop Installation  on Local(Mac)",
        "excerpt":"Hadoop Installation on Local(Mac) Hadoop Installation 환경변수 설정 사전 준비 Hadoop 실행 MapReduce 실행 Error 관련 Hadoop Installation 설치환경 OS: macOS Big Sur 11.6 Hadoop: 3.3.1 brew install hadoop # hadoop은 openjdk에 dependency가 존재하기에 hadoop 설치시 자동으로 설치됨 # 만약 기존에 사용하던 openjdk가 존재하는 경우 제거 가능 환경변수 설정 directory:...","categories": ["HADOOP"],
        "tags": ["HADOOP"],
        "url": "/hadoop/hadoop1/",
        "teaser": null
      },{
        "title": "[Web Crawling] Crawling Kid News by Scrapy",
        "excerpt":"Web Crawling 가상환경 및 scrapy 프로젝트 구축 사전 확인 Requests Requests 한글 깨짐 Code items.py spiders/kidnews_spider.py pipelines.py settings.py scrapy 실행 가상환경 및 scrapy 프로젝트 구축 # 가상환경 구축 python3 -m venv venv source venv/bin/activate # python library 설치 pip3 install scrapy pip3 install ipykernel pip3 install pymongo pip3 install requests...","categories": ["WEB_CRAWLING"],
        "tags": ["SCRAPY","PYTHON"],
        "url": "/web_crawling/web_crawling1/",
        "teaser": null
      }]
