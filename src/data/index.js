import Mockjs from 'mockjs'
import test from './test'
import banner from './banner.json'
Mockjs.mock('./test', test)
Mockjs.mock('./banner', banner)
