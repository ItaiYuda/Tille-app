
function subscribe() {
    this.users = [];

    this.guid = {
        S4: () =>  (((1+Math.random())*0x10000)|0).toString(16).substring(1),
        newid:() => (this.guid.S4() + this.guid.S4() + "-" + this.guid.S4() + "-4" + this.guid.S4().substr(0,3) + "-" + this.guid.S4() + "-" + this.guid.S4() + this.guid.S4() + this.guid.S4()).toLowerCase()
    };
    this.addSubscribeUser = (email) => {
        let user = this.users.find((user) => {
            return user.email === email;
        });
        if(user !== undefined){
            return user.id;
        } 
        const uid = this.guid.newid();
        user = {
            email: email,
            id: uid
        };
        this.users.push(user);
        
        return uid;
    }
    
}

module.exports = subscribe;