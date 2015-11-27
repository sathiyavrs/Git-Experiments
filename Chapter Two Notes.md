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

##### Viewing History

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

##### Working with Remotes

Remotes are repositories hosted on the internet. Remote repositories, if you will. They're handled as a *url* and a *name* combination.

`git remote` will list the shortnames of all remotes linked with this git controlled project. A useful option is `-v`, which will list the shortnames along with the urls.

To add a remote, use `git remote add <remote-name> <url>`.

The difference between `git remote` and `git pull` seems to be as follows: pulling is branch specific, and fetching is not branch specific. Fetching fetches all data from the remote.

The syntax of fetching is `git fetch <remote-name>`. It fetches all data from the remote, but does no merging. Merging is up to the controller.

The syntax of pulling is `git pull <remote-name> <branch-name>`.

The syntax of pushing is `git push <remote-name> <branch-name>`.

A couple of other commands of which I see no importance to explain now are
* `git remote show <remote-name>`
* `git remote rename <remote-name-old> <remote-name-new>`
* `git remote rm <remote-name-to-delete>`

We'll probably be looking into branching in the next chapter.

##### Tagging

Tagging is seen by GitHub as releases. It is typically used for marking a point in history as important.

`git tag` lists all the tags made so far.

To create an annotated tag, use `git tag -a <tag-name> -m <tag-message>`. The *Tag Name* can be anything. So can the *Tag Message*. To create a lightweight tag, use `git tag <tag-name>`.

Use the `git show <tag-name>` to show the tag data along with the commit.

Tagging seems to happen to all the commits before it. So be sure to commit before tagging that point of history as important. Note that the tag is assigned to the direct previous commit..

To go several steps back, we can use `git tag -a <tag-name> <SHA1-commit-identifier>`.

Usually, tags aren't pushed. To push them, use either `git push <remote-name> <tag-name>`, or `git push <remote-name> --tags`.

To checkout a tag, use `git checkout -b <branch-name> <tag-name>`.

##### Aliases

Oh man, these are so cool. Aliases are shortcuts for git commands. 

For example, after executing `git config --global alias.stat status`, `git status` and `git stat` are the same.
