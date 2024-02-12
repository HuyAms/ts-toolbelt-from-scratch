
type Filter<O extends object, M> = {
    [K in keyof O as O[K] extends M ? never : K]: O[K]
}


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