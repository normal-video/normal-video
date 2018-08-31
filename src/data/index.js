import Mockjs from 'mockjs'
import test from './test'
import banner from './banner.json'
import user from './user'

Mockjs.mock('./test', test)
Mockjs.mock('./banner', banner)
Mockjs.mock('./user', user)
