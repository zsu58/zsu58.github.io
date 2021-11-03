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
        "title": "[SQL] SELECT & FROM & DISTINCT &COUNT & LIMIT",
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
        "excerpt":"SQL Übung SQL 문법 정리(2) WHERE을 통해 filter WHERE는 FROM 이후에 작성 WHERE 조건이 여러개일 경우 조건을(AND, OR) 모두 작성해줘야함 BETWEEN을 통해 범위 filter 가장 처음과 마지막은 포함 IN을 통해 (여러개의 OR) 간소화 IS NULL을 통해 NULL filter IS NOT NULL을 통해 NULL이 아닌 값을 filter LIKE을 통해 pattern을 활용하여...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_2_filter/",
        "teaser": null
      },{
        "title": "[SQL] AVG & SUM & MAX & MIN & AS",
        "excerpt":"SQL Übung SQL 문법 정리(3) AVG 평균 SUM 합계 MAX 최대값 MIN 최소값 연산자 + - / * % AS를 통해 column의 이름 수정 SUM 1-1) Aggregate functions Get the total duration of all films. SELECT SUM(duration) FROM films; MIN 1-2) Aggregate functions Get the duration of the shortest film...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_3_aggregate/",
        "teaser": null
      },{
        "title": "[SQL] ORDER BY & GROUP BY & HAVING",
        "excerpt":"SQL Übung SQL 문법 정리(4) ORDER BY를 통해 정렬 ORDER BY 는 FROM 이후에 작성 DEFAULT는 ASCENDING, DESC를 통해 DESCENDING 가능 GROUP BY를 통해 집단 별 통계치 구함 GROUP BY 는 FROM 이후에 작성 ORDER BY와 GROUP BY 함께 쓸 경우, GROUP BY → ORDER BY HAVING을 통해 COUNT를 통해...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql_4_sorting_grouping/",
        "teaser": null
      },{
        "title": "[SQL] INNER JOIN & USING & CASE WHEN",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(1) INNER JOIN ON 을 통해 동시에 존재하는 데이터 join key값이 같은 경우 ON 대신 USING() 사용 가능 CASE WHEN &amp; THEN, WHEN &amp; THEN ELSE &amp; END를 통해 조건에 따른 column 만들 수 있음 INTO를 통해 query를 만들 수 있음 INNER JOIN 1-1) INNER...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_1_inner_join/",
        "teaser": null
      },{
        "title": "[SQL] LEFT JOIN & RIGHT JOIN & FULL JOIN & CROSS JOIN",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(2) LEFT JOIN ON 을 통해 왼쪽 데이터를 기준으로 오른쪽 데이터를 join RIGHT JOIN ON 을 통해 오른쪽 데이터를 기준으로 왼쪽 데이터를 join FULL JOIN ON 을 통해 왼쪽 전체와 오른쪽 전체 데이터를 join key값이 같은 경우 ON 대신 USING() 사용 가능 CROSS JOIN ON...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_2_outer_join/",
        "teaser": null
      },{
        "title": "[Python] Dplyr to Pandas",
        "excerpt":"dplyr to pandas # import data import seaborn as sns import pandas as pd import re iris_df = sns.load_dataset('iris') print(type(iris_df)) &lt;class 'pandas.core.frame.DataFrame'&gt; dplyr::mutate() # dplyr iris_df %&gt;% mutate(New_feature= Petal.Width*Petal.Length/2) # pandas iris_df[\"New_feature\"] = iris_df[\"petal_width\"] * iris_df[\"petal_length\"] / 2 dplyr::select() # dplyr iris_df %&gt;% select('sepal_length', 'sepal_width') # pandas iris_df[['sepal_length', 'sepal_width']] #...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/dplyr_to_pandas/",
        "teaser": null
      },{
        "title": "[Python] range & enumerate & map & numpy",
        "excerpt":"Writing Efficient Python Code RANGE ENUMERATE MAP NUMPY range 1) range Create a new list of odd numbers from 1 to 11 by unpacking a range object num_list = [*range(1,12,2)] print(num_list) [1, 3, 5, 7, 9, 11] enumerate 2) enumerate names = ['Jerry', 'Kramer', 'Elaine', 'George', 'Newman'] # method 1...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/foundations_for_efficiencies/",
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
        "excerpt":"Writing Efficient Python Code PART4 iterrows를 통해 row별 iterration 가능 iterrows를 쓸 경우 index와 pandas Series로 구성되어 있는 tuple을 반환 itertuples를 통해 row별 iterration 가능 itertuples를 쓸 경우 namedtuple 형태를 반환 pd.applys을 통해 loop 대체 가능 0: columns, 1: rows 효율성: .values &gt; pd.applys &gt; itertuples &gt; iterrows # import...","categories": ["PYTHON"],
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
        "excerpt":"ALGORITHM 알고리즘 정리(11) Brute Force(3) 벽 사이 빗물 최대량 def trapping_rain(buildings): total_height = 0 for i in range(1, len(buildings) - 1): max_left = max(buildings[:i]) max_right = max(buildings[i:]) upper_bound = min(max_left, max_right) total_height += max(0, upper_bound - buildings[i]) return total_height print(trapping_rain([0, 3, 0, 0, 2, 0, 4])) print(trapping_rain([0, 1, 0, 2,...","categories": ["CODEIT"],
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
        "title": "[Docker] Docker 명령어",
        "excerpt":"Docker Docker 관련 명령어 정리 Docker 관련 명령어 # 로그인 docker login # image 설치는 docker hub에 접속해서 설치를 희망하는 image의 명령어(pull)를 사용하면 됨 docker pull mysql # 설치되어 있는 이미지 보기 docker images # 컨테이너 생성 (docker run --name [name_of_container] [image]) docker run --name ws2 httpd # 기존의 존재하는...","categories": ["DOCKER"],
        "tags": ["CLI","BACKEND","DOCKER"],
        "url": "/docker/docker1/",
        "teaser": null
      },{
        "title": "[SQL] UNION & INTER & EXCEPT",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(3) UNION을 통해 두 데이터 간 합집함을 가져올 수 있음 중복되는 데이터는 한 개만 포함됨 UNION되는 데이터 세트의 열 개수가 같아야 함 UNION되는 데이터들의 열의 자료형이 같아야 함 UNION ALL을 통해 두 데이터 간 합집합 + 교집합을 가져올 수 있음 중복된 데이터는 2개가 존재 INTER을...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_3_set_theory_clauses/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (1)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 1 18/10/2021 def solution(x, n): return [x + x*i for i in range(n)] 문제 2 18/10/2021 def solution(arr1, arr2): return [[sum(j) for j in zip(*i)] for i in zip(arr1, arr2)] 문제 3 18/10/2021 a, b = map(int, input().strip().split('...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(1)/",
        "teaser": null
      },{
        "title": "[SQL] Subquery",
        "excerpt":"SQL Übung SQL JOIN 문법 정리(4) Subquery - WHERE/ SELECT/ FROM 안에 쿼리를 쓰는 것 Subquery (inside WHERE) 가장 많이 사용됨 Select all fields from populations with records of 2015 that are larger than 1.15 times the average life expectancy SELECT * FROM populations WHERE year = '2015' AND life_expectancy...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/sql2_4_subquery/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(1)",
        "excerpt":"Pandas Inspecting dataframe .info() .shape .describe Sort .sort_values() select df[['column1', 'column2']] filter df[df[column] == 'condition'] mutate df[column] = df[column] + 1 # import data import seaborn as sns import pandas as pd iris = sns.load_dataset('iris') .info() &amp; .shape &amp; .describe() df.info df.shape df.describe # Print information about iris print(iris.info()) #...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/transforming_dataframes/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(2)",
        "excerpt":"Pandas Aggregating dataframe pandas Series인 상태로 계산하면 계산값이 int/float 형태로, pandas Dataframe 상태로 계산하면 dataframe으로 반환 .mean() - 평균 .median() - 중위값 .mode() - 최빈값 .max() - 최대값 .min() - 최소값 .var() - 분산 .std() - 표준편차 .sum() - 합 .quantile() - 분위수 .agg() - custom function 사용이 가능하게 함...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
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
        "tags": ["PYTHON"],
        "url": "/python/slicing_indexing_dataframe/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (2)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 11 21/10/2021 from math import sqrt def solution(n): return int((sqrt(n)+1)**2) if sqrt(n) == int(sqrt(n)) else -1 # 다른 사람의 좋은 풀이 def solution(n): sqrt = n ** (1/2) if sqrt % 1 == 0: return (sqrt + 1)...","categories": ["PROGRAMMERS"],
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
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 21 24/10/2021 def solution(seoul): for i in range(len(seoul)): if seoul[i] == \"Kim\": return \"김서방은 \"+ str(i)+\"에 있다\" # 다른 사람의 좋은 풀이 def solution(seoul): return \"김서방은 {}에 있다\".format(seoul.index(\"Kim\")) 문제 22 24/10/2021 if len(s) == 4 or len(s) ==...","categories": ["PROGRAMMERS"],
        "tags": ["ALGORITHM","PROGRAMMERS"],
        "url": "/programmers/programmers_coding_test(3)/",
        "teaser": null
      },{
        "title": "[Python] Data manipulation with pandas(4)",
        "excerpt":"Pandas Creating and Visualizing DataFrames .plot() kind=”bar”/ “line”/ “scatter” .hist() .legend() Missing data .isna() Read &amp; write dataframe pd.read_csv() .to_csv() # import data import seaborn as sns import pandas as pd import matplotlib.pyplot as plt iris = sns.load_dataset(\"iris\") .plot() kind=”bar” petal_len_by_species = iris.groupby(\"species\")[[\"petal_length\"]].mean() petal_len_by_species.plot(kind=\"bar\") plt.show() kind = “line” sp_wd_by_sp_len =...","categories": ["PYTHON"],
        "tags": ["PYTHON"],
        "url": "/python/creating_and_visualizing_dataframes/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 1725. Number Of Rectangles That Can Form The Largest Square",
        "excerpt":" ALGORITHM Übung - LeetCode     알고리즘 문제 풀이를 통한 코딩 테스트 연습     문제  문제 링크   코드  class Solution(object):     def countGoodRectangles(self, rectangles):         rect_list = [min(rectangle) for rectangle in range(rectangles)]         maxLen = max(rect_list)          result = 0         return sum([i for i in rect_list if maxLen == i])    ","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_recursion1-copy/",
        "teaser": null
      },{
        "title": "[ALGORITHM] LeetCode 1. Two Sum",
        "excerpt":"ALGORITHM Übung - LeetCode 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 문제 링크 코드 # 풀이1 - Brute Force class Solution(object): def twoSum(self, nums, target): \"\"\" :type nums: List[int] :type target: int :rtype: List[int] \"\"\" for i in range(len(nums)): for j in range(i+1,len(nums)): if nums[i] + nums[j] == target:...","categories": ["LEETCODE"],
        "tags": ["ALGORITHM","LEETCODE"],
        "url": "/leetcode/leetcode_top100_liked(1)/",
        "teaser": null
      },{
        "title": "[ALGORITHM] Programmers ALGORITHM 연습문제 Lv1 (4)",
        "excerpt":"ALGORITHM Übung - Programmers 알고리즘 문제 풀이를 통한 코딩 테스트 연습 문제 31 30/10/2021 def solution(price, money, count): return max(sum([price*i for i in range(1,count+1)])-money,0) 문제 32 31/10/2021 def solution(n): for i in range(1,n): if n%i == 1: return i 문제 33 1/11/2021 def solution(sizes): max_size = max(sizes[0]) min_size = min(sizes[0])...","categories": ["PROGRAMMERS"],
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
        "excerpt":"UNIX COMMAND LINE UNIX CLI 정리(4) bash: shell script 수행 $@ : bash를 통해 shell script를 실행할 때 변수를 받을 수 있게 함 bash bash [shell_script_name]을 통해 shell script(shell 명령어만 폼한된 텍스트 파일)의 명령어를 실행 shell script는 주로 [file_name].sh로 저장 # command를 입력할 shell script를 vim을 이용해 생성 vim print_header.sh...","categories": ["CLI"],
        "tags": ["CLI","BACKEND","DATA-ENGINEERING"],
        "url": "/cli/CLI_4/",
        "teaser": null
      },{
        "title": "[SQL] SQL 날짜",
        "excerpt":"SQL 날짜 SQL 날짜 관련 문법 정리 YEAR : DATE형 자료형에서 연도만 추출 MONTH : DATE형 자료형에서 월만 추출 DAYOFMONTH : DATE형 자료형에서 일만 추출 DATEDIFF : DATE형 자료형들 간 날짜 차이 산출 CURDATE : 오늘 날짜 DATE_ADD : 날짜 더하기 DATE_SUB : 날짜 빼기 UNIX_TIMESTAMP : DATE 자료형을 Unix...","categories": ["SQL"],
        "tags": ["SQL"],
        "url": "/sql/codeit_sql1/",
        "teaser": null
      }]
