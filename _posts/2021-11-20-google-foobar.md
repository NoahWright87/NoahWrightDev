---

---

Earlier this month, I was teaching Python to the newbies at my Air Force Reserve squadron. I work in a cybersecurity
squadron and am one of only a couple of people who program full-time.  That, coupled with my previous experience as a
USAF instructor made me the obvious choice to teach a programming lesson for people who still need to go through 
technical training and pass the Python scripting portion of the school.

That said, Python is not my bread and butter.  I took one class in it years ago while getting my degree and hadn’t 
touched it since.  Thus, I was Googling a LOT of Python stuff while building out a lesson.  During one of those 
searches, Google’s results screen showed a special option to take part in a programming challenge.  The Foobar With 
Google challenge was something I’d never heard of, but I was immediately excited.

If you’re not familiar with Foobar With Google - it’s an invite-only programming challenge that Google dolls out based 
on search history.  Code can be submitted as either Java or Python - so all my Python searches must have piqued the 
algorithm’s interest.  The challenge is a series of problems that start easy but ramp up as you reach higher levels.
After finishing all three of the level 3 challenges you’re given the chance to submit your information to Google 
recruiters.

If you’ve done any sort of coding challenge before, the problems will all seem familiar.  They almost all have some 
little twist, however, that makes it hard to simply Google the answer - after all, Google invites you to the challenge
after you’ve searched for programming concepts, so they know what your gut instinct is going to be.  For example, one 
problem seemed like any shortest-path algorithm problem, but they included that you can destroy exactly one barrier 
along your path.  There are bajillions of articles about how to implement a shortest path algorithm, but being able to 
change the path meant those solutions only passed some of the test cases.

The problem I’m on is also familiar - *but with a twist*.  The whole thing is basically a travelling salesman problem. 
Your goal is to visit several nodes to save bunnies - by the way, the whole Foobar challenge a bunnies-in-space 
theme - and then reach an exit.  But,there’s a time limit!  Also, some paths *add* time to the clock rather than take it 
away.  That means, unlike a traditional traveling salesman problem, you might not have enough time to reach every node 
and you might want to revisit some routes multiple times.

Probably the hardest part of the whole challenge has been coming up with my own test cases.  For every problem, you’re 
given two test cases that usually represent simple scenarios.  At Level 4 of the challenge, there are 10 test cases to 
pass.  Currently, I’m passing 7 of them, and I’m running out of strange scenarios to test.  What if you don’t have 
enough time to save anything?  Handled.  What if you can go in circles and add time to the clock forever?  Done.  What 
if two bunnies are equally close to your current position, but one is closer to the exit?  Alright.  Now what if you 
have just enough time to get the further out bunny and get back just in time?  Uhhh, okay.  What else?  What other 
possible scenario could happen that my algorithm won’t handle?

And this is why the 15-day time limit is great.  I’ll probably dream about rushing bunnies to an escape pod tonight.  
Hopefully, I wake up and realize I’ve forgotten a major loophole that my code won’t handle properly and fix it 
tomorrow.  It’s worked out so far.  I was totally stumped last night with 4 test cases passed, but I sat down tonight 
and passed 3 more.  Here’s hoping my unconscious brain is able to solve the remaining 3 tonight! 🤞
