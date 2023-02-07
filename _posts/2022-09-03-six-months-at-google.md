---
title: "Six months at Google"
subtitle: "AKA: When do I stop calling myself a Noogler?"
tagline: "AKA: When do I stop calling myself a Noogler?"
# excerpt: 
# header:
#     teaser: "/assets/images/post-content/__________________.jpg"
#     overlay_image: "/assets/images/post-content/__________________.jpg"
#     overlay_filter: 0.5
# tags: a, b, c
toc: true
toc_sticky: true
---

Six months in, and I still can't believe I work at Google.  It's been a lot to take in, and now that I've gotten used to it I want to share what it's like working for Big G.

> TL;DR:
> - Everybody is great.  *Too great*.  I must be an imposter! 😭
> - Onboarding was like drinking from a firehouse.
> - Feature flags are so, so good!
> - So much non-code work is required in a place this big.

## 🤓 Googlers: the best thing about Google

It feels like I'm surrounded by rockstars, and it's hard not to feel like an imposter.  When I meet a new coworker, I like to pull them up on LinkedIn.  With my Google coworkers, it feels like everybody graduated from Harvard and MIT.  They've all worked at multiple huge companies.  They've written books and hold patents.  I've seen more people with master's degrees in the past few months than I saw in years at other companies.  The amount of talent inside of Google is outrageous.

You'd think that all these smart people would be narcissistic, arrogant jerks, but the opposite is true!  To get into Google, I had to pass 5 different interviews.  Every single interviewer was super nice to me.  The recruiters I talked to were pleasant.  Every single member of my team is incredibly helpful.  Anyone I ask for help is quick to jump in and help.  I ask if somebody can point me in the right direction and they give me a link to a specific doc or piece of code that answers 100% of my question.

I have yet to meet someone that isn't incredibly smart ***and*** ridiculously nice.  People talk all kinds of trash about their strict interview process, but it clearly works.

## 😵‍💫 Everything is different inside Google

Google has been around since 1998.  Many software tools didn't exist back then, so Google had to make their own.  Some of those tools (Angular, Golang, Guava, etc) ended up being used outside of Google.  Other things split off and became their own thing.  For example: other organizations use Kubernetes but Google still uses Borg, the cluster manager that K8s was based on.

There is a convenient list in Google called "inside/outside" that lists all these things.  We use Piper, not Git.  Buganizer, not Jira.  Critique, not GitHub for code reviews.  We call them CLs (change lists) instead of PRs (pull requests).  I could go on -- it's kind of a big list.

Trying to learn all these internal tools and terminology was *a lot*.  The first weeks at Google involve going through an onboarding program, and it is often described as drinking out of a firehose.  Once I got inside, I understood why the interviews don't test for a particular language.  It wouldn't matter if you were an expert in Java, you would still have to learn all the internal libraries that only exist in Google.  It doesn't matter how much you've used other tools, because Google's tools are *just a little bit different* and you have to learn how to use them.  Prior knowledge helps you ramp up faster, but there's no way you'll come in and already know how everything works.

## 🚩 Feature flags, how I love thee 

At other jobs, we all worked on pieces of a release and it all went out the door together.  Not at Google.  At Google, every change is scoped to be as small as possible and is gated by a feature flag.  Instead of doing an entire code release, you flip a switch to turn a flag on.  If your change unexpectedly breaks things, you turn it off and fix things.  As a result, nothing breaks for long.

Flags aren't simply on/off switches, either.  You can turn a flag on gradually and ramp up to a 100% release slowly, checking for problems along the way.  You can define all kinds of characteristics (or combinations of characteristics) to determine which users get a feature.  Only want to test your code on users of certain products in a particular region?  No problem.  Want to run an A/B test to see which new design reduces the bounce rate?  Easy!

I'm so spoiled by feature flags now.  One of these days I'm going to work somewhere with a traditional release cycle, and I'm going to hate it.  Flags are so powerful, and I wish every place had a robust system to do it like Google does.

## Programmers do more than program

I knew that my job at Google would involve writing code.  What I didn't expect is how much *other* stuff I'd have to do.

Anything more than a trivial change requires a design document.  Each service is used by other teams, so you need to constantly update technical documentation and instructions.  If a change might affect multiple services, there might need to be a discussion to coordinate and make nobody's changes have harmful side effects.

Legal reviews, accessibility reviews, security reviews, code reviews -- lots and lots and lots of reviews.  Google is a huge international company that has to comply with a lot of regulations.  Hackers and fruadsters are constantly looking for ways to exploit Google for money.  You can't let your code open a door for them.

You turn on your feature and watch for errors.  You review logs and data to make sure you haven't broken anything.  Sometimes those feature flags power A/B experiments.  You have to review the results of such experiments and discuss them with your team.  Metrics have to be gathered to measure if each feature was a success.  Discussions about previous experiments guide future development.

There is *so much* that isn't programming.  Unlike other places, where there were many unnecessary meetings, Google actively tries to cancel pointless toil.  All this extra is the *totally necessary* stuff that remains, and it's **a lot**.

## Closing

Long story short: I love it here.  It's been overwhelming and stressful, but it's been great at the same time.  One day, when I'm out of Google, I'm going to miss all its weird quirks.