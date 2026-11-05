---
type: PostLayout
title: "Maintaining Automation Tests"
date: '2022-01-28'
excerpt: "By now most companies (hopefully) must have automation testing or is in the progress to implement automation testing to their project."
featuredImage:
  type: ImageBlock
  url: /images/maintaining-automation-tests.jpg
  altText: Maintaining automation tests
addTitleSuffix: false
colors: colors-b
author: content/data/team/Oswin.json
---

By now most companies (hopefully) must have automation testing or is in the progress to implement automation testing to their project. The benefits of automation testing is clear, refer to my article about, Benefits of Automation Testing. 

Automation testing testing will help your organisation build better software quickly and efficiently, regression bugs will be found quickly. If automation testing is implemented correctly, it will allow companies to ship new features or new products to clients much more frequently and with more confidence.


However, most of those benefits rapidly decrease or even goes away if you don’t take the time to maintain your tests.

Maintenance has to be part of your automation suite, unless your codebase never changes you will have to keep on working and maintain your automation tests, in order for it to keep up with latest code as you applications evolves. Work that is been done during the software development process, will effect your existing tests in one way or another. Automation engineers might have to adjust existing ones.

### Why maintaining your Automated Tests is important

If you do maintain your automation tests, it will reduce the risks and difficulties for everyone involve on the project. Tests that are not kept up to date increase the possibility of false positives, flakiness and slow test runs. These problems will slowly compound until it eventually reaches a point that its so much and no one either has the time to fix them or no one wants to deal with them. This is where a lot of companies lose trust in automation testing and test become a lot less valuable and is more of burden.

Flipping the switch to a well-maintained test suite. It can help developers and testers to deal with inevitable test automation issues that pop up. Tests will be easier to follow, update and to expand. If tests does fail due to a false positive or because of flakiness, it will take much less time to fix the problem. Well maintained test suites can also have additional benefits across a company. Tests can become a good source of documentation about the project self. New developers and testers can see how the project is supposed to run and behave, help with onboarding quicker.

### Easy ways to maintain your automated tests

Maintaining your automated test suite doesn’t have to be an endless and exhausting task. 

The best way to keep a high level of quality in your automation strategy is to have a mindset of maintainability while working on the tests. You might get away with building your test suite fast and deal with maintenance later, but it’s always more manageable while you’re in the middle of the work. 

Creating an organised test suite from the start will save countless hours and plenty of frustration in the future. The following tips will help you keep your testing work organised and tidy.

### Only test what is needed

The most common mistake made by companies is that they try to replace manual testers and therefor try to automate every possible thing. As good of an idea it might sound like, its not. It doesn't mean because you can automate most of your testcases, you should.  Some test cases don’t provide enough value to invest the time needed to write and maintain.

Every test that is added to a test suite, requires additional time and resources and the more tests you add the more additional risk and maintenance are required. When new test are added it will also add to total execution time of test runs.

The more tests your have, the more you and your team will need to maintain your test suite. Best is to keep your automate test suite lean to get the most out of each test run

If you’re not clear about what your team should focus on testing, be on the lookout for these places in the application under test:

Features or parts of an application that often break for users: Focus on parts of your application that have a high defect rate, this can increase your applications quality.

Journeys that are difficult to test manually: Test cases sometimes can have very long journey and this can be 'boring' for manual testers and things might slip through. Automate long journeys to avoid human error.

Features that is critical for business rules: It’s very important for areas that contain high value business logic and values to work reliable, to automate these and set up alerts or reports to notify if something goes wrong.
Split your test journeys in to small test cases.


Testing like integration or end-to-end testing, allows you to automate long test journeys with steps from start to finish, and we all know we want to automate everything or as much as we can. 

And it is a good idea to cover as much as you can, but also keep in mind, to many long test will make your test suite unreliable and difficult to fix.

In automation all steps you take to run a test has the potential to fail, whether is because of a timeout (if you run against a live api), a change in the application or a unexpected problem. The more steps in a single test makes it more likely to fail. You might regret writing a test that has to many checks at certain spots and figuring out what went wrong becomes a time-consuming process.

Instead of trying to long tests, focus on keeping your test small and specific to what you want to test. If you have shorter tests, it will be easier to debug and fix if needed.

### Don't repeat yourself

A very important skill for test automation engineers is to to minimise and eliminate any redundancy throughout the codebase

Most developers are familiar with the Don't Repeat Yourself concept, that states, duplication in logic should be eliminated. I am a believer that this concept should be applied to automation testing as well. However a lot of companies are not taking up this approach because automation testing code is not treated as production code because its not client-facing.

