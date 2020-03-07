 #!/usr/bin/env sh

set -x
npm run build
npm run deploy &
sleep 1
echo $! > .pidfile
set +x