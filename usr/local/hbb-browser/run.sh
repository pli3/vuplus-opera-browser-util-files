#!/bin/sh

APPROOT=/usr/local/hbb-browser
APPNAME=hbbtv.app
SOCKET=/tmp/.browser.support

case $1 in
	"start")
		export LD_LIBRARY_PATH=${APPROOT}/lib::${LD_LIBRARY_PATH}
		exec ${APPROOT}/lib/${APPNAME} $@ &
		;;
	"stop")
		killall -2 ${APPNAME}
		if [ -f ${SOCKET} ]; then
			rm -f ${SOCKET}
		fi
		;;
	"check")
		echo `ps | grep ${APPNAME} | grep -v 'grep' | wc -l`
		;;
	"restart")
		killall -2 ${APPNAME}
		if [ -f ${SOCKET} ]; then
			rm -f ${SOCKET}
		fi
		export LD_LIBRARY_PATH=${APPROOT}/lib::${LD_LIBRARY_PATH}
		exec ${APPROOT}/lib/${APPNAME} $@ &
		;;
esac

exit 1
