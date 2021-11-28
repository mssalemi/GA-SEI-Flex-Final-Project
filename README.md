# sei-final-project-v2


### Next Updates: 
- need some sort of way to update state when i update the database

League Compoents
- Leagues ✅ with links Needs Love 
- League ✅ with link Needs Love 
- Create League ❌
- Add Team to League ✅ 
- Add Game To League (Need Game First) 


## Completed so Far

#### Recents:
Team Components:
- Team -  ✅ 
- Teams -  ✅ 
- Create Team -  ✅ 
- Edit Team ✅ 
- Add Player to Team - ✅  but need a little more love


# React Components

### User
- Profile
- Create Profile
- Edit Profile
- Change Password on Profile

# API 

#### Models: 
- User
- Team
- League
- Game

#### Routes: 
## Users
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all users|
| GET | /refs | get all users of type 'ref' |
| POST | /create | creates a new user |
| POST | /createRef | creates a new user of type ref |
| GET | /:id | gets user with id |
| POST | /id | creates a new user of type ref |
| POST | /changepassword | changes users password |

## Teams
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all teams|
| POST | /create | creates a new team |
| GET | /:id | gets team with id |
| POST | /:id | edits team with id | 
| POST | /addPlayer| adds player (user) to tean |
| POST | /removePlayer| removes player (user) to team |
| POST | /editmanager| edits manage on team |

## Games
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all games |
| GET | /:id | get one game |
| POST | /create | creates a new game |
| POST | /score/:id | edit's score of game |
| POST | /ref/:id | edit's ref of game |

## Leagues
| Action | Route | Desc | 
| --------------- | --------------- | --------------- | 
| GET | / | get all leagues|
| POST | /create | creates a new league |
| POST | /addgame | add game to league |
| POST | /addteam | add team to league |
