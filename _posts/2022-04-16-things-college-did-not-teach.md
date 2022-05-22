---
title: "Things College Didn't Teach You"
subtitle: "Because most jobs don't involve one dev making a calculator"
tagline: "Because most jobs don't involve one dev making a calculator"
excerpt: 
header:
    teaser: "/assets/images/post-content/textbooks.jpg"
    overlay_image: "/assets/images/post-content/textbooks.jpg"
    overlay_filter: 0.5
tags: career, learning
toc: true
toc_sticky: true
---

> TL;DR:
> - To work on a team you must be humble and be able to communicate with everybody, even non-technical folks.
> - You are not your code.  It will be re-written, criticized, and sometimes abandoned.  Don't take it personally.
> - Production code is ugly.  "Why was it done ***this*** way!?"  The reason is...
> - ...time and money drive everything.  Customers can have unreasonable demands, and it's never that your code should be elegant.

You just graduated college with a shiny new Computer Science degree.  You're excited to go out into the workforce and get paid to write software.  You aced all your classes and made some awesome little apps along the way.  Maybe you even paired up with a few other students to collaborate on a bigger project.  You nail the interview, get the job, and immediately realize:

*There's a lot college doesn't teach you!*

Don't get me wrong: a CS degree is a great foundation on which to build a career.  The problem is that you can't simulate the conditions of a work environment - not in a college, not in a bootcamp, not as a self-taught developer.  This post is about all the things you need to be a software engineer but won't learn in school.

## 🤝 "I'm a people person, I have people skills!"

Working on a software development team is *not* like working alone.  It's not even like working with a group of CS students on a project.  For starters:

### 👨‍👩‍👧‍👦 Not everybody is a programmer

While learning, you're surrounded by other people learning how to program.  You have jargon and inside jokes that everybody gets... until you start interacting with people who are *not* programmers.

Depending on the size of your company, you may have all sorts of roles on your team.  Product manager, program manager, UX designers, operations, product owners, quality assurance, and maybe even end users may all be part of your team.  You have to get comfortable with talking to all these people in order to get things done.  Some things to keep in mind:

- You are not better than them.  Many programmers erroneously look down on non-technical roles.  Don't do that, because...
- All their jobs are important.  If you don't understand why, ask!  Play the "I'm a new grad" card and ask what each role does so you can understand how they fit in.  You'll likely find that...
- You don't want to do their jobs.  If you got into programming, you probably don't want to manage a Jira board, gather requirements from customers, manage budgets, etc etc.

### 🚫 Git conflicts, git conflicts everywhere!

Maybe you've never used Git.  Maybe you have a Github profile with all your projects on there.  Either way, using it on a team is a whole other beast.

It is incredibly rare for code and work to be so well-organized that each programmer is working on a different subset of the overall codebase.  You are almost guaranteed to, at some point, modify a file that another coder is also working on.  If you don't commit first, it'll be up to you to resolve those conflicts.  Sometimes, you're referencing a file they changed and, when you pull down recent changes, it breaks all your stuff.

The breaking changes may not even come from somebody on *your* team.  You might have to reach out and talk with whoever made the change to understand it, which brings us to...

### 📞 Layers of communication

The smaller the team, the shorter the distance is between any two people.  As organizations grow, it becomes impossible for everybody to have a direct line of communication to everybody else.

In the above example, where somebody else's code broke yours, you might be able to look at the commit history and message that person directly.  Or you might have to talk to your project manager, who will talk to the other team's product manager, who will determine if that coder has time to spare, and maybe then you'll get to meet with them.  Unless you're coming into software from a some place with a lot of red tape (like the Air Force) the bureaucracy can take you by surprise.

Make sure you understand the chain of communication *before* you need to use it.  If you wait to the last minute to try and talk to somebody and it turns out it'll be a week-long process, it's too late.  If you know that in advance, you can start the ball rolling at the first sign of trouble.

## 👶 "I love my code like a child, please don't touch it"

