pipeline {
    agent {
        dockerfile {
            dir 'server'
            args '--network ketchup_mysql-net -p 3000:3000'
        }
    }
}