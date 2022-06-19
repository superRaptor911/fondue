let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/program/reactnative/fondue
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +45 App.js
badd +52 src/screens/Login.js
badd +135 src/screens/Signup.js
badd +28 src/screens/Home.js
badd +9 src/components/CardItem.js
badd +9 src/screens/Dashboard.js
badd +2 src/screens/Splash.js
badd +56 src/api/api.js
badd +31 src/api/request.js
badd +140 src/components/SearchDropDown.js
badd +56 src/screens/ViewRecipes.js
badd +13 src/components/NavBar.js
argglobal
%argdel
edit src/screens/Splash.js
argglobal
balt App.js
let s:l = 29 - ((28 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 29
normal! 019|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
