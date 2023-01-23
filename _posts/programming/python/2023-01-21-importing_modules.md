---
title: "[Python] Importing Modules"
date: '21/01/2023'
layout: single
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - PYTHON
tags:
  - PYTHON
---

### How Python import modules
* In High Level
  * Checks the `sys.modules` cache to see if the module has already been imported
  * If not, creates a new module object (`types.ModuleType`)
  * Loads the source code from file
  * Adds an entry to `sys.modules` with name as key and the newly created
  * Compiles and executes the source code

```python
# where python is installed
sys.prefix

# Where the python environment is
sys.exec_prefix

# where python look for imports
sys.path

# dictionary of modules in the main(current) modules
sys.modules
```