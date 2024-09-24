# sshkey push output
```bash 
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ touch gitignore
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ touch .gitignore
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ cat .gitignore
/node_modules
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git add .
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git commit -m
 "another commit"
[master cb74e96] another commit
 6 files changed, 83 insertions(+), 25 deletions(-)
 create mode 100644 .gitignore
 create mode 100644 routes/users.js
 rewrite sampletwo.js (98%)
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git branch -M main
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git remote add origin git@github.com:poojag7277/sampleExample.git
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/sdvm8/.ssh/id_rsa): 
Created directory '/home/sdvm8/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/sdvm8/.ssh/id_rsa
Your public key has been saved in /home/sdvm8/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:yDEj10i9XoqUJX5VpzP8G45YtSRqV4mfVirzZ9Tef/A sdvm8@DESKTOP-8
The key's randomart image is:
+---[RSA 3072]----+
|      ..   .. .  |
|     ..oo .. + . |
|    ..*+.o  B = .|
|     ++=o .. X =.|
|     .o+Soo = O o|
|      . o. + B.=.|
|          . . +o=|
|               oE|
|                o|
+----[SHA256]-----+
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ cat /home/sdvm8/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDWAWk5yNpOInJbFUg0Lat3EXEXHlUdfMw7oiWeBsT/UzfE04Fi0pLBcivOr99FUK6AffLofN8BE6DMxGN/27bzHB9lBPcZHwy2yWGmRw/XGJiYJZyekqkqbDIswMzNRV7sKtuG2SI91PbyRnTghODbM8XLhhy7INo6EgPNg19Eg1UWoQg7ORq8Y1IZ5IsmrNNAaTUhjnzTrVdVZuk69lLF3cNRymGEXi8RZnmhJV3NL/jgoGMH6IL4Lb9wDG6zYnVYKgrM/0+V+vwC0AUr1OyVmcCpDEinfqpBXeTgDvk1VQXhg7qViN4K02LczWwAaOG9kSXhsm6jm7UFHMh4xR7Kgs/E0lnbpnQ7R8a2Ifspobvcfs1eg031PBnY/fVWShAKAXZmOx0VZ2ttpkFe6j+lFPu8qd4/qIQ1sMdu3wbdM9V+07igeNmqBUjuQmC7T34JRYdvnqlGZYUglSerVj1Uxb29M/F/AZ5amQ8xICav1A0iD3SROp2de3DMZabyZns= sdvm8@DESKTOP-8
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git push
fatal: The current branch main has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin main

sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$ git push --set-upstream origin main
The authenticity of host 'github.com (20.207.73.82)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Enumerating objects: 624, done.
Counting objects: 100% (624/624), done.
Delta compression using up to 4 threads
Compressing objects: 100% (584/584), done.
Writing objects: 100% (624/624), 683.99 KiB | 219.00 KiB/s, done.
Total 624 (delta 117), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (117/117), done.
To github.com:poojag7277/sampleExample.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
sdvm8@DESKTOP-10:/mnt/c/Users/SDVM-8/Documents/newProject/expresse-file$
```
