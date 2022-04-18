---
title: "[Python] %timeit & %lprun & %mprun"
layout: single
date: '17/09/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

---
### Writing Efficient Python Code
* PART2
* ```%timeit```을 통해 runtime을 examine할 수 있음
    * -r2를 통해 전체 run 횟수를, -n을 통해 한 run에서 몇 회 반복할지 설정 가능
    * ```%%timeit```을 통해 multiple-line code의 runtime을 examine할 수 있음
    * ns = nanosecond 10^-9
    * µs(us) = microsecond 10^-6
    * ms = millisecond 10^-3
    * s = second 10^0
    * ipython에서만 가능(Jupyter notebook에서도 가능), script에 쓰고 싶은 경우 tiemit modeul 사용
* line profiler 라이브러리의 ```%lprun```을 통해 line 별 runtime을 examine할 수 있음
<br><br>
* memory profiler 라이브러리의 ```%mprun```을 통해 lineq 별 memory를 examine할 수 있음
    * function examine 위해서는 다른 파일로부터 function을 import해야함

---

### %timeit


```python
%timeit [num for num in range(51)]
%timeit [*range(51)]
```

    2.03 µs ± 90.2 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)
    594 ns ± 53.3 ns per loop (mean ± std. dev. of 7 runs, 1000000 loops each)



```python
%timeit -r2 -n10 [*range(51)]
```

    708 ns ± 65 ns per loop (mean ± std. dev. of 2 runs, 10 loops each)



```python
%timeit list()
%timeit []
```

    83.8 ns ± 8.9 ns per loop (mean ± std. dev. of 7 runs, 10000000 loops each)
    28.4 ns ± 1.35 ns per loop (mean ± std. dev. of 7 runs, 10000000 loops each)


---

### %%timeit


```python
%%timeit -r2 -n10
num_list = [1,2,3,4,5]
mul_num_list = []
[mul_num_list.append(num * 2) for num in num_list]
```

    2.31 µs ± 781 ns per loop (mean ± std. dev. of 2 runs, 10 loops each)


---

### %lprun


```python
# Jupyter Notebook에서 패키지 설치
# import sys
# !{sys.executable} -m pip install line_profiler

import numpy as np
%load_ext line_profiler

heroes = ['Batman']
hts = np.array([188.0])
wts = np.array([95.0])

def convert_units_broadcast(heroes, heights, weights):

    # Array broadcasting instead of list comprehension
    new_hts = heights * 0.39370
    new_wts = weights * 2.20462

    hero_data = {}

    for i,hero in enumerate(heroes):
        hero_data[hero] = (new_hts[i], new_wts[i])

    return hero_data

%lprun -f convert_units_broadcast convert_units_broadcast(heroes, hts, wts)

# time이 적을수록 gut!
```

---

### %mprun

```python
# Jupyter Notebook에서 패키지 설치
# import sys
# !{sys.executable} -m pip install memory_profiler

from hero_funcs import convert_units

%load_ext memory_profiler
%mprun -f convert_units convert_units(heroes, hts, wts)

# Mem usage가 적을수록 gut!
```

---