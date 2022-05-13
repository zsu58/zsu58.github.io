---
title: "[Python] Directory"
date: '25/04/2022'
layout: single
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

### Directory
* Script is in directory /home/user/test/my_script.py

```python
import os

# Outcome depends on how the script is executed 
# Results can be my_script, ./my_script, /home/user/test/my_script.py
currentFile = __file__

# full path of the script (/home/user/test/my_script.py)
realPath = os.path.realpath(currentFile)

# get directory of the script
dirPath = os.path.dirname(realPath)
os.path.dirname(os.path.realpath(__file__))

# get folder name where the script is in
dirName = os.path.basename(dirPath)
```

### ref 
* [🔗 참고](### ref 
* [🔗 참고](https://stackoverflow.com/questions/5178292/pip-install-mysql-python-fails-with-environmenterror-mysql-config-not-found))