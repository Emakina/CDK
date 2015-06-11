#
# BUILD BOOTSWATCH SWATCH
#

OUTPUT_PATH = swatch
INSTALL_PATH = web/assets/themes/emakina2013
INSTALL_LESS_PATH= web/stylesheets/less

bootswatch:
	recess --compile swatchmaker.less > ${OUTPUT_PATH}/bootstrap.css
	recess --compress swatchmaker.less > ${OUTPUT_PATH}/bootstrap.min.css
	recess --compile swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.css
	recess --compress swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.min.css

bootstrap:
	-test -d bootstrap && rm -r bootstrap
	curl --location -o latest_bootstrap.tar.gz https://github.com/twitter/bootstrap/tarball/master
	tar -xvzf latest_bootstrap.tar.gz
	mv twitter-bootstrap* bootstrap
	rm latest_bootstrap.tar.gz

debug:
	lessc  swatchmaker.less > ${OUTPUT_PATH}/bootstrap.css
	lessc  swatchmaker-responsive.less > ${OUTPUT_PATH}/bootstrap-responsive.css

default:
	-test -f ${OUTPUT_PATH}/variables.less && rm ${OUTPUT_PATH}/variables.less
	-test -f ${OUTPUT_PATH}/bootswatch.less && rm ${OUTPUT_PATH}/bootswatch.less
	curl --location -o ${OUTPUT_PATH}/variables.less https://raw.github.com/twitter/bootstrap/master/less/variables.less
	curl --location -o ${OUTPUT_PATH}/bootswatch.less https://raw.github.com/thomaspark/bootswatch/gh-pages/swatchmaker/swatch/bootswatch.less
	make bootswatch

watcher:
	ruby watcher.rb

server:
	open http://localhost:8000/test/test.html
	python -m SimpleHTTPServer

.PHONY: bootswatch bootstrap default watcher server

install:
	cp ${OUTPUT_PATH}/*.css ../../../${INSTALL_PATH}/css
	cp -r ./img/* ../../../${INSTALL_PATH}/img
	cp -r ./font/* ../../../${INSTALL_PATH}/font
	cp ${OUTPUT_PATH}/variables.less ../../../${INSTALL_LESS_PATH}
	# cp ${OUTPUT_PATH}/mixin.less ../../../${INSTALL_LESS_PATH}
