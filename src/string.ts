import {String} from 'ts-toolbelt'

type Split<S, D extends string> = S extends `${infer FirstPart}${D}${infer SecondPart}` ? [FirstPart, SecondPart] : never

type Result = Split<'hello:world', ':'>