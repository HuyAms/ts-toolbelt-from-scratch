import {Any as A} from 'ts-toolbelt'

type At<T extends Array<any>, K extends number> = T[K]
type test0 = At<['huy', 'nhung'], 1> // nhung