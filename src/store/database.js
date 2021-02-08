import VuexORM from '@vuex-orm/core'
import User from '../models/User'
import OnlineEvent from '../models/OnlineEvent'
import OnlineEventUser from '../models/OnlineEventUser'
import TutorialVideo from '../models/TutorialVideo'
import UserFeedback from '../models/UserFeedback'

const database = new VuexORM.Database()

database.register(User)
database.register(OnlineEvent)
database.register(OnlineEventUser)
database.register(TutorialVideo)
database.register(UserFeedback)

export default database
