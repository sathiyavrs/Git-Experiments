# Notes

### Chapter 2: Git Basics

Git is a version control system.

`git help <verb>` is the command to get help about a particular git command. Usually launches a browser window.

`git init` is the command to initialize usage of git in an existing project. Creates a (hidden) folder `.git`.

Note that **no files are tracked at this stage**. To initialize tracking of files, use the `git add` command.

There appears to be an important distinction between `git clone` and `git checkout`. The checkout version seems to be what was available in other version control systems. *Cloning,* on the other hand, seems to pull all the history of all the files upto that point in the project.

The syntax to clone is `git clone <link>`. An example: `git clone https://www.github.com/sathiyavrs/HitTheGreenSquare`. A directory named *HitTheGreenSquare* is created.

`git status` allows you to determine which files are in which state in your repository. It gives out information about which branch you're in too. Note that only tracked files can have their state monitored.

To track files, use the `git add <file>` command. Example: `git add Notes.md`. To add all untracked files, simply use `git add *`.

The word *Untracked* is an adjective assosciated with files git did not notice in the previous snapshot.
The word *Modified* is an adjective assosciated with files git had tracked and has concluded to have been modified.
Perform a `git add *` to stage all untracked and modified files for commit.

Use `git status -s` to perform a short status. Same as `git status --short`. Also, use `git status --verbose` or `git status -v` to (obviously) perform a verbose git operation. 

Use `git diff` to view the differences in all the files. It compares the snapshot at the latest commit with this version, and prints out the differences. Can also use `git diff <file>` to get the differences in that particular file. Useful if `git diff` goes on forever. Once again, there exists a ton of options. 
Use `git diff --staged` to see what has benn staged for the next commit.

**Also, checkout `git difftool` later. After you've learned enough vim.**

`git commit` is the general command to commit the staged area. Without the `-m` option, the command opens up a file, called `COMMIT_EDITMSG` within the `.git` folder, which it then checks for the commit message. With the `-m` option, however, we can specify a commit message within the command. Example: `git commit -m 'Fixed physics bug'`.
`git commit -a` skips the staging area. It adds all modifications to all tracked files. It does no addition of untracked files though.

The git *index* is where you place your files that you want commited to the git repository. Synonymous to this term are:
* index
* Cache
* Directory Cache
* Current Directory Cache
* Staging area
* Staged Files

I'm guessing the *index* is the file called `index` in the `.git` folder.

`git rm <filename>` is the file to remove a particular file from the directory and track its removal in git. Doing a normal `rm <filename>` will not allow git to track the removing of that file. You've gotta do a `git rm` after that anyway. So, what's the point? 
You can also use `git rm <filename> --cached` to remove files that have been added to the *git index*.

`git mv` is used mainly to rename a file as `git mv README.md README`. However, this command is basically an encapsulation of three commands: `rni`, `git rm`, `git add`.

`git log` is the easiest way to figure out the history of a project. It lists all commits in reverse chronological order, along with the SHA-1 checksum, author's name and email id, and the commit message.
I'm just gonna list all the important options here.

* `git log -p` shows the differences introduced in each commit.
* `git log -2` limits the logs to the last two commits.
* `git log --stat` shows abbreviated stats for each of the commits.
* `git log --pretty=<parameter_value>` formats the git log in a really *pretty* way.

The `pretty` option allows for the `format` parameter, which can be used in multiple different ways. The options are a little verbose to list, so I'll include a link here: [*Log Formatting Options*](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History).

`git commit --amend` is a really useful command to undo the last commit. Okay, its not that easy. This is mainly used to stop stupid errors where you commit too quickly without staging all the files to commit (basically you've not done `git add *`). Below are a sequence of commands that can potentially work:

* `git commit -m 'Stuff'`
* `git add forgotten_file`
* `git commit --amend`

The results of the previous commit are overwritten by the next commit.

If you'd like to unmodify a modified file, use `git checkout -- <filename>`.