When you're programming on your own or with a small team, it is easy to take 100% ownership of your code.  It's your baby, and you nurture and care for it.  You get excited to see it grow up and go out in the world.  I've got bad news for you:

*"Your baby" is going to get destroyed*

### 🔍 Code reviews

As the new kid on the block, you probably aren't going to be committing code willy-nilly whenever you want.  There will almost certainly be a code review process which may include automated and human checks that stop you from making changes.

You need to be humble.  People with much more experience than you are going to look at your code and criticize it.  Don't get offended - pay attention and *learn*.  Some of it may be best practices that you don't know yet.  Some of it may be picky little preferences at that company.  You may not like those preferences, but if that's the standard they are following you should go along with it.

Also: don't be afraid to push back.  If you had a good reason to do something a weird way, feel free to explain that and see if their criticism stands.  You can head this off by including good comments around any strange code you make.

### 👩‍🍳 Many cooks in one kitchen

When you have many people in one codebase, it's easy for things to become messy.  Not only that, but software engineers switch jobs pretty regularly.  The result is that you put code into the codebase and somebody else may almost immediately be changing it because of some requirement they have.

If your code broke their stuff, they may not even talk to you about it.  They might take it upon themselves to fix it - or worse "fix" it and break your stuff instead.  You may come back to code you wrote and find that it is drastically different a few months later.

I'll say it again: **don't take it personally**.  Every programmer has their quirks and their way of doing things.  Their changes may have been needed, or it may have been them "making the code cleaner" by asserting their personal preferences.  As long as it all works, brush it off and move along.

### 📉 Shifts in business direction

In college, you get an assignment and do it.  Imagine if halfway through completing a major assignment your professor told the class they "decided to go a different way" and assigned a completely different assignment.

*Pretty frustrating, right?*

This happens in the business world.  All.  The.  Time.  Trends change, business needs shift, and decisions are made *way* above your head that will affect what code you write.  Sometimes this means getting 90% done with something and then being told "nah, we don't need that after all!"

My advice: try to keep your changes small and quick.  That keeps you from having some MASSIVE change that gets abandoned.

## 🤢 "Why is this code so ***ugly***?!"

Many programmers value *elegant* code.  We all want our code to look nice.  Programmers love to proudly post their one-line functions that do a million things.  *It's so compact, it's beautiful!*  I hate to break it to you, but that's probably not going to happen on the job.

### 👨‍🍳 Many cooks, one kitchen part 2

I already said that everybody has their own quirks and preferences.  The business may have styles they enforce.  Individual teams may have their own standards.  All of those different quirks, standards, and preferences may exist in a single codebase simultaneously.  People come and go all the time, so a single file may contain the quirks and weird habits of dozens of different programmers.

Do your best to conform to the habits of those around you so the code base is consistent.  Not everybody will do this, because "I don't like how *they* do it," but that results in messy, inconsistent code.  Suck it up, and go with the flow to try and maintain some consistency.  If you really want to change the standards, talk about it as a team - don't just up and decide to do things your way.

### 💵 Time, money, and customers

When you're working for a business, you're trying to produce value for its customers.  At the end of the day, money drives every decision that a business makes.  The faster they can make that money, the better.  The happier the customers are, the more money they will spend.  I've got bad news, bud:

*Elegant code doesn't make more money.*

The customer can't see your code.  The CEO isn't looking at it (except maybe in a really tiny startup).  They want to know one thing: can the feature ship?  Yeah?  **SHIP IT!! 🚀🚀**  You didn't have time to clean up the code?  Will that break things?  No?  Alright, we'll come back and do it later when there's time.  **Spoiler alert: _there's never time!_**

## 🚩 The bottom line

Colleges and bootcamps are about learning as an individual.  Business is about delivering value to customers as a team.  Aside from the fact that code is involved, these two environments are *completely* different.  Your first software job will be a rush of new things that you will feel unprepared for.  I hope this post helps you get past those initial bumps and onto a long, successful career as a software developer.  Thanks for reading, and good luck out there!