If you have the same set of code twice in your suite, it will slow your team a lot, especially if changes are required on all of those lines. This is a also one of the main reasons that tests can be unreliable and that your test suite is not scalable. So the more re-usbale code you have - you can make a change in one spot and it will fix the issue through out your suite.

To avoid the headaches and hassles caused by code duplication, you should build your test suite keeping the DRY Principle in mind.

### Remove test that are doesn't bring any value

Software applications and test suites are living, breathing system. The codebase changes frequently and many reasons, like new feature getting implemented and older feature are being removed, to mention a few. 
Changes in an application wont live forever, and it’s the same for test automation. Test can eventually outlive their usefulness and weigh down the rest of the tests, often showing up in the form of a sluggish and broken test suite.

Many automation testers dislike deleting tests from their codebase, especially tests that they’ve written and business also plays a part in this. Sometimes they focus more on test coverage rather than the value of the tests.

Test automation engineers feels a certain closeness to the thing they created and don't want to let go, even when its clear a test doesn't bring value anymore. Instead of removing the test they prefer to comment it out or mark it as pending, hoping the test will somehow make a return and bring value to the test suite in future again.

Below are a few good test that qualify for removal from your test suite

**Test that is covering redundant scenarios:** If you have test cases that does have long flows to complete, you may not need dedicated test cases for them. For example, if you user journeys included authentication with a login page, there is no need for specific login test case

**Tests that cover soon-to-be deprecated functionality:** If there are plans to remove certain functionality within a system, it's a good idea to begin removing test cases that is related to that functionality.

**Low-value functionality that can be tested manually:** Many applications have sections that, while necessary to verify occasionally, aren't as essential to ensure they work at all times. Some examples are submitting "Contact Us" forms, ensuring static pages load properly, and checking content for localisation.


Deleting old test doesn’t mean that you work was not helpful to a project. It means that the project has evolved (which is good) and that the test suite should also evolve with the project. If you notice at anytime that automated test is no longer helpful or doesn’t bring any value, delete it and do not look back, it will improve the performance of your test suite and keep your test suite is good spot and maintenance will also be much more easier.

### Fix Broken Tests, don’t delay

Im sure this goes for every daily activity out in the world, delaying until you get time to fix something, however, in the real world, you will never get time.

Ignoring broken test and to continue adding new test cases on top of them is one of the biggest mistakes teams make with their automatic efforts.

When deadlines are coming into the discussion, companies prefer to stay on course to meet the deadline to complete their milestones rather than taking the extra time to fix the broken tests. While the team might think they are speeding up their workflow, they are actually doing the opposite.

Poor code begins to slide into the code base and then the quality starting to slip, slowing down their future efforts for automation more than if they had taken the extra time to fixes the issues promptly. 

One of the important keys to a highly maintainable test suite is to fix any problems quick instead of dragging the issue out. Fixing a flaky test quickly that someone pushed into the code base is much more easier than fixing a flaky test six months down. 

You will most probably forget about details of that test case and spend a few hours just trying research what the test case was about, then you have to switch context back to your current work flow. It can leads to laziness once a team decide to live with flaky tests in their test suite and it almost impossible to change that state of mind once you start.

If your team is in the habit of ignoring issues in your test suite while adding new functionality, even if there is flaky tests, put a stop to it immediately and change the mentality as soon as possible. Try to establish a work flow cycle where fixing current flaky tests is a priority over adding new ones just for the sake to increase visibility.

This doesn’t mean that if a test breaks, the whole team needs to switch focus and fix the broken tests, make sure some is taking responsibility to get the the build back to a stable state quickly and not ignoring or delaying the problem.

### Conclusion

A successful automation suite, starts with long term maintenance in mind. No matter how much time you invest in automation testing, you and your team needs to plans proper maintenance for your test suite. And as in life doing the small stuff like organising and refactor or cleaning up tests feels like a waste of time but will pay off in the long run. 

Teams that don’t pay attention to writing maintainable tests from the start will soon find out that fixing broken tests six months down the line will waste a lot of time and the wisely leads to companies abandoning the automation project, saying it doesn’t work.

Maintaining you automated test suite doesn’t have to be a time-consuming process. You can keep your test suite in good condition by planing maintenance and establishing good practices as you go forward with your automation strategy. 

Focus on testing only what’s essential and removing tests when they’re no longer valuable. Organise your tests into logical groups and avoid unnecessary duplication with patterns and techniques like the Page Object Model. If your test suite breaks, fix it before proceeding to prevent the situation from getting worse.

Keeping your tests lean and tidy will give you the speed and flexibility to tackle problems and improve your test suite with little to no friction. No one is immune to getting test failures due to always-changing applications. But with a bit of care from the start, a well-maintained test suite can help your organisation develop and deliver high-quality applications with ease for years to come.
