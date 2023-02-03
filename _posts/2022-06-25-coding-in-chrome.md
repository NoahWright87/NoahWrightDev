---
title: "Programming on a Chromebook"
subtitle: "A surprisingly pleasant experience"
tagline: "A surprisingly pleasant experience"
# excerpt: 
# header:
#     teaser: "/assets/images/post-content/__________________.jpg"
#     overlay_image: "/assets/images/post-content/__________________.jpg"
#     overlay_filter: 0.5
# tags: a, b, c
toc: true
toc_sticky: true
published: true
---

//TODO:
- Been at Google a little while now and it has taken some getting used to programming inside of a browser
- Weirdly enough, I'm coding *this* in a browser right now.  Talk about how you can hit `.` or change the .com to .dev in GitHub to edit pages in an online VS Code editor
- Compare to my behemoth gaming laptop, which is what I've always tried to buy
- Future plan: get a RIDICULOUSLY POWERFUL desktop and a RIDICULOUSLY LIGHTWEIGHT laptop.  I can then:
    - Edit small stuff like this in the browser
    - Remote into desktop for heavier programming tasks
    - Still play Steam, etc on my TV / phone / thin laptop


When I started at Google, they gave me my assigned laptop and I was shocked to find out it was, *gasp*, a Chromebook!?  For a software engineer position?  How would that even work?  Well, let me tell you...

> TL;DR:
> - I do all my work at Google on a Chromebook, and it has worked surprisingly well.
> - Have a GitHub repo?  Hit `.` on your keyboard to edit in your browser.
> - Thanks to Chrome Remote Desktop, I'll never need a heavy laptop again!

## ☁ Coding in the cloud

While it is possible to install VS Code directly onto a Chromebook, that's not how I write code at Google.  Instead, I use a web-based editor directly in Chrome.  This is made possible by Google's so-called *Client in the Cloud* (CitC).  Basically, instead of creating a local branch of the code repo, you create a new workspace that exists in the cloud to track your changes.  I make changes in a web-based editor, and those changes are immediately saved back to the cloud.

"*But I don't have Google's cloud to host my code!*" you say?  Maybe not, but you do have Github!

Go to any repo you have and press `.` (period) on your keyboard.  This will redirect you from Github**.com** to Github**.dev** and open a web version of VS Code.  You can edit your code directly in the browser and merge your changes without ever having to install an editor to your machine!  In fact, I'm writing this blog post in Chrome right now.

## 🖥 Chrome Remote Desktop

As cool as editting code in the web is, there are times when you need something more than Chrome OS can give you.  That's where [Chrome Remote Desktop](https://remotedesktop.google.com/) (CRD) comes in.  I have used all kinds of different software to remote into computers over the years, and CRD has been by far the easiest to set up and use.

Simply go to https://g.co/crd/setup from the computer you want to access remotely and install the software.  From another computer (*or your phone / tablet!*), visit https://remotedesktop.google.com/ and you'll see any computers where you've set up CRD.  Click one, enter the PIN you choose when installing CRD, and you're in -- it's really that simple.

If I want to do development that won't work in the browser (game development in Unity, for example), I remote into my powerful desktop from my lightweight Chromebook.  Never again will I need a big, heavy gaming laptop to do development on the go -- instead I can save money by having a tricked out desktop and a super lightweight Chromebook.

## What about games?

Unfortunately, Chrome Remote Desktop is *__not__ good for gaming*!  Things are responsive enough for programming and general computer use, but it was clearly not meant for running games.  For that, you'll want to look into Steam Link or Moonlight -- they take a little more to set up, but they'll let you play games remotely just fine.  It's important to note that the computer streaming the games should be hard-wired for best performance.  If you're like me and have a big desktop sitting next to your router, this shouldn't be a problem.

The other option is to use something like XBox Cloud Gaming.  If you have Game Pass, you may already have access to this without knowing it.  Go to https://www.xbox.com/en-us/play, sign in, and play games directly in your browser.  You'll need a decent internet connection, but it works *surprisingly* well.

Since getting everything set up, I haven't played video games on anything but my phone and Chromebook -- and I'll never go back.  I don't miss my heavy gaming laptop at all.  I definitely don't miss its bad battery life, loud fans, and the stream of hot air that burned my thighs if I played games for too long.  I'm all-in on cloud computing and gaming!

## Closing

I'll be honest: I didn't think we'd get to this point as fast as we did.  I remember having *serious* reservations about Google Stadia when it was first announced.  I never thought I'd be sitting here on a Chromebook, using it for serious tasks like programming or gaming.  It feels like it's happened all of a sudden, but suddenly Chromebooks are more than a novelty or a cheap computer for students, and I love it.