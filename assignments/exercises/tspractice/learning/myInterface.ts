interface User {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const h: Admin = {dbId: 22, email: "d@d.com",
    userId: 121,
    role: "admin",  
    githubToken: "github",
    startTrial: () => {
        return "trial started"
},
getCoupon: (name: "dan10", off: 10) => {
    return 10
}
}

h.email = "h@hc.com"
// dan.dbId = 33