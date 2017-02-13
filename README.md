Emakina Case Development Kit
============================

CDK Feb 2017

Please use [JIRA](https://bugtracking.emakina.net/browse/EMAWEBSITETREIZE) to report bug, request or new idea.

Prerequisites
-------------

- [Git](https://git-scm.com/)
- [Node.js](http://nodejs.org) Latest LTS (lts/boron)

We deeply recommand to use [nvm](https://github.com/creationix/nvm) for Node Version Manager

Please note that this tool is using GRUNT, LESS and PUG locally

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot

git clone https://git.emakina.net/scm/eg/cdk.git
cd cdk

# If you use NVM, tell him to install the node specified in .nvmrc
nvm install
# Tell him to use the node specified in .nvmrc
nvm use

# Install NPM dependencies

npm install
```

Using the builder
-----------------

Start local server & watcher

```bash
npm start
```

Build case in "dist" directory

```bash
npm run build
```

Export zipped case in "dist" directory

```bash
npm run export
```

See samples
-----------

To run the examples and see what you can do with the cdk, try the commands below

Start **template** sample

```bash
npm start -- --source=samples/template
```

Start **ING** sample 

```bash
npm start -- --source=samples/ing
```


Used technology
---------------

Html template engine is [PUG](https://pugjs.org/) because it's easy, powerfull and cool.

Front-end framework and grid is a customized [Boostrap 2.3](http://getbootstrap.com/2.3.2/) (yep old version...)

The parallax scrolling library is [Skrollr](https://github.com/Prinzhorn/skrollr). Please read the doc and print this [PDF](https://raw.github.com/Prinzhorn/skrollr/master/guide/anchor-position-guide.pdf) 


Files structure
---------------

### /src 

Source code of your case

##### settings.json

Config file, please update the content to match your case.

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

Using PUG
---------

***Don't worry if you don't know PUG.***
> PUG is elegent, powerfull and cool HTML template engine.

* Quick [intro](https://medium.com/@andrewtsao/the-pug-life-a-quick-intro-to-pugjs-40b0895bdd5b#.qv57b5mvw) 
* Full [Documentation](https://pugjs.org/api/getting-started.html)
* [Try it online](http://html2jade.org/)

##Custom mixings

`+infoBox()`
Generate the case info box based on the metas from settings.json

`+t(key, defaultText, [Mode])`
The CMS is multilanguage, we ask you to use this mixing to enable future translations 
and text corrections.

* **key**: Name of your text (Must be unique)
* **defaultText**: Default text
* **mode**: Mode of the CMS editor `full` (Default) provide font decoration and `simple` can 
just edit the text. <br><br>Generaly we set mode to simple for title and subtitle elements.

> 