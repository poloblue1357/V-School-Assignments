"use strict";
const h = { dbId: 22, email: "d@d.com",
    userId: 121,
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name, off) => {
        return 10;
    }
};
h.email = "h@hc.com";
// dan.dbId = 33
