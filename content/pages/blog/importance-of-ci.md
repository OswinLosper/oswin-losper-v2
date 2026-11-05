---
type: PostLayout
title: "The Importance of CI in Your Project"
date: '2022-04-22'
excerpt: "In our ever changing world we live in today, when you take on a new project, a new hobby or just even when you enjoy something, you would want to get the most out of it."
featuredImage:
  type: ImageBlock
  url: /images/continuous-integration.jpg
  altText: Continuous integration
addTitleSuffix: false
colors: colors-b
author: content/data/team/Oswin.json
---

In our ever changing world we live in today, when you take on a new project, a new hobby or just even when you enjoy something, you would want to get the most out of it. It’s the same with automation testing. If you do have an automation suite in your project and you don't have continuous integration (CI) on it, then you not getting the most value out of your automation testing.

### LEARN WHY IT IS IMPORTANT FOR YOU AND YOUR BUSINESS TO IMPLEMENT CI IN YOUR PROJECT.

A lot of businesses these days are embracing automation testing, and with good reason, I might add. Automation testing help developers and testers to be more effective during the software development process. With automation, teams don’t have to spend their days going through testcases manually, this can lead to quicker turn around times and also help catching issues quickly before the project reach the customers.

However, some companies does have access to an automated test suite, but don’t run them as frequently as they should. They only use the automation test suite on occasions, then on the other occasions they still execute tests manually. These companies are missing out on a big opportunity to get the most value out of their automation test suite. 

Automation can be a very valuable tool that can validate the state of your application at any given time. But if these tests don’t run continuously, their value diminishes rapidly, especially at companies where automation engineers needs to proof the value of automation.

In order to get the most value our of your automation test suite, you will need run them regularly. Ideally, you want to use your automated test suite to ensure that your application still behaves as expected when changes were made to it. And like mentioned above, in the ever changing world we live in today, applications changes occurs frequently. To get the most value, your team can get this automation up and running with a continuous integration system in place.

### WHAT IS CONTINUOUS INTEGRATION?

Continuous Integration is a development practice to help manage and automate workflows when changes occur in a project. Typical uses for continuous integration environments is building software application, deploying new change and of course running automated tests.

Continuous integration system plays an important part of a healthy software development pipeline, saving teams a lot of time and effort through the development cycle. Like most things today, there  are plenty of CI services available, from environments you can host on your own to cloud systems.

Most of them are easy to start up and do not require a full time devops team. Most testing tools today can integrate fairly easy with most CI systems, helping you go from local testing to continuous integration testing seamlessly. 

If for some reason your company are still unsure about continuous integration, here are some reasons why may want to consider implementing a CI pipeline in your project.

##### YOU WILL GET FASTER FEEDBACK LOOPS

Doesn't matter the size of your project, you will inevitable get bugs. As a project gets bigger, you will add more complexity to it, ever changing requirements and many other issues that increases the probability of errors. It's impossible to avoid mistakes all the time. As good software developers and testers know that the key isn't preventing errors but the time you take to recover from them quickly and efficiently as possible.

When bugs are discovered, it's cheaper to fix to them right away rather than waiting to fix them months down the line. No matter where you are in a project, fixing bugs quickly makes a huge difference in time and money wasted.

The reason being why it's cheaper to fix bug straight away, is that the more time passes between code changes and discovering a bug, the more difficult it is for the developer to go back and find the root cause of it. The work wont be fresh in their mind, so they will have to spend time remembering what they did before.

Also, adding to this, other developers might have worked on the same section in the codebase at a later stage, so on top of the above, the developer will also have to figure out additional changes to the code in an attempt to fix the bug. 

This might seem like a small thing, but I have seen companies ignore bugs until a later stage than months down the line, business justifies the bugs in the project.

By using continuous integration with a well-built automated test suite, this will eliminate most of these issues, because the team will quickly see how a recent change in the project has cause a defect and investigate to fix it quickly. 

If an issue has been found using an automated test suite with continuous integration, an alert can be send to the developer and they can take much more quicker to fix the bug rather than the bug being discovered later down the line. Early detection can help reduce how much effort your developer and tester spend on issues.

#### YOU'LL INCREASE ACCOUNTABILITY WITH YOUR TEAM

