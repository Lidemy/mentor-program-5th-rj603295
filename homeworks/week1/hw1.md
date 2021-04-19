## 交作業流程
1. git branch HW-week1
2. git checkout HW-week1
3. git add .
4. git commit -m "first commit"
5. git push -u origin HW-week1
6. 到 github 上點選 compare & pull request
7. 在 Open a pull request 底下寫 Title，下 Comment
8. 到學習系統裡面按繳交作業，把 PR 的網址貼上去
9. 完成繳交
 - 等到作業被改完並且 merge 以後：
1. 使用 `git checkout master` 切換到 master
2. 使用 `git pull origin master` 把遠端最新的更動拉下來
3. 使用 `git branch -d HW-week1` 把已經 merge 的 branch 刪掉
