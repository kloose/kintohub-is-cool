# MPL Nomad Admin UI

You will require:

* yarn or npm
* node
* access to a nomad-service api

## Quick local startup
```
yarn start
```

## Integration Test Cypress Testing
```
yarn cypress:int-test
```
##  Local Test Cypress Console
```
yarn cypress:local
```

# OOM issues during npm production built with AOT enabled
--max_old_space_size=8000