Let's be honest, I'm sure all automated testers would love to have an automation test suite that just works, that doesn’t have failing tests, but realistically at some point you will get tests that fail. The failure can be due to recent changes in the code base or it can be a intermittent failure that no one can track down, regardless of the reason, its good to notify the team immediately and in a prominent place, if you don't have reporting in place so that the whole team can see it.

Unfortunately, a lot testers prefer to take the easy way out and push failing tests one side to silent the failure alerts. They either mark the failing tests as pending, delete the result or even silence the notifications. It begins with what seems to be a justifiable moment, like we need to get this build out to the client or management want to see visibility on tests. These decisions usually goes with 'I will fix that next week when I have time’. Then the inevitable happens, you never get time to fix it and before you know your whole automation test suite losses value.

I hear a lot and have experienced where the health of a project is the sole responsibility of the QA team, in order to have a successfull project all stakeholder within the team has a responsibility to the health of a project. It might be easier for developers and testers to check the state of an application because they are hands on with the project, but for designers and project managers, it might be more difficult for them. If you don't have a way to make the projects health visible to these team members you missing out on a good opportunity to have other contribute with a fresh set of eyes.

You can avoid this problem my using continuous integration to run your test automatically for you. Most continuous integration systems allows you to send alerts when an issue arises. Your continuous integration can send a messages to Slack when a test fails. You can also add additional service to generate reports on a test run, this will help the non technical people in the team to understand the status of the project. This can allow everybody in the team to contribute to the project.

#### YOU'LL GIVE TESTERS MORE TIME FOR HIGH-VALUE TASKS.

For many testers, they're consist of doing a lot of repetitive tasks daily. Everyday they open up the application they are responsible to test, doing the same steps, clicking buttons, filling in the same forms and checking validations, the same did the day before.

This can become a dull routine. Automated tests can free them up form this cycle, letting continuous integration take care of the repetition. 

The main benefit of having automated tests and setting up a CI service isn't to liberate testers from tedious work, its to free them up to spend more of there work day to do more higher value testing tasks, like more exploratory testing, which can pick up bugs that automated testing wont find and also documentation of testing procedures, test cases and test plans.

Automated tests are very good tool to handle regression testing, ensuring new changes don't break the application, but this will only be able to cover the areas you have planned or wrote scripts for. If there is new features, that was done by the developer and no automation tests for the new feature there will be a gap that is not checked. Continuous integration wont cover for those scenarios, therefor testers time is best spend on the new features that has not automation tests and not the old features. No continuous integration system can go beyond what's defined in the test suite.

A common mistake a lot of companies make, is ‘they want to automate everything’ . They switch all they focus onto automation and ignore all types of other testing. Automation testing wont solve all testing problems teams have. As a project gets bigger and bigger, automation coverage wont cover everything. Freeing up the team to go beyond what continuous integration does will undoubtedly improve the health of your project.

#### YOU CAN AUTOMATE MORE THE JUST TESTS

Yes, this article is mainly focussed on implementing continuous integration to handle the repetitive testing work that most companies are facing with todays software development. 

The most common use case for a continuous integration service is to set up automation testing. However, with that said, if you only using continuous integration for your automation tests, you are only touching the surface.

In modern software development projects, teams have plenty of workflows that can take advantage of continuous integration. These are a few tasks that continuous integration can handle automatically for teams:

Building binaries for mobile applications on different platforms like iOS and Android and send it to beta testers.

Package web application to docker images, ready to distribute internally or in a public container registry.

Run a complete set of tests and, on success, automatically deploy the latest code changes to production.

Continuous integration can help your company perform repetitive tasks that computers can handle better and quicker.

### CONCLUSION

A well set up continuous integration environment plays an important part of the modern testing teams. It can help eliminate the repetitive aspects of manual testing and ensure you get the most value out of your automation testing.

Continuous integration can also help the whole teams including the business to get better insight of the project health status and valuable metrics, like graphs and statistics. (We all know business people like graphs).

Developers can also get much more quicker feedback on their new commits and thus reducing tons of effort and time in the development process. Tester will have more time to work on more high value testing scenarios. 

With a continuous integration process in place your entire team will benefit. This will go onto and benefit your customers as well with faster updates, fewer bugs.

At the end of the day continuous integration wil result in a beter product for everyone.
