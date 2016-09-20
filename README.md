Emakina Case Development Kit
============================


This tool is still in his beta phase.
Please use [JIRA](https://bugtracking.emakina.net/browse/EMAWEBSITETREIZE) to report bug, request or new idea.


Prerequisites
-------------

- [Git](https://git-scm.com/)
- [Node.js](http://nodejs.org) 4.4.7

We deeply recommand to use [nvm](https://github.com/creationix/nvm) for Node Version Manager

Please note that this tool is using GRUNT, LESS and PUG locally

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot

git clone https://git.emakina.net/scm/eg/cdk.git
cd cdk

# Install NPM dependencies

npm install
```

Using the builder
-----------------

Compiling sources

```bash
npm build
```

Start local server & watcher

```bash
npm start
```

Start ING Demo 

```bash
npm start -- --source=samples/ing
```

Export dist in zip file

```bash
npm export
```

Used technology
-----------------

Html template engine is [PUG](https://pugjs.org/) because it's easy, powerfull and cool.

Front-end framework and grid is a customized [Boostrap 2.3](http://getbootstrap.com/2.3.2/) (yep old version...)

The parallax scrolling library is [Skrollr](https://github.com/Prinzhorn/skrollr). Please read the doc and print this [PDF](https://raw.github.com/Prinzhorn/skrollr/master/guide/anchor-position-guide.pdf) 


Files structure
-----------------

###/src 

Source code of your case

##### case.json

Config file, please rename your case.

##### main.pug
Main pug file

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
npm start -- --source=samples/template
npm start -- --source=samples/ing

```