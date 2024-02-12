import {String} from 'ts-toolbelt'

type Split<S, D extends string> = S extends `${infer FirstPart}${D}${infer SecondPart}` ? [FirstPart, SecondPart] : never

type Replace<
  Text extends string,
  From extends string,
  To extends string
> = Text extends `${infer Beginning}${From}` 
 ?  `${Beginning}${To}`
 : Text extends `${From}${infer End}` 
 ? `${To}${End}`
 : Text extends `${infer Beginning}${From}${infer End}` 
 ? `${Beginning}${To}${End}` : never


type Result = Split<'hello:world', ':'>
type ReplaceString = Replace<'NewHelloWorld', 'World', 'Test'> // NewHelloTest
type ReplaceString1 = Replace<'NewHelloWorld', 'Hello', 'Test'> // NewTestWorld
type ReplaceString2 = Replace<'NewHelloWorld', 'New', 'Test'> // TestHelloWorld