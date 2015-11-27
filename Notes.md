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

** Also, checkout `git difftool` later. After you've learned enough vim. **


