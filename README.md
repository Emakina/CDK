Emakina Case Development Kit
============================


This tool is still in his beta phase.
Please use [JIRA](https://bugtracking.emakina.net/browse/EMAWEBSITETREIZE) to report bug, request or new idea.


Prerequisites
-------------

- [Git](https://git-scm.com/)
- [Node.js](http://nodejs.org)

Please note that this tool is using GRUNT, LESS and JADE

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot

git clone https://git.emakina.net/scm/eg/cdk.git
cd cdk

# Install NPM dependencies

npm install

# Init required libs

grunt init

```

Using the builder
-----------------

Compiling sources

```bash
grunt
```

Start local server & watcher

```bash
grunt serve
```

Start ING Demo 

```bash
grunt serve --source=samples/ing
```

Export dist in zip file

```bash
grunt export
```

Used technology
-----------------

Html template engine is [Jade](http://jade-lang.com/) because it's easy, powerfull and cool.

Front-end framework and grid is a customized [Boostrap 2.3](http://getbootstrap.com/2.3.2/) (yep old version...)

The parallax scrolling library is [Skrollr](https://github.com/Prinzhorn/skrollr). Please read the doc and print this [PDF](https://raw.github.com/Prinzhorn/skrollr/master/guide/anchor-position-guide.pdf) 


Files structure
-----------------

###/src 

Source code of your case

##### case.json

Config file, please rename your case.

##### main.jade
Main jade file

##### main.js
Javascript...

##### main.less
Less file...

##### /assets
Image assets folder for your case


### /lib

Global lib used by Emakina website.
Please do not change it.

###/dist

Final compiled files for production


###/samples

Several integrated sample case

```bash
grunt serve --source=samples/template
grunt serve --source=samples/ing

```