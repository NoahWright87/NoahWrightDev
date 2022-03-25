---
title: COVID-19 Simulation
head_scripts:
  - assets/js/projects/covid.js
---

<style>
    canvas {
        border: 2px solid black;
    }
</style>

## Background
What feels like eons ago, when the COVID pandemic was first kicking off, I saw a news article that had
a handy visualization of how social distancing and lockdowns can limit the spread of the virus.

As time has gone on, it has become clear that government lockdowns are only one of *many* factors that
affect the spread of a disease.  As a result, I wanted to make a little virus-spreading model of my own
where I could add some of those factors.  Additionally, it's an excuse to play around with drawing on
an HTML Canvas.

## The Simulation

<canvas id="covidSim" width="800" height="600">
    Your browser doesn't support canvas :(
</canvas>
<button onClick="init()">Restart</button>

Number of People:
<input type="range" min="10" max="200" value="50" class="slider" id="populationBar">

Min Size:
<input type="range" min="0.5" max="5" value="3" step="0.5" class="slider" id="sizeMinBar">

Size Variance:
<input type="range" min="0" max="5" value="2" step="0.5" class="slider" id="sizeVaryBar">

Min Speed:
<input type="range" min="0" max="3" value="1" step="0.25" class="slider" id="speedMinBar">

Speed Variance:
<input type="range" min="0" max="3" value="1" step="0.25" class="slider" id="speedVaryBar">



This is an early work-in-progress, and so far all I have is some circles that make pretty colors.
It's fun to look at, but not very informative as an epidemic model.  Here are my plans:

- Population simulation
  - <strike>Create a random population</strike>
  - <strike>Each will move in a random direction</strike>
  - Some will move faster than others, to simulate how "locked down" they are
  - Person's state can shift between Healthy, Vaccinated, Infected (sick), Infected (carrier), or Dead
  - Behavior may change depending on the above state, for example:
    - An infected person may "quarantine" and stop moving / move slowly
    - A vaccinated person may move more, feeling safer
    - People may wear masks of varying quality
  - People are generated with health stats.
    - Healthier people may not feel symptoms and behave normally.
    - Some people may get sick but fight off the virus and gain some immunity afterwards
    - Unhealthy people may take longer to recover or may die after some time
- Virus simulation
  - A random initial group of the population will be infected immediately
  - Infected people will randomly emit virus particles
    - Particles get smaller as they go, eventually disappearing
    - More particles per second increases infection rates
    - Size and speed of particles affects how far infection can happen
    - Particles colliding with masks reduce in size faster, limiting their reach
  - When a virus particle collides with a person, there is a chance they become infected
    - The virus particle's stats are compared with the person
    - If the virus is much stronger, the person becomes infected
    - If the virus is barely stronger, a person may be infected but asymptomatic
  - The virus will mutate over time
    - A virus that has infected a person will have stats
    - The particles emitted will vary within a range of those stats
    - Each generation of virus thus can move further from the original (for good or bad)
- Immunization simulation
  - Clinics are generated when the simulation starts
  - Initially, these clinics do nothing
  - After a random time (within a limit) clinics begin emitting vaccine particles
  - Over time, these vaccines emit at higher and higher rates
  - If a vaccine particle hits a person, they may become vaccinated
  - People will have varying levels of vaccine hesitancy, e.g.:
    - 100% vaccine hesitancy means colliding with vaccines does nothing
    - 50% hesitancy means there's a 50/50 chance the vaccine is taken
    - Vaccines not taken still disappear, simulating the affect of antivaxxers on society
- Government lockdowns
  - During the simulation, barriers may be added
  - Barriers prevent or slow movement through them
  - Barriers can come and go based on conditions such as:
    - Number of infected people
    - Severity of the virus
    - Time of the simulation
- Provide a form to adjust stats for all the above
- Show some stats below the simulation
  - Numbers of healthy/infected/dead/vaccinated people
  - Average power and transmission rate of the virus
  - Bonus points: a chart of the progress over time
- Simulation will go until either the virus is gone or everyone is dead

**NOTE**: I'm fully aware that this is overkill for a little project, and the above is way too long
of a list to be reasonable.  I won't necessarily get all of the above, but I will chip away at the list of time.

<script>

    document.getElementById("populationBar").oninput = function() {
        numPeople = Number(this.value);
    };
    document.getElementById("sizeMinBar").oninput = function() {
        baseSize = Number(this.value);
    };
    document.getElementById("sizeVaryBar").oninput = function() {
        varySize = Number(this.value);
    };
    document.getElementById("speedMinBar").oninput = function() {
        baseSpeed = Number(this.value);
    };
    document.getElementById("speedVaryBar").oninput = function() {
        varySpeed = Number(this.value);
    };

    start();
</script>