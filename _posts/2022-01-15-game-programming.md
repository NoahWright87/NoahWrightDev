---
title: The Benefits of Game Programming
subtitle: "And Mom said I'd never get anywhere with these games!"
tags: learning
---
My earliest interest in programming started because of video games.  My family got our first gaming console when I was 3 or 4 years old, and I was immediately fascinated by it.  For as long as I can remember, I've been trying to create games.  I have made choose-your-own adventures in PowerPoint, shmups on a TI-83, tic-tac-toe in Visual Basic, top-down shooters in XNA, and a whole bunch of tiny things in Unity.  Even now, when I have so much less free time than before, I still play around with video game programming here and there.

For the longest time, I thought of all this as a non-transferable skill that I was playing around with as a hobby.  If I wanted to get better at *real* software engineering, I needed to make some sort of business app, right?  Maybe not, as it happens.

As I prepare for my upcoming Google Interviews (sidenote: every day that it gets closer, I get more nervous), I have been looking at all kinds of practice problems.  A lot of them boil down to "yes, you *could* brute-force it, but then it'll take forever to finish" and forcing you to find optimizations.  If there is one skill I learned from video game programming, it's optimization.

My current job, like several jobs before it, involves creating websites for employees to use.  If a particular function takes a few seconds for a page to process, that's fine.  In general, the rule for performance has boiled down to "just don't let the request time out" - meaning a particularly long-running process might take 25 seconds and that is seen as just fine.  Sure, everybody would like it to run faster, but they aren't going to rage quit and find other software to use.  Meanwhile, in games, as soon as your framerate drops from 60 FPS to 50 FPS people **FLIP OUT**.  

It reminds me of the commonly-cited advice to "lift with your legs, not your back!"  If you're lifting a paperclip, you can lift it however you want.  If you're trying to lift a crate with millions of paperclips, you better make sure you have good form.  All that extra weight means that any little imperfection in your form will be exposed, and there is a good chance that you will hurt yourself if you go about it in the same way you would lift a single paperclip.
![Lift with your back](../assets/images/post-content/lift%20with%20your%20back.jpg)

And that's exactly how it goes when you're making a game.  If your code is horribly efficient, it becomes *very* apparent when you are updating and drawing thousands of objects dozens of times per second.  I have literally **never** worried about the garbage collector when writing commercial software, but I had to understand it 15 years ago when I was trying to make particle effects in a shoot-em-up I was writing in XNA.  All those fancy algorithms you need to solve harder LeetCode problems have never come up at work, but you better believe every game programmer has at least read about Dijkstra and A*, if not implemented one themselves.

Another aspect of games is that a lot of these issues only crop up when the thing is running full speed.  If you stick a breakpoint in your code and step through it line by line, you probably won't see the performance bottleneck pop up the way you might in some web software.  That's because your game running at 20 FPS means it's still only taking 0.05 seconds to render each frame.  Will you notice that one command you're running a hundred times takes 0.0005 seconds instead of 0.00005 seconds as you're stepping through your code?  There's no way!  So you have to actually read your code and understand those bottlenecks *without* running it.

All of that combines into pretty much the exact skills you need for a job interview with a big tech company.  You hear that, Past Noah?  Turns out all your video game programming *wasn't* a huge waste of time! 😁
