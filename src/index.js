import 'module-alias/register'

import syncDb from './utils/db-sync'
import server from './server'

syncDb().then(server)
