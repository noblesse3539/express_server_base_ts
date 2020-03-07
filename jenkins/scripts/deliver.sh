 #!/usr/bin/env sh

set -x
npm run build
npm run deploy &
sleep 1
echo $1 > .pidfile
set +x