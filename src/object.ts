import { Object } from "ts-toolbelt";

type Filter<O extends object, M> = {
    [K in keyof O as O[K] extends M ? never : K]: O[K]
}

type FilterKeys<O extends object, M extends keyof O> = {
    [K in keyof O as K extends M ?  never : K]: O[K]
}

type OptionalFlat<O> = {
    [Key in keyof O]?: O[Key]
}

type OptionalDeep<O> = {
    [Key in keyof O]?: OptionalDeep<O[Key]>
}

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;


type opt = Object.Optional<User, string>

// Example usages
 
type User = {
    name: string
    age: number
    email: string
};


/*
Result: 

type User = {
    name: string
    email: string
};
*/
type filterNumber = Filter<User, number>


/*
Result: 

type User = {
    age: number
};
*/
type filterString = Filter<User, string>

/*
Result: 

type User = {
    email: string
};
*/
type filterKey = FilterKeys<User, 'name' | 'age'>


/*
Result: 

type User = {
    name?: string
    age?: number
    email?: string
};
*/
type optionalFlat = OptionalFlat<User>
