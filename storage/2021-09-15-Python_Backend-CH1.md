---
title: "[PYTHON BACKEND] 깔끔한 파이썬 탄탄한 백엔드 CH1"
layout: single
date: '15/9/2021'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - BACKEND
tags:
  - PYTHON
  - BACKEND
---

---
<b>깔끔한 파이썬 탄탄한 백엔드</b>
### CH1 파이썬 설치 및 개발 환경 구성
* 홈브루/파이썬/파이썬 가상 환경/ 터미널/ 깃/ 셸/ 에디터 설치 (Mac 기준)

---

### Homebrew & Python3
* Homebrew는 명령어 인터페이스(CLI) 환경에서 패키지를 설치할 때 사용되는 패키지 관리자 프로그램
* Homebrew는 기본적으로 맥에 미리 설치되어 있음, 만약 설치되어 있지 않다면 아래 코드 참고

```python
# 홈브루 설치 명령어
/usr/bin/ruby -e "(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

```python
# 홈브루 통한 파이썬 설치
brew install python
```
---

### Python Virtual Environment
* Anaconda와 Miniconda 중 선택, Anaconda가 용량이 더 크며 특히 Data Science 분야 프로젝트시 필요
* https://docs.conda.io/en/latest/miniconda.html #miniconda

```python
# 파일 다운로드 완료 후 다음의 명령어 입력
bash ./Miniconda30-latest-MacOSX-x86_64.sh

# 설치 완료 후 다음 명령어 입력 콘다 제대로 작동하는지 확인
conda list
```
---

### Terminal
* https://iterm2.com
* 색상 테마 변경 : Preference ➡️ Profiles ➡️ Colors ➡️ Color Presets
* iTerm의 색 메타 페이지(https://github.com/mbadolato/iTerm2-Color-Schemes)를 통해 다른 색상 테마 선택 가능

---

### Git

```python
# 홈브루 이용하여 설치
homebrew install git

# 설치 잘 되었는지 확인
git --version

# 깃에서 사용할 사용자 이름 & 이메일 설정
git config --global user.name 'ZSU'
git config --global user.email 'carl020958@korea.ac.kr'

#Git 관련 터미널 툴
# 1)TIG(깃 커밋 히스토리를 터미널에서 보여주는 툴)
homebrew install tig

# 2)Diff So Fancy(git diff의 출력 화면을 터미널상에서 더 보기 쉽게 출력해주는 깃 플러그인)
brew install diff-so-fancy
```
---

### Shell

```python
# ZSH
brew install zsh zsh-completions

# 설치 완료 후 default shell 변경
sudo -s 'echo /usr/local/bin/zsh >> /etc/shells' && chsh -s /usr/local/bin/zsh 

# 터미널 창을 닫고 새로 열면 ZSH이 default shell로 변경됨
# 다음 명령어를 통해 ZSHdㅣ 정상적으로 default shell로 변경됐는지 확인
echo $SHELL

# Oh My Zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# .zshrc 파일 수정시 다음 명령어 입력
vim ~/.zshrc

# ZSH plugin 중 zsh-syntax-highlighting & history-substring-search 추천

# ZSH로 변경 후 CONDA가 실행되지 않는 경우, ZSH상에서 콘다의 경로를 PATH 환경 변수에 포함
export PATH="/Users/ZSU/Miniconda3/bin:$PATH
```

```python
# plugin 'zsh-autosuggestion' not found 해결
# 1) 설치(terminal)
brew install zsh-autosuggestions

# 2) 설치2(terminal)
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# 3) .zshrc plugin에 추가(vim ~/.zshrc)
plugins=( [plugins...] zsh-syntax-highlighting)

# 4) 업데이트(terminal)
source ~/.zshrc

# plugin 'zsh-syntax-highlighting' not found 해결
# 1) 설치(terminal)
brew install zsh-syntax-highlighting

# 2) 설치2(terminal)
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# 3) plugin에 추가(vim ~/.zshrc)
 plugins=([plugins...] zsh-syntax-highlighting)

# 4) 업데이트(terminal)
source ~/.zshrc
```
---

### Editor
* sublime text (https://www.sublimetext.com)

```python
# 저자는 VIM 추천(다른 IDE가 다양한 기능 제공해 오히려 언어의 숙련도를 높이는 데 방해되기에)
brew install vim
```